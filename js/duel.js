// ===== Duel Section Logic =====

let duelState = { left: null, right: null };

// Sync with global window.duelState
Object.defineProperty(window, 'duelState', {
  get() { return duelState; },
  set(value) { duelState = value; }
});

function randomCharacter(RACES) {
  const allChars = RACES.flatMap((race) =>
    (race.characters || []).map((char) => ({
      race,
      char,
      threat: window.threatScore ? window.threatScore(char) : 50,
      archetype: window.archetype ? window.archetype(char) : "unknown",
    }))
  );
  return allChars[Math.floor(Math.random() * allChars.length)];
}

function renderDuel(RACES, els) {
  duelState.left = duelState.left || randomCharacter(RACES);
  duelState.right = duelState.right || randomCharacter(RACES);

  // Ensure different characters
  while (duelState.left && duelState.right && duelState.left.char.n === duelState.right.char.n) {
    duelState.right = randomCharacter(RACES);
  }

  renderDuelPick(els.duelLeft, duelState.left, els);
  renderDuelPick(els.duelRight, duelState.right, els);

  if (duelState.left && duelState.right) {
    const diff = Math.abs(duelState.left.threat - duelState.right.threat);
    const winner = duelState.left.threat >= duelState.right.threat ? duelState.left : duelState.right;

    if (els.duelVerdict) {
      els.duelVerdict.textContent = diff <= 4
        ? "Empate instável: a arena não consegue prever o colapso."
        : `${winner.char.n} inclina o campo por ${diff} pontos de ameaça.`;
    }
  }
}

function renderDuelPick(target, item, els) {
  if (!item || !target) return;

  target.style.setProperty("--race-color", item.race.color);
  target.style.setProperty("--race-glow", item.race.glow);

  const imgPath = `images/${item.race.folder}/${item.char.f}`;
  const escape = window.escapeHtml || ((v) => String(v ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"));

  target.innerHTML = `
    <img src="${escape(imgPath)}" alt="${escape(item.char.n)}" loading="lazy" decoding="async" />
    <div>
      <small>${escape(item.race.name)} · ameaça ${item.threat}</small>
      <strong>${escape(item.char.n)}</strong>
    </div>
  `;
}

function drawNewDuel(RACES, els) {
  duelState = { left: randomCharacter(RACES), right: randomCharacter(RACES) };
  while (duelState.left.char.n === duelState.right.char.n) {
    duelState.right = randomCharacter(RACES);
  }
  renderDuel(RACES, els);
}

// Export functions
window.renderDuel = renderDuel;
window.renderDuelPick = renderDuelPick;
window.drawNewDuel = drawNewDuel;