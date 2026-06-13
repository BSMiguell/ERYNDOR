# ERYNDOR — Especificação Completa de Redesign
### Documento de Agente · Versão 1.0
> **Uso:** Este arquivo é o briefing autoritativo para qualquer agente de IA ou desenvolvedor executar o redesign completo do site ERYNDOR. Leia cada seção na ordem. Não pule fases. Cada decisão aqui é justificada pelo diagnóstico real do site atual.

---

## ÍNDICE

1. [Diagnóstico do Site Atual](#1-diagnóstico)
2. [Identidade Visual](#2-identidade-visual)
3. [Arquitetura de Páginas](#3-arquitetura-de-páginas)
4. [O Super Mapa Interativo](#4-super-mapa-interativo) ⭐ Seção Principal
5. [Sistema de Personagens por Região](#5-personagens-por-região)
6. [Animações e Interatividade](#6-animações-e-interatividade)
7. [Stack Tecnológica](#7-stack-tecnológica)
8. [Dados e Estrutura JSON](#8-dados-e-estrutura-json)
9. [Ordem de Execução para Agentes](#9-ordem-de-execução)
10. [Ideias V2.0](#10-ideias-v20)

---

## 1. DIAGNÓSTICO

### 1.1 O que existe hoje

O site atual (`bsmiguell.github.io/ERYNDOR`) é um **atlas de mundo fantasy** com as seções:
- **Hero** — Título animado "ERYNDOR respira em guerra", contador de raças/personagens/regiões
- **Crônica** — 3 blocos de lore (Os Selos Cedem, O Kore escolhe corpos, A guerra ganha nomes)
- **Raças (Linhagens)** — Carrossel com banner, troca de fundo por raça
- **Personagens (Dossiês)** — Grid com filtros (Ameaça, Nome, Raça, Poder)
- **Mesa de Duelo** — Sorteio de 2 personagens em confronto
- **Mundo Interativo** — Página separada (`mundo-interativo.html`) com regiões em cards

### 1.2 O que funciona bem (PRESERVAR)
- ✅ Nomenclatura de "atlas de guerra" — é imersiva e diferente
- ✅ O conceito de Dossiês para personagens (senso de arquivo secreto)
- ✅ A lógica de Convergência Kore como força central do mundo
- ✅ Mesa de Duelo — mecânica lúdica original
- ✅ Filtros de personagem por raça/ameaça/poder
- ✅ Tom de voz épico e seco (não é infantil)

### 1.3 O que NÃO funciona (TRANSFORMAR)
- ❌ **Mapa interativo é vazio** — a página `mundo-interativo.html` existe mas não tem um mapa real desenhado, só cards de texto
- ❌ **Nenhuma imagem de personagem nas regiões** — os personagens não estão geograficamente posicionados
- ❌ **Sem histórias ativadas por clique** — nenhum modal de evento narrativo
- ❌ **Carrossel de raças é passivo** — o usuário arrasta mas não sente que está "entrando" num território
- ❌ **Contadores no hero chegam em zero** — os stats "Raças 0 / Personagens 0 / Regiões 0" iniciam zerados, quebrando a imersão
- ❌ **Sem hierarquia geográfica** — o mundo não tem camadas (continente → região → local → evento)
- ❌ **Performance do hero** — muito texto sem âncora visual forte nos primeiros 3 segundos
- ❌ **Mobile incompleto** — o mapa interativo não existe para mobile
- ❌ **Nenhuma atmosfera sonora** — mundo de guerra sem áudio ambiente opcional

---

## 2. IDENTIDADE VISUAL

### 2.1 Paleta de Cores

```
PRIMÁRIA (Fundo profundo)
  --eryndor-void:      #07060A   /* quase-preto com toque violeta */
  --eryndor-abyss:     #0E0B14   /* fundo de cards e seções */
  --eryndor-deep:      #1A1525   /* superfícies elevadas */

ACENTO PRINCIPAL (Kore Crystal)
  --kore-gold:         #C9A84C   /* dourado envelhecido — cristais Kore */
  --kore-amber:        #E8B84B   /* hover, highlights ativos */
  --kore-glow:         #FFD97D   /* brilhos, partículas de Kore */

ACENTO SECUNDÁRIO (Selagem / Magia Antiga)
  --seal-crimson:      #7B1F2E   /* vermelho sangue escuro — selos rompidos */
  --seal-ember:        #C0392B   /* alerta, ameaça alta */
  --seal-violet:       #4A2060   /* magia de Convergência */

NEUTROS
  --parchment:         #D4C5A9   /* texto corrido, lore */
  --fog:               #8A7F72   /* texto secundário, labels */
  --stone:             #3D3530   /* bordas, divisores */
```

### 2.2 Tipografia

```
DISPLAY (épico, letras espaçadas, impacto):
  Fonte: "Cinzel Decorative" (Google Fonts) — weight 700
  Uso: títulos de seção, nome ERYNDOR no hero, nomes de região no mapa
  Tamanho: 48–120px, letter-spacing: 0.15–0.3em
  Alternativa local: "Trajan Pro" ou qualquer serif romana com maiúsculas

CORPO LORE (legível, levemente serifado, atmosférico):
  Fonte: "Crimson Text" (Google Fonts) — weight 400/600
  Uso: textos de crônica, descrições de personagem, lore de região
  Tamanho: 16–20px, line-height: 1.8

UTILITY (monospace, para dados/stats):
  Fonte: "JetBrains Mono" (Google Fonts) — weight 400
  Uso: ameaça nivel, coordenadas no mapa, contadores
  Tamanho: 12–14px

ESCALA DE TIPO:
  --t-xs:   12px   (labels, badges)
  --t-sm:   14px   (mono data)
  --t-base: 17px   (corpo)
  --t-md:   22px   (subtítulos)
  --t-lg:   32px   (títulos de seção)
  --t-xl:   56px   (hero subtitle)
  --t-2xl:  96px   (ERYNDOR hero)
  --t-3xl:  140px  (letra única decorativa)
```

### 2.3 Elementos Visuais Recorrentes

- **Linhas de selo**: bordas feitas de traços entrecortados que imitam runas rachadas — usadas para delimitar cards
- **Partículas Kore**: pontos de luz dourada flutuantes (canvas JS), concentradas no mapa e no hero
- **Texturas overlay**: noise grain sutil sobre fundos escuros (CSS `filter: url(#grain)`)
- **Glifos decorativos**: ✦ ◈ ⟁ — usados como separadores e marcadores de região
- **Vignette**: sombra circular nas bordas de imagens de personagem (aura de dossiê)

---

## 3. ARQUITETURA DE PÁGINAS

### Estrutura Final de Arquivos

```
/
├── index.html              (Home — hero + crônica + raças + personagens + duelo)
├── mapa.html               (Super Mapa Interativo — seção principal nova)
├── regiao/
│   ├── [slug].html         (Página individual de cada região — gerada por template)
├── personagem/
│   ├── [slug].html         (Página individual de dossiê — gerada por template)
├── data/
│   ├── regioes.json        (dados das regiões com coordenadas no mapa)
│   ├── personagens.json    (dados dos personagens com região e imagem)
│   ├── eventos.json        (eventos históricos por região para modais)
│   └── racas.json          (linhagens com banner, cor, lore)
├── assets/
│   ├── mapa/
│   │   ├── mapa-base.svg   (SVG do mapa desenhado — ver seção 4)
│   │   ├── regioes/        (imagens de cenário por região)
│   │   └── overlay/        (camadas de névoa, fronteiras, etc.)
│   ├── personagens/
│   │   └── [nome].webp     (fotos dos personagens — Chibi style)
│   ├── racas/
│   │   └── [raca]-banner.webp
│   └── ui/
│       ├── grain.svg
│       └── selo-frame.svg
├── css/
│   ├── tokens.css
│   ├── global.css
│   └── mapa.css
└── js/
    ├── mapa.js
    ├── personagens.js
    ├── particulas.js
    └── audio.js
```

---

## 4. SUPER MAPA INTERATIVO

> **Esta é a seção mais importante do redesign. Dedique a maior parte do esforço aqui.**

### 4.1 Conceito

O mapa de Eryndor é um **SVG navegável em camadas**, renderizado no `<canvas>` ou diretamente como SVG interativo. Não é uma imagem estática — é um sistema vivo onde:

- Cada região é um **path SVG clicável** com nome e ícone flutuante
- Personagens aparecem como **pins** posicionados na coordenada da sua região
- Eventos históricos são **marcadores pulsantes** que abrem modais narrativos
- O usuário pode fazer **zoom** (scroll) e **pan** (drag) para explorar
- Filtros laterais mostram/ocultam camadas (raças, conflitos, eventos, cristais Kore)

### 4.2 Regiões Canônicas do Mundo

As seguintes regiões devem ser criadas como paths no SVG e populadas com dados. Criar cenários visuais com IA ou placeholders até imagens reais chegarem:

```
NORTE — Terras Frias / Domínio do Gelo e Pedra
  ID: veldara
  Nome: Veldara, as Forjas Eternas
  Cor de região: #2C4A6E (azul aço glacial)
  Raça dominante: [a definir pelo dono do projeto]
  Lore: Montanhas onde forjas antigas ainda queimam com fogo de Kore congelado.
        Quem controla Veldara controla o metal das guerras.
  Cenário visual: picos nevados, forjas laranja emergindo do gelo, céu violeta

NORDESTE — Florestas Antigas / Território Espiritual
  ID: sylvar
  Nome: Sylvar, o Dossel que Recorda
  Cor de região: #1E4D2B (verde profundo musgo)
  Raça dominante: [a definir]
  Lore: Florestas onde as árvores guardam memórias dos mortos.
        Cristais Kore crescem nas raízes, não nas minas.
  Cenário visual: árvores colossais, névoa verde, cristais luminosos nas raízes

CENTRO — Planícies de Conflito / Zona de Guerra
  ID: ash-plains
  Nome: Planícies de Keth
  Cor de região: #4A3B28 (terra queimada)
  Raça dominante: neutro / campo de batalha
  Lore: Nenhuma linhagem governa Keth. É onde as guerras acontecem,
        onde os selos foram primeiro rompidos, onde o chão ainda sangra.
  Cenário visual: campos de batalha devastados, armaduras abandonadas, céu vermelho

LESTE — Deserto / Conhecimento Proibido
  ID: duskara
  Nome: Duskara, o Arquivo Silencioso
  Cor de região: #6B4C1E (âmbar e areia)
  Raça dominante: [a definir]
  Lore: Cidades subterrâneas onde escribas catalogam tudo sobre a Convergência.
        Saber demais em Duskara é punido com exílio.
  Cenário visual: ruínas douradas semi-enterradas, obeliscos com inscrições Kore

OESTE — Costa / Comércio e Política
  ID: mareveth
  Nome: Mareveth, os Portos da Maré Negra
  Cor de região: #1A3A4A (azul marinho profundo)
  Raça dominante: [a definir]
  Lore: Cidades-porto que vendem informação e cristais Kore contrabandeados.
        A Convergência chegou aqui via mar, não via terra.
  Cenário visual: docas noturnas, navios com velas de cristal, bruma costeira

SUL — Vulcânico / Território de Demônios
  ID: korgath
  Nome: Korgath, o Ventre Aberto
  Cor de região: #5C1A1A (vermelho lava)
  Raça dominante: entidades demoníacas / invasores dimensionais
  Lore: Onde os selos cederam primeiro. Korgath é a ferida do mundo —
        lava, cristais corrompidos e ruínas de uma civilização que não existe mais.
  Cenário visual: vulcões ativos, cristais Kore negros, estruturas demoníacas

SUDOESTE — Pântanos / Aparições e Mortos-vivos
  ID: mirshael
  Nome: Mirshael, o Véu Úmido
  Cor de região: #2A3B2A (verde pântano escuro)
  Raça dominante: Aparições / espíritos sem forma
  Lore: Lugar onde os selos entre o plano dos mortos e dos vivos são os mais finos.
        As Aparições não atacam — observam, e às vezes sussurram a verdade.
  Cenário visual: pântano noturno, névoa luminescente, figuras translúcidas

CAPITAL / CENTRO-NORTE — Cidade Antiga
  ID: valdris
  Nome: Valdris, o Trono Rachado
  Cor de região: #3D2D4A (roxo imperial em ruínas)
  Raça dominante: neutro / disputado
  Lore: Foi a capital do mundo antigo, antes da Convergência.
        Agora é disputada por todas as linhagens e governada por nenhuma.
  Cenário visual: cidade de torres rachadas, cristais Kore gigantes perfurando as ruas
```

### 4.3 SVG do Mapa — Especificação Técnica

O agente deve criar o arquivo `assets/mapa/mapa-base.svg` com:

```xml
<svg viewBox="0 0 1600 900" xmlns="http://www.w3.org/2000/svg" id="eryndor-map">
  <!-- CAMADA 0: Fundo oceano/void -->
  <rect width="1600" height="900" fill="#07060A"/>
  
  <!-- CAMADA 1: Continente principal (path orgânico grande) -->
  <path id="continente-eryndor" d="M..." fill="#1A1525" stroke="#C9A84C" stroke-width="1.5"/>
  
  <!-- CAMADA 2: Regiões (paths filhos, clicáveis) -->
  <!-- Cada path tem: id, data-regiao, data-cor, class="regiao" -->
  <path id="veldara" class="regiao" data-regiao="veldara" d="M..." fill="#2C4A6E" opacity="0.6"/>
  <path id="sylvar" class="regiao" data-regiao="sylvar" d="M..." fill="#1E4D2B" opacity="0.6"/>
  <!-- ... demais regiões ... -->
  
  <!-- CAMADA 3: Rios e acidentes geográficos -->
  <g id="rios" opacity="0.4">
    <path class="rio" d="M..." stroke="#4A7FA5" stroke-width="2" fill="none"/>
  </g>
  
  <!-- CAMADA 4: Montanhas (ícones SVG posicionados) -->
  <g id="montanhas">
    <!-- Triângulos decorativos nas posições corretas -->
  </g>
  
  <!-- CAMADA 5: Pins de personagem (injetados por JS) -->
  <g id="pins-personagens"></g>
  
  <!-- CAMADA 6: Marcadores de evento (injetados por JS) -->
  <g id="marcadores-eventos"></g>
  
  <!-- CAMADA 7: Labels de região (injetados por JS ou fixos) -->
  <g id="labels-regiao"></g>
  
  <!-- CAMADA 8: Névoa de guerra (animada por CSS) -->
  <g id="fog-of-war" opacity="0.3">
    <ellipse class="fog-cloud" cx="800" cy="450" rx="400" ry="200" fill="#1A1525"/>
  </g>
</svg>
```

**Coordenadas de referência para cada região** (ajustar ao desenhar):
```
veldara    → cx: 580,  cy: 120   (norte)
sylvar     → cx: 900,  cy: 180   (nordeste)
ash-plains → cx: 750,  cy: 450   (centro)
duskara    → cx: 1100, cy: 400   (leste)
mareveth   → cx: 250,  cy: 480   (oeste)
korgath    → cx: 700,  cy: 780   (sul)
mirshael   → cx: 350,  cy: 680   (sudoeste)
valdris    → cx: 700,  cy: 280   (centro-norte / capital)
```

### 4.4 Interações do Mapa

#### Hover em região:
```
1. Fill da região: opacity 0.6 → 0.85
2. Borda dourada aparece (stroke Kore-gold)
3. Tooltip flutuante aparece com:
   - Nome da região (Cinzel, 18px)
   - Raça dominante (Crimson Text, 14px)
   - Número de personagens ativos nessa região
   - Mini preview do cenário (imagem 120x80px)
4. Cursor vira crosshair customizado com ícone de mapa
```

#### Click em região → Modal de Região:
```
MODAL estrutura:
┌─────────────────────────────────────────────────────┐
│  [IMAGEM DE CENÁRIO — full width, 300px height]     │
│  ████████████████████████████████████████████████   │
├─────────────────────────────────────────────────────┤
│  ◈ VELDARA, AS FORJAS ETERNAS          [fechar ×]   │
│  ─────────────────────────────────────────────────  │
│  Raça Dominante: [badge colorido]                   │
│                                                     │
│  LORE:                                              │
│  [Texto de 3-4 parágrafos sobre a região]           │
│                                                     │
│  EVENTOS NESTA REGIÃO:                              │
│  [Lista de eventos clicáveis — ver seção 5.2]       │
│                                                     │
│  PERSONAGENS AQUI:                                  │
│  [Row de fotos circulares dos personagens]           │
│  [clicáveis → abre dossiê do personagem]            │
│                                                     │
│  [BOTÃO: Explorar Região →]                         │
└─────────────────────────────────────────────────────┘
```

#### Pin de Personagem no mapa:
```
- Foto circular do personagem (40px diâmetro)
- Borda colorida pela raça
- Pulsando suavemente (CSS keyframe, 2s loop)
- Hover: nome aparece em tooltip
- Click: abre dossiê completo do personagem
- Se múltiplos personagens na mesma região: cluster "+N" clicável
```

#### Marcador de Evento Histórico:
```
- Ícone de cristal Kore pulsante (SVG inline animado)
- Cor varia por tipo: dourado (político), vermelho (batalha), violeta (Convergência)
- Click → abre Modal de Evento (ver seção 5.2)
```

### 4.5 Controles e Filtros do Mapa

Painel lateral esquerdo fixo no mapa:

```
┌─────────────────┐
│  FILTRAR MAPA   │
│                 │
│ [✓] Regiões     │
│ [✓] Personagens │
│ [✓] Eventos     │
│ [ ] Batalhas    │
│ [ ] Cristais K. │
│                 │
│ RAÇAS:          │
│ [•] Todas       │
│ [ ] Raca A      │
│ [ ] Raca B      │
│ ...             │
│                 │
│ AMEAÇA:         │
│ ● Alta          │
│ ● Média         │
│ ○ Baixa         │
└─────────────────┘
```

**Minimap** (canto inferior direito do mapa):
- Retângulo 200x120px mostrando todo o mundo
- Indica o viewport atual do usuário com retângulo dourado
- Clicável para teleportar a qualquer região

---

## 5. PERSONAGENS POR REGIÃO

### 5.1 Sistema de Posicionamento

Cada personagem em `personagens.json` deve ter:
```json
{
  "id": "personagem-slug",
  "nome": "Nome Completo",
  "raca": "id-da-raca",
  "regiao": "id-da-regiao",
  "coordenadas_mapa": { "x": 580, "y": 145 },
  "ameaca": "alta|media|baixa",
  "poder": "Descrição breve do poder",
  "imagem": "assets/personagens/nome.webp",
  "imagem_placeholder": true,
  "lore_curto": "Uma frase que captura a essência do personagem.",
  "dossie": {
    "ferida": "O que o machuca ou o limita",
    "promessa": "O que ele jurou ou deseja",
    "papel": "Seu papel na Convergência",
    "alinhamento": "ordem|caos|neutro"
  },
  "eventos_participados": ["id-evento-1", "id-evento-2"]
}
```

### 5.2 Modal de Evento Histórico

Cada evento em `eventos.json`:
```json
{
  "id": "evento-slug",
  "titulo": "A Queda do Primeiro Selo",
  "regiao": "korgath",
  "coordenadas_mapa": { "x": 710, "y": 800 },
  "tipo": "convergencia|batalha|politico|revelacao",
  "data_cronica": "Ano 0 da Convergência",
  "personagens_envolvidos": ["id-personagem-1", "id-personagem-2"],
  "narrativa": "Texto da história com 3-5 parágrafos. Escrito em tom de crônica.",
  "consequencia": "O que mudou no mundo após esse evento.",
  "imagem_evento": "assets/eventos/queda-primeiro-selo.webp"
}
```

**Estrutura do Modal de Evento:**
```
┌─────────────────────────────────────────────────────┐
│  [badge tipo: CONVERGÊNCIA] · Ano 0                 │
│                                                     │
│  A Queda do Primeiro Selo                           │
│  ══════════════════════════════════════════         │
│  [Imagem do evento — atmosphere art]                │
│                                                     │
│  [Texto narrativo em Crimson Text, 17px]            │
│  [3-5 parágrafos, tom de crônica oral]              │
│                                                     │
│  PERSONAGENS PRESENTES:                             │
│  [Foto] Nome · Raça     [Foto] Nome · Raça          │
│                                                     │
│  CONSEQUÊNCIA:                                      │
│  "O que mudou..."                                   │
│                                                     │
│  Região: KORGATH, o Ventre Aberto       [×fechar]   │
└─────────────────────────────────────────────────────┘
```

### 5.3 Imagens de Personagem — PLACEHOLDER SYSTEM

> **ATENÇÃO CRÍTICA PARA O AGENTE:** O dono do projeto tem imagens de personagens no estilo Chibi (como Radahn — armadura dourada, espadas duplas). Essas imagens ainda não foram todas entregues.

**Regras para o agente:**
1. Em todo lugar onde uma imagem de personagem é referenciada, usar o campo `imagem` do JSON
2. Se `imagem_placeholder: true`, usar um placeholder visual que combine com o universo:
   - Fundo escuro com silhueta do personagem (gradiente na cor da raça)
   - Símbolo da raça centralizado
   - Texto: "Dossiê Classificado — Imagem Pendente"
3. Quando as imagens chegarem, apenas trocar o arquivo em `assets/personagens/` — o código já está pronto
4. Todas as imagens devem ser servidas em formato `.webp` com fallback `.png`
5. Tamanhos: thumbnail 80x80px, card 240x320px, dossiê 400x500px — gerar todos via CSS `object-fit`

---

## 6. ANIMAÇÕES E INTERATIVIDADE

### 6.1 Hero (Index)

```
Sequência de entrada (0 → 3 segundos):
  t=0.0s  Tela preta
  t=0.3s  Partículas Kore surgem (canvas, 60fps, dourado)
  t=0.8s  "Os Selos Cedem" fade-in lento (opacity 0→1, blur 4px→0)
  t=1.5s  "E R Y N D O R" surge letra por letra (stagger 80ms por letra)
  t=2.2s  Subtitle "respira em guerra" slide-up (translateY 20px→0)
  t=2.8s  Botões surgem
  t=3.0s  Contadores animam de 0 até valor real (easing easeOut, 1.5s)
```

**Parallax no hero:**
- Background nebulosa/void: move 0.1x da velocidade do scroll
- Partículas: 0.3x
- Título: 0.6x (quase estático)
- Botões: 1x (fixo)

### 6.2 Scroll Animations

Usar `IntersectionObserver` para acionar animações:

```
Crônica cards:
  - Entrada: translateX(-40px) + opacity:0 → translateX(0) + opacity:1
  - Delay escalonado: 0ms, 150ms, 300ms entre cards

Raças (carrossel):
  - A banner da raça ativa faz parallax interno (movimento lento da imagem de fundo)
  - Transição entre raças: crossfade + slide horizontal da cor de fundo (300ms)

Personagens grid:
  - Cards surgem de baixo (translateY 30px → 0) com stagger de 50ms

Mapa hero (no topo de mapa.html):
  - O SVG do mapa "aparece" através de névoa que se dissipa (opacity blur)
```

### 6.3 Interações de Mouse no Mapa

```javascript
// Parallax de profundidade no mapa
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 10;
  
  // Camadas se movem em velocidades diferentes
  document.getElementById('fog-of-war').style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`;
  document.getElementById('montanhas').style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
});
```

### 6.4 Partículas Kore (Canvas)

```javascript
// Sistema de partículas douradas flutuantes
// ~150 partículas no desktop, ~60 no mobile
// Comportamento: flutuam para cima lentamente, fade-in/out
// Cor: entre #C9A84C e #FFD97D com variação aleatória
// Tamanho: 1-3px radius, alguns chegam a 5px (cristais maiores)
// Concentração: maior perto do centro do hero e das bordas do mapa
// Quando usuário passa o mouse: partículas próximas são repelidas suavemente
```

### 6.5 Cursor Customizado

```css
body { cursor: none; }

#cursor {
  width: 20px;
  height: 20px;
  border: 1px solid var(--kore-gold);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  transition: transform 0.1s ease;
  mix-blend-mode: exclusion;
}

#cursor-dot {
  width: 4px;
  height: 4px;
  background: var(--kore-amber);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
}

/* Quando hover em região do mapa: cursor cresce */
body.hover-regiao #cursor {
  transform: scale(2.5);
  border-color: var(--kore-glow);
}
```

### 6.6 Sons Opcionais (opt-in)

```
Controle: botão de volume no canto superior direito (padrão: mudo)

Sons disponíveis:
  - Ambient loop: vento distante + cristais ressoando (loop 60s, volume 20%)
  - Click em região do mapa: som de cristal quebrando suave
  - Abrir modal de evento: som de pergaminho abrindo
  - Mesa de Duelo: som de espadas cruzando

Implementação: Web Audio API ou <audio> tags com loop
Arquivos: assets/audio/ (mp3 + ogg)
```

---

## 7. STACK TECNOLÓGICA

### 7.1 Recomendação de Stack

```
OPÇÃO A — GitHub Pages (manter compatibilidade, zero backend):
  HTML5 + Vanilla JS + CSS Custom Properties
  Sem build step, sem dependências pesadas
  Dados em JSON estáticos carregados via fetch()
  ✅ Mais simples de executar
  ✅ Compatível com o deploy atual
  ⚠️ Sem SSR, sem SEO dinâmico

OPÇÃO B — Astro.js (recomendado para o futuro):
  Astro + Vanilla JS islands
  Build estático, deploy no GitHub Pages via Action
  Melhor SEO, componentes reutilizáveis
  ✅ Melhor performance
  ✅ Mais fácil de escalar quando o mundo crescer

→ EXECUTAR FASE 1 COM OPÇÃO A (compatibilidade imediata)
→ MIGRAR PARA OPÇÃO B na V2
```

### 7.2 Bibliotecas Aprovadas

```javascript
// Animações
import gsap from 'https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js';
import ScrollTrigger from 'https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js';

// Mapa (pan/zoom)
// Usar: svg-pan-zoom v3.6.1
// CDN: https://cdn.jsdelivr.net/npm/svg-pan-zoom@3.6.1/dist/svg-pan-zoom.min.js

// Partículas
// Implementar em Canvas vanilla (sem biblioteca) para controle total

// Fontes (Google Fonts)
// Cinzel Decorative: weights 400, 700
// Crimson Text: weights 400, 600, 400italic
// JetBrains Mono: weights 400
```

### 7.3 Performance

```
- Imagens: todas em .webp com <picture> fallback
- SVG do mapa: inline no HTML (não external file) para evitar request
- Fontes: preconnect + preload dos weights usados
- JSON: fetch lazy (não bloquear o hero)
- Canvas partículas: usar requestAnimationFrame com throttle em mobile
- Modais: criar DOM no primeiro click (não pré-renderizar todos)
- IntersectionObserver para lazy load de imagens de personagem
```

---

## 8. DADOS E ESTRUTURA JSON

### 8.1 `data/regioes.json`

```json
[
  {
    "id": "veldara",
    "nome": "Veldara, as Forjas Eternas",
    "slug": "veldara",
    "cor": "#2C4A6E",
    "raca_dominante": "a-definir",
    "coordenadas": { "x": 580, "y": 120 },
    "lore": "Texto de 2-4 parágrafos sobre Veldara.",
    "imagem_cenario": "assets/mapa/regioes/veldara.webp",
    "imagem_placeholder": true,
    "eventos": ["id-evento-1"],
    "personagens": []
  }
]
```

### 8.2 `data/eventos.json`

```json
[
  {
    "id": "queda-primeiro-selo",
    "titulo": "A Queda do Primeiro Selo",
    "regiao": "korgath",
    "coordenadas": { "x": 710, "y": 800 },
    "tipo": "convergencia",
    "data_cronica": "Ano 0 da Convergência",
    "personagens_envolvidos": [],
    "narrativa": [
      "Parágrafo 1 da história...",
      "Parágrafo 2...",
      "Parágrafo 3..."
    ],
    "consequencia": "O que mudou no mundo.",
    "imagem": "assets/eventos/queda-primeiro-selo.webp",
    "imagem_placeholder": true
  }
]
```

### 8.3 `data/racas.json`

```json
[
  {
    "id": "id-raca",
    "nome": "Nome da Raça",
    "cor_primaria": "#hex",
    "cor_secundaria": "#hex",
    "regiao_origem": "id-regiao",
    "banner": "assets/racas/nome-banner.webp",
    "lore_curto": "Uma frase.",
    "lore_completo": "Texto longo...",
    "relacao_kore": "Como essa raça usa/reage ao cristal Kore"
  }
]
```

---

## 9. ORDEM DE EXECUÇÃO PARA AGENTES

> Seguir esta ordem estritamente. Cada fase deve estar funcional antes de avançar.

### FASE 0 — Setup
```
[ ] Criar estrutura de pastas conforme seção 3
[ ] Criar tokens.css com todas as variáveis da seção 2
[ ] Criar placeholders JSON com ao menos 1 entrada válida por arquivo
[ ] Testar que o HTML base abre sem erros no browser
```

### FASE 1 — Mapa SVG Base
```
[ ] Criar mapa-base.svg com continente orgânico e as 8 regiões como paths
[ ] Cada path deve ter id, classe e data-attributes corretos
[ ] Adicionar labels de região como <text> SVG
[ ] Adicionar elementos decorativos: montanhas, rios, ruínas
[ ] Integrar svg-pan-zoom para zoom/pan funcional
[ ] Testar zoom entre 0.5x e 4x sem distorção
```

### FASE 2 — Interação de Região
```
[ ] Hover em região: highlight + tooltip
[ ] Click em região: modal com dados do JSON
[ ] Modal mostra: nome, lore, cenário (placeholder OK), lista de personagens vazia
[ ] Fechar modal com ESC e com botão ×
[ ] Animação de abertura/fechamento do modal (300ms ease)
```

### FASE 3 — Pins de Personagem
```
[ ] Carregar personagens.json
[ ] Para cada personagem, criar pin SVG na coordenada correta
[ ] Hover no pin: tooltip com nome e raça
[ ] Click no pin: abre dossiê do personagem
[ ] Clustering automático quando múltiplos na mesma região
```

### FASE 4 — Eventos Históricos
```
[ ] Carregar eventos.json
[ ] Criar marcadores de evento no mapa (cristal pulsante)
[ ] Click no marcador: modal de evento com narrativa completa
[ ] Modal de evento lista personagens envolvidos (com fotos)
```

### FASE 5 — Filtros do Mapa
```
[ ] Painel lateral com checkboxes de camada
[ ] Toggle de visibilidade de personagens
[ ] Toggle de visibilidade de eventos
[ ] Filtro por raça (mostra só pins da raça selecionada)
[ ] Minimap funcional no canto inferior direito
```

### FASE 6 — Hero e Crônica (index.html)
```
[ ] Animação de entrada sequencial (seção 6.1)
[ ] Partículas canvas implementadas
[ ] Parallax no hero
[ ] Contadores animados carregando do JSON
[ ] Scroll animations na crônica
```

### FASE 7 — Raças e Personagens (index.html)
```
[ ] Carrossel de raças com parallax de banner
[ ] Grid de personagens com filtros
[ ] Cards de personagem com imagem (placeholder ou real)
[ ] Click em card → dossiê completo (modal ou página)
[ ] Mesa de Duelo funcional
```

### FASE 8 — Polish
```
[ ] Cursor customizado
[ ] Grain texture overlay
[ ] Fonte display correta aplicada em todos os títulos
[ ] Responsividade mobile (mapa: versão simplificada sem pan/zoom — cards verticais de região)
[ ] Controle de som (mudo por padrão)
[ ] Teste de performance (Lighthouse score > 85)
[ ] Meta tags OG atualizadas
```

---

## 10. IDEIAS V2.0

Implementar após a base estar sólida:

```
1. LINHA DO TEMPO DA CONVERGÊNCIA
   Uma timeline horizontal e interativa mostrando todos os eventos em ordem cronológica.
   O usuário pode arrastar para navegar. Cada evento conectado às regiões e personagens.

2. MODO GUERRA — OVERLAY NO MAPA
   Ativar um modo onde o mapa mostra fronteiras em disputa piscando,
   batalhas em andamento como ícones animados, e um indicador de "tensão" por região.

3. DIÁRIO DO EXPLORADOR (LocalStorage)
   O usuário pode marcar regiões como "exploradas" e personagens como "encontrados".
   Um dossiê pessoal que persiste entre sessões — gamificação sem backend.

4. MODO LEITOR — CRÔNICAS COMPLETAS
   Uma seção de contos curtos sobre eventos e personagens, com tipografia editorial,
   como um grimório digital. Dark mode obrigatório, animação de página virando.

5. RELAÇÕES ENTRE PERSONAGENS (Grafo)
   Visualização de rede interativa mostrando quem conhece quem, quem é inimigo,
   quem é aliado. Nodes clicáveis que abrem o dossiê. Usar D3.js ou Cytoscape.js.

6. GERADOR DE ENCONTROS
   Baseia-se nos dados existentes: seleciona 2 personagens de regiões em conflito
   e gera um texto narrativo de encontro (via API de IA ou templates pré-escritos).
   Evolução natural da Mesa de Duelo atual.

7. FILTRO TEMPORAL NO MAPA
   Slider de "Era" que mostra como o mapa mudava antes/durante/depois da Convergência.
   Regiões aparecem, somem, mudam de nome com base na era selecionada.

8. EASTER EGGS SONOROS
   Clicar em certas combinações de regiões ou personagens ativa fragmentos de áudio:
   uma voz narrando um evento secreto, um cristal ressoando uma melodia,
   um sussurro de Aparição em Mirshael.

9. COMPARTILHAMENTO DE DOSSIÊ
   Botão de compartilhar gera uma imagem (via Canvas/html2canvas) do dossiê
   do personagem formatado como carta de pergaminho. Pronto para postar nas redes.

10. WIKI INTEGRADA (Fase 3)
    Cada região, personagem e evento tem uma página própria com URL amigável.
    O Google indexa o lore. O mundo de Eryndor vive na web de verdade.
```

---

## APÊNDICE A — EVENTOS DE LORE BASE

> O agente pode usar estes eventos como conteúdo inicial até que o dono do projeto forneça os canônicos.

```
1. "A Queda do Primeiro Selo" — Korgath — Ano 0
   Os primeiros selos entre planos cedem simultaneamente em 7 pontos de Korgath.
   Demônios e Aparições entram no mundo material pela primeira vez em milênios.

2. "O Silêncio de Valdris" — Valdris — Ano 3
   A capital do mundo antigo é abandonada em uma noite.
   Nenhuma linhagem sabe o que aconteceu. O trono foi encontrado rachado ao meio.

3. "As Raízes que Recordam" — Sylvar — Ano 7
   Uma criança entra na floresta de Sylvar e sai décadas depois com memórias
   que não são suas — memórias da guerra que ainda não aconteceu.

4. "O Leilão de Mareveth" — Mareveth — Ano 12
   Cristais Kore corrompidos são vendidos no mercado negro dos portos.
   Quem os compra começa a mutar. A cidade decide ignorar.

5. "A Forja que Não Apaga" — Veldara — Ano 15
   Uma forja em Veldara começa a produzir metal que nenhum ferreiro reconhece.
   Armas forjadas com ele não podem ser quebradas — e não param de sangrar.
```

---

## APÊNDICE B — CHECKLIST DE QUALIDADE FINAL

Antes de considerar qualquer fase completa:

```
VISUAL
[ ] Nenhum texto branco puro (#FFF) — usar parchment (#D4C5A9)
[ ] Nenhum fundo cinza padrão — todos os fundos têm toque violeta/marrom
[ ] Todos os títulos em Cinzel Decorative
[ ] Grain overlay visível mas sutil (opacity < 0.04)
[ ] Sombras usam a cor --eryndor-void, não #000

FUNCIONAL  
[ ] Todos os clicks têm feedback visual (hover state)
[ ] Modais fecham com ESC
[ ] Sem quebra de layout em 375px (iPhone SE)
[ ] Sem quebra de layout em 1920px (ultrawide)
[ ] Scroll suave em toda a página (scroll-behavior: smooth)
[ ] Imagens com alt text descritivo

DADOS
[ ] JSON válido (passar por JSON validator)
[ ] Nenhum personagem sem regiao definida
[ ] Nenhum evento sem ao menos 1 parágrafo de narrativa
[ ] Placeholders sempre com visual temático (nunca broken image icon)

NARRATIVA
[ ] Tom de voz consistente: seco, épico, sem exclamações desnecessárias
[ ] Nomes próprios sempre com maiúscula e sem abreviação
[ ] Lore não contradiz dados dos personagens
```

---

*Documento gerado para o projeto ERYNDOR · Revisão 1.0*
*Atualizar este arquivo a cada mudança estrutural no projeto.*
*Manter sincronizado com o repositório GitHub do projeto.*
