// ===== Site Loader =====

function initLoader() {
  window.addEventListener("load", () => {
    setTimeout(() => {
      document.body.classList.add("is-loaded");
    }, 360);
  });
}

// Export for use in main.js
window.initLoader = initLoader;