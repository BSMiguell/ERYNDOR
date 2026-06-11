// ===== Characters Section Logic =====

const pageSize = 24;
let currentRaceId = "all";
let visibleCount = pageSize;

// Sync with global window.visibleCount
Object.defineProperty(window, 'visibleCount', {
  get() { return visibleCount; },
  set(value) { visibleCount = value; }
});

function normalize(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function filteredCharacters(RACES, searchEl, sortEl) {
  const term = normalize(searchEl.value);
  const sortMode = sortEl.value;

  let list = RACES.flatMap((race) =>
    (race.characters || []).map((char, index) => ({
      race,
      char,
      index,
      threat: threatScore(char),
      archetype: archetype(char),
      haystack: normalize(`${char.n} ${char.t} ${char.role} ${char.region} ${race.name}`),
    }))
  );

  // Apply race filter
  list = list.filter((item) => {
    const raceMatch = currentRaceId === "all" || item.race.id === currentRaceId;
    return raceMatch && (!term || item.haystack.includes(term));
  });

  // Apply sorting
  list = [...list].sort((a, b) => {
    if (sortMode === "name") return a.char.n.localeCompare(b.char.n, "pt-BR");
    if (sortMode === "race") return a.race.name.localeCompare(b.race.name, "pt-BR") || b.threat - a.threat;
    if (sortMode === "power") return b.char.pow - a.char.pow || b.threat - a.threat;
    return b.threat - a.threat || a.char.n.localeCompare(b.char.n, "pt-BR");
  });

  return list;
}

function threatScore(char) {
  return Math.round((char.pow * 1.18 + char.spd + char.def + char.int) / 4.18);
}

function strongestStat(char) {
  const stats = [
    ["Poder", char.pow, "pow"],
    ["Velocidade", char.spd, "spd"],
    ["Defesa", char.def, "def"],
    ["Intelecto", char.int, "int"],
  ];
  return stats.sort((a, b) => b[1] - a[1])[0];
}

function archetype(char) {
  const key = strongestStat(char)[2];
  return {
    pow: "ruptura",
    spd: "assalto",
    def: "bastião",
    int: "oráculo",
  }[key];
}

function renderCharacters(RACES, els) {
  const list = filteredCharacters(RACES, els.search, els.sort);
  const page = list.slice(0, visibleCount);

  els.charactersGrid.innerHTML = "";
  const fragment = document.createDocumentFragment();

  page.forEach((item, index) => {
    fragment.appendChild(buildCharacterCard(item, index, els));
  });

  els.charactersGrid.appendChild(fragment);

  els.emptyState.classList.toggle("is-visible", list.length === 0);
  els.loadMore.style.display = visibleCount < list.length ? "inline-flex" : "none";

  if (els.galleryCount) {
    els.galleryCount.textContent = `${list.length} personagem${list.length === 1 ? "" : "s"}`;
  }
  if (els.galleryPage) {
    els.galleryPage.textContent = list.length
      ? `${Math.min(visibleCount, list.length)} visíveis`
      : "Página vazia";
  }

  return list;
}

function buildCharacterCard(item, index, els) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `char-card archetype-${item.archetype}`;
  button.dataset.cursor = "Abrir";
  button.style.setProperty("--race-color", item.race.color);
  button.style.setProperty("--race-glow", item.race.glow);
  button.style.transitionDelay = `${(index % 12) * 34}ms`;

  const imgPath = `images/${item.race.folder}/${item.char.f}`;

  button.innerHTML = `
    <div class="char-art">
      <img src="${escapeHtml(imgPath)}" alt="${escapeHtml(item.char.n)}" loading="lazy" decoding="async" />
      <span class="char-sigil">${escapeHtml(item.race.icon)}</span>
      <span class="char-threat">${item.threat}</span>
    </div>
    <div class="char-copy">
      <div class="char-race">
        <span>${escapeHtml(item.race.name)}</span>
        <span>${escapeHtml(item.archetype)}</span>
      </div>
      <h3>${escapeHtml(item.char.n)}</h3>
      <p>${escapeHtml(item.char.t)}</p>
      <div class="threat-bar" aria-label="Nível de ameaça: ${threatLevel(item.threat)} de 5">
        <div class="threat-fill" style="--threat: ${threatLevel(item.threat)}; --max: 5;"></div>
      </div>
      <div class="stat-mini" aria-hidden="true">
        <span style="--stat:${item.char.pow}%">POW</span>
        <span style="--stat:${item.char.spd}%">SPD</span>
        <span style="--stat:${item.char.def}%">DEF</span>
        <span style="--stat:${item.char.int}%">INT</span>
      </div>
    </div>
  `;

  const img = button.querySelector("img");
  img?.addEventListener("error", () => {
    img.remove();
    button.querySelector(".char-art").style.background =
      `linear-gradient(135deg, ${item.race.color}, #080706)`;
  });

  button.addEventListener("click", (event) => openModal(item, event, els));
  button.addEventListener("pointermove", (event) => tiltCard(button, event));
  button.addEventListener("pointerleave", () => {
    button.style.setProperty("--tilt-x", "0deg");
    button.style.setProperty("--tilt-y", "0deg");
  });

  if (window.revealObserver) {
    window.revealObserver.observe(button);
  }

  return button;
}

function threatLevel(score) {
  if (score >= 90) return 5;
  if (score >= 78) return 4;
  if (score >= 65) return 3;
  if (score >= 50) return 2;
  return 1;
}

