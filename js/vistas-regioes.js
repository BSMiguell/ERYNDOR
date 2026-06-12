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

// Inicializa quando os dados estiverem carregados
document.addEventListener('DOMContentLoaded', () => {
  if (window.REGIOES) {
    window.REGIOES.forEach(regiao => {
      if (!regiao.imagemPlaceholder) {
        regiao.imagemPlaceholder = obterBannerRegiao(regiao.nome);
      }
    });
  }
});