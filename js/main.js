// ===== Main Entry Point =====

// Global utilities
window.prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function normalize(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

// Reveal Observer for scroll animations
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { rootMargin: "0px 0px -60px 0px", threshold: 0.15 }
);
window.revealObserver = revealObserver;

// Store element references
function getEls() {
  return {
    heroDossiers: document.getElementById("hero-dossiers"),
    metricRaces: document.getElementById("metric-races"),
    metricCharacters: document.getElementById("metric-characters"),
    metricRegions: document.getElementById("metric-regions"),
    mapPulse: document.getElementById("map-pulse"),
    racesGrid: document.getElementById("races-grid"),
    raceStage: document.getElementById("race-stage"),
    prevRace: document.getElementById("prev-race"),
    nextRace: document.getElementById("next-race"),
    raceStageRegion: document.getElementById("race-stage-region"),
    raceStageName: document.getElementById("race-stage-name"),
    raceStageDesc: document.getElementById("race-stage-desc"),
    raceStageCount: document.getElementById("race-stage-count"),
    raceStageTrait: document.getElementById("race-stage-trait"),
    search: document.getElementById("search-input"),
    sort: document.getElementById("sort-select"),
    clearFilters: document.getElementById("clear-filters"),
    filters: document.getElementById("race-filters"),
    galleryCount: document.getElementById("gallery-count"),
    galleryPage: document.getElementById("gallery-page"),
    charactersGrid: document.getElementById("characters-grid"),
    emptyState: document.getElementById("empty-state"),
    loadMore: document.getElementById("load-more"),
    randomChar: document.getElementById("random-char"),
    duelLeft: document.getElementById("duel-left"),
    duelRight: document.getElementById("duel-right"),
    drawDuel: document.getElementById("draw-duel"),
    duelVerdict: document.getElementById("duel-verdict"),
    modalBackdrop: document.getElementById("modal-backdrop"),
    modal: document.getElementById("character-modal"),
    modalBg: document.getElementById("modal-bg"),
    modalImg: document.getElementById("modal-img"),
    modalCanvas: document.getElementById("modal-canvas"),
    modalClose: document.getElementById("modal-close"),
    modalRace: document.getElementById("modal-race"),
    modalName: document.getElementById("modal-name"),
    modalTitle: document.getElementById("modal-title"),
    modalRole: document.getElementById("modal-role"),
    modalLore: document.getElementById("modal-lore"),
    modalVerdict: document.getElementById("modal-verdict"),
    modalStats: document.getElementById("modal-stats"),
    modalAbilities: document.getElementById("modal-abilities"),
    modalMeta: document.getElementById("modal-meta"),
    toast: document.getElementById("toast"),
  };
}

// Toast notification
let toastTimer = null;
function showToast(message, els) {
  if (!els || !els.toast) return;

  clearTimeout(toastTimer);
  els.toast.textContent = message;
  els.toast.classList.add("is-visible");
  toastTimer = setTimeout(() => {
    els.toast.classList.remove("is-visible");
  }, 2400);
}

// Counter animation
function countTo(el, value) {
  if (!el) return;
  if (window.prefersReducedMotion) {
    el.textContent = value;
    return;
  }
  const start = performance.now();
  const duration = 900;
  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * value);
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

// Theme from race
function setThemeFromRace(race) {
  document.documentElement.style.setProperty("--active-race", race.color);
  document.documentElement.style.setProperty("--active-glow", race.glow);
}

// Initialize metrics (counters)
function initMetrics(els, RACES) {
  const allCharacters = RACES.flatMap((race) => race.characters || []);
  const regions = new Set(
    allCharacters.map((char) => char.region)
  );

  if (els.metricRaces) {
    els.metricRaces.dataset.count = RACES.length;
    countTo(els.metricRaces, RACES.length);
  }
  if (els.metricCharacters) {
    els.metricCharacters.dataset.count = allCharacters.length;
    countTo(els.metricCharacters, allCharacters.length);
  }
  if (els.metricRegions) {
    els.metricRegions.dataset.count = regions.size;
    countTo(els.metricRegions, regions.size);
  }

  if (els.mapPulse) {
    const avgThreat = allCharacters.length > 0
      ? Math.round(allCharacters.reduce((sum, c) => sum + (window.threatScore ? window.threatScore(c) : 50), 0) / allCharacters.length)
      : 0;
    els.mapPulse.textContent = `Kore ${avgThreat}`;
  }
}

