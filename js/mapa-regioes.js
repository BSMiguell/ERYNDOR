// ===== Mapa Interativo de Regiões - ERYNDOR =====

class MapaInterativo {
  constructor(regioes, RACES) {
    this.regioes = regioes;
    this.RACES = RACES;
    this.regiaoAtiva = null;
    this.init();
  }

  init() {
    this.renderMapa();
    this.renderGridRegioes();
    this.renderMiniMapa();
    this.initEventos();
    this.initParticulas();
  }

  renderMapa() {
    const mapaContainer = document.getElementById('mapa-interativo');
    if (!mapaContainer) return;

    // Cria SVG do mapa
    const svgNS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 100 100');
    svg.setAttribute('class', 'mapa-svg');
    svg.setAttribute('aria-label', 'Mapa interativo das regiões de ERYNDOR');

    // Fundo com gradient
    const gradient = document.createElementNS(svgNS, 'linearGradient');
    gradient.setAttribute('id', 'mapGrad');
    gradient.innerHTML = `
      <stop offset="0%" stop-color="#1a1a1a"/>
      <stop offset="100%" stop-color="#0a0a0a"/>
    `;
    svg.appendChild(gradient);

    const fundo = document.createElementNS(svgNS, 'rect');
    fundo.setAttribute('x', '0');
    fundo.setAttribute('y', '0');
    fundo.setAttribute('width', '100');
    fundo.setAttribute('height', '100');
    fundo.setAttribute('fill', 'url(#mapGrad)');
    svg.appendChild(fundo);

    // Conexões entre regiões
    this.regioes.forEach(regiao => {
      regiao.conexao.forEach(conexaoId => {
        const conexao = this.regioes.find(r => r.id === conexaoId);
        if (conexao) {
          const linha = document.createElementNS(svgNS, 'line');
          linha.setAttribute('x1', regiao.posicao.x);
          linha.setAttribute('y1', regiao.posicao.y);
          linha.setAttribute('x2', conexao.posicao.x);
          linha.setAttribute('y2', conexao.posicao.y);
          linha.setAttribute('class', 'mapa-conexao');
          linha.setAttribute('stroke', regiao.paleta.destaque);
          linha.setAttribute('stroke-opacity', '0.3');
          linha.setAttribute('stroke-width', '0.5');
          svg.appendChild(linha);
        }
      });
    });

    // Pins das regiões
    this.regioes.forEach((regiao, index) => {
      const grupo = document.createElementNS(svgNS, 'g');
      grupo.setAttribute('class', 'mapa-pin-grupo');
      grupo.setAttribute('data-regiao', regiao.id);
      grupo.setAttribute('tabindex', '0');

      // Círculo pulsante
      const circulo = document.createElementNS(svgNS, 'circle');
      circulo.setAttribute('cx', regiao.posicao.x);
      circulo.setAttribute('cy', regiao.posicao.y);
      circulo.setAttribute('r', '2.5');
      circulo.setAttribute('class', 'mapa-pin');
      circulo.setAttribute('fill', regiao.paleta.primaria);
      circulo.setAttribute('data-index', index);
      circulo.style.animationDelay = `${index * 0.2}s`;
      grupo.appendChild(circulo);

      // Anel externo
      const anel = document.createElementNS(svgNS, 'circle');
      anel.setAttribute('cx', regiao.posicao.x);
      anel.setAttribute('cy', regiao.posicao.y);
      anel.setAttribute('r', '4.5');
      anel.setAttribute('class', 'mapa-anel');
      anel.setAttribute('stroke', regiao.paleta.destaque);
      anel.setAttribute('stroke-width', '0.5');
      anel.setAttribute('fill', 'none');
      grupo.appendChild(anel);

      // Nome da região
      const texto = document.createElementNS(svgNS, 'text');
      texto.setAttribute('x', regiao.posicao.x);
      texto.setAttribute('y', regiao.posicao.y - 6);
      texto.setAttribute('class', 'mapa-tooltip');
      texto.setAttribute('text-anchor', 'middle');
      texto.textContent = regiao.nome;
      grupo.appendChild(texto);

      // Label da raça
      const labelRaca = document.createElementNS(svgNS, 'text');
      labelRaca.setAttribute('x', regiao.posicao.x);
      labelRaca.setAttribute('y', regiao.posicao.y + 7);
      labelRaca.setAttribute('class', 'mapa-label');
      labelRaca.setAttribute('text-anchor', 'middle');
      labelRaca.textContent = regiao.raca;
      grupo.appendChild(labelRaca);

      svg.appendChild(grupo);
    });

    mapaContainer.appendChild(svg);

    // Painel de informações
    const painel = document.createElement('div');
    painel.setAttribute('class', 'mapa-painel');
    painel.setAttribute('id', 'mapa-painel');
    painel.innerHTML = `
      <div class="painel-conteudo">
        <h3 id="painel-nome">Selecione uma região</h3>
        <p id="painel-desc"></p>
        <div class="painel-tags" id="painel-tags"></div>
      </div>
    `;
    mapaContainer.appendChild(painel);
  }

