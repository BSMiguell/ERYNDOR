// ===== Custom Cursor =====

// Disable on touch devices
if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
  // Cursor disabled on touch devices
} else {

const cursorEl = document.getElementById("cursor");
const label = cursorEl?.querySelector("span");

if (cursorEl) {
  document.addEventListener("pointermove", (event) => {
    document.documentElement.style.setProperty(
      "--cursor-x",
      `${event.clientX}px`,
    );
    document.documentElement.style.setProperty(
      "--cursor-y",
      `${event.clientY}px`,
    );

    const interactive = event.target.closest(
      "[data-cursor], button, a, input, select",
    );
    document.body.classList.toggle(
      "cursor-active",
      Boolean(interactive),
    );

    if (label) {
      label.textContent = interactive?.dataset.cursor || "";
    }
  });

  document.addEventListener("pointerdown", () =>
    document.body.classList.add("cursor-press"),
  );

  document.addEventListener("pointerup", () =>
    document.body.classList.remove("cursor-press"),
  );
}
}