// Render hero dossiers
function renderHeroDossiers(els, RACES) {
  const allCharacters = RACES.flatMap((race) =>
    (race.characters || []).map((char) => ({
      race,
      char,
      threat: window.threatScore ? window.threatScore(char) : 50,
    }))
  );

  const picks = [...allCharacters]
    .sort((a, b) => b.threat - a.threat)
    .slice(0, 3);

  if (!els.heroDossiers) return;

  els.heroDossiers.innerHTML = picks
    .map((item) => `
      <button class="hero-dossier" type="button" style="--race-color:${item.race.color};--race-glow:${item.race.glow}" data-character="${item.char.n}" data-cursor="Abrir">
        <img src="images/${item.race.folder}/${item.char.f}" alt="${escapeHtml(item.char.n)}" loading="eager" />
        <span>
          <small>${escapeHtml(item.race.name)} · ameaça ${item.threat}</small>
          <strong>${escapeHtml(item.char.n)}</strong>
          <span>${escapeHtml(item.char.t)}</span>
        </span>
      </button>
    `)
    .join("");

  els.heroDossiers.querySelectorAll(".hero-dossier").forEach((button, index) => {
    button.addEventListener("click", (event) => {
      const char = picks[index];
      if (window.openModal) {
        window.openModal(char, { clientX: event.clientX, clientY: event.clientY }, els);
      }
    });
  });
}

// Render filters
function renderFilters(els, RACES) {
  const allButton = `<button class="filter-btn is-active" type="button" style="--race-color:var(--kore)" data-race="all" data-cursor="Todos">Todos</button>`;
  const raceButtons = RACES.map(
    (race) => `
    <button class="filter-btn" type="button" style="--race-color:${race.color}" data-race="${race.id}" data-cursor="${escapeHtml(race.name)}">
      ${escapeHtml(race.name)}
    </button>
  `,
  ).join("");

  if (els.filters) {
    els.filters.innerHTML = allButton + raceButtons;
    els.filters.addEventListener("click", (event) => {
      const button = event.target.closest(".filter-btn");
      if (!button) return;
      window.applyRaceFilter(button.dataset.race, els, RACES);
    });
  }
}

// Scroll effects
function initScrollEffects(els) {
  const sections = [...document.querySelectorAll("main section[id]")];
  const navLinks = [...document.querySelectorAll(".nav-links a")];

  let ticking = false;

  const update = () => {
    const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    const ratio = Math.min(1, scrollY / max);
    document.documentElement.style.setProperty("--scroll-ratio", ratio.toFixed(4));

    const current = sections
      .filter((section) => scrollY >= section.offsetTop - 160)
      .at(-1)?.id;

    navLinks.forEach((link) =>
      link.classList.toggle("is-active", link.getAttribute("href") === `#${current}`),
    );

    ticking = false;
  };

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });

  // Observe reveal elements
  document.querySelectorAll(".reveal, .chapter").forEach((el) => {
    revealObserver.observe(el);
  });

  update();
}

// Close modal
function closeModal(els) {
  if (!els.modalBackdrop) return;

  els.modalBackdrop.classList.remove("open");
  document.body.style.overflow = "";

  if (els.modalCanvas) {
    const ctx = els.modalCanvas.getContext("2d");
    if (ctx) ctx.clearRect(0, 0, els.modalCanvas.width, els.modalCanvas.height);
  }
}

