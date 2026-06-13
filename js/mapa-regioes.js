// ===== Mapa Interativo 3D - ERYNDOR =====

class MapaInterativo3D {
  constructor(regioes, RACES) {
    this.regioes = regioes;
    this.RACES = RACES;
    this.regiaoAtiva = null;
    this.canvas = null;
    this.ctx = null;
    this.camera = { x: 0, y: 0, zoom: 1 };
    this.mousePos = { x: 0, y: 0 };
    this.animationId = null;
    this.init();
  }

  init() {
    this.renderMapa();
    this.renderGridRegioes();
    this.renderMiniMapa();
    this.initEventos();
    this.initParticulas();
    this.initHUD();
  }

  initHUD() {
    const hudRegioes = document.getElementById('hud-regioes');
    const hudConexoes = document.getElementById('hud-conexoes');
    if (hudRegioes) hudRegioes.textContent = `${this.regioes.length}/10`;
    if (hudConexoes) hudConexoes.textContent = this.regioes.reduce((acc, r) => acc + r.conexao.length, 0);
  }

  renderMapa() {
    const mapaContainer = document.getElementById('mapa-interativo');
    if (!mapaContainer) return;

    // Usa canvas para efeitos 3D avançados
    this.canvas = document.getElementById('mapa-3d');
    if (this.canvas) {
      this.ctx = this.canvas.getContext('2d');
      this.resizeCanvas();
      this.animate();
    }

    // SVG fallback com efeitos aprimorados (mantido para compatibilidade)
    const svgNS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('viewBox', '0 0 100 100');
    svg.setAttribute('class', 'mapa-svg');
    svg.setAttribute('aria-label', 'Mapa interativo das regiões de ERYNDOR');

    // Fundo com gradiente nebula
    const gradient = document.createElementNS(svgNS, 'radialGradient');
    gradient.setAttribute('id', 'mapNebula');
    gradient.innerHTML = `
      <stop offset="0%" stop-color="#1a1a2e"/>
      <stop offset="50%" stop-color="#16213e"/>
      <stop offset="100%" stop-color="#0a0a0a"/>
    `;
    svg.appendChild(gradient);

    const radialGrad = document.createElementNS(svgNS, 'circle');
    radialGrad.setAttribute('cx', '50');
    radialGrad.setAttribute('cy', '50');
    radialGrad.setAttribute('r', '50');
    radialGrad.setAttribute('fill', 'url(#mapNebula)');
    svg.appendChild(radialGrad);

    // Conexões com gradient animado
    this.regioes.forEach(regiao => {
      regiao.conexao.forEach(conexaoId => {
        const conexao = this.regioes.find(r => r.id === conexaoId);
        if (conexao) {
          // Linha principal
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

          // Linha glow
          const linhaGlow = document.createElementNS(svgNS, 'line');
          linhaGlow.setAttribute('x1', regiao.posicao.x);
          linhaGlow.setAttribute('y1', regiao.posicao.y);
          linhaGlow.setAttribute('x2', conexao.posicao.x);
          linhaGlow.setAttribute('y2', conexao.posicao.y);
          linhaGlow.setAttribute('stroke', regiao.paleta.primaria);
          linhaGlow.setAttribute('stroke-opacity', '0.1');
          linhaGlow.setAttribute('stroke-width', '1');
          linhaGlow.style.filter = 'blur(2px)';
          svg.appendChild(linhaGlow);
        }
      });
    });

    // Pins das regiões com efeitos 3D
    this.regioes.forEach((regiao, index) => {
      const grupo = document.createElementNS(svgNS, 'g');
      grupo.setAttribute('class', 'mapa-pin-grupo');
      grupo.setAttribute('data-regiao', regiao.id);
      grupo.setAttribute('tabindex', '0');

      // Halo externo
      const halo = document.createElementNS(svgNS, 'circle');
      halo.setAttribute('cx', regiao.posicao.x);
      halo.setAttribute('cy', regiao.posicao.y);
      halo.setAttribute('r', '8');
      halo.setAttribute('class', 'mapa-halo');
      halo.setAttribute('fill', 'none');
      halo.setAttribute('stroke', regiao.paleta.primaria);
      halo.setAttribute('stroke-width', '0.5');
      halo.setAttribute('stroke-opacity', '0.2');
      grupo.appendChild(halo);

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

      // Símbolo da região
      const simbolo = document.createElementNS(svgNS, 'text');
      simbolo.setAttribute('x', regiao.posicao.x);
      simbolo.setAttribute('y', regiao.posicao.y + 1);
      simbolo.setAttribute('class', 'mapa-simbolo');
      simbolo.setAttribute('text-anchor', 'middle');
      simbolo.setAttribute('fill', regiao.paleta.secundaria);
      simbolo.setAttribute('font-size', '3px');
      simbolo.textContent = this.getRegiaoSimbolo(regiao.tipo);
      grupo.appendChild(simbolo);

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

  getRegiaoSimbolo(tipo) {
    const simbolos = {
      corrompido: '⬢',
      natureza: '♠',
      infernal: '⚡',
      civilizado: '⚔',
      desolado: '☠',
      etereo: '✶',
      cosmico: '◉',
      abissal: '⬟',
      mar: '⚓'
    };
    return simbolos[tipo] || '◆';
  }

  resizeCanvas() {
    if (!this.canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const rect = this.canvas.getBoundingClientRect();
    this.canvas.width = rect.width * dpr;
    this.canvas.height = rect.height * dpr;
    this.ctx.scale(dpr, dpr);
    this.canvasWidth = rect.width;
    this.canvasHeight = rect.height;
  }

  animate() {
    if (!this.ctx || !this.canvas) return;

    const ctx = this.ctx;
    const w = this.canvasWidth;
    const h = this.canvasHeight;

    // Limpa canvas
    ctx.clearRect(0, 0, w * (window.devicePixelRatio || 1), h * (window.devicePixelRatio || 1));

    // Desenha partículas de Kore
    this.drawKoreParticles(ctx, w, h);

    // Desenha efeito de profundidade
    this.drawDepthEffect(ctx, w, h);

    this.animationId = requestAnimationFrame(() => this.animate());
  }

  drawKoreParticles(ctx, w, h) {
    const time = Date.now() * 0.001;

    // Partículas de Kore voando
    for (let i = 0; i < 20; i++) {
      const x = (Math.sin(time + i) * 0.3 + 0.5) * w;
      const y = (Math.cos(time * 0.7 + i) * 0.2 + 0.5) * h;
      const size = Math.sin(time * 2 + i) * 2 + 3;

      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(45, 70%, 60%, ${0.1 + Math.sin(time + i) * 0.05})`;
      ctx.fill();

      // Trail effect
      ctx.beginPath();
      ctx.arc(x - 10, y - 5, size * 0.5, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(45, 70%, 60%, 0.05)`;
      ctx.fill();
    }
  }

  drawDepthEffect(ctx, w, h) {
    // Grid 3D effect
    ctx.strokeStyle = 'rgba(215, 175, 69, 0.03)';
    ctx.lineWidth = 1;

    const gridSize = 20;
    const perspective = 0.6;

    for (let i = 0; i < w; i += gridSize) {
      const alpha = i / w;
      ctx.globalAlpha = alpha * perspective;
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, h);
      ctx.stroke();
    }

    for (let i = 0; i < h; i += gridSize) {
      const alpha = i / h;
      ctx.globalAlpha = alpha * perspective;
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(w, i);
      ctx.stroke();
    }

    ctx.globalAlpha = 1;
  }

  renderGridRegioes() {
    const grid = document.getElementById('regioes-grid');
    if (!grid) return;

    // Mapeia regiões para personagens reais
    const regioesComPersonagens = this.criarRegioesComPersonagens();

    grid.innerHTML = regioesComPersonagens.map(regiao => `
      <div class="regiao-card regiao-card-hologram" data-regiao="${regiao.id}" style="--card-from:${regiao.paleta.primaria}22;--card-to:${regiao.paleta.secundaria}11;--card-glow:${regiao.paleta.destaque}33;--race-color:${regiao.paleta.primaria}">
        <img src="${regiao.imagemPlaceholder}" alt="${regiao.nome}" loading="lazy" onerror="this.src='images/Banner/Banner-Mutantes.png'" />
        <div class="regiao-overlay">
          <h3 class="regiao-nome">${regiao.nome}</h3>
          <p class="regiao-raca">${regiao.raca}</p>
          <div class="regiao-tags">
            <span class="regiao-tag">${regiao.tipo}</span>
            <span class="regiao-tag">${regiao.personagens.length} personagens</span>
          </div>
        </div>
        <div class="regiao-card-glow"></div>
      </div>
    `).join('');

    // Eventos dos cards com animação de holograma
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
      const personagens = personagensPorRegiao[regiao.nome] || [];
      const bannerImg = `images/Banner/Banner-${pasta}.png`;
      const imagemRegiao = regiao.imagens?.[0] || bannerImg;

      return {
        ...regiao,
        personagens,
        imagemPlaceholder: imagemRegiao,
        pastaImagem: pasta
      };
    });
  }

  renderMiniMapa() {
    const miniMap = document.querySelector('.mini-mapa-svg');
    if (!miniMap) return;

    const svgNS = 'http://www.w3.org/2000/svg';

    this.regioes.forEach(regiao => {
      const circulo = document.createElementNS(svgNS, 'circle');
      circulo.setAttribute('cx', regiao.posicao.x);
      circulo.setAttribute('cy', regiao.posicao.y);
      circulo.setAttribute('r', '3');
      circulo.setAttribute('class', 'mini-mapa-pin');
      circulo.setAttribute('fill', regiao.paleta.primaria);
      circulo.setAttribute('data-regiao', regiao.id);
      circulo.setAttribute('data-cursor', regiao.nome);
      miniMap.appendChild(circulo);

      const texto = document.createElementNS(svgNS, 'text');
      texto.setAttribute('x', regiao.posicao.x);
      texto.setAttribute('y', regiao.posicao.y - 5);
      texto.setAttribute('font-size', '2');
      texto.setAttribute('text-anchor', 'middle');
      texto.setAttribute('fill', regiao.paleta.destaque);
      texto.setAttribute('data-cursor', regiao.nome);
      texto.style.cursor = 'pointer';
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

    // Eventos do mini-mapa
    document.querySelectorAll('.mini-mapa-pin').forEach(pin => {
      const regiaoId = pin.dataset.regiao;
      const regioesComPersonagens = this.criarRegioesComPersonagens();
      const regiao = regioesComPersonagens.find(r => r.id === regiaoId);

      pin.addEventListener('mouseenter', () => this.mostrarTooltip(regiao));
      pin.addEventListener('click', () => {
        const mapaSection = document.getElementById('mapa-interativo');
        if (mapaSection) {
          mapaSection.scrollIntoView({ behavior: 'smooth' });
        }
        this.selecionarRegiao(regiao);
      });
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

      this.mousePos = { x: e.clientX, y: e.clientY };
    });
  }

  abrirModalRegiao(regiao) {
    if (!regiao) return;

    const modal = document.getElementById('regiao-modal');
    if (!modal) return;

    document.getElementById('modal-nome').textContent = regiao.nome;
    document.getElementById('modal-raca').textContent = regiao.raca;
    document.getElementById('modal-descricao').textContent = regiao.descricao;

    // Atualiza indicador de Kore
    const korePercent = Math.floor(Math.random() * 40) + 30;
    document.getElementById('kore-percent').textContent = `${korePercent}%`;

    // Imagens
    const imagensContainer = document.getElementById('modal-imagens');
    imagensContainer.innerHTML = '';

    regiao.imagens?.forEach((imgSrc, i) => {
      const img = document.createElement('img');
      img.src = imgSrc;
      img.alt = `${regiao.nome} vista ${i + 1}`;
      img.loading = 'lazy';
      img.style.setProperty('--hue', regiao.paleta.primaria);
      imagensContainer.appendChild(img);
    });

    // Se não tem imagens, usa placeholder
    if (!regiao.imagens?.length) {
      for (let i = 0; i < 4; i++) {
        const img = document.createElement('img');
        img.src = regiao.imagemPlaceholder;
        img.alt = `${regiao.nome} vista ${i + 1}`;
        img.loading = 'lazy';
        img.style.setProperty('--hue', regiao.paleta.primaria);
        imagensContainer.appendChild(img);
      }
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
      <div class="regiao-modal-footer">
        <button class="ghost-button" id="modal-lore-btn">Ver Lore Completo</button>
      </div>
    `;

    modal.classList.add('ativo');
    modal.setAttribute('aria-hidden', 'false');

    // Evento do botão de lore
    document.getElementById('modal-lore-btn')?.addEventListener('click', () => {
      this.mostrarLoreCompleto(regiao);
    });
  }

  mostrarLoreCompleto(regiao) {
    const lore = regiao.caracteristicas || 'Detalhes arcanjoscopados sobre esta região...';
    alert(`LORE: ${lore}\n\n${regiao.descricao}`);
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
    document.getElementById('region-legend')?.classList.remove('ativo');
  }
});

// Inicializar quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  if (window.REGIOES && window.RACES) {
    window.mapaInterativo = new MapaInterativo3D(window.REGIOES, window.RACES);
  }
});