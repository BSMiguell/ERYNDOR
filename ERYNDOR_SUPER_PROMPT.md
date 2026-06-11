# ERYNDOR — Super Prompt de Reconstrução Total
> Documento técnico e criativo completo para uma IA executar a reconstrução do site ERYNDOR do zero.  
> Repositório original: https://github.com/BSMiguell/ERYNDOR  
> Site atual: https://bsmiguell.github.io/ERYNDOR/

---

## 🧭 CONTEXTO DO PROJETO

ERYNDOR é um **atlas vivo de um universo de RPG de fantasia sombria**. O mundo tem:

- **5+ raças** com cores, banners, traços culturais e papéis no conflito
- **Personagens** com dossiês detalhados (ameaça, poder, alinhamento, região, ferida, promessa)
- **Mecânica da Convergência Kore** — cristais que racharam a ordem antiga e movem a guerra
- **4 seções principais:** Hero → Crônica → Raças → Personagens → Duelo
- **Tom visual:** dark fantasy, parchment+ink, latão envelhecido, verdigris, sangue seco

### Paleta original preservada (obrigatório manter estes tokens)
```css
--ink: #080706        /* fundo principal */
--bone: #f0e2c4       /* texto principal */
--paper: #d8c7a1      /* texto secundário */
--kore: #d7af45       /* dourado sagrado */
--copper: #cf6f3b     /* cobre queimado */
--verdigris: #4ab59e  /* verde-azulado */
--blood: #b83d34      /* vermelho sangue */
--moss: #91a36d       /* verde musgo */
--storm: #48687e      /* azul tempestade */
```

### Fontes originais preservadas (obrigatório manter)
- `Cinzel Decorative` — títulos épicos H1, logo
- `Cinzel` — nomes de personagens, raças, subheadings
- `EB Garamond` — corpo de texto, descrições, citações
- `Bricolage Grotesque` — UI, badges, labels, navegação

---

## 🔴 PROBLEMAS CRÍTICOS A CORRIGIR

### 1. Arquivo monolítico (CRÍTICO)
O projeto inteiro está em um único `index.html` de 88KB e 2777 linhas com CSS inline, JS inline e HTML misturados. **Separar obrigatoriamente em:**

```
ERYNDOR/
├── index.html           (~150 linhas, só estrutura)
├── css/
│   ├── tokens.css       (custom properties, reset)
│   ├── layout.css       (grid, sections, hero)
│   ├── components.css   (cards, buttons, badges, nav)
│   ├── animations.css   (keyframes, transitions)
│   └── responsive.css   (breakpoints mobile/tablet)
├── js/
│   ├── data.js          (dados de raças e personagens)
│   ├── loader.js        (site-loader, progress)
│   ├── cursor.js        (cursor customizado)
│   ├── canvas.js        (ambient canvas de partículas)
│   ├── races.js         (lógica da seção de raças)
│   ├── characters.js    (filtro, paginação, dossiês)
│   ├── duel.js          (mesa de duelo)
│   └── main.js          (scroll, nav, init global)
└── images/
    ├── Banner/
    ├── Races/
    └── Characters/
```

### 2. Alt text em todas as imagens (CRÍTICO)
Cada `<img>` precisa de `alt` descritivo. Ex: `alt="Banner da raça Mutantes — figuras transformadas pelo Kore"`.

### 3. Banners de raça quebrados (CRÍTICO)
O sistema atual tenta trocar o `src` de uma `<img>` como banner de fundo. **Isso falhou** porque a imagem não cobre o stage corretamente em todos os navegadores.

**Solução completa descrita na seção de redesign abaixo.**

### 4. Cursor custom visível em mobile (MODERADO)
```javascript
// Adicionar no início de cursor.js
if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;
```

### 5. Lazy loading ausente (MODERADO)
Todas as imagens abaixo do hero devem receber `loading="lazy"` e `decoding="async"`.

### 6. Contadores hero sempre zerados (MODERADO)
Os ledger-items (Raças, Personagens, Regiões) exibem **0** até o JS carregar. Usar valores hardcoded no HTML como fallback, depois atualizar via JS.

