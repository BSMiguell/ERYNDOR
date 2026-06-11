// ===== Races Section Logic =====

const bannerByFolder = {
  "Amaldiçoados": "images/Banner/Banner-Amaldiçoados.png",
  "Aparições": "images/Banner/Banner-Aparições.png",
  "Beserk": "images/Banner/Banner-Beserk.png",
  "Canibais": "images/Banner/Banner-Canibais.png",
  "Demonio": "images/Banner/Banner-Demonio.png",
  "Desconhecido": "images/Banner/Banner-Maw Shin.png", // Fallback existente
  "Gigantes": "images/Banner/Banner-Gigantes.png",
  "Humanos": "images/Banner/Banner-Humanos.png", // Usar banner Mutantes como fallback
  "Magos": "images/Banner/Banner-Magos.png",
  "Meio-Sangue": "images/Banner/Banner-Meio-Sague.png", // Nome existente
  "Monstros": "images/Banner/Banner-Monstros.png",
  "Onis": "images/Banner/Banner-Onis.png",
  "Semi-Deus": "images/Banner/Banner-Semi-Deus.png",
  "Seres-do-Vazio": "images/Banner/Banner-Seres do Vazio.png" // Nome existente
};

function raceBanner(race) {
  return bannerByFolder[race.folder] || `images/${race.folder}/${race.characters?.[0]?.f}`;
}

function renderRaces(els, RACES) {
  els.racesGrid.innerHTML = RACES.map(
    (race, index) => `
    <button
      class="race-card"
      type="button"
      style="--race-color:${race.color};--race-glow:${race.glow};--race-banner:url('${raceBanner(race).replace(/'/g, "%27")}')"
      data-race="${race.id}"
      data-index="${index}"
      data-cursor="Linhagem"
    >
      <div class="race-index">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <span class="race-icon">${race.icon}</span>
      </div>
      <h3>${race.name}</h3>
      <p>${race.trait}</p>
      <footer>
        <span>${race.count} dossiês</span>
        <span>${race.region}</span>
      </footer>
    </button>
  `,
  ).join("");

  els.racesGrid.querySelectorAll(".race-card").forEach((card) => {
    const index = Number(card.dataset.index);
    card.style.transitionDelay = `${(index % 8) * 45}ms`;

    if (window.revealObserver) {
      window.revealObserver.observe(card);
    }

    card.addEventListener("mouseenter", () => selectRace(index, { preview: true }, els, RACES));
    card.addEventListener("focus", () => selectRace(index, { preview: true }, els, RACES));
    card.addEventListener("click", () => {
      selectRace(index, { preview: false }, els, RACES);
      applyRaceFilter(RACES[index].id, els, RACES);
      document.getElementById("characters")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  selectRace(0, { preview: true }, els, RACES);
}

function selectRace(index, options = {}, els, RACES) {
  const activeRaceIndex = (index + RACES.length) % RACES.length;
  const race = RACES[activeRaceIndex];

  // Set theme
  document.documentElement.style.setProperty("--active-race", race.color);
  document.documentElement.style.setProperty("--active-glow", race.glow);

  // Update stage styles
  if (els.raceStage) {
    els.raceStage.style.setProperty("--active-race", race.color);
    els.raceStage.style.setProperty("--active-glow", race.glow);
  }

  // Use crossfade banner system
  switchRaceBanner(race, els);

  // Update content
  if (els.raceStageRegion) els.raceStageRegion.textContent = race.region;
  if (els.raceStageName) els.raceStageName.textContent = race.name;
  if (els.raceStageDesc) els.raceStageDesc.textContent = race.desc;
  if (els.raceStageCount) els.raceStageCount.textContent = `${race.count} personagens`;
  if (els.raceStageTrait) els.raceStageTrait.textContent = race.trait;

  // Update active state on cards
  if (els.racesGrid) {
    els.racesGrid.querySelectorAll(".race-card").forEach((card) => {
      card.classList.toggle(
        "is-active",
        card.dataset.race === race.id && !options.preview,
      );
    });
  }
}

// Crossfade banner transition - SOLUTION from SUPER_PROMPT
function switchRaceBanner(race, els) {
  const stage = els.raceStage;
  if (!stage) return;

  // Ensure we have the double-layer structure
  let prevBg = stage.querySelector('.race-bg--prev');
  let currBg = stage.querySelector('.race-bg--curr');

  // Create elements if they don't exist
  if (!prevBg || !currBg) {
    stage.innerHTML = `
      <div class="race-bg race-bg--prev" aria-hidden="true"></div>
      <div class="race-bg race-bg--curr" aria-hidden="true"></div>
      <div class="race-stage-copy">
        <small id="race-stage-region">Região</small>
        <h3 id="race-stage-name">Raça</h3>
        <p id="race-stage-desc"></p>
        <div class="race-stage-meta">
          <span class="meta-chip" id="race-stage-count"></span>
          <span class="meta-chip" id="race-stage-trait"></span>
        </div>
      </div>
      <div class="race-controls">
        <button class="icon-button" id="prev-race" type="button" aria-label="Raça anterior" data-cursor="Anterior">‹</button>
        <button class="icon-button" id="next-race" type="button" aria-label="Próxima raça" data-cursor="Próxima">›</button>
      </div>
    `;
    prevBg = stage.querySelector('.race-bg--prev');
    currBg = stage.querySelector('.race-bg--curr');
  }

  // Set up transition
  const bannerUrl = raceBanner(race);
  currBg.style.backgroundImage = `url(${bannerUrl})`;
  currBg.classList.add('is-entering');
  prevBg.classList.add('is-leaving');

  // After transition, swap roles
  setTimeout(() => {
    currBg.classList.remove('is-entering');
    currBg.classList.add('race-bg--curr');
    prevBg.classList.remove('is-leaving');
    prevBg.classList.add('race-bg--prev');
    // Clear inline styles to allow CSS transitions
    prevBg.style.opacity = '';
    currBg.style.opacity = '';
  }, 720);
}

// Parallax via mousemove - desktop only
function initRaceParallax(els) {
  if ('ontouchstart' in window) return;

  const stage = els.raceStage;
  if (!stage) return;

  // Enhanced parallax via race-theater
  document.querySelector(".race-theater")?.addEventListener("pointermove", (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = (e.clientX - rect.left) / rect.width - 0.5;
    const cy = (e.clientY - rect.top) / rect.height - 0.5;
    stage.style.setProperty("--parallax-x", (cx * 18).toFixed(1));
    stage.style.setProperty("--parallax-y", (cy * 10).toFixed(1));
  });

  stage.addEventListener("pointerleave", () => {
    stage.style.setProperty("--parallax-x", "0");
    stage.style.setProperty("--parallax-y", "0");
  });
}

// Export functions
window.renderRaces = renderRaces;
window.selectRace = selectRace;
window.switchRaceBanner = switchRaceBanner;
window.raceBanner = raceBanner;
window.initRaceParallax = initRaceParallax;