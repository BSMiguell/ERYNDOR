// ===== Integração de Imagens de Regiões =====

// Função chamada pelo mapa-regioes.js para obter banner da região
function obterBannerRegiao(nomeRegiao) {
  const mapaBanners = {
    'Korrfeld': 'Banner-Amaldiçoados',
    'Wildmere': 'Banner-Beserk',
    'Sombrath': 'Banner-Demonio',
    'Thornwall': 'Banner-Humanos',
    'Terras Devastadas': 'Banner-Mutantes',
    'Plano Espiritual': 'Banner-Aparições',
    'Voidrift': 'Banner-Maw Shin',
    'Netherprofundo': 'Banner-Gigantes',
    'Ilhas de Elbaf': 'Banner-Gigantes',
    'Oceano do Sul': 'Banner-Humanos'
  };
  return `images/Banner/${mapaBanners[nomeRegiao] || 'Banner-Mutantes'}.png`;
}

// Paleta de cores por região para efeitos
const REGIAO_CORES = {
  'Korrfeld': { primaria: '#c0392b', secundaria: '#ff6b57' },
  'Wildmere': { primaria: '#d35400', secundaria: '#ff8c42' },
  'Sombrath': { primaria: '#8e44ad', secundaria: '#c47ef0' },
  'Thornwall': { primaria: '#d4ac0d', secundaria: '#f0c840' },
  'Terras Devastadas': { primaria: '#8f4b2b', secundaria: '#d58b5b' },
  'Plano Espiritual': { primaria: '#8ab4c0', secundaria: '#d0e8f0' },
  'Voidrift': { primaria: '#9b59b6', secundaria: '#d7b4f3' },
  'Netherprofundo': { primaria: '#2980b9', secundaria: '#72c0f5' },
  'Ilhas de Elbaf': { primaria: '#2980b9', secundaria: '#72c0f5' },
  'Oceano do Sul': { primaria: '#3498db', secundaria: '#1abc9c' }
};

// Inicializa quando os dados estiverem carregados
document.addEventListener('DOMContentLoaded', () => {
  if (window.REGIOES) {
    window.REGIOES.forEach(regiao => {
      if (!regiao.imagemPlaceholder) {
        regiao.imagemPlaceholder = obterBannerRegiao(regiao.nome);
      }
    });
  }

  // Fecha legend com ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.getElementById('region-legend')?.classList.remove('ativo');
    }
  });
});