// Bind events
function bindEvents(els, RACES) {
  // Race navigation
  els.prevRace?.addEventListener("click", () => {
    if (window.activeRaceIndex !== undefined) {
      window.selectRace((window.activeRaceIndex - 1 + RACES.length) % RACES.length, { preview: false }, els, RACES);
    }
  });

  els.nextRace?.addEventListener("click", () => {
    if (window.activeRaceIndex !== undefined) {
      window.selectRace((window.activeRaceIndex + 1) % RACES.length, { preview: false }, els, RACES);
    }
  });

  // Race filter handlers
  els.search?.addEventListener("input", () => {
    if (window.applyRaceFilter) window.applyRaceFilter("all", els, RACES);
  });

  els.sort?.addEventListener("change", () => {
    if (window.applyRaceFilter) window.applyRaceFilter("all", els, RACES);
  });

  els.clearFilters?.addEventListener("click", () => {
    els.search.value = "";
    els.sort.value = "threat";
    if (window.applyRaceFilter) window.applyRaceFilter("all", els, RACES);
    showToast("Atlas reiniciado", els);
  });

  els.loadMore?.addEventListener("click", () => {
    if (window.visibleCount !== undefined) window.visibleCount += 24;
    if (window.renderCharacters) window.renderCharacters(RACES, els);
  });

  els.randomChar?.addEventListener("click", (event) => {
    const char = window.randomCharacter ? window.randomCharacter(RACES) : null;
    if (char && window.openModal) window.openModal(char, event, els);
  });

  // Modal close
  els.modalClose?.addEventListener("click", () => closeModal(els));
  els.modalBackdrop?.addEventListener("click", (event) => {
    if (event.target === els.modalBackdrop) closeModal(els);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && els.modalBackdrop?.classList.contains("open")) {
      closeModal(els);
    }
  });

  // Duel handlers
  els.drawDuel?.addEventListener("click", () => {
    if (window.drawNewDuel) window.drawNewDuel(RACES, els);
  });

  els.duelLeft?.addEventListener("click", () => {
    if (duelState && duelState.left && window.openModal) {
      window.openModal(duelState.left, null, els);
    }
  });

  els.duelRight?.addEventListener("click", () => {
    if (duelState && duelState.right && window.openModal) {
      window.openModal(duelState.right, null, els);
    }
  });

  // Easter egg - Kore code (Konami-like)
  const KORE_CODE = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown',
                     'ArrowLeft','ArrowRight','ArrowLeft','ArrowRight'];
  let koreProgress = 0;

  document.addEventListener('keydown', (e) => {
    if (e.key === KORE_CODE[koreProgress]) {
      koreProgress++;
      if (koreProgress === KORE_CODE.length) {
        showToast("Código Kore ativado - Personagem secreto revelado!", els);
        koreProgress = 0;
      }
    } else {
      koreProgress = 0;
    }
  });

  // Brand click for eclipse mode
  let brandClicks = 0;
  document.querySelector(".nav-brand")?.addEventListener("click", () => {
    brandClicks++;
    if (brandClicks === 5) {
      document.body.classList.toggle("eclipse-mode");
      showToast("Eclipse registrado no atlas", els);
      brandClicks = 0;
    }
  });
}

// Hero letter scroll reveal
function initHeroLetters() {
  document.querySelectorAll('.hero-letter').forEach((el, i) => {
    el.style.setProperty('--drift-y', `${(Math.random() - 0.5) * 80}px`);
    el.style.setProperty('--drift-x', `${(Math.random() - 0.5) * 60}px`);
    el.style.setProperty('--drift-r', `${(Math.random() - 0.5) * 25}deg`);
    el.style.setProperty('--delay', `${i * 0.04}s`);
  });
}

// Section sigil animation (SVG stroke-dashoffset)
function initSigils() {
  const sigilObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        sigilObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.section-sigil').forEach(el => {
    sigilObserver.observe(el);
  });
}

// Duel state
let duelState = { left: null, right: null };

// Visible count for pagination
let visibleCount = 24;

// Initialize everything
function boot() {
  const els = getEls();

  // Set initial theme
  setThemeFromRace(RACES[0]);

  // Initialize modules
  initMetrics(els, RACES);
  renderHeroDossiers(els, RACES);

  if (window.renderRaces) window.renderRaces(els, RACES);
  if (window.renderFilters) window.renderFilters(els, RACES);
  if (window.renderCharacters) window.renderCharacters(RACES, els);
  if (window.renderDuel) window.renderDuel(RACES, els);

  bindEvents(els, RACES);
  initScrollEffects(els);
  initHeroLetters();
  initSigils();
  if (window.initThreatBars) window.initThreatBars();

  if (window.initAmbientCanvas) window.initAmbientCanvas();
  if (window.initRaceParallax) window.initRaceParallax(els);
  if (window.initLoader) window.initLoader();

  // Store active race index globally
  window.activeRaceIndex = 0;
  window.visibleCount = visibleCount;
  window.duelState = duelState;
}

// Export functions to other modules
window.renderFilters = renderFilters;
window.setThemeFromRace = setThemeFromRace;
window.showToast = showToast;
window.escapeHtml = escapeHtml;

// Wait for DOM and data
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}