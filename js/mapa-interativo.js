// ===== Mapa Interativo ERYNDOR - Fase 2, 3, 4 =====

let panZoomInstance = null;
let personagensData = [];
let eventosData = [];

// Inicializar mapa
async function initMap() {
  try {
    await Promise.all([
      carregarDados(),
      carregarSVG()
    ]);
    iniciarInteracoesMapa();
  } catch (e) {
    console.error('Erro ao inicializar mapa:', e);
  }
}

// Carregar dados JSON
async function carregarDados() {
  try {
    const [charsRes, eventosRes] = await Promise.all([
      fetch('data/personagens.json'),
      fetch('data/eventos.json')
    ]);
    personagensData = await charsRes.json();
    eventosData = await eventosRes.json();
  } catch (e) {
    console.log('Dados de fallback');
    personagensData = [];
    eventosData = [];
  }
}

// Carregar SVG inline
async function carregarSVG() {
  const container = document.getElementById('mapa-svg-container');
  if (!container) return;

  try {
    const response = await fetch('assets/mapa/mapa-base.svg');
    const svgText = await response.text();
    container.innerHTML = svgText;

    // Garantir altura após carregar
    const svg = container.querySelector('svg');
    if (svg) {
      svg.style.width = '100%';
      svg.style.height = '100%';
      svg.setAttribute('width', '1600');
      svg.setAttribute('height', '900');
    }
  } catch (e) {
    console.error('Erro ao carregar SVG:', e);
  }
}

// Iniciar interações
function iniciarInteracoesMapa() {
  const svg = document.querySelector('#eryndor-map');
  if (!svg) return;

  // Configurar pan/zoom
  panZoomInstance = svgPanZoom(svg, {
    zoomScaleSensitivity: 0.5,
    minZoom: 0.5,
    maxZoom: 4,
    fit: true,
    center: true
  });

  // Interações de região
  svg.querySelectorAll('.regiao').forEach(regiao => {
    regiao.addEventListener('mouseenter', (e) => {
      document.body.classList.add('hover-regiao');
      mostrarTooltipRegiao(regiao, e);
    });

    regiao.addEventListener('mouseleave', () => {
      document.body.classList.remove('hover-regiao');
      esconderTooltip();
    });

    regiao.addEventListener('click', () => {
      abrirModalRegiao(regiao.dataset.regiao);
    });

    // Animação de parallax de mouse
    regiao.addEventListener('mousemove', (e) => {
      const x = (e.offsetX / 1600 - 0.5) * 10;
      const y = (e.offsetY / 900 - 0.5) * 10;
      regiao.style.transform = `translate(${x}px, ${y}px)`;
    });
  });

  // Adicionar pins e marcadores
  adicionarPinsPersonagens();
  adicionarMarcadoresEvento();
}

// Tooltip de região
function mostrarTooltipRegiao(regiao, e) {
  const tooltip = document.getElementById('tooltip-regiao');
  if (!tooltip) return;

  const regiaoId = regiao.dataset.regiao;
  const charsNaRegiao = personagensData.filter(c => c.regiao === regiaoId).length;

  tooltip.innerHTML = `
    <h4>${regiaoId.toUpperCase()}</h4>
    <p>Raça dominante: ${regiao.getAttribute('fill') ? 'carregando' : 'desconhecida'}</p>
    <p>Personagens ativos: ${charsNaRegiao}</p>
  `;

  tooltip.style.left = (e.clientX + 20) + 'px';
  tooltip.style.top = (e.clientY - 20) + 'px';
  tooltip.classList.add('visivel');
}

function esconderTooltip() {
  const tooltip = document.getElementById('tooltip-regiao');
  tooltip?.classList.remove('visivel');
}

// Adicionar pins de personagem
function adicionarPinsPersonagens() {
  const svg = document.querySelector('#eryndor-map');
  const grupoPins = svg?.querySelector('#pins-personagens');
  if (!grupoPins || !personagensData.length) return;

  // Agrupar por coordenadas para clustering
  const agrupados = {};
  personagensData.forEach(char => {
    const key = `${char.coordenadas_mapa.x},${char.coordenadas_mapa.y}`;
    if (!agrupados[key]) agrupados[key] = [];
    agrupados[key].push(char);
  });

  Object.entries(agrupados).forEach(([coords, chars]) => {
    const [x, y] = coords.split(',');
    const pinGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    pinGroup.className = 'pin-personagem';

    if (chars.length === 1) {
      // Pin único
      const char = chars[0];
      pinGroup.innerHTML = `
        <circle r="20" stroke="#C9A84C" fill="#1A1525" opacity="0.9"/>
        <text x="0" y="5" text-anchor="middle" font-size="10" fill="#FFD97D" font-family="JetBrains Mono">${char.nome.substring(0, 2).toUpperCase()}</text>
      `;
      pinGroup.setAttribute('transform', `translate(${x}, ${y})`);
    } else {
      // Cluster
      pinGroup.innerHTML = `
        <circle r="22" stroke="#E8B84B" fill="#5C1A1A" opacity="0.9"/>
        <text x="0" y="6" text-anchor="middle" font-size="12" fill="#FFD97D" font-family="JetBrains Mono">+${chars.length}</text>
      `;
      pinGroup.setAttribute('transform', `translate(${x}, ${y})`);
    }

    pinGroup.addEventListener('mouseenter', () => {
      document.body.classList.add('hover-regiao');
    });

    pinGroup.addEventListener('mouseleave', () => {
      document.body.classList.remove('hover-regiao');
    });

    pinGroup.addEventListener('click', () => {
      if (chars.length === 1) {
        abrirDossiePersonagem(chars[0].id);
      } else {
        // Mostrar lista de personagens no cluster
        mostrarCluster(chars);
      }
    });

    grupoPins.appendChild(pinGroup);
  });
}