  renderGridRegioes() {
    const grid = document.getElementById('regioes-grid');
    if (!grid) return;

    // Mapeia regiões para personagens reais
    const regioesComPersonagens = this.criarRegioesComPersonagens();

    grid.innerHTML = regioesComPersonagens.map(regiao => `
      <div class="regiao-card" data-regiao="${regiao.id}" style="--card-from:${regiao.paleta.primaria}22;--card-to:${regiao.paleta.secundaria}11;--card-glow:${regiao.paleta.destaque}33">
        <img src="${regiao.imagemPlaceholder}" alt="${regiao.nome}" loading="lazy" onerror="this.src='images/Banner/Banner-Mutantes.png'" />
        <div class="regiao-overlay">
          <h3 class="regiao-nome">${regiao.nome}</h3>
          <p class="regiao-raca">${regiao.raca}</p>
          <div class="regiao-tags">
            <span class="regiao-tag">${regiao.tipo}</span>
            <span class="regiao-tag">${regiao.personagens.length} personagens</span>
          </div>
        </div>
      </div>
    `).join('');

    // Eventos dos cards
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    grid.querySelectorAll('.regiao-card').forEach(card => {
      card.addEventListener('click', () => {
        const regiaoId = card.dataset.regiao;
        const regiao = regioesComPersonagens.find(r => r.id === regiaoId);
        this.abrirModalRegiao(regiao);
      });
      observer.observe(card);
    });
  }

  criarRegioesComPersonagens() {
    // Mapeia as regiões para os personagens dos dados existentes
    const personagensPorRegiao = {};
    this.RACES.forEach(raca => {
      raca.characters?.forEach(char => {
        const reg = char.region;
        if (!personagensPorRegiao[reg]) {
          personagensPorRegiao[reg] = [];
        }
        personagensPorRegiao[reg].push(...[char]);
      });
    });

    // Mapeia região para pasta de imagens
    const pastaPorRegiao = {
      'Korrfeld': 'Amaldiçoados',
      'Wildmere': 'Beserk',
      'Sombrath': 'Demonio',
      'Thornwall': 'Humanos',
      'Terras Devastadas': 'Mutantes',
      'Plano Espiritual': 'Aparições',
      'Voidrift': 'Maw Shin',
      'Netherprofundo': 'Gigantes',
      'Ilhas de Elbaf': 'Gigantes',
      'Oceano do Sul': 'Humanos'
    };

    return this.regioes.map(regiao => {
      const pasta = pastaPorRegiao[regiao.nome] || 'Mutantes';
      const pastaBanner = pasta;

      const personagens = personagensPorRegiao[regiao.nome] || [];
      const bannerImg = `images/Banner/Banner-${pastaBanner}.png`;

      return {
        ...regiao,
        personagens,
        imagemPlaceholder: bannerImg,
        pastaImagem: pasta
      };
    });
  }

  renderMiniMapa() {
    const miniMap = document.querySelector('.mini-mapa-svg');
    if (!miniMap) return;

    const svgNS = 'http://www.w3.org/2000/svg';

    this.regioes.forEach(regiao => {
      // Círculo
      const circulo = document.createElementNS(svgNS, 'circle');
      circulo.setAttribute('cx', regiao.posicao.x);
      circulo.setAttribute('cy', regiao.posicao.y);
      circulo.setAttribute('r', '3');
      circulo.setAttribute('class', 'mini-mapa-pin');
      circulo.setAttribute('fill', regiao.paleta.primaria);
      circulo.setAttribute('data-regiao', regiao.id);
      miniMap.appendChild(circulo);

      // Label pequeno
      const texto = document.createElementNS(svgNS, 'text');
      texto.setAttribute('x', regiao.posicao.x);
      texto.setAttribute('y', regiao.posicao.y - 5);
      texto.setAttribute('font-size', '2');
      texto.setAttribute('text-anchor', 'middle');
      texto.setAttribute('fill', regiao.paleta.destaque);
      texto.textContent = regiao.nome.substring(0, 3).toUpperCase();
      miniMap.appendChild(texto);
    });
  }

