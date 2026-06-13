// ===== REGION DATA - Mundo Interativo ERYNDOR =====

const REGIOES = [
  {
    id: "korrfeld",
    nome: "Korrfeld",
    raca: "Amaldiçoados",
    tipo: "corrompido",
    descricao: "Terra onde o primeiro contato com o Kore corrompeu guerreiros, transformando-os em imortais torturados. O chão ruge com energia roxa e o céu é cortado por raios de cristal.",
    caracteristicas: "Imortais pela maldição do Kore | Energia corrosiva no ar | Cristais em fraturas",
    paleta: {
      primaria: "#c0392b",
      secundaria: "#ff6b57",
      destaque: "#d35400"
    },
    imagens: [
      "images/Amaldiçoados/Xerxes.png",
      "images/Banner/Banner-Amaldiçoados.png",
      "images/Amaldiçoados/Crimson-Kore.png"
    ],
    posicao: { x: 25, y: 35 },
    conexao: ["wildmere", "sombrath"]
  },
  {
    id: "wildmere",
    nome: "Wildmere",
    raca: "Beserk",
    tipo: "natureza",
    descricao: "Florestas primordiais e montanhas nevadas habitadas por guerreiros-nômades. A fúria aqui é celebrada como força da vida, e as árvores carregam marcas de batalhas antigas.",
    caracteristicas: "Guerreiros nômades | Fúria como força vital | Árvores milenares esculpidas",
    paleta: {
      primaria: "#d35400",
      secundaria: "#ff8c42",
      destaque: "#e67e22"
    },
    imagens: [
      "images/Beserk/Guts-2.png",
      "images/Beserk/Vorgrim Ironspine.png",
      "images/Beserk/Vorgreth.png"
    ],
    posicao: { x: 45, y: 20 },
    conexao: ["korrfeld", "thornwall", "elbaf"]
  },
  {
    id: "sombrath",
    nome: "Sombrath",
    raca: "Demônios",
    tipo: "infernal",
    descricao: "O plano infernal manifestado em terra. Chamas eterras dançam entre ossos e o trono dos crânios governa com mão de fogo. Aqui o caos é ordem.",
    caracteristicas: "Fogo infernal eternal | Trono dos Crânios | Demônios ancestrais",
    paleta: {
      primaria: "#8e44ad",
      secundaria: "#c47ef0",
      destaque: "#e74c3c"
    },
    imagens: [
      "images/Demonio/Aatrox-V-1.png",
      "images/Demonio/Drakhar.png",
      "images/Banner/Banner-Demonio.png"
    ],
    posicao: { x: 65, y: 40 },
    conexao: ["korrfeld", "nether", "voidrift"]
  },
  {
    id: "thornwall",
    nome: "Thornwall",
    raca: "Humanos",
    tipo: "civilizado",
    descricao: "Os reinos humanos de Thornwall resistem à guerra com determinação. Muralhas de espinhos protegem cidades onde magos e guerreiros treinam para conter a Convergência.",
    caracteristicas: "Reinos humanos | Muralhas de espinhos | Treinamento intenso",
    paleta: {
      primaria: "#d4ac0d",
      secundaria: "#f0c840",
      destaque: "#27ae60"
    },
    imagens: [
      "images/Humanos/Raiden.png",
      "images/Humanos/malenia.png",
      "images/Banner/Banner-Humanos.png"
    ],
    posicao: { x: 35, y: 55 },
    conexao: ["wildmere", "terras-devastadas"]
  },
  {
    id: "terras-devastadas",
    nome: "Terras Devastadas",
    raca: "Canibais",
    tipo: "desolado",
    descricao: "Onde a guerra e a fome se tornaram uma doutrina. Sobreviventes transformaram a carne em herança e o horror em tradição. Cada refeição é ritual.",
    caracteristicas: "Sobrevivência extrema | Rituais de carne | Fome como culto",
    paleta: {
      primaria: "#8f4b2b",
      secundaria: "#d58b5b",
      destaque: "#c0392b"
    },
    imagens: [
      "images/Mutantes/Valthier-V-1.png",
      "images/Mutantes/Lobisomem-V-2.png",
      "images/Banner/Banner-Mutantes.png"
    ],
    posicao: { x: 40, y: 65 },
    conexao: ["thornwall", "voidrift"]
  },
  {
    id: "plano-espiritual",
    nome: "Plano Espiritual",
    raca: "Aparições",
    tipo: "etereo",
    descricao: "O reino dos que recusaram partir. Espíritos ancestrais ancorados ao plano mortal por laços que transcendem a morte. Aqui a luz e sombra dançam como um.",
    caracteristicas: "Espíritos ancestrais | Ancoração eterna | Memórias vivas",
    paleta: {
      primaria: "#8ab4c0",
      secundaria: "#d0e8f0",
      destaque: "#ffffff"
    },
    imagens: [
      "images/Seres do Vazio/Korvessa-Nightlash-V-1.png",
      "images/Seres do Vazio/Alaric-V-1.png",
      "images/Banner/Banner-Aparições.png"
    ],
    posicao: { x: 20, y: 25 },
    conexao: ["wildmere", "templos-esquecidos"]
  },
  {
    id: "voidrift",
    nome: "Voidrift",
    raca: "Desconhecidos",
    tipo: "cosmico",
    descricao: "O vazio que separa os planos. Entidades cujo propósito transcende compreensão. Stellaris contém o abismo enquanto Yoru desdobra a realidade.",
    caracteristicas: "Entidades cósmicas | Vazio consciente | Realidade em franga",
    paleta: {
      primaria: "#9b59b6",
      secundaria: "#d7b4f3",
      destaque: "#f1c40f"
    },
    imagens: [
      "images/Seres do Vazio/Krown-Kore-V-1.png",
      "images/Desconhecido/Glorivex-V-1.png",
      "images/Banner/Banner-Maw Shin.png"
    ],
    posicao: { x: 15, y: 75 },
    conexao: ["sombrath", "terras-devastadas"]
  },
  {
    id: "nether",
    nome: "Netherprofundo",
    raca: "Gigantes",
    tipo: "abissal",
    descricao: "As profundezas onde gigantes dormem. Nidhogg racha as raízes do mundo enquanto Nyxthos observa de seu abismo incomensurável.",
    caracteristicas: "Gigantes adormecidos | Profundezas cósmicas | Raízes do mundo",
    paleta: {
      primaria: "#2980b9",
      secundaria: "#72c0f5",
      destaque: "#ecf0f1"
    },
    imagens: [
      "images/Gigantes/Nidhogg-V-1.png",
      "images/Gigantes/Hydraskull-V-1.png",
      "images/Banner/Banner-Gigantes.png"
    ],
    posicao: { x: 55, y: 80 },
    conexao: ["sombrath", "ilhas-elbaf"]
  },
  {
    id: "ilhas-elbaf",
    nome: "Ilhas de Elbaf",
    raca: "Gigantes Nórdicos",
    tipo: "mar",
    descricao: "Ilhas do extremo norte onde gigantes vikings navegam tempos de batalha. Elbaf lidera a guerra contra as marés enquanto Harald comanda os trovões.",
    caracteristicas: "Vikings gigantes | Navegação ancestral | Guerra dos mares",
    paleta: {
      primaria: "#2980b9",
      secundaria: "#72c0f5",
      destaque: "#f1c40f"
    },
    imagens: [
      "images/Gigantes/Elbaf-V-1.png",
      "images/Gigantes/Harald-V-1.png",
      "images/Banner/Banner-Gigantes.png"
    ],
    posicao: { x: 85, y: 15 },
    conexao: ["wildmere", "nether"]
  },
  {
    id: "oceano-sul",
    nome: "Oceano do Sul",
    raca: "Humanos Aquáticos",
    tipo: "agua",
    descricao: "Águas onde Davy Jones comanda os mortos e Kaido observa a guerra do trono. Moby Dick ainda navega as profundezas em busca da redenção.",
    caracteristicas: "Mares infinitos | Totems do abismo | Navegação espiritual",
    paleta: {
      primaria: "#3498db",
      secundaria: "#1abc9c",
      destaque: "#bdc3c7"
    },
    imagens: [
      "images/Monstros/Davy-Jones-V-1.png",
      "images/Monstros/Davy jones-2.png",
      "images/Banner/Banner-Humanos.png"
    ],
    posicao: { x: 70, y: 85 },
    conexao: ["nether", "voidrift"]
  }
];

// Export for use
window.REGIOES = REGIOES;