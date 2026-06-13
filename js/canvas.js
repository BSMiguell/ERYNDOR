// ===== Ambient Canvas - Kore Particles =====

function initAmbientCanvas() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  // Suporta ambos os IDs (index.html e mapa.html)
  const canvas = document.getElementById("ambient-canvas") || document.getElementById("map-particles");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const particles = [];
  const maxParticles = 40; // Limit to 40 for performance as per SUPER_PROMPT
  const throttleFPS = 30;
  let lastDraw = 0;

  function resize() {
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.max(1, Math.floor(rect.width * devicePixelRatio));
    canvas.height = Math.max(1, Math.floor(rect.height * devicePixelRatio));
  }

  // Generate crystal-like polygonal shapes
  function generateCrystalShape() {
    const sides = 5 + Math.floor(Math.random() * 3); // 5-7 sides
    const r = 2 + Math.random() * 4;
    return Array.from({ length: sides }, (_, i) => {
      const angle = (i / sides) * Math.PI * 2 + Math.random() * 0.6;
      const radius = r * (0.7 + Math.random() * 0.3);
      return [Math.cos(angle) * radius, Math.sin(angle) * radius];
    });
  }

  function seed() {
    particles.length = 0;
    const density = window.innerWidth < 760 ? 40 : 60; // Reduced density
    const raceColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--active-race').trim() || '#d7af45';

    for (let i = 0; i < Math.min(density, maxParticles); i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.24 * devicePixelRatio,
        vy: (Math.random() - 0.5) * 0.18 * devicePixelRatio,
        size: (0.6 + Math.random() * 1.8) * devicePixelRatio,
        hue: Math.random(),
        opacity: 0.1 + Math.random() * 0.2,
        points: generateCrystalShape()
      });
    }
  }

  function draw(now) {
    if (now - lastDraw < 1000 / throttleFPS) {
      requestAnimationFrame(draw);
      return;
    }
    lastDraw = now;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, index) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      // Get current race color
      const currentColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--active-race').trim() || '#d7af45';

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.hue * Math.PI * 2);
      ctx.beginPath();
      p.points.forEach(([px, py], i) => {
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      });
      ctx.closePath();
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = currentColor + Math.floor(p.opacity * 255).toString(16).padStart(2, '0');
      ctx.fill();
      ctx.restore();

      // Connect nearby particles with subtle lines
      const other = particles[(index + 9) % particles.length];
      const dist = Math.hypot(p.x - other.x, p.y - other.y);
      if (dist < 140 * devicePixelRatio) {
        ctx.globalAlpha = (1 - dist / (140 * devicePixelRatio)) * 0.08;
        ctx.strokeStyle = "#f0e2c4";
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(other.x, other.y);
        ctx.stroke();
      }
    });

    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }

  resize();
  seed();
  draw(performance.now());
  window.addEventListener("resize", () => {
    resize();
    seed();
  });
}

// Modal canvas particles
function initModalParticles(color) {
  const canvas = document.getElementById("modal-canvas");
  if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const ctx = canvas.getContext("2d");
  const rect = canvas.getBoundingClientRect();
  canvas.width = Math.max(1, Math.floor(rect.width * devicePixelRatio));
  canvas.height = Math.max(1, Math.floor(rect.height * devicePixelRatio));

  const particles = Array.from({ length: 36 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.35 * devicePixelRatio,
    vy: -(0.2 + Math.random() * 0.6) * devicePixelRatio,
    size: (1 + Math.random() * 2.2) * devicePixelRatio,
    life: Math.random(),
  }));

  function step() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = color || '#d7af45';
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.life -= 0.006;
      if (p.life <= 0 || p.y < 0) {
        p.x = Math.random() * canvas.width;
        p.y = canvas.height + Math.random() * 40;
        p.life = 1;
      }
      ctx.globalAlpha = Math.max(0, p.life) * 0.42;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(step);
  }

  step();
}

// Export for use in main.js
window.initAmbientCanvas = initAmbientCanvas;
window.initModalParticles = initModalParticles;