### 7. Meta tags Open Graph incompletas (MENOR)
```html
<meta property="og:title" content="ERYNDOR — Atlas Vivo da Convergência" />
<meta property="og:description" content="Explore o atlas de guerra de Eryndor: raças, personagens e a Convergência Kore." />
<meta property="og:image" content="https://bsmiguell.github.io/ERYNDOR/images/og-cover.jpg" />
<meta property="og:url" content="https://bsmiguell.github.io/ERYNDOR/" />
<meta name="twitter:card" content="summary_large_image" />
```

### 8. Favicon ausente (MENOR)
Gerar favicon a partir do símbolo de 8 pontas já usado na nav:
```html
<link rel="icon" type="image/svg+xml" href="/ERYNDOR/favicon.svg" />
```

---

## 🟡 REDESIGNS DE FUNCIONALIDADES QUE NÃO FUNCIONARAM

### ❌ PROBLEMA: Banners de raça como `<img>` com parallax
**O que falhou:** A imagem de banner era definida via `--race-banner` CSS var e aplicada como `background` ou `<img>` com `object-fit`. O parallax quebrava em Safari e o efeito de transição era brusco.

**✅ SOLUÇÃO: Shader-like CSS com múltiplas camadas e transição de opacidade cruzada**

```html
<!-- race-stage usa dois elementos de fundo empilhados -->
<div class="race-stage" id="race-stage">
  <div class="race-bg race-bg--prev" aria-hidden="true"></div>
  <div class="race-bg race-bg--curr" aria-hidden="true"></div>
  <!-- conteúdo do stage -->
</div>
```

```css
.race-bg {
  position: absolute;
  inset: -8%;
  width: 116%;
  height: 116%;
  background-size: cover;
  background-position: center top;
  filter: saturate(1.15) contrast(1.1);
  transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform, opacity;
}
.race-bg--prev { opacity: 0; }
.race-bg--curr { opacity: 0.82; }
.race-bg.is-leaving { opacity: 0; }
.race-bg.is-entering { opacity: 0.82; }
```

```javascript
// Transição cruzada suave entre banners
function switchRaceBanner(newImageUrl) {
  const prev = document.querySelector('.race-bg--curr');
  const next = document.querySelector('.race-bg--prev');
  next.style.backgroundImage = `url(${newImageUrl})`;
  prev.classList.add('is-leaving');
  next.classList.add('is-entering');
  // após transição, trocar papéis
  setTimeout(() => {
    prev.classList.remove('is-leaving', 'race-bg--curr');
    prev.classList.add('race-bg--prev');
    next.classList.remove('is-entering', 'race-bg--prev');
    next.classList.add('race-bg--curr');
    prev.style.opacity = '';
    next.style.opacity = '';
  }, 720);
}
```

**Parallax suave via mousemove (apenas desktop):**
```javascript
if (!('ontouchstart' in window)) {
  document.querySelector('.race-stage').addEventListener('mousemove', (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 18;
    const y = ((e.clientY - top) / height - 0.5) * 10;
    document.querySelector('.race-bg--curr').style.transform =
      `translate(${x}px, ${y}px) scale(1.04)`;
  });
}
```

---

### ❌ PROBLEMA: Canvas de partículas ambient genérico
**O que falhou:** O canvas gerava partículas simples circulares sem personalidade, pesado em CPU.

**✅ SOLUÇÃO: Partículas em forma de fragmentos de cristal Kore com WebGL-lite**

Substituir o canvas de partículas por fragmentos poligonais que **reagem à cor da raça ativa**:

```javascript
class KoreParticle {
  constructor(canvas) {
    this.reset(canvas);
    this.points = this.generateCrystalShape();
    this.color = getComputedStyle(document.documentElement)
      .getPropertyValue('--active-race').trim();
  }

  generateCrystalShape() {
    // Polígono irregular de 5-7 lados (fragmento de cristal)
    const sides = 5 + Math.floor(Math.random() * 3);
    const r = 2 + Math.random() * 4;
    return Array.from({ length: sides }, (_, i) => {
      const angle = (i / sides) * Math.PI * 2 + Math.random() * 0.6;
      const radius = r * (0.7 + Math.random() * 0.3);
      return [Math.cos(angle) * radius, Math.sin(angle) * radius];
    });
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.beginPath();
    this.points.forEach(([px, py], i) =>
      i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py));
    ctx.closePath();
    ctx.fillStyle = this.color + Math.floor(this.opacity * 255).toString(16).padStart(2, '0');
    ctx.fill();
    ctx.restore();
    this.update();
  }
}
```

Limitar a **40 partículas máximas**, usar `requestAnimationFrame` com throttle de 30fps para performance.

---

### ❌ PROBLEMA: Rift Map estático e sem significado
**O que falhou:** O mapa era apenas CSS com gradientes e animação pseudo-cartográfica — nada interativo e sem relação com o lore.

**✅ SOLUÇÃO: Mapa SVG procedural das regiões de Eryndor**

Criar um SVG estilizado com:
- Regiões como polígonos clicáveis com tooltips
- Cada região muda de cor/intensidade conforme a raça selecionada domina aquela área
- Linhas de tensão (tracejado animado) entre regiões em conflito

```html
<svg id="eryndor-map" viewBox="0 0 600 420" class="rift-map-svg">
  <defs>
    <filter id="map-glow">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <!-- Regiões como <polygon> com data-region="nome-da-regiao" -->
  <!-- Cada polygon tem fill inicial muted e ilumina com a cor da raça -->
  <polygon
    data-region="planicie-central"
    data-race="humans"
    points="180,120 280,100 320,160 260,200 180,180"
    class="map-region"
    tabindex="0"
    aria-label="Planície Central — domínio humano"
  />
</svg>
```

---

## 🟢 NOVIDADES E IDEIAS INOVADORAS A IMPLEMENTAR

### 💡 IDEIA 1: Hero com texto revelado por scroll (técnica Sticky Scroll Reveal)

Ao invés do hero estático, o título "ERYNDOR" se monta letra por letra conforme o usuário começa a scrollar. Cada letra do título aparece de uma direção diferente, como fragmentos de cristal se unindo.

```css
.hero-letter {
  display: inline-block;
  opacity: 0;
  transform: translateY(var(--drift-y, 40px)) translateX(var(--drift-x, 0px)) 
             rotate(var(--drift-r, 0deg));
  transition: opacity 0.6s ease var(--delay), transform 0.6s cubic-bezier(0.19, 1, 0.22, 1) var(--delay);
}
.hero-letter.is-revealed {
  opacity: 1;
  transform: none;
}
```

```javascript
// Cada letra recebe drift aleatório na inicialização
document.querySelectorAll('.hero-letter').forEach((el, i) => {
  el.style.setProperty('--drift-y', `${(Math.random() - 0.5) * 80}px`);
  el.style.setProperty('--drift-x', `${(Math.random() - 0.5) * 60}px`);
  el.style.setProperty('--drift-r', `${(Math.random() - 0.5) * 25}deg`);
  el.style.setProperty('--delay', `${i * 0.04}s`);
});
```

---

### 💡 IDEIA 2: Cards de personagem com "flip 3D" ao hover

Os cards dos personagens atualmente são flat e estáticos. Transformar em cards com flip 3D:
- **Frente:** portrait + nome + raça + badge de ameaça
- **Verso:** stats detalhados, citação do personagem, alinhamento, ferida, promessa

```css
.character-card-wrapper {
  perspective: 1000px;
  height: 340px;
}
.character-card {
  transform-style: preserve-3d;
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
}
.character-card:hover,
.character-card:focus-within {
  transform: rotateY(180deg);
}
.character-card-front,
.character-card-back {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
}
.character-card-back {
  transform: rotateY(180deg);
  background: var(--charcoal);
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
```

---

### 💡 IDEIA 3: Linha do tempo da Crônica com scroll horizontal em tela mobile