  initEventos() {
    // Eventos dos pins
    document.querySelectorAll('.mapa-pin-grupo').forEach(grupo => {
      const regiaoId = grupo.dataset.regiao;
      const regioesComPersonagens = this.criarRegioesComPersonagens();
      const regiao = regioesComPersonagens.find(r => r.id === regiaoId);

      grupo.addEventListener('mouseenter', () => this.mostrarTooltip(regiao));
      grupo.addEventListener('mouseleave', () => this.esconderTooltip());
      grupo.addEventListener('click', () => this.selecionarRegiao(regiao));
      grupo.addEventListener('focus', () => this.selecionarRegiao(regiao));
    });
  }

  mostrarTooltip(regiao) {
    const painel = document.getElementById('mapa-painel');
    if (!painel || !regiao) return;

    document.getElementById('painel-nome').textContent = regiao.nome;
    document.getElementById('painel-desc').textContent = regiao.descricao.substring(0, 120) + '...';

    const tags = document.getElementById('painel-tags');
    tags.innerHTML = `
      <span class="tag">${regiao.raca}</span>
      <span class="tag">${regiao.tipo}</span>
    `;

    painel.classList.add('ativo');
  }

  esconderTooltip() {
    const painel = document.getElementById('mapa-painel');
    if (painel) painel.classList.remove('ativo');
  }

  selecionarRegiao(regiao) {
    this.regiaoAtiva = regiao;
    this.destacarRegiao(regiao.id);
    this.animateMapTransition(regiao);
  }

  destacarRegiao(regiaoId) {
    document.querySelectorAll('.mapa-pin-grupo').forEach(g => {
      g.classList.toggle('selecionada', g.dataset.regiao === regiaoId);
    });

    const regiao = this.regioes.find(r => r.id === regiaoId);
    if (regiao) {
      document.documentElement.style.setProperty('--active-race', regiao.paleta.primaria);
      document.documentElement.style.setProperty('--active-glow', regiao.paleta.secundaria);
    }
  }

  animateMapTransition(regiao) {
    const pin = document.querySelector(`[data-regiao="${regiao.id}"] .mapa-pin`);
    if (pin) {
      pin.style.animation = 'pulseGlow 0.8s ease-out';
      setTimeout(() => pin.style.animation = '', 800);
    }
  }

  initParticulas() {
    if ('ontouchstart' in window) return;

    const mapa = document.getElementById('mapa-interativo');
    if (!mapa) return;

    mapa.addEventListener('pointermove', (e) => {
      const rect = mapa.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mapa.style.setProperty('--mouse-x', x);
      mapa.style.setProperty('--mouse-y', y);
    });
  }

  abrirModalRegiao(regiao) {
    if (!regiao) return;

    const modal = document.getElementById('regiao-modal');
    if (!modal) return;

    document.getElementById('modal-nome').textContent = regiao.nome;
    document.getElementById('modal-raca').textContent = regiao.raca;
    document.getElementById('modal-descricao').textContent = regiao.descricao;

    // Imagens placeholder
    const imagensContainer = document.getElementById('modal-imagens');
    imagensContainer.innerHTML = '';

    for (let i = 0; i < 4; i++) {
      const img = document.createElement('img');
      img.src = regiao.imagemPlaceholder;
      img.alt = `${regiao.nome} vista ${i + 1}`;
      img.loading = 'lazy';
      img.style.setProperty('--hue', regiao.paleta.primaria);
      imagensContainer.appendChild(img);
    }

    const tags = document.getElementById('modal-tags');
    tags.innerHTML = `
      <span class="regiao-tag">${regiao.tipo}</span>
      <span class="regiao-tag">${regiao.personagens.length} personagens</span>
    `;

    // Lista de personagens
    const personagensContainer = document.getElementById('modal-personagens');
    personagensContainer.innerHTML = `
      <h4 class="modal-personagens-titulo">Dossiês na região</h4>
      <div class="modal-personagens-grid">
        ${regiao.personagens.slice(0, 6).map(char => `
          <button class="modal-personagem-card" data-nome="${char.n}">
            <img src="images/${regiao.pastaImagem}/${char.f}"
                 alt="${char.n}" loading="lazy" onerror="this.style.display='none'" />
            <span>${char.n}</span>
          </button>
        `).join('')}
      </div>
    `;

    modal.classList.add('ativo');
    modal.setAttribute('aria-hidden', 'false');
  }
}

// Fechar modal
document.addEventListener('click', (e) => {
  if (e.target.id === 'modal-close' || e.target.classList.contains('regiao-modal')) {
    const modal = document.getElementById('regiao-modal');
    if (modal) {
      modal.classList.remove('ativo');
      modal.setAttribute('aria-hidden', 'true');
    }
  }
});

// Fechar com ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.getElementById('regiao-modal')?.classList.remove('ativo');
  }
});

// Inicializar quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  if (window.REGIOES && window.RACES) {
    window.mapaInterativo = new MapaInterativo(window.REGIOES, window.RACES);
  }
});