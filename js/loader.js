// ===== Site Loader & Hero Sequência =====

// Counter animation (usado por main.js)
function countTo(el, value) {
  if (!el) return;
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) {
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

// Loader básico - garante que a tela não fique travada
function hideLoader() {
  const loader = document.querySelector('.site-loader');
  if (loader) {
    loader.style.opacity = '0';
    loader.style.visibility = 'hidden';
    loader.style.pointerEvents = 'none';
  }
  document.body.classList.add('is-loaded');
}

// Sequência de entrada do hero (não bloqueante)
function sequenciaHero(els, RACES) {
  // Contadores animam de 0 para valor real
  setTimeout(() => {
    try {
      if (els?.metricRaces) countTo(els.metricRaces, RACES?.length || 0);
      const allChars = RACES?.flatMap(r => r.characters || []) || [];
      if (els?.metricCharacters) countTo(els.metricCharacters, allChars.length);
      const regioes = [...new Set(allChars.map(c => c.region || 'desconhecida'))];
      if (els?.metricRegions) countTo(els.metricRegions, regioes.length);
    } catch(e) {}
  }, 300);

  // Loader desaparece após 2s
  setTimeout(hideLoader, 2000);
}

function initLoader() {
  sequenciaHero();
}

// Failsafe: garantir loader some após 4s
setTimeout(hideLoader, 4000);

// Export for use in main.js
window.countTo = countTo;
window.initLoader = initLoader;
window.hideLoader = hideLoader;
window.sequenciaHero = sequenciaHero;