A seção de crônica atualmente é uma lista vertical de capítulos. Transformar em:
- **Desktop:** scroll vertical normal com capítulos empilhados e linha temporal à esquerda
- **Mobile:** carrossel horizontal deslizável com snap, cada capítulo como um "pergaminho"

```css
@media (max-width: 768px) {
  .story-chapters {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    gap: 1rem;
    padding-bottom: 1rem;
    scrollbar-width: none;
  }
  .chapter {
    flex: 0 0 85vw;
    scroll-snap-align: center;
    border-left: none;
    border-top: 3px solid color-mix(in srgb, var(--chapter-color), transparent 26%);
    padding: 1.25rem;
  }
}
```

---

### 💡 IDEIA 4: Sistema de "Ameaça Visual" nos cards com barra animada

Cada personagem tem um nível de ameaça (1–5). Transformar isso em uma barra que se preenche com animação ao entrar na viewport:

```html
<div class="threat-bar" aria-label="Nível de ameaça: 4 de 5">
  <div class="threat-fill" style="--threat: 4; --max: 5;"></div>
</div>
```

```css
.threat-fill {
  width: 0%;
  height: 4px;
  background: linear-gradient(90deg, var(--blood), var(--kore));
  border-radius: 2px;
  transition: width 1.2s cubic-bezier(0.19, 1, 0.22, 1) var(--delay, 0s);
}
.threat-bar.is-visible .threat-fill {
  width: calc((var(--threat) / var(--max)) * 100%);
}
```

---

### 💡 IDEIA 5: Duelo com animação de "clash" e resultado cinematográfico

A mesa de duelo atual exibe dois cards lado a lado sem dramatismo. Adicionar:

**Fase 1 — Confronto:** Os dois cards deslizam de cada lado e param no centro com um impacto visual (flash de luz, vibração sutil).

**Fase 2 — Contagem:** Barras de stat se preenchem progressivamente, comparando os dois personagens.

**Fase 3 — Veredito:** O vencedor avança (scale up), o perdedor recua (scale down + dessaturação). Um texto épico aparece: *"A Convergência decidiu."*

```css
@keyframes slideFromLeft {
  from { transform: translateX(-120%) rotate(-8deg); opacity: 0; }
  to   { transform: translateX(0) rotate(0deg);      opacity: 1; }
}
@keyframes slideFromRight {
  from { transform: translateX(120%) rotate(8deg); opacity: 0; }
  to   { transform: translateX(0) rotate(0deg);   opacity: 1; }
}
@keyframes clashFlash {
  0%   { opacity: 0; }
  30%  { opacity: 0.6; }
  100% { opacity: 0; }
}
.duel-flash {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, var(--kore), transparent 60%);
  animation: clashFlash 0.5s ease-out forwards;
  pointer-events: none;
  z-index: 10;
}
```

---

### 💡 IDEIA 6: Filtro de personagens com animação de "baralho"

Ao filtrar por raça ou ameaça, os cards que saem não somem instantaneamente — eles "escorregam para baixo do baralho" e os que entram surgem como se fossem comprados de um deck:

```javascript
function filterCharacters(filtro) {
  const cards = document.querySelectorAll('.character-card-wrapper');
  const sair = [...cards].filter(c => !matchFiltro(c, filtro));
  const entrar = [...cards].filter(c => matchFiltro(c, filtro));

  // Animar saída
  sair.forEach((card, i) => {
    card.style.transition = `transform 0.35s ease ${i * 0.03}s, opacity 0.35s ease`;
    card.style.transform = 'translateY(20px) scale(0.92)';
    card.style.opacity = '0';
    setTimeout(() => { card.style.display = 'none'; }, 400 + i * 30);
  });

  // Animar entrada
  entrar.forEach((card, i) => {
    card.style.display = '';
    card.style.transform = 'translateY(-16px) scale(0.96)';
    card.style.opacity = '0';
    requestAnimationFrame(() => {
      card.style.transition = `transform 0.5s cubic-bezier(0.19,1,0.22,1) ${i * 0.04}s, opacity 0.4s ease ${i * 0.04}s`;
      card.style.transform = '';
      card.style.opacity = '1';
    });
  });
}
```

