# ERYNDOR — Atlas Vivo da Convergência

Um universo de RPG de fantasia sombria com 5+ raças, personagens com dossiês detalhados e a mecânica da Convergência Kore.

## Site

https://bsmiguell.github.io/ERYNDOR/

## Estrutura do Projeto

```
ERYNDOR/
├── index.html           (~150 linhas, só estrutura)
├── css/
│   ├── tokens.css       (custom properties, reset)
│   ├── layout.css       (grid, sections, hero)
│   ├── components.css   (cards, buttons, nav, modal)
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
    ├── Banner/        (banners de raças)
    ├── Races/         (ícones de raças)
    └── Characters/    (portraits dos personagens)
```

## Paleta de Cores

- `--ink`: #080706 (fundo principal)
- `--bone`: #f0e2c4 (texto principal)
- `--paper`: #d8c7a1 (texto secundário)
- `--kore`: #d7af45 (dourado sagrado)
- `--copper`: #cf6f3b (cobre queimado)
- `--verdigris`: #4ab59e (verde-azulado)
- `--blood`: #b83d34 (vermelho sangue)
- `--moss`: #91a36d (verde musgo)
- `--storm`: #48687e (azul tempestade)

## Funcionalidades Principais

- **Hero**: Título com scroll reveal, contadores animados
- **Crônica**: Capítulos com animação de revelação
- **Raças**: Banner crossfade, parallax mouse, filtros
- **Personagens**: Cards 3D flip, filtro por raça/ameaça, paginação
- **Duelo**: Sorteio de confrontos cinematográficos
- **Modal**: Dossiês completos com partículas Kore

## Instalação

Apenas abra `index.html` em qualquer navegador moderno. Não requer builds ou dependências.

## Desenvolvimento

Este projeto foi reconstruído segundo o ERYNDOR_SUPER_PROMPT.md:
- Código monolítico separado em múltiplos arquivos
- Alt text em todas as imagens
- Lazy loading implementado
- Cursor custom desativado em dispositivos touch
- Meta tags Open Graph completas
- Favicon SVG incluído
- IntersectionObserver para revelações
- Critical CSS inline no head

## Contribuição

Pull requests são bem-vindos.