function tiltCard(card, event) {
  if (window.prefersReducedMotion || window.innerWidth < 760) return;
  const rect = card.getBoundingClientRect();
  const px = (event.clientX - rect.left) / rect.width - 0.5;
  const py = (event.clientY - rect.top) / rect.height - 0.5;
  card.style.setProperty("--tilt-x", `${(-py * 5).toFixed(2)}deg`);
  card.style.setProperty("--tilt-y", `${(px * 6).toFixed(2)}deg`);
}

function archetype(char) {
  const key = strongestStat(char)[2];
  return {
    pow: "ruptura",
    spd: "assalto",
    def: "bastião",
    int: "oráculo",
  }[key];
}

function openModal(item, event, els) {
  const x = event?.clientX || window.innerWidth / 2;
  const y = event?.clientY || window.innerHeight / 2;
  const img = `images/${item.race.folder}/${item.char.f}`;

  els.modalBackdrop.style.setProperty("--origin-x", `${x}px`);
  els.modalBackdrop.style.setProperty("--origin-y", `${y}px`);
  els.modal.style.setProperty("--race-color", item.race.color);
  els.modal.style.setProperty("--race-glow", item.race.glow);

  if (els.modalBg) els.modalBg.src = img;
  if (els.modalImg) {
    els.modalImg.src = img;
    els.modalImg.alt = `${escapeHtml(item.char.n)} - ${escapeHtml(item.race.name)}`;
  }

  if (els.modalRace) els.modalRace.textContent = `${item.race.name} · ${item.char.region}`;
  if (els.modalName) els.modalName.textContent = item.char.n;
  if (els.modalTitle) els.modalTitle.textContent = item.char.t;
  if (els.modalRole) els.modalRole.textContent = item.char.role;
  if (els.modalLore) els.modalLore.textContent = item.char.lore;
  if (els.modalVerdict) els.modalVerdict.textContent = dossierVerdict(item);

  renderModalStats(item, els);
  if (els.modalAbilities) {
    els.modalAbilities.innerHTML = (item.char.ab || [])
      .map((ability) => `<span>${escapeHtml(ability)}</span>`)
      .join("");
  }
  if (els.modalMeta) {
    els.modalMeta.innerHTML = [
      `Status: ${item.char.status}`,
      `Alinhamento: ${alignmentLabel(item.char.align)}`,
      `Ameaça: ${item.threat}`,
    ]
      .map((meta) => `<span>${escapeHtml(meta)}</span>`)
      .join("");
  }

  els.modalBackdrop.classList.add("open");
  document.body.style.overflow = "hidden";
  setTimeout(() => els.modal?.focus(), 40);

  if (window.initModalParticles) {
    window.initModalParticles(item.race.color);
  }
}

function dossierVerdict(item) {
  const [label, value] = strongestStat(item.char);
  const tone =
    item.threat >= 90
      ? "ameaça de ruptura"
      : item.threat >= 78
        ? "força decisiva"
        : "vetor instável";
  return `${item.char.n} opera como ${tone}: ${label.toLowerCase()} marca ${value}, enquanto a linhagem ${item.race.name} sustenta o campo de ação.`;
}

function alignmentLabel(value) {
  return (
    {
      good: "Bem",
      evil: "Mal",
      neutral: "Neutro",
      chaos: "Caos",
    }[value] ||
    value ||
    "Indefinido"
  );
}

function renderModalStats(item, els) {
  const stats = [
    ["Poder", item.char.pow],
    ["Velocidade", item.char.spd],
    ["Defesa", item.char.def],
    ["Intelecto", item.char.int],
  ];

  if (els.modalStats) {
    els.modalStats.innerHTML = stats
      .map(
        ([label, value]) => `
      <div class="stat-row">
        <span>${label}</span>
        <div class="stat-bar"><span data-value="${value}"></span></div>
        <strong>${value}</strong>
      </div>
    `,
      )
      .join("");

    requestAnimationFrame(() => {
      els.modalStats.querySelectorAll(".stat-bar span").forEach((bar) => {
        bar.style.width = `${bar.dataset.value}%`;
      });
    });
  }
}

// Threat bar observer for animated fill
function initThreatBars() {
  if (!window.revealObserver) return;
  document.querySelectorAll('.threat-bar').forEach(el => {
    window.revealObserver.observe(el);
  });
}

// Export functions
window.renderCharacters = renderCharacters;
window.filteredCharacters = filteredCharacters;
window.threatScore = threatScore;
window.threatLevel = threatLevel;
window.applyRaceFilter = applyRaceFilter;
window.initThreatBars = initThreatBars;
window.archetype = archetype;
window.tiltCard = tiltCard;
window.openModal = openModal;

function applyRaceFilter(raceId, els, RACES) {
  currentRaceId = raceId || "all";
  visibleCount = pageSize;

  els.filters?.querySelectorAll(".filter-btn").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.race === currentRaceId);
  });

  const race = RACES.find((entry) => entry.id === currentRaceId);
  if (race) {
    document.documentElement.style.setProperty("--active-race", race.color);
    document.documentElement.style.setProperty("--active-glow", race.glow);
    if (els.toast) {
      els.toast.textContent = `${race.name}: ${race.count} dossiês ativos`;
      els.toast.classList.add("is-visible");
      setTimeout(() => els.toast.classList.remove("is-visible"), 2400);
    }
  } else {
    document.documentElement.style.setProperty("--active-race", RACES[0].color);
    document.documentElement.style.setProperty("--active-glow", RACES[0].glow);
  }

  renderCharacters(RACES, els);
}