---

### 💡 IDEIA 7: Modo "Pergaminho" para leitura da crônica

Um botão na nav que ativa um overlay em tela cheia simulando um pergaminho antigo sendo aberto. O texto da crônica completa aparece sobre textura de papel com fonte Garamond aumentada. Rolagem lenta e automática disponível.

```css
.scroll-overlay {
  position: fixed;
  inset: 0;
  z-index: 1500;
  background:
    radial-gradient(ellipse at center, #e8d5a3 0%, #c9b67a 50%, #a8934d 100%);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 6rem 2rem 4rem;
  overflow-y: auto;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s ease, visibility 0.5s ease;
}
.scroll-overlay.is-open {
  opacity: 1;
  visibility: visible;
}
.scroll-content {
  max-width: 680px;
  font-family: 'EB Garamond', serif;
  font-size: 1.35rem;
  line-height: 1.9;
  color: #2a1f0e;
}
/* Bordas desgastadas simuladas com pseudo-elemento */
.scroll-overlay::before {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  box-shadow: inset 0 0 80px rgba(100, 60, 0, 0.4);
}
```

---

### 💡 IDEIA 8: Sigil animado como separador de seções

Entre cada seção, ao invés de um `<hr>` simples, um **sigil SVG da Convergência** que se desenha à medida que o usuário chega naquele ponto da página (stroke-dashoffset animation com IntersectionObserver):

```html
<div class="section-sigil" aria-hidden="true">
  <svg viewBox="0 0 200 60" class="sigil-divider">
    <path class="sigil-path" d="M0,30 H60 M140,30 H200 M80,5 L100,30 L120,5 M80,55 L100,30 L120,55"/>
  </svg>
</div>
```

```css
.sigil-path {
  stroke: var(--kore);
  stroke-width: 1.5;
  fill: none;
  stroke-dasharray: 300;
  stroke-dashoffset: 300;
  transition: stroke-dashoffset 1.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.section-sigil.is-visible .sigil-path {
  stroke-dashoffset: 0;
}
```

---

### 💡 IDEIA 9: Easter Egg — Código Kore oculto

Em algum ponto da página, um input oculto que aceita um "código Kore" (sequência de teclas, ex: ↑↑↓↓←→←→). Ao digitar, um personagem secreto é revelado com animação de cristal se formando. Completamente opcional e off-spec para surpreender usuários exploradores.

```javascript
const KORE_CODE = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown',
                   'ArrowLeft','ArrowRight','ArrowLeft','ArrowRight'];
let koreProgress = 0;
document.addEventListener('keydown', (e) => {
  if (e.key === KORE_CODE[koreProgress]) {
    koreProgress++;
    if (koreProgress === KORE_CODE.length) {
      revealSecretCharacter();
      koreProgress = 0;
    }
  } else {
    koreProgress = 0;
  }
});
```

---

### 💡 IDEIA 10: Scroll-linked section title com clip-path reveal

Os títulos de seção (`## Linhagens com memória visual`) atualmente aparecem estáticos. Aplicar um reveal via `clip-path` sincronizado com o scroll:

```css
.section-heading h2 {
  clip-path: inset(0 100% 0 0);
  transition: clip-path 1.1s cubic-bezier(0.19, 1, 0.22, 1);
}
.section-heading.is-visible h2 {
  clip-path: inset(0 0% 0 0);
}
```

---

## 📱 RESPONSIVIDADE COMPLETA

### Breakpoints obrigatórios
```css
/* Mobile portrait */
@media (max-width: 480px) { /* ... */ }

/* Mobile landscape / tablet pequeno */
@media (max-width: 768px) { /* ... */ }

/* Tablet */
@media (max-width: 1024px) { /* ... */ }

/* Desktop pequeno */
@media (max-width: 1240px) { /* ... */ }
```