// Adicionar marcadores de evento
function adicionarMarcadoresEvento() {
  const svg = document.querySelector('#eryndor-map');
  const grupoEventos = svg?.querySelector('#marcadores-eventos');
  if (!grupoEventos || !eventosData.length) return;

  eventosData.forEach(evento => {
    const marcador = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    marcador.className = 'marcador-evento';
    marcador.setAttribute('transform', `translate(${evento.coordenadas.x}, ${evento.coordenadas.y})`);

    const cor = evento.tipo === 'convergencia' ? '#C9A84C' :
                evento.tipo === 'batalha' ? '#C0392B' :
                evento.tipo === 'politico' ? '#FFD97D' : '#4A2060';

    marcador.innerHTML = `
      <path d="M0,-10 L10,0 L0,10 L-10,0 Z" fill="${cor}" opacity="0.9"/>
      <circle r="12" fill="none" stroke="${cor}" stroke-width="1" class="pulse-ring"/>
    `;

    marcador.addEventListener('click', () => {
      abrirModalEvento(evento.id);
    });

    grupoEventos.appendChild(marcador);
  });
}

// Modal de região
async function abrirModalRegiao(regiaoId) {
  try {
    const response = await fetch('data/regioes.json');
    const regioes = await response.json();
    const regiao = regioes.find(r => r.id === regiaoId);
    if (!regiao) return;

    document.getElementById('modal-regiao-nome').textContent = regiao.nome;
    document.getElementById('modal-regiao-raca').textContent = `Raça dominante: ${regiao.raca_dominante}`;
    document.getElementById('modal-regiao-descricao').textContent = regiao.lore;

    // Carregar personagens da região
    const chars = document.getElementById('chars-horizontal');
    chars.innerHTML = personagensData
      .filter(c => c.regiao === regiaoId)
      .map(c => `<button onclick="abrirDossiePersonagem('${c.id}')" class="char-thumb">${c.nome}</button>`)
      .join('');

    document.getElementById('modal-regiao').classList.add('open');
    document.body.style.overflow = 'hidden';
  } catch (e) {
    console.error('Erro ao abrir modal:', e);
  }
}

// Modal de evento
function abrirModalEvento(eventoId) {
  const evento = eventosData.find(e => e.id === eventoId);
  if (!evento) return;

  document.getElementById('modal-evento-tipo').textContent = evento.tipo.toUpperCase();
  document.getElementById('modal-evento-titulo').textContent = evento.titulo;
  document.getElementById('modal-evento-narrativa').innerHTML = evento.narrativa.map(p => `<p>${p}</p>`).join('');
  document.getElementById('modal-evento-consequencia').textContent = evento.consequencia;
  document.getElementById('modal-evento-regiao').textContent = evento.regiao;

  document.getElementById('modal-evento').classList.add('open');
  document.body.style.overflow = 'hidden';
}

// Abrir dossiê do personagem (reusar modal existente)
function abrirDossiePersonagem(charId) {
  const char = personagensData.find(c => c.id === charId);
  if (!char || !window.openModal) return;

  // Fechar modals
  document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.remove('open'));

  // Abrir modal de personagem via sistema existente
  setTimeout(() => {
    if (window.openModal) {
      // Passar char no formato compatível
      window.openModal({ race: { id: char.raca, name: char.raca, folder: char.raca }, char: char }, { clientX: 400, clientY: 300 });
    }
  }, 300);
}

// Mostrar cluster
function mostrarCluster(chars) {
  const modal = document.getElementById('modal-regiao');
  document.getElementById('modal-regiao-nome').textContent = 'Personagens';
  document.getElementById('modal-regiao-raca').textContent = `${chars.length} encontrados`;
  document.getElementById('modal-regiao-descricao').textContent = 'Clique em um personagem para ver o dossiê completo.';
  document.getElementById('chars-horizontal').innerHTML = chars
    .map(c => `<button onclick="abrirDossiePersonagem('${c.id}')" class="char-thumb">${c.nome}</button>`)
    .join('');
  modal.classList.add('open');
}

// Export
window.initMap = initMap;
window.abrirModalRegiao = abrirModalRegiao;