### Hero em mobile
```css
@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr;
    min-height: 100svh;
    padding: 5rem 1rem 3rem;
  }
  .hero h1 { font-size: clamp(2.8rem, 12vw, 5rem); }
  .hero-dossiers { display: none; } /* ou carrossel compacto */
  .hero-ledger { grid-template-columns: repeat(3, 1fr); gap: 0.5rem; }
}
```

### Races grid em mobile
```css
@media (max-width: 768px) {
  .races-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.6rem;
  }
}
@media (max-width: 480px) {
  .races-grid { grid-template-columns: 1fr; }
}
```

### Nav em mobile (hambúrguer)
```css
@media (max-width: 768px) {
  .nav-links {
    position: fixed;
    inset: 0;
    flex-direction: column;
    justify-content: center;
    background: rgba(8, 7, 6, 0.97);
    backdrop-filter: blur(20px);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s, visibility 0.3s;
  }
  .nav-links.is-open {
    opacity: 1;
    visibility: visible;
  }
  .nav-links a { font-size: 1.5rem; padding: 1rem 2rem; }
}
```

---

## ♿ ACESSIBILIDADE MÍNIMA OBRIGATÓRIA

```html
<!-- Landmarks semânticos -->
<header role="banner">
<nav aria-label="Navegação principal">
<main role="main">
<section aria-labelledby="races-heading">
<footer role="contentinfo">

<!-- Skip link -->
<a href="#main-content" class="skip-link">Pular para o conteúdo</a>

<!-- Focus visible em todos os elementos interativos -->
/* CSS */
:focus-visible {
  outline: 2px solid var(--kore);
  outline-offset: 3px;
}

<!-- ARIA em botões sem texto visível -->
<button aria-label="Próxima raça" class="icon-button">›</button>

<!-- Reduzir movimento para usuários sensíveis -->
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## ⚡ PERFORMANCE

### Critical CSS inline no `<head>`
Colocar apenas o CSS necessário para renderizar o above-the-fold (nav + hero) inline no `<head>`. Todo o resto via `<link rel="stylesheet" media="print" onload="this.media='all'">`.

### Preload de recursos críticos
```html
<link rel="preload" href="images/Banner/Banner-Mutantes.png" as="image" />
<link rel="preload" href="css/tokens.css" as="style" />
<link rel="preload" href="js/data.js" as="script" />
```

### IntersectionObserver para tudo
Substituir qualquer `scroll` event listener por `IntersectionObserver` com `threshold: 0.15`. Mais performático e sem jank.

```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target); // observar só uma vez
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('[data-observe]').forEach(el => observer.observe(el));
```

### Web Workers para canvas
Mover o ambient canvas para um OffscreenCanvas em Web Worker se disponível:
```javascript
if ('OffscreenCanvas' in window) {
  const worker = new Worker('js/canvas-worker.js');
  const offscreen = canvas.transferControlToOffscreen();
  worker.postMessage({ canvas: offscreen }, [offscreen]);
}
```

---

## 🗂️ ESTRUTURA DO `data.js` RECOMENDADA

```javascript
export const RACES = [
  {
    id: 'mutantes',
    name: 'Mutantes',
    color: '#d7af45',        // --kore
    banner: 'images/Banner/Banner-Mutantes.png',
    region: 'Planície Central',
    icon: '◈',
    traits: ['Adaptação', 'Kore-fundidos', 'Imprevisíveis'],
    description: '...',
    lore: '...',
    meta: { power: 4, mobility: 5, wisdom: 2, threat: 4 },
  },
  // ...
];

export const CHARACTERS = [
  {
    id: 'personagem-1',
    name: '...',
    race: 'mutantes',       // referência ao id da raça
    role: '...',
    region: '...',
    threat: 4,              // 1–5
    alignment: 'caótico',
    wound: '...',
    promise: '...',
    power: '...',
    portrait: 'images/Characters/...',
    quote: '...',
  },
  // ...
];

export const REGIONS = [
  {
    id: 'planicie-central',
    name: 'Planície Central',
    dominant: 'mutantes',
    tension: ['floresta-vermelha'],
    mapCoords: [[180,120],[280,100],[320,160],[260,200],[180,180]],
  },
  // ...
];
```

---

## 🧠 INSTRUÇÕES PARA A IA EXECUTORA

### Tom e filosofia de execução
- O site deve ter **alma** — parecer feito à mão por alguém que ama o universo
- **Evitar absolutamente:** efeitos genéricos de "site de template", hover states fracos, gradientes de arco-íris sem sentido
- **Cada animação deve ter significado narrativo** — o flash do duelo é o impacto da Convergência; as partículas são fragmentos de cristal Kore
- **A tipografia é sagrada** — nunca usar fontes fora do conjunto definido
- **Jamais quebrar o sistema de cores** — toda cor usada deve ser um token CSS existente ou derivado via `color-mix()`

### Ordem de execução recomendada
1. Criar estrutura de pastas e arquivos vazios
2. Migrar tokens CSS para `tokens.css`
3. Migrar todos os `@keyframes` para `animations.css`
4. Migrar layout para `layout.css`, componentes para `components.css`
5. Migrar JavaScript por módulo (cursor, canvas, races, characters, duel, main)
6. Implementar as correções críticas (alt, lazy, mobile cursor, og tags)
7. Implementar redesigns (banners, parallax, mapa SVG)
8. Implementar novas ideias em ordem de impacto (flip cards, duelo cinematográfico, scroll reveal)
9. Testar responsividade em 480, 768, 1024, 1440px
10. Validar acessibilidade com axe ou Lighthouse

### Validação de qualidade
Antes de entregar, verificar:
- [ ] Lighthouse Performance ≥ 85
- [ ] Lighthouse Accessibility ≥ 90
- [ ] Lighthouse Best Practices ≥ 95
- [ ] Nenhuma imagem sem `alt`
- [ ] Nenhum elemento interativo sem `focus-visible`
- [ ] Console sem erros em Chrome, Firefox e Safari
- [ ] Funcional em mobile iOS Safari e Android Chrome
- [ ] README.md criado no repositório

---

## 📋 CHECKLIST FINAL

### Correções obrigatórias
- [ ] Separar em múltiplos arquivos CSS e JS
- [ ] Alt text em todas as imagens
- [ ] `loading="lazy"` + `decoding="async"` em imagens off-screen
- [ ] Desativar cursor custom em touch devices
- [ ] Meta Open Graph completas + favicon SVG
- [ ] Contadores hero com valores fallback
- [ ] README.md no repositório

### Redesigns de funcionalidades quebradas
- [ ] Banner de raças com crossfade CSS + dupla camada
- [ ] Parallax via mousemove somente desktop
- [ ] Mapa SVG procedural das regiões (opcional, alto impacto)
- [ ] Canvas de partículas Kore com fragmentos poligonais

### Novas funcionalidades
- [ ] Scroll reveal das letras do título hero
- [ ] Cards de personagem com flip 3D
- [ ] Crônica como carrossel horizontal em mobile
- [ ] Barra de ameaça animada com IntersectionObserver
- [ ] Duelo cinematográfico com fases animadas
- [ ] Filtro de personagens com animação de baralho
- [ ] Modo Pergaminho para leitura da crônica
- [ ] Sigil SVG animado como divisor de seções
- [ ] Easter Egg — código Kore (Konami-like)
- [ ] Clip-path reveal nos títulos de seção

### Qualidade e performance
- [ ] IntersectionObserver substituindo scroll listeners
- [ ] Critical CSS inline no `<head>`
- [ ] Preload de recursos críticos
- [ ] OffscreenCanvas para canvas ambient
- [ ] Nav hambúrguer responsiva
- [ ] Breakpoints completos (480/768/1024/1240)
- [ ] `prefers-reduced-motion` respeitado
- [ ] Skip link de acessibilidade

---

*Super Prompt gerado com análise completa do repositório BSMiguell/ERYNDOR em junho/2026*  
*Para usar: forneça este arquivo a uma IA junto com o código atual do repositório*
