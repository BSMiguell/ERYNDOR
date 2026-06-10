const RACES = [
  {
    "id": "amaldic",
    "name": "Amaldiçoados",
    "folder": "Amaldiçoados",
    "color": "#c0392b",
    "glow": "rgba(192,57,43,0.5)",
    "color2": "#ff6b57",
    "icon": "☠",
    "count": 11,
    "region": "Korrfeld",
    "trait": "Imortais pela maldição do Kore",
    "desc": "Guerreiros que absorveram Cristais Kore sem ritual de proteção e se transformaram em algo entre mortal e divino — presos em corpos imortais que nunca conhecerão paz. Cada Amaldiçoado carrega a maldição de seu primeiro contato com o Kore, manifestada de forma única.",
    "characters": [
      {
        "n": "Crimson Kore",
        "f": "Crimson-Kore.png",
        "t": "O Primeiro Amaldiçoado",
        "role": "Patriarca da Maldição",
        "lore": "O primeiro ser a tocar um Cristal Kore sem proteção ritual. Sua transformação em segundos demonstrou ao mundo o poder e o horror dos cristais. Governa os Amaldiçoados não por escolha, mas porque é the mais antigo — e portanto o mais poderoso. Seu armor carmesim pulsa com a energia primordial que consome seu ser há milênios.",
        "ab": [
          "Aura Carmesim",
          "Propagação da Maldição",
          "Imortalidade Imperfeita"
        ],
        "pow": 95,
        "spd": 80,
        "def": 88,
        "int": 75,
        "align": "evil",
        "region": "Korrfeld",
        "status": "Ativo"
      },
      {
        "n": "Nameless King",
        "f": "Nameless-King-V-1.png",
        "t": "O Rei Sem Nome",
        "role": "Soberano Esquecido",
        "lore": "Um rei que renunciou ao seu próprio nome ao pacto com o Vazio em troca de poder eterno. Empunha uma lança colossial forjada de ossos de dragões caídos. Ninguém mais lembra quem ele foi, nem mesmo ele mesmo — apenas o peso de séculos de guerras sem propósito.",
        "ab": [
          "Lança das Eras",
          "Vazio do Ego",
          "Invocação Dracônica"
        ],
        "pow": 92,
        "spd": 72,
        "def": 90,
        "int": 65,
        "align": "chaos",
        "region": "Korrfeld",
        "status": "Ativo"
      },
      {
        "n": "Ren Kuro",
        "f": "Ren-Kuro-V-1.png",
        "t": "A Chama Negra",
        "role": "Samurai Amaldiçoado",
        "lore": "Outrora um nobre samurai do oriente, Ren tocou um fragmento de Kore durante uma batalha e foi consumido por chamas negras que nunca se apagaram. Sua técnica de espada permanece impecável, porém sua alma arde em agonia eterna. Dizem que chora lágrimas de sangue quando mata, pois ainda sente cada vida que cessa.",
        "ab": [
          "Lâmina das Chamas Negras",
          "Corte Fantasma",
          "Purgatório de Chamas"
        ],
        "pow": 85,
        "spd": 92,
        "def": 75,
        "int": 82,
        "align": "neutral",
        "region": "Korrfeld",
        "status": "Ativo"
      },
      {
        "n": "Skull Knight",
        "f": "Skull-Knight-V-1.png",
        "t": "O Cavaleiro Eterno",
        "role": "Paladino dos Mortos",
        "lore": "Mais antigo que a maioria das civilizações, Skull Knight foi um paladino que recusou morrer ao final de uma guerra perdida. Absorveu fragmentos de Kore de soldados caídos e tornou-se o guardião involuntário do equilíbrio entre vida e morte. Combate tanto demônios quanto anjos, pois não confia em nenhum dos dois lados.",
        "ab": [
          "Espada da Aniquilação",
          "Armadura Imortal",
          "Salto Dimensional"
        ],
        "pow": 90,
        "spd": 78,
        "def": 95,
        "int": 88,
        "align": "neutral",
        "region": "Errante",
        "status": "Ativo"
      },
      {
        "n": "Soul of Cinder",
        "f": "Soul-of-Cinder-V-1.png",
        "t": "A Alma da Cinza Ardente",
        "role": "Manifestação das Almas",
        "lore": "Não é um ser individual — é a manifestação coletiva de todas as almas que morreram queimadas pela energia do Kore corrupto. Cada alma que absorveu aumentou seu poder e sua tormenta. Combate com a habilidade de todos que o compõem, mas sofre com a memória de cada uma de suas mortes constituintes.",
        "ab": [
          "Tempestade de Chamas Primordiais",
          "Memória dos Caídos",
          "Renascimento das Cinzas"
        ],
        "pow": 97,
        "spd": 75,
        "def": 85,
        "int": 70,
        "align": "chaos",
        "region": "Korrfeld",
        "status": "Fragmentado"
      },
      {
        "n": "Xerxes",
        "f": "Xerxes.png",
        "t": "O Imperador Damnado",
        "role": "Senhor dos Condenados",
        "lore": "Imperador de um reino esquecido cuja capital queimou quando a Grande Fratura libertou os demônios. Absorveu múltiplos Cristais Kore ao mesmo tempo em um ato desesperado de sobrevivência, tornando-se irreconhecível. Agora comanda exércitos de mortos e jura reconstruir seu império, mas não tem mais certeza do que isso significa.",
        "ab": [
          "Exército dos Damnados",
          "Cetro da Ruína",
          "Vontade de Ferro"
        ],
        "pow": 88,
        "spd": 70,
        "def": 82,
        "int": 90,
        "align": "evil",
        "region": "Korrfeld",
        "status": "Ativo"
      },
      {
        "n": "Zenon",
        "f": "Zenon-V-1.png",
        "t": "O Espectro Branco",
        "role": "Guardião do Limiar",
        "lore": "Um ser tão antigo que o Kore que o corrompeu quase consumiu completamente sua essência, deixando apenas uma silhueta espectral de poder imaculado. Zenon não luta por nenhum lado, mas age como um freio natural ao excesso — intervindo quando qualquer raça ameaça destruir o equilíbrio de Eryndor.",
        "ab": [
          "Vazio Branco",
          "Barreira do Limiar",
          "Extinção da Forma"
        ],
        "pow": 93,
        "spd": 85,
        "def": 80,
        "int": 95,
        "align": "neutral",
        "region": "Errante",
        "status": "Observando"
      },
      {
        "n": "Pyre",
        "f": "Pyre-V-1.png",
        "t": "O Pyre",
        "role": "Personagem de Amaldiçoados",
        "lore": "Pyre é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Amaldiçoados, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Amaldiçoados",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 81,
        "spd": 65,
        "def": 68,
        "int": 79,
        "align": "neutral",
        "region": "Korrfeld",
        "status": "Ativo"
      },
      {
        "n": "Scylla",
        "f": "Scylla-V-1.png",
        "t": "O Scylla",
        "role": "Personagem de Amaldiçoados",
        "lore": "Scylla é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Amaldiçoados, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Amaldiçoados",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 60,
        "spd": 75,
        "def": 80,
        "int": 55,
        "align": "neutral",
        "region": "Korrfeld",
        "status": "Ativo"
      },
      {
        "n": "Valerius",
        "f": "Valerius-V-1.png",
        "t": "O Valerius",
        "role": "Personagem de Amaldiçoados",
        "lore": "Valerius é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Amaldiçoados, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Amaldiçoados",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 74,
        "spd": 85,
        "def": 57,
        "int": 71,
        "align": "neutral",
        "region": "Korrfeld",
        "status": "Ativo"
      },
      {
        "n": "Zoro",
        "f": "Zoro-V-1.png",
        "t": "O Zoro",
        "role": "Personagem de Amaldiçoados",
        "lore": "Zoro é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Amaldiçoados, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Amaldiçoados",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 81,
        "spd": 65,
        "def": 68,
        "int": 79,
        "align": "neutral",
        "region": "Korrfeld",
        "status": "Ativo"
      }
    ]
  },
  {
    "id": "aparic",
    "name": "Aparições",
    "folder": "Aparições",
    "color": "#8ab4c0",
    "glow": "rgba(138,180,192,0.35)",
    "color2": "#d0e8f0",
    "icon": "👁",
    "count": 8,
    "region": "Plano Espiritual",
    "trait": "Existem entre os mundos físico e espiritual",
    "desc": "Espíritos de guerreiros e magos que recusaram partir após a morte. Quando a Grande Fratura colapsou a barreira entre o mundo espiritual e físico, as Aparições tornaram-se permanentemente ancoradas ao plano mortal — condenadas ou abençoadas com uma segunda existência etérea.",
    "characters": [
      {
        "n": "Bone Plume",
        "f": "Bone-Plume-V-1.png",
        "t": "O Espírito das Sepulturas",
        "role": "Assombrador",
        "lore": "Nascida das ossadas coletivas de guerreiros tombados em uma batalha que durou sete anos. Cada pena de seu corpo espectral é feita de fragmentos de osso animados por restos de consciência dos soldados mortos. Voa sobre campos de batalha, colhendo as últimas memórias dos moribundos.",
        "ab": [
          "Tempestade de Penas Ósseas",
          "Colheita de Memórias",
          "Voo dos Mortos"
        ],
        "pow": 70,
        "spd": 90,
        "def": 60,
        "int": 85,
        "align": "neutral",
        "region": "Errante",
        "status": "Ativa"
      },
      {
        "n": "Clangoro",
        "f": "Clangoro-V-1.png",
        "t": "O Guardião dos Sinos",
        "role": "Oráculo Arcano",
        "lore": "Espírito de um mago que dedicou sua vida a estudar a ressonância entre sons e realidade. Em morte, fundiu-se com seus instrumentos rituais, tornando-se um ser de sinos e magia viva. Cada toque de seu corpo ressoa como uma nota que altera a realidade ao redor.",
        "ab": [
          "Ressonância Arcana",
          "Toque da Revelação",
          "Sinfonía de Destruição"
        ],
        "pow": 65,
        "spd": 60,
        "def": 72,
        "int": 98,
        "align": "good",
        "region": "Templos Esquecidos",
        "status": "Ativo"
      },
      {
        "n": "Corvus",
        "f": "Corvus-V-1.png",
        "t": "O Mensageiro das Sombras",
        "role": "Espião Entre-Mundos",
        "lore": "Corvus foi um bardo que conhecia todos os segredos de todos os reinos. Assassinado por saber demais, sua alma recusou partir antes de transmitir tudo o que sabia. Agora existe como um corvo de sombra, mensageiro entre os vivos e os mortos, e espião involuntário de todas as facções.",
        "ab": [
          "Voo Sombrio",
          "Transmissão Mental",
          "Visão dos Mundos"
        ],
        "pow": 55,
        "spd": 95,
        "def": 50,
        "int": 92,
        "align": "neutral",
        "region": "Errante",
        "status": "Ativo"
      },
      {
        "n": "Ossuarion",
        "f": "Ossuarion-V-1.png",
        "t": "A Chama Espectral",
        "role": "Espectro Arcano",
        "lore": "O espírito de um grande mago cujo corpo foi destruído em combate, mas cuja fúria ardente era tão intensa que sua alma tomou a forma de um crânio em chamas. Ossuarion é o espírito de batalha puro — raiva destilada em forma etérea, incapaz de sentir paz até que seu assassino seja encontrado.",
        "ab": [
          "Explosão de Fogo Espiritual",
          "Crânio da Perdição",
          "Ira Eterna"
        ],
        "pow": 80,
        "spd": 75,
        "def": 55,
        "int": 78,
        "align": "chaos",
        "region": "Errante",
        "status": "Ativo"
      },
      {
        "n": "Saint Vail",
        "f": "Saint-Vail-V-1.png",
        "t": "O Guardião Caído",
        "role": "Espírito Protetor",
        "lore": "Um paladino de renome que morreu defendendo inocentes de um ataque demoníaco. Sua devoção era tão profunda que sua alma não poderia partir enquanto houvesse inocentes em perigo. Agora vaga como um guerreiro de lâmina de luz, protegendo os fracos dos horrores da Guerra da Convergência.",
        "ab": [
          "Lâmina de Luz Sagrada",
          "Escudo dos Inocentes",
          "Bênção do Mártir"
        ],
        "pow": 75,
        "spd": 70,
        "def": 80,
        "int": 72,
        "align": "good",
        "region": "Thornwall",
        "status": "Ativo"
      },
      {
        "n": "Vyrn",
        "f": "Vyrn-V-1.png",
        "t": "O Soldado Eterno",
        "role": "Guerreiro Fantasma",
        "lore": "Um general de alto escalão cujo senso de dever era tão arraigado que não consegue aceitar o próprio fim. Morreu no momento em que uma batalha estava prestes a ser decidida e permanece naquele momento, incapaz de aceitar que a guerra que ele conhecia terminou séculos atrás. Continua lutando contra inimigos há muito desaparecidos.",
        "ab": [
          "Armadura Imortal",
          "Golpe de Cavalaria Fantasma",
          "Juramento de Dever"
        ],
        "pow": 78,
        "spd": 72,
        "def": 85,
        "int": 65,
        "align": "good",
        "region": "Campos de Batalha Antigos",
        "status": "Perdido"
      },
      {
        "n": "Kaminari",
        "f": "Kaminari-V-1.png",
        "t": "O Kaminari",
        "role": "Personagem de Aparições",
        "lore": "Kaminari é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Aparições, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Aparições",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 74,
        "spd": 85,
        "def": 57,
        "int": 71,
        "align": "neutral",
        "region": "Plano Espiritual",
        "status": "Ativo"
      },
      {
        "n": "Mycelium",
        "f": "Mycelium-V-1.png",
        "t": "O Mycelium",
        "role": "Personagem de Aparições",
        "lore": "Mycelium é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Aparições, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Aparições",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 74,
        "spd": 85,
        "def": 57,
        "int": 71,
        "align": "neutral",
        "region": "Plano Espiritual",
        "status": "Ativo"
      }
    ]
  },
  {
    "id": "beserk",
    "name": "Beserk",
    "folder": "Beserk",
    "color": "#d35400",
    "glow": "rgba(211,84,0,0.5)",
    "color2": "#ff8c42",
    "icon": "⚔",
    "count": 14,
    "region": "Wildmere / Norte",
    "trait": "Fúria que supera limites físicos",
    "desc": "Guerreiros-nômades do extremo norte e das florestas primordiais, os Beserk são a prova de que a carne pode superar o impossível quando movida por fúria suficiente. Rejeitam toda ordem estabelecida e vivem pela lei do poder. Paradoxalmente, são os mais honestos de todas as raças.",
    "characters": [
      {
        "n": "Guts",
        "f": "Guts-2.png",
        "t": "O Guerreiro Negro",
        "role": "Campeão do Beserk",
        "lore": "O único guerreiro Beserk a ter sobrevivido a cem batalhas sem um arranhão que ele não infligiu a si mesmo. Empunha uma espada do tamanho de uma árvore jovem com uma só mão. Guts não luta por glória ou poder — luta porque é a única coisa que sabe fazer, e o peso de um passado brutal o impede de parar.",
        "ab": [
          "Espadão Drakar",
          "Frenesi de Batalha",
          "Vontade de Ferro Absoluta"
        ],
        "pow": 96,
        "spd": 82,
        "def": 85,
        "int": 68,
        "align": "neutral",
        "region": "Wildmere",
        "status": "Ativo"
      },
      {
        "n": "Kaldor Kore",
        "f": "Kaldor-Kore.png",
        "t": "O Dragão Beserk",
        "role": "Guerreiro Kore",
        "lore": "Um Beserk que absorveu voluntariamente energia de Kore, tornando-se algo entre guerreiro e dragão. Sua armadura cresceu como escamas do seu próprio corpo. Kaldor é a prova de que um Beserk com disciplina suficiente pode absorver o Kore sem se tornar Amaldiçoado — mas o preço foi perder toda a humanidade que lhe restava.",
        "ab": [
          "Escamas de Dragão",
          "Sopro do Kore",
          "Fúria Dracônica"
        ],
        "pow": 93,
        "spd": 75,
        "def": 90,
        "int": 65,
        "align": "chaos",
        "region": "Wildmere",
        "status": "Ativo"
      },
      {
        "n": "Ksante",
        "f": "Ksante.png",
        "t": "O Absorvedor",
        "role": "Estrategista-Combatente",
        "lore": "Diferente dos demais Beserk, Ksante é um combatente que estuda, aprende e adapta. Sua armadura de chamas arco-íris absorve técnicas inimigas e as replica com o dobro da força. É o único Beserk que usa diplomacia como arma, mas quando a diplomacia falha, sua brutalidade supera qualquer adversário.",
        "ab": [
          "Absorção de Técnicas",
          "Contra-Golpe Amplificado",
          "Armadura Adaptativa"
        ],
        "pow": 88,
        "spd": 86,
        "def": 87,
        "int": 90,
        "align": "neutral",
        "region": "Thornwall",
        "status": "Ativo"
      },
      {
        "n": "Leon",
        "f": "Leon-V-1.png",
        "t": "O Rei do Rugido",
        "role": "Rei Tribal",
        "lore": "Um Beserk com sangue de leão primordial em suas veias. Seu rugido sozinho despedaça pedra e rompe formações militares. Como rei dos clãs do norte, Leon manteve sua gente fora da Guerra da Convergência por anos — mas quando os demônios queimaram seu lar, ele jurou que não haveria pedra dos reinos demoníacos que ficaria sobre outra.",
        "ab": [
          "Rugido Destrutivo",
          "Garras do Predador",
          "Instinto do Rei"
        ],
        "pow": 89,
        "spd": 88,
        "def": 83,
        "int": 72,
        "align": "neutral",
        "region": "Wildmere Norte",
        "status": "Em Guerra"
      },
      {
        "n": "Lord Kaelthorn",
        "f": "Lord Kaelthorn.png",
        "t": "O Senhor das Lâminas",
        "role": "Soberano Beserk",
        "lore": "O Beserk que tentou civilizar o caos de sua raça. Kaelthorn acredita que os Beserk poderiam conquistar o mundo se parassem de guerrear entre si. Sua armadura de ouro e negro representa esta dualidade — o selvagem disciplinado. Comanda exércitos com uma mão e espalha destruição com a outra.",
        "ab": [
          "Comando de Batalha",
          "Duplas Lâminas Negras",
          "Presença do Senhor"
        ],
        "pow": 87,
        "spd": 80,
        "def": 88,
        "int": 88,
        "align": "neutral",
        "region": "Wildmere",
        "status": "Ativo"
      },
      {
        "n": "Ragnar",
        "f": "Ragnar-V-1.png",
        "t": "O Inabalável",
        "role": "Lenda Viva",
        "lore": "A lenda dos Beserk — um guerreiro de cabelos brancos que não envelheceu em dois séculos de batalhas. Dizem que ele foi morto quarenta e sete vezes e se recusou a permanecer morto. Ragnar não afirma nenhum poder sobrenatural — apenas uma vontade que encontrou ser mais forte que a morte.",
        "ab": [
          "Recusa à Morte",
          "Força do Lendário",
          "Golpe dos Cem Séculos"
        ],
        "pow": 91,
        "spd": 77,
        "def": 94,
        "int": 70,
        "align": "chaos",
        "region": "Errante",
        "status": "Lendário"
      },
      {
        "n": "Vorgreth",
        "f": "Vorgreth.png",
        "t": "A Chama do Caos",
        "role": "Guerreiro de Fogo",
        "lore": "Um híbrido entre Beserk e uma antiga linhagem de demônio de fogo, Vorgreth não escolheu ser o que é. Sua aparência assusta até outros Beserk — mas sua lealdade às tradições de sua raça é inabalável. Combate com chamas que ele mesmo não consegue controlar completamente, tornando-o tão perigoso para aliados quanto para inimigos.",
        "ab": [
          "Chamas Incontroláveis",
          "Caos Ardente",
          "Hibridismo Infernal"
        ],
        "pow": 90,
        "spd": 82,
        "def": 78,
        "int": 60,
        "align": "chaos",
        "region": "Wildmere",
        "status": "Ativo"
      },
      {
        "n": "Vorgrim Ironspine",
        "f": "Vorgrim Ironspine.png",
        "t": "A Arma Viva",
        "role": "Guerreiro Ápice",
        "lore": "Uma mutação Beserk evolutiva — ossos que cresceram para fora do corpo, formando uma armadura natural de espinhos de ferro biológico. Vorgrim é o que os Beserk poderiam se tornar se continuassem evoluindo por mil anos. Não é mais completamente orgânico, mas tampouco é inorgânico — é algo terceiro.",
        "ab": [
          "Espinhos de Ferro",
          "Adaptação Evolutiva",
          "Muralha Vivente"
        ],
        "pow": 92,
        "spd": 65,
        "def": 98,
        "int": 62,
        "align": "neutral",
        "region": "Wildmere Profundo",
        "status": "Ativo"
      },
      {
        "n": "Grom",
        "f": "Grom-V-1.png",
        "t": "O Grom",
        "role": "Personagem de Beserk",
        "lore": "Grom é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Beserk, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Beserk",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 81,
        "spd": 65,
        "def": 68,
        "int": 79,
        "align": "neutral",
        "region": "Wildmere / Norte",
        "status": "Ativo"
      },
      {
        "n": "Ksante",
        "f": "Ksante-V-1.png",
        "t": "O Ksante",
        "role": "Personagem de Beserk",
        "lore": "Ksante é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Beserk, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Beserk",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 60,
        "spd": 75,
        "def": 80,
        "int": 55,
        "align": "neutral",
        "region": "Wildmere / Norte",
        "status": "Ativo"
      },
      {
        "n": "Thomas",
        "f": "Thomas-V-1.png",
        "t": "O Thomas",
        "role": "Personagem de Beserk",
        "lore": "Thomas é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Beserk, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Beserk",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 60,
        "spd": 75,
        "def": 80,
        "int": 55,
        "align": "neutral",
        "region": "Wildmere / Norte",
        "status": "Ativo"
      },
      {
        "n": "Thorin",
        "f": "Thorin-V-1.png",
        "t": "O Thorin",
        "role": "Personagem de Beserk",
        "lore": "Thorin é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Beserk, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Beserk",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 60,
        "spd": 75,
        "def": 80,
        "int": 55,
        "align": "neutral",
        "region": "Wildmere / Norte",
        "status": "Ativo"
      },
      {
        "n": "Thrum",
        "f": "Thrum-V-1.png",
        "t": "O Thrum",
        "role": "Personagem de Beserk",
        "lore": "Thrum é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Beserk, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Beserk",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 88,
        "spd": 70,
        "def": 74,
        "int": 87,
        "align": "neutral",
        "region": "Wildmere / Norte",
        "status": "Ativo"
      },
      {
        "n": "Zephyrus",
        "f": "Zephyrus-V-1.png",
        "t": "O Zephyrus",
        "role": "Personagem de Beserk",
        "lore": "Zephyrus é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Beserk, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Beserk",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 74,
        "spd": 85,
        "def": 57,
        "int": 71,
        "align": "neutral",
        "region": "Wildmere / Norte",
        "status": "Ativo"
      }
    ]
  },
  {
    "id": "canibais",
    "name": "Canibais",
    "folder": "Canibais",
    "color": "#8f4b2b",
    "glow": "rgba(143,75,43,0.45)",
    "color2": "#d58b5b",
    "icon": "☠",
    "count": 9,
    "region": "Terras Devastadas",
    "trait": "Sobreviventes que transformaram a fome em linhagem",
    "desc": "Os Canibais surgiram nos territórios onde a guerra, a fome e a Fratura tornaram a carne mais valiosa que o ouro. Eles não veem o ato de devorar como barbárie, mas como herança: absorver o poder, a memória e a força do derrotado faz parte de sua cultura. Entre eles, sobreviver nunca foi suficiente; é preciso carregar o outro dentro de si.",
    "characters": [
      {
        "n": "Dokuro",
        "f": "Dokuro-V-1.png",
        "t": "O Ossuário Vivo",
        "role": "Patriarca da Fome",
        "lore": "Dokuro foi o primeiro dos Canibais a transformar a fome em doutrina. Depois de perder seu clã para a guerra, devorou os mortos não por desespero, mas para aprender a continuar lutando. Cada vitória sua é celebrada como um ritual de incorporação.",
        "ab": [
          "Rito da Carne",
          "Memória Digestiva",
          "Fúria do Ossuário"
        ],
        "pow": 84,
        "spd": 72,
        "def": 86,
        "int": 74,
        "align": "evil",
        "region": "Terras Devastadas",
        "status": "Ativo"
      },
      {
        "n": "Ganshu",
        "f": "Ganshu-V-1.png",
        "t": "O Cozinheiro de Guerra",
        "role": "Estratégia da Mesa",
        "lore": "Ganshu organiza campos de batalha como cozinhas: escolhe o que será preservado, o que será consumido e o que será transformado em arma. Sua genialidade é temida porque sua crueldade nunca é impulsiva.",
        "ab": [
          "Corte Preciso",
          "Fervura de Ossos",
          "Banquete Tático"
        ],
        "pow": 78,
        "spd": 69,
        "def": 77,
        "int": 92,
        "align": "chaos",
        "region": "Terras Devastadas",
        "status": "Ativo"
      },
      {
        "n": "Gokū Maru",
        "f": "Gokū-Maru-V-1.png",
        "t": "O Devoto do Banquete",
        "role": "Fanático Ritual",
        "lore": "Gokū Maru transformou a fome em religião. Para ele, cada refeição é um juramento, e cada inimigo derrotado deve ser devolvido ao mundo através do fogo do estômago. Ele conduz rituais coletivos antes das batalhas, convencendo os seus de que consumir o vencido é também herdar sua coragem.",
        "ab": [
          "Liturgia da Carne",
          "Fogo Visceral",
          "Juramento do Banquete"
        ],
        "pow": 73,
        "spd": 76,
        "def": 70,
        "int": 80,
        "align": "evil",
        "region": "Terras Devastadas",
        "status": "Ativo"
      },
      {
        "n": "Reigen",
        "f": "Reigen-V-1.png",
        "t": "O Enganador de Ossos",
        "role": "Fraudador Sagrado",
        "lore": "Reigen sobreviveu entre facções mais fortes usando lábia, medo e oportunismo. Ele vendeu bênçãos falsas, mapas falsos e promessas falsas até perceber que a mentira podia ser tão nutritiva quanto a carne.",
        "ab": [
          "Armadilha Mental",
          "Promessa Vazia",
          "Corte de Retorno"
        ],
        "pow": 66,
        "spd": 83,
        "def": 58,
        "int": 90,
        "align": "neutral",
        "region": "Errante",
        "status": "Manipulando"
      },
      {
        "n": "Ryouka",
        "f": "Ryouka-V-1.png",
        "t": "A Faca Faminta",
        "role": "Caçadora de Restos",
        "lore": "Ryouka cresceu em campos onde as crianças aprendiam cedo a dividir ou morrer. Ela desenvolveu um estilo de combate leve e brutal, sempre buscando desmembrar o adversário antes que ele pudesse reagir.",
        "ab": [
          "Passo da Caça",
          "Fome Cortante",
          "Execução Rápida"
        ],
        "pow": 75,
        "spd": 91,
        "def": 63,
        "int": 71,
        "align": "chaos",
        "region": "Terras Devastadas",
        "status": "Em Caça"
      },
      {
        "n": "Ryōgen",
        "f": "Ryōgen-V-1.png",
        "t": "O Mestre do Corte Frio",
        "role": "Carrasco Ritual",
        "lore": "Ryōgen é o lado disciplinado do clã: silencioso, preciso e quase cerimonial. Ele não mata por prazer, mas por necessidade de manter o equilíbrio interno dos Canibais, eliminando os que enfraquecem o grupo. Sua lâmina gelada serve para preservar o que o fogo da fome destruiria rápido demais.",
        "ab": [
          "Lâmina Fria",
          "Silêncio do Carrasco",
          "Preservação do Corpo"
        ],
        "pow": 79,
        "spd": 74,
        "def": 81,
        "int": 84,
        "align": "neutral",
        "region": "Terras Devastadas",
        "status": "Ativo"
      },
      {
        "n": "Sōma",
        "f": "Sōma-V-1.png",
        "t": "O Herdeiro do Sabor",
        "role": "Alquimista da Carne",
        "lore": "Sōma enxerga o corpo como um laboratório. Ele mistura sangue, temperos, venenos e magia para extrair força, memória e resistência dos derrotados. Seu talento tornou o clã mais temido, porque até feridas podem ser convertidas em vantagem quando ele está por perto.",
        "ab": [
          "Mistura Visceral",
          "Técnica do Paladar",
          "Transformação Nutritiva"
        ],
        "pow": 71,
        "spd": 68,
        "def": 69,
        "int": 94,
        "align": "chaos",
        "region": "Terras Devastadas",
        "status": "Ativo"
      },
      {
        "n": "Sukuna",
        "f": "Sukuna-V-1.png",
        "t": "O Rei da Carne Viva",
        "role": "Monarca dos Canibais",
        "lore": "Sukuna domina os Canibais por força, presença e uma fome que não conhece limite. Em vez de esconder o horror da carne devorada, ele o elevou a símbolo de soberania.",
        "ab": [
          "Mandato da Carne",
          "Domínio do Banquete",
          "Corte Absoluto"
        ],
        "pow": 98,
        "spd": 89,
        "def": 91,
        "int": 88,
        "align": "evil",
        "region": "Terras Devastadas",
        "status": "Ativo"
      },
      {
        "n": "Zankoku",
        "f": "Zankoku-V-1.png",
        "t": "A Última Mordida",
        "role": "Executor Final",
        "lore": "Zankoku é a face mais temida dos Canibais: calmo, quase gentil, até o momento da execução. Ele acredita que o último golpe deve ser o mais limpo possível para honrar o alimento que virá depois.",
        "ab": [
          "Mordida Final",
          "Execução Limpa",
          "Honra da Sobrevivência"
        ],
        "pow": 82,
        "spd": 84,
        "def": 76,
        "int": 73,
        "align": "evil",
        "region": "Terras Devastadas",
        "status": "Ativo"
      }
    ]
  },
  {
    "id": "demonio",
    "name": "Demônio",
    "folder": "Demonio",
    "color": "#8e44ad",
    "glow": "rgba(142,68,173,0.5)",
    "color2": "#c47ef0",
    "icon": "👿",
    "count": 30,
    "region": "Sombrath",
    "trait": "Nascidos do pecado e do caos primordial",
    "desc": "Demônios do plano infernal, os Demônios existem há mais tempo que a maioria das raças de Eryndor. Sua liberação pelos Selos destruídos não foi um acidente — foi um plano milênios em elaboração. Cada demônio tem uma essência diferente, mas todos compartilham o desejo de consumir e expandir.",
    "characters": [
      {
        "n": "Aatrox",
        "f": "Aatrox-V-1.png",
        "t": "O Exterminador dos Mundos",
        "role": "Destruidor Primordial",
        "lore": "Não é um demônio comum — é uma entidade primordial de destruição selada em uma espada por divindades que temiam seu poder. Quando a Grande Fratura enfraqueceu os selos dimensionais, Aatrox se libertou e começou sua missão milenar: a extinção de toda vida em Eryndor. Não por ódio, mas porque acredita que a extinção é libertação.",
        "ab": [
          "Espada da Extinção",
          "Forma do Aniquilador",
          "Voo da Destruição"
        ],
        "pow": 100,
        "spd": 88,
        "def": 90,
        "int": 85,
        "align": "evil",
        "region": "Sombrath",
        "status": "Ativo — Caçando"
      },
      {
        "n": "Danji",
        "f": "Danji-V-1.png",
        "t": "O Caçador de Anjos",
        "role": "Caçador Dimensional",
        "lore": "Um demônio de chama roxa que desenvolveu um gosto peculiar: caçar Semi-Deuses e Aparições pela emoção da caça. Não é o mais poderoso dos demônios, mas é o mais rápido e o mais obstinado. Nenhuma de suas presas escapou duas vezes.",
        "ab": [
          "Chama Roxa Devastadora",
          "Rastreio Dimensional",
          "Golpe do Caçador"
        ],
        "pow": 82,
        "spd": 95,
        "def": 72,
        "int": 78,
        "align": "evil",
        "region": "Errante",
        "status": "Caçando"
      },
      {
        "n": "Drakhar",
        "f": "Drakhar.png",
        "t": "O Senhor do Caos",
        "role": "Lorde do Caos",
        "lore": "Um demônio de dreadlocks brancos e poder caótico que não obedece nem ao próprio Sukuna. Drakhar é o caos personificado — suas ações seguem lógica própria incompreensível para mentes ordinárias. Paradoxalmente, isso o torna o demônio mais imprevisível e portanto o mais perigoso em batalha aberta.",
        "ab": [
          "Explosão do Caos",
          "Imprevisibilidade Absoluta",
          "Fragmentação da Realidade"
        ],
        "pow": 88,
        "spd": 85,
        "def": 75,
        "int": 92,
        "align": "chaos",
        "region": "Sombrath",
        "status": "Errante"
      },
      {
        "n": "Drakon Ghen",
        "f": "Drakon-Ghen-V-1.png",
        "t": "O Dragão Carmesim",
        "role": "Comandante Dracônico",
        "lore": "O maior dragão demoníaco de Sombrath, Drakon-Ghen tem envergadura que eclipsa cidades inteiras. Foi libertado pela Grande Fratura e imediatamente estabeleceu domínio sobre os céus do sul. Sua existência mudou os conflitos aéreos — nenhum exército pode combater por terra enquanto ele patrulha o ar.",
        "ab": [
          "Sopro do Apocalipse",
          "Domínio do Ar",
          "Escamas Infernais"
        ],
        "pow": 97,
        "spd": 78,
        "def": 95,
        "int": 70,
        "align": "evil",
        "region": "Céus do Sul",
        "status": "Dominando"
      },
      {
        "n": "Dread",
        "f": "Dread-V-1.png",
        "t": "O Medo Encarnado",
        "role": "Senhor do Terror",
        "lore": "Uma entidade que não tem forma fixa — manifesta-se como o pior medo de quem a observa. Dread não precisa matar seus inimigos com força bruta; a maioria morre de pânico antes de precisar usar as garras. É o arma psicológica mais eficaz de Sukuna.",
        "ab": [
          "Manifestação do Medo",
          "Visão de Terror",
          "Paralisia do Pavor"
        ],
        "pow": 75,
        "spd": 88,
        "def": 68,
        "int": 97,
        "align": "evil",
        "region": "Sombrath",
        "status": "Ativo"
      },
      {
        "n": "Golden Sperm",
        "f": "Golden-Sperm-V-1.png",
        "t": "O Pico da Perfeição",
        "role": "Entidade de Poder",
        "lore": "Uma anomalia entre os demônios — um ser de perfeição física absoluta e poder ilimitado que se acredita ser a manifestação do ideal de força pura. Golden Sperm não tem emoções complexas: apenas poder, e a vontade de demonstrá-lo.",
        "ab": [
          "Força Absoluta",
          "Corpo Perfeito",
          "Pressão Divina"
        ],
        "pow": 99,
        "spd": 90,
        "def": 92,
        "int": 45,
        "align": "evil",
        "region": "Sombrath",
        "status": "Ativo"
      },
      {
        "n": "Golgoth",
        "f": "Golgoth-V-1.png",
        "t": "O Titã Infernal",
        "role": "Titã do Fogo",
        "lore": "Um titã demoníaco de dimensões colossais, Golgoth não foi criado pelos Primordiais — nasceu no núcleo de Sombrath há eons. Seu corpo é literalmente feito de ferro fundido e chamas. Quando caminha, a terra racha. Quando grita, montanhas desmoronam.",
        "ab": [
          "Punho da Extinção",
          "Corpo de Lava",
          "Grito do Apocalipse"
        ],
        "pow": 98,
        "spd": 40,
        "def": 97,
        "int": 38,
        "align": "evil",
        "region": "Sombrath Profundo",
        "status": "Dormindo — Despertando"
      },
      {
        "n": "Kokushibo",
        "f": "Kokushibo-V-1.png",
        "t": "O Mestre das Lâminas Lunares",
        "role": "Mestre da Espada Demoníaca",
        "lore": "Outrora um humano que se tornou o maior espadachim de todos os tempos, Kokushibo vendeu sua humanidade para superar seu irmão. Tornou-se um demônio e desenvolveu a Respiração da Lua — uma técnica de espada com dezesseis lâminas crescendo do próprio corpo. Em mil anos de existência, nenhum espadachim igualou-o.",
        "ab": [
          "Respiração da Lua — Décimo Sexto Padrão",
          "Lâminas do Corpo",
          "Olhos dos Espíritos"
        ],
        "pow": 95,
        "spd": 97,
        "def": 82,
        "int": 90,
        "align": "evil",
        "region": "Errante",
        "status": "Ativo"
      },
      {
        "n": "Mahoraga",
        "f": "Mahoraga-V-1.png",
        "t": "O Intamável",
        "role": "Besta Divina Indomável",
        "lore": "Uma besta demoníaca que nunca foi derrotada na história registrada. Mahoraga adapta-se a qualquer ataque em segundos — seu escudo shikigami analisa, processa e cria imunidade a qualquer técnica em uma única rotação. É considerado o ser vivo mais indomável de Eryndor.",
        "ab": [
          "Adaptação Infinita",
          "Escudo Shikigami",
          "Devastação Total"
        ],
        "pow": 100,
        "spd": 85,
        "def": 100,
        "int": 80,
        "align": "evil",
        "region": "Sombrath",
        "status": "Não Aprisionável"
      },
      {
        "n": "Monspiet",
        "f": "Monspiet-V-1.png",
        "t": "O Fênix dos Dez",
        "role": "Comandante dos Dez Mandamentos",
        "lore": "Um dos Dez Mandamentos — a elite mais poderosa dos demônios. Monspiet tem o poder do Pássaro Negro, capaz de lançar chamas que apagam qualquer luz e corrosão que dissolve barreiras mágicas. Apesar de sua afiliação demoníaca, mantém um código de honra peculiar.",
        "ab": [
          "Pássaro Negro",
          "Chamas da Extinção da Luz",
          "Voo da Pureza Negra"
        ],
        "pow": 91,
        "spd": 87,
        "def": 80,
        "int": 85,
        "align": "evil",
        "region": "Sombrath",
        "status": "Ativo"
      },
      {
        "n": "Nosferatu Zodd",
        "f": "Nosferatu-Zodd-V-1.png",
        "t": "O Apóstolo Imortal",
        "role": "Apóstolo da Guerra",
        "lore": "Um demônio-apóstolo que existe há mais de três séculos, sobrevivendo a batalhas que mataram exércitos inteiros. Zodd respeita apenas os guerreiros mais poderosos — e passa a vida buscando alguém capaz de matá-lo. Teme apenas a profecia que prevê sua derrota às mãos de alguém que ainda não nasceu.",
        "ab": [
          "Transformação Apostólica",
          "Lâmina da Morte Certa",
          "Imortalidade do Apóstolo"
        ],
        "pow": 93,
        "spd": 85,
        "def": 88,
        "int": 72,
        "align": "chaos",
        "region": "Errante",
        "status": "Buscando Rival"
      },
      {
        "n": "Orochi",
        "f": "Orochi-V-1.png",
        "t": "O Rei dos Venenos",
        "role": "Serpente do Caos",
        "lore": "O demônio de oito cabeças, cada uma representando uma forma de corrupção diferente. Orochi não precisa de força bruta — seu veneno dissolve a matéria, corrói a magia e envenena até os espíritos. A maior ameaça de Orochi é sua paciência: pode esperar séculos pela oportunidade certa.",
        "ab": [
          "Veneno das Oito Cabeças",
          "Corrupção Progressiva",
          "Caos Serpenteante"
        ],
        "pow": 87,
        "spd": 82,
        "def": 80,
        "int": 90,
        "align": "evil",
        "region": "Sombrath",
        "status": "Ativo"
      },
      {
        "n": "Sukuna",
        "f": "Sukuna-V-1.png",
        "t": "O Rei das Maldições",
        "role": "Senhor Supremo dos Demônios",
        "lore": "O mais poderoso demônio-feiticeiro que já existiu — um ser da era pré-divina que os Semi-Deuses tentaram apagar da história. Sukuna lidou com a Grande Fratura não como vitimizado pelos eventos, mas como arquiteto oculto deles. Sua fórmula de quatro braços e domínio sobre múltiplos domínios o torna virtualmente ilimitado em combate.",
        "ab": [
          "Domínio Primordial — Maleficência",
          "Cleave",
          "Flecha Divina"
        ],
        "pow": 100,
        "spd": 96,
        "def": 92,
        "int": 100,
        "align": "evil",
        "region": "Sombrath — Trono dos Ossos",
        "status": "Ascendendo"
      },
      {
        "n": "Surtur",
        "f": "Surtur-V-1.png",
        "t": "O Fim do Mundo",
        "role": "Rei do Fogo do Fim dos Tempos",
        "lore": "Uma profecia fala de Surtur — o gigante demoníaco de fogo que encerrará Eryndor em chamas no fim dos tempos. A profecia não diz se esse é um evento inevitável ou apenas um aviso. Surtur tomou o conhecimento da profecia e decidiu acelerar o cronograma.",
        "ab": [
          "Espada do Apocalipse",
          "Chamas do Fim",
          "Presença do Fim dos Tempos"
        ],
        "pow": 99,
        "spd": 72,
        "def": 93,
        "int": 78,
        "align": "evil",
        "region": "Sombrath",
        "status": "Despertando"
      },
      {
        "n": "Swain",
        "f": "Swain-V-1.png",
        "t": "O Coletor de Almas",
        "role": "Feiticeiro General",
        "lore": "Um warlock-general que descobriu como consumir partes das almas dos inimigos derrotados, absorvendo seus poderes e memórias. Swain conhece os segredos de centenas de guerreiros mortos — cada batalha o torna mais completo, mais terrível, mais incompreensível para quem o enfrenta pela primeira vez.",
        "ab": [
          "Consumo de Almas",
          "Forma do Abutre Demoníaco",
          "Conhecimento dos Mortos"
        ],
        "pow": 86,
        "spd": 78,
        "def": 75,
        "int": 97,
        "align": "evil",
        "region": "Sombrath / Thornwall Ocupado",
        "status": "Avançando"
      },
      {
        "n": "Thul",
        "f": "Thul-V-1.png",
        "t": "O Primordial Ósseo",
        "role": "Demônio Primordial",
        "lore": "Um demônio anterior à própria categorização de demônios — Thul existia quando os Primordiais ainda molda o mundo. Seu corpo de osso branco-acinzentado é feito de fragmentos de entidades que ele consumiu ao longo de eons. Não tem ambições, não tem lealdades — apenas existe, consome e persiste.",
        "ab": [
          "Consumo Primordial",
          "Ossos da Era Primeira",
          "Persistência Eterna"
        ],
        "pow": 94,
        "spd": 62,
        "def": 96,
        "int": 75,
        "align": "chaos",
        "region": "Errante Profundo",
        "status": "Desconhecido"
      },
      {
        "n": "Yoru",
        "f": "Yoru-V-1.png",
        "t": "A Dobradora da Realidade",
        "role": "Manipuladora da Existência",
        "lore": "Aparência ilusoriamente infantil esconde um poder que dobra os limites da realidade. Yoru não precisa de força física — ela simplesmente reescreve as regras do espaço ao redor de seus inimigos. Sua maior fraqueza é também sua maior força: ela se diverte com o caos que cria.",
        "ab": [
          "Dobra da Realidade",
          "Inversão do Espaço",
          "Riso do Fim"
        ],
        "pow": 90,
        "spd": 92,
        "def": 65,
        "int": 98,
        "align": "chaos",
        "region": "Errante",
        "status": "Ativa — Caótica"
      },
      {
        "n": "Yrul",
        "f": "Yrul-V-1.png",
        "t": "O Anjo Caído",
        "role": "Semideus Corrompido",
        "lore": "Yrul foi um Semi-Deus antes de ser seduziado pelo poder de Sombrath. Diferente dos demônios que nasceram no plano infernal, ele conhece a luz e escolheu as trevas — tornando-o mais perigoso que qualquer demônio nativo, pois entende exatamente o que está combatendo.",
        "ab": [
          "Asas da Queda",
          "Luz Corrompida",
          "Traição Divina"
        ],
        "pow": 89,
        "spd": 88,
        "def": 80,
        "int": 88,
        "align": "evil",
        "region": "Sombrath",
        "status": "Ativo"
      },
      {
        "n": "Zoran",
        "f": "Zoran-V-1.png",
        "t": "O Elementar das Chamas",
        "role": "Senhor Elemental do Fogo",
        "lore": "Um elemental demoníaco de fogo puro — não tem consciência elaborada, mas tem poder enorme e instinto predatório refinado. Zoran manifesta-se como um vórtice de chamas e vontade de destruição. Sukuna usa-o como arma de sítio: onde Zoran vai, não sobra pedra sobre pedra.",
        "ab": [
          "Vórtice de Fogo Puro",
          "Instinto Predatório",
          "Forma Elemental"
        ],
        "pow": 88,
        "spd": 80,
        "def": 82,
        "int": 42,
        "align": "evil",
        "region": "Sombrath",
        "status": "Arma de Sítio"
      },
      {
        "n": "Cyber Gore",
        "f": "Cyber-Gore-V-1.png",
        "t": "O Cyber Gore",
        "role": "Personagem de Demônio",
        "lore": "Cyber Gore é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Demônio, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Demônio",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 88,
        "spd": 60,
        "def": 69,
        "int": 87,
        "align": "evil",
        "region": "Sombrath",
        "status": "Ativo"
      },
      {
        "n": "Garrison",
        "f": "Garrison-V-1.png",
        "t": "O Garrison",
        "role": "Personagem de Demônio",
        "lore": "Garrison é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Demônio, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Demônio",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 74,
        "spd": 85,
        "def": 57,
        "int": 71,
        "align": "evil",
        "region": "Sombrath",
        "status": "Ativo"
      },
      {
        "n": "Mordecai",
        "f": "Mordecai-V-1.png",
        "t": "O Mordecai",
        "role": "Personagem de Demônio",
        "lore": "Mordecai é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Demônio, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Demônio",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 74,
        "spd": 85,
        "def": 57,
        "int": 71,
        "align": "evil",
        "region": "Sombrath",
        "status": "Ativo"
      },
      {
        "n": "Obsidius",
        "f": "Obsidius-V-1.png",
        "t": "O Obsidius",
        "role": "Personagem de Demônio",
        "lore": "Obsidius é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Demônio, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Demônio",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 74,
        "spd": 85,
        "def": 57,
        "int": 71,
        "align": "evil",
        "region": "Sombrath",
        "status": "Ativo"
      },
      {
        "n": "Oogway",
        "f": "Oogway-V-1.png",
        "t": "O Oogway",
        "role": "Personagem de Demônio",
        "lore": "Oogway é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Demônio, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Demônio",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 60,
        "spd": 75,
        "def": 80,
        "int": 55,
        "align": "evil",
        "region": "Sombrath",
        "status": "Ativo"
      },
      {
        "n": "Platinum Sperm",
        "f": "Platinum-Sperm-V-1.png",
        "t": "O Platinum Sperm",
        "role": "Personagem de Demônio",
        "lore": "Platinum Sperm é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Demônio, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Demônio",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 81,
        "spd": 80,
        "def": 58,
        "int": 79,
        "align": "evil",
        "region": "Sombrath",
        "status": "Ativo"
      },
      {
        "n": "Pyros",
        "f": "Pyros-V-1.png",
        "t": "O Pyros",
        "role": "Personagem de Demônio",
        "lore": "Pyros é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Demônio, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Demônio",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 88,
        "spd": 70,
        "def": 74,
        "int": 87,
        "align": "evil",
        "region": "Sombrath",
        "status": "Ativo"
      },
      {
        "n": "Sad Sperm",
        "f": "Sad-Sperm-V-1.png",
        "t": "O Sad Sperm",
        "role": "Personagem de Demônio",
        "lore": "Sad Sperm é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Demônio, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Demônio",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 81,
        "spd": 90,
        "def": 63,
        "int": 79,
        "align": "evil",
        "region": "Sombrath",
        "status": "Ativo"
      },
      {
        "n": "Shadoweaver",
        "f": "Shadoweaver-V-1.png",
        "t": "O Shadoweaver",
        "role": "Personagem de Demônio",
        "lore": "Shadoweaver é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Demônio, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Demônio",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 60,
        "spd": 65,
        "def": 75,
        "int": 55,
        "align": "evil",
        "region": "Sombrath",
        "status": "Ativo"
      },
      {
        "n": "Sion",
        "f": "Sion-V-1.png",
        "t": "O Sion",
        "role": "Personagem de Demônio",
        "lore": "Sion é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Demônio, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Demônio",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 81,
        "spd": 65,
        "def": 68,
        "int": 79,
        "align": "evil",
        "region": "Sombrath",
        "status": "Ativo"
      },
      {
        "n": "Xar Koth",
        "f": "Xar-Koth-V-1.png",
        "t": "O Xar Koth",
        "role": "Personagem de Demônio",
        "lore": "Xar Koth é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Demônio, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Demônio",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 74,
        "spd": 85,
        "def": 57,
        "int": 71,
        "align": "evil",
        "region": "Sombrath",
        "status": "Ativo"
      }
    ]
  },
  {
    "id": "desco",
    "name": "Desconhecido",
    "folder": "Desconhecido",
    "color": "#9b59b6",
    "glow": "rgba(155,89,182,0.4)",
    "color2": "#d7b4f3",
    "icon": "❓",
    "count": 12,
    "region": "O Entremundo",
    "trait": "Origem e motivações completamente desconhecidas",
    "desc": "Entidades cuja origem, motivação e natureza são inteiramente enigmáticas. Nem os Semi-Deuses conseguem categorizar os Desconhecidos adequadamente. Eles observam o conflito de Eryndor com uma mistura de curiosidade e indiferença que sugere uma perspectiva fundamentalmente diferente do tempo e do propósito.",
    "characters": [
      {
        "n": "Aurelius",
        "f": "Aurelius-V-1.png",
        "t": "O Cavaleiro de Prata",
        "role": "Indefinido / Protetor",
        "lore": "Um ser de armadura prateada mecânica que apareceu sem origem conhecida nas bordas do conflito entre Semi-Deuses e Demônios. Não fala com ninguém, não aceita aliados, mas consistentemente posiciona-se contra forças de destruição total. Alguns acreditam que é um servo de um Primordial que ainda não se revelou.",
        "ab": [
          "Armadura Impossível",
          "Velocidade Mecânica",
          "Propósito Oculto"
        ],
        "pow": 85,
        "spd": 90,
        "def": 88,
        "int": 80,
        "align": "neutral",
        "region": "Desconhecida",
        "status": "Observando"
      },
      {
        "n": "Garrick",
        "f": "Garrick-V-1.png",
        "t": "O Vidente das Linhas",
        "role": "Indefinido / Oráculo de Timelines",
        "lore": "Uma silhueta roxa que existe em múltiplas linhas temporais simultaneamente. Garrick viu o fim de Eryndor em 847 versões diferentes e está buscando as poucas onde o mundo sobrevive. Ninguém sabe se sua presença em uma batalha significa que essa linha sobreviverá — ou que ele está apenas observando como morre.",
        "ab": [
          "Visão de Timelines",
          "Presença Múltipla",
          "Conhecimento do Fim"
        ],
        "pow": 72,
        "spd": 88,
        "def": 60,
        "int": 100,
        "align": "neutral",
        "region": "Entre Tempos",
        "status": "Calculando"
      },
      {
        "n": "Glorivex",
        "f": "Glorivex-V-1.png",
        "t": "O Dragão Cósmico",
        "role": "Indefinido / Entidade Cósmica",
        "lore": "Um dragão de aparência alienígena — tons de roxo e amarelo que não correspondem a nenhuma espécie dracônica conhecida de Eryndor. Glorivex sugere origens além do mundo físico, possivelmente de um plano cósmico que os Primordiais nunca mapearam. Não é hostil, mas sua simples presença desestabiliza a magia ao redor.",
        "ab": [
          "Presença Cósmica",
          "Respiração Não-Elementar",
          "Origem Desconhecida"
        ],
        "pow": 90,
        "spd": 80,
        "def": 88,
        "int": 85,
        "align": "neutral",
        "region": "Desconhecida",
        "status": "Observando"
      },
      {
        "n": "Jester",
        "f": "Jester-V-1.png",
        "t": "O Deus-Bobo",
        "role": "Indefinido / Divindade do Caos",
        "lore": "Uma entidade que veste a aparência de um bobo da corte cósmico — mas seu riso racha a realidade ao redor. Jester pode ser uma divindade esquecida, pode ser uma manifestação do Vazio com senso de humor, pode ser algo que nenhuma categorização conhecida abarca. Seus atos parecem aleatórios mas sempre, sempre servem a algum propósito oculto.",
        "ab": [
          "Riso que Racha o Real",
          "Truque do Fim",
          "Farsa Divina"
        ],
        "pow": 88,
        "spd": 92,
        "def": 70,
        "int": 96,
        "align": "chaos",
        "region": "Desconhecida",
        "status": "Pregando Peças"
      },
      {
        "n": "Kiran",
        "f": "Kiran-V-1.png",
        "t": "O Guerreiro de Ouro Envelhecido",
        "role": "Indefinido / Guerreiro Milenar",
        "lore": "Um guerreiro de aparência humana envelhecida mas força que desmente cada ruga. Kiran nunca diz de onde vem, nunca explica o que busca, nunca revela para quem luta. Sua técnica de combate é a mais antiga documentada — anterior a qualquer escola conhecida de qualquer raça.",
        "ab": [
          "Arte Marcial Primordial",
          "Força que Desmente a Idade",
          "Sabedoria de Eons"
        ],
        "pow": 88,
        "spd": 75,
        "def": 80,
        "int": 95,
        "align": "neutral",
        "region": "Errante",
        "status": "Vagando"
      },
      {
        "n": "Maw Shin",
        "f": "Maw-Shin-V-1.png",
        "t": "O Deus Bestial",
        "role": "Indefinido / Divindade Animalesca",
        "lore": "Uma criatura entre deus e animal, com um rosto de fome permanente e um corpo que desafia anatomia conhecida. Maw-Shin representa o instinto puro levado à divindade — é o que acontece quando a natureza primordial ganha consciência e poder sem perder sua animalidade.",
        "ab": [
          "Fome Primordial",
          "Instinto Divino",
          "Forma Bestial Ascendida"
        ],
        "pow": 87,
        "spd": 82,
        "def": 80,
        "int": 55,
        "align": "chaos",
        "region": "Wildmere Profundo",
        "status": "Faminto"
      },
      {
        "n": "Mellifera",
        "f": "Mellifera-V-1.png",
        "t": "A Deusa das Abelhas",
        "role": "Indefinido / Divindade da Natureza",
        "lore": "Uma entidade de aparência deliciosa e poder mortal. Mellifera manifesta-se como uma divindade de mel, abelhas e natureza — mas a natureza que representa não é suave. É a natureza que mata sem remorso, que polui e purifica com a mesma indiferença. Seus favores são tão perigosos quanto sua hostilidade.",
        "ab": [
          "Enxame da Divindade",
          "Mel Venenoso",
          "Bênção da Colmeia"
        ],
        "pow": 78,
        "spd": 85,
        "def": 72,
        "int": 90,
        "align": "neutral",
        "region": "Wildmere",
        "status": "Ativa"
      },
      {
        "n": "Stellaris",
        "f": "Stellaris-V-1.png",
        "t": "O Ser das Estrelas",
        "role": "Indefinido / Entidade Estelar",
        "lore": "Uma criatura de escuridão e luz estelar que surgiu sem antecedentes durante a Grande Fratura. Stellaris não se comunica na linguagem de nenhuma raça conhecida — mas sua presença parece proteger regiões de serem completamente consumidas pelo Vazio. Pode ser um mecanismo de defesa do próprio cosmos de Eryndor.",
        "ab": [
          "Luz Estelar",
          "Escuridão Protetora",
          "Linguagem das Estrelas"
        ],
        "pow": 90,
        "spd": 88,
        "def": 85,
        "int": 92,
        "align": "good",
        "region": "Voidrift",
        "status": "Contendo o Vazio"
      },
      {
        "n": "Vane",
        "f": "Vane-V-1.png",
        "t": "O Silencioso",
        "role": "Indefinido / Caçador Interdimensional",
        "lore": "Vane nunca falou. Nunca sorriu. Nunca demonstrou emoção de qualquer tipo. Aparece, combate com maestria letal, e desaparece. Alguns teorizam que Vane é um servo de uma entidade que existe além do alcance de Eryndor — um caçador enviado para coletar algo que ainda não foi identificado.",
        "ab": [
          "Silêncio Absoluto",
          "Técnica Perfeita",
          "Origem Além"
        ],
        "pow": 86,
        "spd": 93,
        "def": 78,
        "int": 75,
        "align": "neutral",
        "region": "Desconhecida",
        "status": "Missão Oculta"
      },
      {
        "n": "Glorivex",
        "f": "Glorivex-V-2.png",
        "t": "O Glorivex",
        "role": "Personagem de Desconhecido",
        "lore": "Glorivex é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Desconhecido, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Desconhecido",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 74,
        "spd": 85,
        "def": 57,
        "int": 71,
        "align": "neutral",
        "region": "O Entremundo",
        "status": "Ativo"
      },
      {
        "n": "Helion",
        "f": "Helion-V-1.png",
        "t": "O Helion",
        "role": "Personagem de Desconhecido",
        "lore": "Helion é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Desconhecido, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Desconhecido",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 60,
        "spd": 75,
        "def": 80,
        "int": 55,
        "align": "neutral",
        "region": "O Entremundo",
        "status": "Ativo"
      },
      {
        "n": "Noxus",
        "f": "Noxus-V-1.png",
        "t": "O Noxus",
        "role": "Personagem de Desconhecido",
        "lore": "Noxus é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Desconhecido, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Desconhecido",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 88,
        "spd": 70,
        "def": 74,
        "int": 87,
        "align": "neutral",
        "region": "O Entremundo",
        "status": "Ativo"
      }
    ]
  },
  {
    "id": "gigante",
    "name": "Gigantes",
    "folder": "Gigantes",
    "color": "#2980b9",
    "glow": "rgba(41,128,185,0.45)",
    "color2": "#72c0f5",
    "icon": "🌊",
    "count": 20,
    "region": "Todo o Continente",
    "trait": "Forças da natureza em forma de ser vivo",
    "desc": "Os Gigantes não são simplesmente criaturas grandes — são manifestações vivas de forças primordiais. Antes da Guerra da Convergência, permaneciam indiferentes às guerras dos mortais. Agora que o conflito ameaça o próprio tecido da realidade, até os Gigantes precisam escolher lados.",
    "characters": [
      {
        "n": "Asura",
        "f": "Asura-V-1.png",
        "t": "O Deus da Guerra",
        "role": "Deus Guerreiro dos Gigantes",
        "lore": "Com braços infinitos e força que supera qualquer cálculo mortal, Asura é a manifestação do conflito vivo. Não pode morrer enquanto houver guerra no mundo — e portanto, enquanto Eryndor existir em seu estado atual, Asura é efetivamente eterno. Combate não por escolha mas por natureza.",
        "ab": [
          "Mil Punhos",
          "Fúria Infinita",
          "Presença da Guerra"
        ],
        "pow": 100,
        "spd": 82,
        "def": 95,
        "int": 65,
        "align": "chaos",
        "region": "Errante",
        "status": "Ativo"
      },
      {
        "n": "Azure Kore",
        "f": "Azure-Kore-V-1.png",
        "t": "O Dragão Azul",
        "role": "Dragão-Gigante do Kore",
        "lore": "Um dragão de proporções gigantescas infundido com energia Kore azul, criando um ser que não é apenas dragão, não é apenas gigante — é uma força da natureza ativa. Azure Kore controla tempestades de energia Kore, tornando cada ataque não apenas físicamente devastador mas magicamente corrosivo.",
        "ab": [
          "Tempestade Kore Azul",
          "Alento de Energia Primordial",
          "Voo do Colossus"
        ],
        "pow": 97,
        "spd": 75,
        "def": 92,
        "int": 72,
        "align": "neutral",
        "region": "Céus do Norte",
        "status": "Ativo"
      },
      {
        "n": "Charizard",
        "f": "Charizard.png",
        "t": "O Dragão Lendário",
        "role": "Rei Dracônico Ancestral",
        "lore": "Um dragão que a magia antiga de Eryndor elevou à statura de Gigante há eons. Charizard é a prova de que dragões antigos o suficiente transcendem sua categoria original. Não pertence a nenhum lado do conflito, mas quando se manifesta, os exércitos param e contemplam.",
        "ab": [
          "Inferno Azul",
          "Presença do Lendário",
          "Voo do Ancestral"
        ],
        "pow": 93,
        "spd": 85,
        "def": 88,
        "int": 70,
        "align": "neutral",
        "region": "Montanhas do Norte",
        "status": "Observando"
      },
      {
        "n": "Elbaf",
        "f": "Elbaf-V-1.png",
        "t": "O Trovão Viking",
        "role": "Senhor de Guerra Nórdico",
        "lore": "Um gigante de tradição viking cujo povo habita as ilhas do extremo norte. Elbaf luta com uma lança que canalizou raios durante dois séculos, tornando-a um condutor de tempestade. Seu povo — os Gigantes Nórdicos — é o único grupo de Gigantes com estrutura social coesa e código de honra definido.",
        "ab": [
          "Lança das Tempestades",
          "Grito de Guerra Nórdico",
          "Honra do Norte"
        ],
        "pow": 91,
        "spd": 78,
        "def": 90,
        "int": 72,
        "align": "neutral",
        "region": "Ilhas de Elbaf",
        "status": "Ativo"
      },
      {
        "n": "Harald",
        "f": "Harald-V-1.png",
        "t": "O Ciclope das Tempestades",
        "role": "Comandante de Tempestades",
        "lore": "Um gigante de um olho que controla os ventos e as marés. Harald comanda as tempestades do oceano norte, protegendo as rotas marítimas dos Gigantes Nórdicos. Acredita que a Guerra da Convergência é uma tempestade como as que ele conhece — destrutiva mas necessária para limpar o que está podre.",
        "ab": [
          "Controle das Marés",
          "Olho da Tempestade",
          "Vento de Comando"
        ],
        "pow": 88,
        "spd": 72,
        "def": 88,
        "int": 82,
        "align": "neutral",
        "region": "Oceano Norte",
        "status": "Ativo"
      },
      {
        "n": "Hydraskull",
        "f": "Hydraskull-V-1.png",
        "t": "O Enxame dos Crânios",
        "role": "Entidade de Enxame",
        "lore": "Não é um único gigante — é uma colônia de crânios menores que se organizam em algo que aparenta ser um único ser gigante. Hydraskull representa um tipo de inteligência coletiva e de força distribuída: destrua partes, mas o todo se reagrupa imediatamente.",
        "ab": [
          "Enxame Indestrutível",
          "Regeneração do Coletivo",
          "Visão de Centenas"
        ],
        "pow": 88,
        "spd": 68,
        "def": 98,
        "int": 75,
        "align": "chaos",
        "region": "Desconhecida",
        "status": "Ativo"
      },
      {
        "n": "Kaido",
        "f": "Kaido-V-1.png",
        "t": "O Dragão dos Mares",
        "role": "A Criatura Mais Poderosa Viva",
        "lore": "A criatura mais poderosa que respira hoje em Eryndor — um dragão-gigante que nunca foi derrotado em batalha aberta. Kaido dominou os oceanos por séculos e agora observa a Guerra da Convergência com interesse crescente. Quando ele finalmente escolher um lado, o conflito terminará — da maneira que ele decidir.",
        "ab": [
          "Dragão dos Mares",
          "Invencibilidade Provada",
          "Supremacia Absoluta"
        ],
        "pow": 100,
        "spd": 80,
        "def": 100,
        "int": 82,
        "align": "chaos",
        "region": "Oceano do Sul",
        "status": "Observando"
      },
      {
        "n": "Loki",
        "f": "Loki-V-1.png",
        "t": "O Deus da Traição",
        "role": "Gigante Trickster",
        "lore": "O gigante-deus das ilusões e da traição. Loki não é confiável por nenhuma facção mas é essencial para todas, porque seus truques frequentemente resolvem problemas que a força bruta não consegue. Está jogando um jogo cujas regras apenas ele conhece — e está ganhando.",
        "ab": [
          "Ilusão Perfeita",
          "Metamorfose",
          "Manipulação Cósmica"
        ],
        "pow": 78,
        "spd": 90,
        "def": 72,
        "int": 100,
        "align": "chaos",
        "region": "Errante",
        "status": "Jogando"
      },
      {
        "n": "Multi Supreme",
        "f": "Multi-Supreme-V-1.png",
        "t": "O Amálgama",
        "role": "Entidade Coletiva",
        "lore": "Uma massa sombria que é a fusão de múltiplas almas gigantescas — cada uma de um guerreiro lendário caído durante a Grande Fratura. Multi-Supreme herdou os poderes e memórias de todos eles, tornando-se um arquivo vivo de técnicas de combate perdidas há gerações.",
        "ab": [
          "Técnicas Absorvidas",
          "Força do Coletivo",
          "Memória de Guerreiros"
        ],
        "pow": 95,
        "spd": 65,
        "def": 90,
        "int": 88,
        "align": "chaos",
        "region": "Voidrift",
        "status": "Crescendo"
      },
      {
        "n": "Nidhogg",
        "f": "Nidhogg-V-1.png",
        "t": "A Serpente do Mundo",
        "role": "Serpente que Corrói a Realidade",
        "lore": "A serpente que morde as raízes da realidade — não metaforicamente, mas literalmente. Nidhogg existe no plano mais profundo de Eryndor e corrói os fundamentos sobre os quais o mundo foi construído. A Grande Fratura acelerou seu processo; os Primordiais a criaram como um mecanismo de fim de ciclo, não de destruição.",
        "ab": [
          "Mordida das Raízes",
          "Corrosão da Realidade",
          "Ciclo do Fim"
        ],
        "pow": 97,
        "spd": 55,
        "def": 95,
        "int": 85,
        "align": "chaos",
        "region": "Profundezas",
        "status": "Ativamente Corroendo"
      },
      {
        "n": "Nyxthos",
        "f": "Nyxthos-V-1.png",
        "t": "O Horror Cósmico",
        "role": "Divindade do Horror Antigo",
        "lore": "Um ser de horror cósmico — tentáculos de névoa, olhos que veem além da dimensão, consciência que não pode ser compreendida por mentes mortais. Nyxthos existia antes dos Primordiais e será quando eles forem esquecidos. Observa a guerra com o interesse de quem lê uma briga de formigas.",
        "ab": [
          "Loucura do Abismo",
          "Tentáculos Dimensionais",
          "Presença Incompreensível"
        ],
        "pow": 100,
        "spd": 60,
        "def": 97,
        "int": 100,
        "align": "chaos",
        "region": "Entre Dimensões",
        "status": "Observando"
      },
      {
        "n": "Radahn",
        "f": "Radahn-V-1.png",
        "t": "O Esmagador de Estrelas",
        "role": "General dos Gigantes Celestes",
        "lore": "Um general de proporções divinas que literalmente parou as estrelas de se moverem usando suas técnicas gravitacionais. Radahn absorveu tanto conhecimento arcano em seu corpo físico que se tornou uma força gravitacional em si mesmo. Combatentes ao redor dele experimentam gravidade alterada.",
        "ab": [
          "Controle Gravitacional",
          "Festival da Arena",
          "Força das Estrelas Paradas"
        ],
        "pow": 99,
        "spd": 70,
        "def": 93,
        "int": 88,
        "align": "neutral",
        "region": "Aethelos / Errante",
        "status": "Ativo"
      },
      {
        "n": "Bjorn",
        "f": "Bjorn-V-1.png",
        "t": "O Bjorn",
        "role": "Personagem de Gigantes",
        "lore": "Bjorn é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Gigantes, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Gigantes",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 88,
        "spd": 70,
        "def": 74,
        "int": 87,
        "align": "neutral",
        "region": "Todo o Continente",
        "status": "Ativo"
      },
      {
        "n": "Crimson",
        "f": "Crimson-V-1.png",
        "t": "O Crimson",
        "role": "Personagem de Gigantes",
        "lore": "Crimson é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Gigantes, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Gigantes",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 67,
        "spd": 80,
        "def": 86,
        "int": 63,
        "align": "neutral",
        "region": "Todo o Continente",
        "status": "Ativo"
      },
      {
        "n": "Kabuto",
        "f": "Kabuto-V-1.png",
        "t": "O Kabuto",
        "role": "Personagem de Gigantes",
        "lore": "Kabuto é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Gigantes, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Gigantes",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 60,
        "spd": 75,
        "def": 80,
        "int": 55,
        "align": "neutral",
        "region": "Todo o Continente",
        "status": "Ativo"
      },
      {
        "n": "Katsu",
        "f": "Katsu-V-1.png",
        "t": "O Katsu",
        "role": "Personagem de Gigantes",
        "lore": "Katsu é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Gigantes, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Gigantes",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 88,
        "spd": 70,
        "def": 74,
        "int": 87,
        "align": "neutral",
        "region": "Todo o Continente",
        "status": "Ativo"
      },
      {
        "n": "Oblivion",
        "f": "Oblivion-V-1.png",
        "t": "O Oblivion",
        "role": "Personagem de Gigantes",
        "lore": "Oblivion é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Gigantes, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Gigantes",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 74,
        "spd": 85,
        "def": 57,
        "int": 71,
        "align": "neutral",
        "region": "Todo o Continente",
        "status": "Ativo"
      },
      {
        "n": "Torstein",
        "f": "Torstein-V-1.png",
        "t": "O Torstein",
        "role": "Personagem de Gigantes",
        "lore": "Torstein é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Gigantes, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Gigantes",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 74,
        "spd": 85,
        "def": 57,
        "int": 71,
        "align": "neutral",
        "region": "Todo o Continente",
        "status": "Ativo"
      },
      {
        "n": "Zinogre",
        "f": "Zinogre-V-1.png",
        "t": "O Zinogre",
        "role": "Personagem de Gigantes",
        "lore": "Zinogre é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Gigantes, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Gigantes",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 67,
        "spd": 80,
        "def": 86,
        "int": 63,
        "align": "neutral",
        "region": "Todo o Continente",
        "status": "Ativo"
      },
      {
        "n": "Zrik",
        "f": "Zrik-V-1.png",
        "t": "O Zrik",
        "role": "Personagem de Gigantes",
        "lore": "Zrik é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Gigantes, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Gigantes",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 81,
        "spd": 65,
        "def": 68,
        "int": 79,
        "align": "neutral",
        "region": "Todo o Continente",
        "status": "Ativo"
      }
    ]
  },
  {
    "id": "humano",
    "name": "Humanos",
    "folder": "Humanos",
    "color": "#d4ac0d",
    "glow": "rgba(212,172,13,0.4)",
    "color2": "#f0c840",
    "icon": "⚜",
    "count": 22,
    "region": "Thornwall",
    "trait": "Potencial ilimitado pela determinação",
    "desc": "A raça mais numerosa e adaptável de Eryndor. Os Humanos não têm os poderes inatos de demônios ou o peso eterno dos Amaldiçoados — mas compensam com determinação, criatividade e uma capacidade de crescer além de todo limite que deveriam ter. Os maiores e mais devastadores guerreiros de Eryndor começaram como humanos comuns.",
    "characters": [
      {
        "n": "Aokiji",
        "f": "Aokiji.png",
        "t": "O Almirante de Gelo",
        "role": "Almirante do Zero Absoluto",
        "lore": "Um almirante com controle sobre o zero absoluto — o frio que para toda movimento, toda vida, toda possibilidade. Aokiji não usa seu poder levianamente; viu demais para ser entusiasta da destruição. Mas quando o usa, nenhuma chama sobrevive.",
        "ab": [
          "Gelo Eterno",
          "Zero Absoluto",
          "Era do Gelo Perpétuo"
        ],
        "pow": 91,
        "spd": 82,
        "def": 85,
        "int": 88,
        "align": "neutral",
        "region": "Thornwall",
        "status": "Ativo"
      },
      {
        "n": "Astrid",
        "f": "Astrid.png",
        "t": "A Rainha dos Guerreiros",
        "role": "Rainha Guerreira",
        "lore": "Uma rainha de cabelo vermelho e força que envergonha exércitos inteiros. Astrid ascendeu ao trono não por nascimento, mas por ser a última sobrevivente de sua família após um massacre demoníaco. Cada batalha que vence é dedicada aos mortos que ninguém mais vingou.",
        "ab": [
          "Machado da Rainha",
          "Fúria da Sobrevivente",
          "Grito de Guerra"
        ],
        "pow": 85,
        "spd": 82,
        "def": 80,
        "int": 78,
        "align": "good",
        "region": "Thornwall Norte",
        "status": "Em Guerra"
      },
      {
        "n": "Broly",
        "f": "Broly.png",
        "t": "O Lendário",
        "role": "Guerreiro Lendário Nascido",
        "lore": "Nasceu sob a mais má das estrelas e foi rejeitado por isso — um poder absurdo que aterroriza todos ao redor. Broly não escolheu ser o que é; o poder o escolheu. Seu corpo é uma bateria viva de energia destruidora que cresce sem limite aparente.",
        "ab": [
          "Grande Impulso Verde",
          "Poder Ilimitado",
          "Meteoro Lendário"
        ],
        "pow": 99,
        "spd": 88,
        "def": 88,
        "int": 52,
        "align": "chaos",
        "region": "Errante",
        "status": "Ativo"
      },
      {
        "n": "Davy Jones",
        "f": "Davy jones-2.png",
        "t": "O Capitão Amaldiçoado dos Mares",
        "role": "Capitão do Holandês Voador",
        "lore": "Um capitão que fez um pacto proibido pelo amor que nunca recebeu e acabou trocando seu coração por poder sobre as profundezas. Agora controla as criaturas dos oceanos e comanda o Holandês Voador — o navio dos mortos que navega entre os planos de existência.",
        "ab": [
          "Controle dos Mares",
          "Coração Aprisionado",
          "Frota dos Mortos"
        ],
        "pow": 90,
        "spd": 75,
        "def": 85,
        "int": 85,
        "align": "evil",
        "region": "Oceano do Sul",
        "status": "Ativo"
      },
      {
        "n": "Dragon",
        "f": "Dragon-2.png",
        "t": "O Revolucionário do Mundo",
        "role": "Líder da Revolução Global",
        "lore": "O homem mais perigoso do mundo para toda forma de tirania e injustiça. Dragon nasceu com controle sobre os ventos e tempestades, mas seu poder mais aterrorizante é sua capacidade de inspirar — de transformar pessoas comuns em forças de mudança.",
        "ab": [
          "Tempestade Revolucionária",
          "Inspiração Inabalável",
          "Vento da Liberdade"
        ],
        "pow": 88,
        "spd": 85,
        "def": 80,
        "int": 97,
        "align": "good",
        "region": "Errante",
        "status": "Ativo — Organizando"
      },
      {
        "n": "Emporio Alnino",
        "f": "Emporio-Alnino.png",
        "t": "O Menino Prodigio",
        "role": "Prodigio Incompreensível",
        "lore": "Uma criança cujo poder desafia toda compreensão de desenvolvimento natural. Emporio nasceu com a capacidade de criar e manipular espíritos — entidades que existem apenas por sua imaginação. Cada espírito que cria tem poder real e permanente.",
        "ab": [
          "Criação de Espíritos",
          "Imaginação Materializada",
          "Prodigio do Impossível"
        ],
        "pow": 88,
        "spd": 75,
        "def": 70,
        "int": 95,
        "align": "good",
        "region": "Thornwall",
        "status": "Ativo"
      },
      {
        "n": "Enjin",
        "f": "Enjin-2.png",
        "t": "O Maestro dos Elementos",
        "role": "Guerreiro Elemental",
        "lore": "Um guerreiro que dominou não um, mas todos os quatro elementos primordiais através de décadas de treino extremo. Enjin não tem o poder bruto de um demônio ou a magia inata de um Semi-Deus — mas combina elementos em padrões tão complexos que superam oponentes teoricamente superiores.",
        "ab": [
          "Síntese Elemental",
          "Maestria do Fogo",
          "Vento e Terra Combinados"
        ],
        "pow": 85,
        "spd": 85,
        "def": 80,
        "int": 88,
        "align": "good",
        "region": "Thornwall",
        "status": "Ativo"
      },
      {
        "n": "Irelia",
        "f": "Irelia.png",
        "t": "A Dança das Lâminas",
        "role": "Defensora de sua Terra",
        "lore": "Uma guerreira que dança com lâminas levitantes em padrões impossíveis de prever ou defender. Irelia nunca lutou por conquista — cada batalha foi em defesa de sua terra natal devastada por invasores. Seu poder cresce quanto mais luta, quanto mais tem a proteger.",
        "ab": [
          "Dança das Lâminas",
          "Tempestade de Corte",
          "Inabalável"
        ],
        "pow": 87,
        "spd": 93,
        "def": 80,
        "int": 82,
        "align": "good",
        "region": "Thornwall",
        "status": "Em Defesa"
      },
      {
        "n": "J",
        "f": "J-3.png",
        "t": "O Enigma dos Três Olhos",
        "role": "Indefinido / Guerreiro Misterioso",
        "lore": "Um guerreiro de três olhos cuja origem permanece mistério até para seus aliados. Seus três olhos percebem realidades sobrepostas simultaneamente. Não fala sobre seu passado, mas suas técnicas são reconhecíveis como das mais antigas civilizações humanas extintas.",
        "ab": [
          "Três Visões",
          "Técnica Arcaica",
          "Segredo dos Olhos"
        ],
        "pow": 86,
        "spd": 85,
        "def": 78,
        "int": 90,
        "align": "neutral",
        "region": "Desconhecida",
        "status": "Ativo"
      },
      {
        "n": "Laxus",
        "f": "Laxus.png",
        "t": "O Matador de Deuses do Trovão",
        "role": "God Slayer do Trovão",
        "lore": "Neto de um lendário mago, Laxus herdou o poder de matar deuses do trovão — literalmente consumir trovões divinos e torná-los mais fortes. Em um mundo onde semi-deuses e gigantes do trovão proliferam, Laxus tornou-se uma necessidade estratégica para a sobrevivência humana.",
        "ab": [
          "Raio de Destruição Divina",
          "Consumo de Trovão",
          "Forma do Imperador"
        ],
        "pow": 90,
        "spd": 88,
        "def": 82,
        "int": 75,
        "align": "good",
        "region": "Thornwall",
        "status": "Ativo"
      },
      {
        "n": "Maki",
        "f": "Maki.png",
        "t": "A Especialista nas Armas",
        "role": "Mestre das Armas",
        "lore": "Uma guerreira que alcançou perfeição física absoluta sem nenhum poder mágico inato — apenas treino. Maki compensa sua falta de magia com uma maestria em armas que transcende qualquer mágico. Cada arma que toca torna-se extensão perfeita de seu corpo.",
        "ab": [
          "Maestria de Armas",
          "Perfeição Física",
          "Adaptação Instantânea"
        ],
        "pow": 85,
        "spd": 95,
        "def": 82,
        "int": 85,
        "align": "neutral",
        "region": "Thornwall",
        "status": "Ativa"
      },
      {
        "n": "Malenia",
        "f": "malenia.png",
        "t": "A Deusa da Podridão",
        "role": "Guerreira Amaldiçoada da Podridão",
        "lore": "Uma guerreira que carrega uma maldição de podridão que devora seu próprio corpo — mas a cada batalha, floresce, cicatriza e recomeça. Seu braço dourado protético é mais forte que qualquer aço. Malenia nunca encontrou derrotas, mesmo quando literalmente destrói-se para vencer.",
        "ab": [
          "Florescer Escarlate",
          "Braço de Ouro",
          "Maldição da Podridão"
        ],
        "pow": 95,
        "spd": 92,
        "def": 75,
        "int": 78,
        "align": "chaos",
        "region": "Errante",
        "status": "Buscando Propósito"
      },
      {
        "n": "Raiden",
        "f": "Raiden.png",
        "t": "O Deus do Trovão Mortal",
        "role": "Deus do Trovão Humano",
        "lore": "Um guerreiro que não nasceu deus mas tornou-se um através de batalhas que transcendem o humano. Raiden canalizou raios durante décadas até que seu corpo se tornou um condutor vivo de eletricidade divina. Protege os humanos contra Onis e demônios com poder que nenhum mortal deveria ter.",
        "ab": [
          "Trovão Mortal Divino",
          "Velocidade do Raio",
          "Proteção Eletromagnética"
        ],
        "pow": 92,
        "spd": 95,
        "def": 82,
        "int": 80,
        "align": "good",
        "region": "Thornwall",
        "status": "Protetor Ativo"
      },
      {
        "n": "Rocks D Xebec",
        "f": "Rocks-D-Xebec.png",
        "t": "A Maior Ameaça que Existiu",
        "role": "O Ser que Aterrorizou o Mundo",
        "lore": "O pirata mais perigoso que já viveu — o único ser que fez os maiores poderes de Eryndor se unirem temporariamente para derrotá-lo. Xebec não queria poder ou riqueza — queria destruir a ordem estabelecida pela raiz. Sua morte foi o evento que precedeu a Grande Fratura.",
        "ab": [
          "Poder que Aterroriza Deuses",
          "Carisma Destrutivo",
          "Vontade de Destruir a Ordem"
        ],
        "pow": 99,
        "spd": 88,
        "def": 90,
        "int": 92,
        "align": "chaos",
        "region": "Lendário",
        "status": "Falecido — Herdeiro Desconhecido"
      },
      {
        "n": "Shamrock",
        "f": "Shamrock.png",
        "t": "O Druida da Batalha",
        "role": "Druida Guerreiro Celta",
        "lore": "Um druida guerreiro que combina a magia da natureza com técnicas de batalha brutais de sua tradição celta. Shamrock faz a terra lutar ao seu lado — pedras voam, raízes prendem, o solo engole. A natureza que ele controla não é gentil; é a natureza predatória em seu estado original.",
        "ab": [
          "Fúria da Natureza",
          "Ritmo da Batalha Druídica",
          "Terra Armada"
        ],
        "pow": 84,
        "spd": 80,
        "def": 82,
        "int": 85,
        "align": "neutral",
        "region": "Florestas do Oeste",
        "status": "Ativo"
      },
      {
        "n": "Shanks",
        "f": "Shanks-2.png",
        "t": "O Cabelo Vermelho",
        "role": "Imperador do Equilíbrio",
        "lore": "Um imperador que existe não para conquista, mas para equilíbrio. Shanks é o único ser capaz de interromper qualquer conflito com sua presença — sua energia vital é tão refinada que projeta como uma força gravitacional de intimidação pura. Perdeu um braço por escolha e tornou-se mais poderoso depois.",
        "ab": [
          "Haki do Conquistador",
          "Lâmina Perfeita",
          "Presença do Imperador"
        ],
        "pow": 97,
        "spd": 90,
        "def": 88,
        "int": 95,
        "align": "good",
        "region": "Oceano Sul / Errante",
        "status": "Mantendo Equilíbrio"
      },
      {
        "n": "Solaria",
        "f": "Solaria.png",
        "t": "A Guerreira do Sol",
        "role": "Campeã da Luz Solar",
        "lore": "Uma guerreira abençoada pelo sol primordial de Eryndor, Solaria canalizou durante décadas a luz solar diretamente em seu corpo. Pode transformar luz em força de combate, em cura ou em destruição. Em batalhas noturnas, cria seu próprio sol.",
        "ab": [
          "Feixe Solar",
          "Bênção da Luz",
          "Criação de Solstício"
        ],
        "pow": 88,
        "spd": 85,
        "def": 78,
        "int": 82,
        "align": "good",
        "region": "Aethelos / Thornwall",
        "status": "Ativa"
      },
      {
        "n": "Toji",
        "f": "Toji.png",
        "t": "O Assassino dos Feiticeiros",
        "role": "Caçador do Sobrenatural",
        "lore": "Um ser humano comum — literalmente sem energia mágica inata — que se tornou o maior caçador de criaturas sobrenaturais de Eryndor. Toji compreendeu algo fundamental: poder mágico é previsível, e o imprevisível mata o previsível. Cada batalha que vence é com técnica pura e inteligência.",
        "ab": [
          "Técnica de Matança de Feiticeiros",
          "Corpo Aperfeiçoado",
          "Imprevisibilidade"
        ],
        "pow": 88,
        "spd": 97,
        "def": 75,
        "int": 92,
        "align": "neutral",
        "region": "Errante",
        "status": "Caçando"
      },
      {
        "n": "Vice Almirante Bastille",
        "f": "Vice-Almirante Bastille.png",
        "t": "O Gigante de Armadura",
        "role": "Oficial Militar de Elite",
        "lore": "Um vice-almirante de estatura gigantesca e armadura impenetrável que lidera os esforços militares humanos contra a invasão demoníaca no sul. Bastille é a prova de que a estrutura e a disciplina militares podem enfrentar poder sobrenatural quando aplicadas com inteligência estratégica.",
        "ab": [
          "Armadura de Elite",
          "Comando Tático",
          "Lâmina dos Gigantes"
        ],
        "pow": 85,
        "spd": 68,
        "def": 93,
        "int": 85,
        "align": "good",
        "region": "Thornwall Sul",
        "status": "Em Combate"
      },
      {
        "n": "Garp",
        "f": "Garp-V-1.png",
        "t": "O Garp",
        "role": "Personagem de Humanos",
        "lore": "Garp é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Humanos, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Humanos",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 81,
        "spd": 65,
        "def": 68,
        "int": 79,
        "align": "neutral",
        "region": "Thornwall",
        "status": "Ativo"
      },
      {
        "n": "Kaelen",
        "f": "Kaelen-V-1.png",
        "t": "O Kaelen",
        "role": "Personagem de Humanos",
        "lore": "Kaelen é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Humanos, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Humanos",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 60,
        "spd": 75,
        "def": 80,
        "int": 55,
        "align": "neutral",
        "region": "Thornwall",
        "status": "Ativo"
      },
      {
        "n": "Scopper Gaban",
        "f": "Scopper-Gaban-V-1.png",
        "t": "O Scopper Gaban",
        "role": "Personagem de Humanos",
        "lore": "Scopper Gaban é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Humanos, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Humanos",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 74,
        "spd": 75,
        "def": 87,
        "int": 71,
        "align": "neutral",
        "region": "Thornwall",
        "status": "Ativo"
      }
    ]
  },
  {
    "id": "mago",
    "name": "Magos",
    "folder": "Magos",
    "color": "#1abc9c",
    "glow": "rgba(26,188,156,0.45)",
    "color2": "#6ef5d5",
    "icon": "✦",
    "count": 8,
    "region": "Torres do Exílio",
    "trait": "Controladores das leis arcanas do mundo",
    "desc": "Estudiosos e praticantes das artes arcanas que foram forçados ao exílio quando a Grande Fratura desestabilizou os fundamentos da magia. Agora retornam, sabendo que seu conhecimento é insubstituível para conter a expansão do Vazio. Os Magos são poucos mas cada um representa séculos de conhecimento concentrado.",
    "characters": [
      {
        "n": "Dravok",
        "f": "Dravok-V-1.png",
        "t": "O Feiticeiro das Bestas",
        "role": "Mago Bestial",
        "lore": "Um mago que abandonou a magia convencional para estudar os espíritos animais primordiais. Dravok canaliza a essência de predadores extintos, tornando-se temporariamente algo entre feiticeiro e besta. Sua especialidade é adaptar e combinar — cada forma animal que absorve adiciona ao seu repertório.",
        "ab": [
          "Espíritos Animais",
          "Fusão Bestial",
          "Magia da Natureza Primordial"
        ],
        "pow": 82,
        "spd": 85,
        "def": 75,
        "int": 90,
        "align": "neutral",
        "region": "Wildmere",
        "status": "Ativo"
      },
      {
        "n": "Gowther Original",
        "f": "Gowther-Original-1.png",
        "t": "O Criador de Bonecas",
        "role": "Arcano Criador",
        "lore": "O criador original — um mago que passou séculos estudando como dar vida artificial a matéria inerte. Gowther não é o que parece; cria entidades que são indistinguíveis de seres vivos, mas são fundamentalmente diferentes. A fronteira entre criação e vida real é algo que ele examina sem descanso.",
        "ab": [
          "Criação de Vida Artificial",
          "Manipulação de Memórias",
          "Alquimia do Ser"
        ],
        "pow": 75,
        "spd": 68,
        "def": 70,
        "int": 100,
        "align": "neutral",
        "region": "Torres do Exílio",
        "status": "Ativo"
      },
      {
        "n": "Kurogam Enma",
        "f": "Kurogam-Enma-V-1.png",
        "t": "A Feiticeira das Chamas",
        "role": "Feiticeira Destrutiva",
        "lore": "Uma feiticeira cujo domínio sobre o fogo arcano é tão total que seu próprio corpo queima em manifestação permanente de poder. Kurogam-Enma não usa fire como elemento — usa fogo como linguagem, expressando sua vontade através de chamas que obedecem pensamentos.",
        "ab": [
          "Inferno Arcano",
          "Chamas do Pensamento",
          "Forma de Fogo Puro"
        ],
        "pow": 88,
        "spd": 78,
        "def": 72,
        "int": 92,
        "align": "chaos",
        "region": "Torres do Exílio",
        "status": "Ativa"
      },
      {
        "n": "Melina",
        "f": "Melina-V-1.png",
        "t": "A Donzela Guia",
        "role": "Maga da Orientação",
        "lore": "Aparentemente gentil, Melina carrega um propósito devastador que ela própria questiona. Sua magia é de orientação e transformação — ela não destrói, ela dirige. Mas o que ela dirige pode ser tão destrutivo quanto qualquer arma. Conhece segredos dos Semi-Deuses que eles prefeririam que permanecessem secretos.",
        "ab": [
          "Orientação da Chama",
          "Transformação do Destino",
          "Segredos Divinos"
        ],
        "pow": 80,
        "spd": 78,
        "def": 72,
        "int": 97,
        "align": "neutral",
        "region": "Errante",
        "status": "Guiando"
      },
      {
        "n": "Shinso",
        "f": "Shinso-V-1.png",
        "t": "O Mago do Raio Proibido",
        "role": "Praticante das Artes Proibidas",
        "lore": "Um mago que cruzou deliberadamente os limites do que a ordem arcana permite — desenvolvendo técnicas de raio que desequilibram o próprio campo mágico ao redor. Shinso foi exilado não por ser maligno, mas por ser inconvenientemente poderoso para as estruturas estabelecidas.",
        "ab": [
          "Raio Proibido",
          "Disrupção Mágica",
          "Arte Proibida do Trovão"
        ],
        "pow": 86,
        "spd": 85,
        "def": 72,
        "int": 90,
        "align": "chaos",
        "region": "Torres do Exílio",
        "status": "Exilado — Ativo"
      },
      {
        "n": "Void",
        "f": "Void-V-1.png",
        "t": "O Arcano da Morte",
        "role": "Arquimago da Morte",
        "lore": "Um feiticeiro que não estuda a morte como conceito filosófico, mas como sistema técnico manipulável. Void descobriu que a morte é uma forma de energia como qualquer outra — e que pode ser canalizada, redirecionada e amplificada. É o pesadelo de qualquer ser que acredita que morrer é o pior destino possível.",
        "ab": [
          "Manipulação da Morte",
          "Arqueiro da Extinção",
          "Barreira do Fim"
        ],
        "pow": 87,
        "spd": 72,
        "def": 80,
        "int": 97,
        "align": "evil",
        "region": "Torres do Exílio",
        "status": "Pesquisando"
      },
      {
        "n": "Zephyr",
        "f": "Zephyr-V-1.png",
        "t": "O Caos do Vento",
        "role": "Mago das Tempestades",
        "lore": "Um mago cujo domínio sobre ventos e tempestades é vasto mas notoriamente instável — a magia de Zephyr funciona perfeitamente quando ele mantém calma, o que raramente acontece. Extremamente poderoso em momentos de necessidade; perigosamente imprevisível no resto do tempo.",
        "ab": [
          "Tempestade do Caos",
          "Vento do Impossível",
          "Controle pelo Caos"
        ],
        "pow": 85,
        "spd": 88,
        "def": 70,
        "int": 82,
        "align": "chaos",
        "region": "Torres do Exílio",
        "status": "Ativo — Caótico"
      },
      {
        "n": "Hajime",
        "f": "Hajime.png",
        "t": "O Hajime",
        "role": "Personagem de Magos",
        "lore": "Hajime é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Magos, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Magos",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 67,
        "spd": 90,
        "def": 56,
        "int": 63,
        "align": "neutral",
        "region": "Torres do Exílio",
        "status": "Ativo"
      }
    ]
  },
  {
    "id": "meio",
    "name": "Meio-Sangue",
    "folder": "Meio-Sangue",
    "color": "#bdc3c7",
    "glow": "rgba(189,195,199,0.5)",
    "color2": "#ffffff",
    "icon": "◈",
    "count": 12,
    "region": "Desconhecida",
    "trait": "O único ser entre dois mundos",
    "desc": "Uma categoria de uma única existência conhecida — a Meio-Sangue. Nascida de pai demoníaco e mãe semi-divina, ro é um paradoxo impossível que a física e a magia de Eryndor deveriam ter impedido de existir. Ela é a chave das profecias de salvação e destruição do mundo.",
    "characters": [
      {
        "n": "Kaelia",
        "f": "Kaelia-V-1.png",
        "t": "A Filha do Impossível",
        "role": "Meio-Sangue — Chave das Profecias",
        "lore": "Nascida de um Demônio e uma Semi-Deusa em uma união que deveria ser impossível, Kaelia carrega em seu sangue tanto o poder destrutivo de Sombrath quanto a graça divina de Aethelos. Pode atravessar todos os planos de existência sem dano. Pode fechar a Fissura do Vazio — mas fechá-la pode exigir sua própria aniquilação. Ela sabe disso. Ainda assim, caminha em direção ao seu destino.",
        "ab": [
          "Travessia entre Planos",
          "Sangue dos Dois Mundos",
          "Chave da Fissura do Vazio"
        ],
        "pow": 92,
        "spd": 88,
        "def": 85,
        "int": 95,
        "align": "good",
        "region": "Errante — Buscada por Todos",
        "status": "A Profecia a Encontra"
      },
      {
        "n": "Barba Branca",
        "f": "Barba-Branca-V-1.png",
        "t": "O Imperador dos Mares",
        "role": "Lenda do Mar e do Sangue",
        "lore": "Barba Branca nasceu humano, mas o mar o moldou como se fosse uma raça à parte. Suas batalhas contra monstros e impérios deixaram nele marcas de algo além da humanidade comum. Depois de cruzar linhas que poucos humanos sobreviveriam para contar, foi reconhecido entre os Meio-Sangue como alguém que carrega forças incompatíveis no mesmo corpo.",
        "ab": [
          "Terremoto Sísmico",
          "Voz do Trovão",
          "Maremoto"
        ],
        "pow": 98,
        "spd": 72,
        "def": 90,
        "int": 85,
        "align": "neutral",
        "region": "Lendário",
        "status": "Falecido — Lenda"
      },
      {
        "n": "Katauri",
        "f": "Katauri-2.png",
        "t": "A Espada do Limiar",
        "role": "Duellista entre Sangues",
        "lore": "Katauri nunca pertenceu inteiramente aos humanos. A linhagem que o gerou foi marcada por uma antiga mistura de sangue demoníaco e divino, algo que ele passou a esconder por anos. Ao aceitar essa verdade, tornou-se Meio-Sangue e passou a lutar como ponte viva entre pureza e corrupção.",
        "ab": [
          "Corte Perfeito",
          "Técnica do Oriente",
          "Velocidade do Raio"
        ],
        "pow": 86,
        "spd": 92,
        "def": 78,
        "int": 85,
        "align": "neutral",
        "region": "Thornwall / Errante",
        "status": "Ativo"
      },
      {
        "n": "Gorefist",
        "f": "Gorefist-V-1.png",
        "t": "O Gorefist",
        "role": "Personagem de Meio-Sangue",
        "lore": "Gorefist é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Meio-Sangue, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Meio-Sangue",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 74,
        "spd": 85,
        "def": 57,
        "int": 71,
        "align": "neutral",
        "region": "Desconhecida",
        "status": "Ativo"
      },
      {
        "n": "Ibaraki",
        "f": "Ibaraki-V-1.png",
        "t": "O Ibaraki",
        "role": "Personagem de Meio-Sangue",
        "lore": "Ibaraki é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Meio-Sangue, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Meio-Sangue",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 67,
        "spd": 80,
        "def": 86,
        "int": 63,
        "align": "neutral",
        "region": "Desconhecida",
        "status": "Ativo"
      },
      {
        "n": "Kross",
        "f": "Kross-V-1.png",
        "t": "O Kross",
        "role": "Personagem de Meio-Sangue",
        "lore": "Kross é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Meio-Sangue, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Meio-Sangue",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 88,
        "spd": 70,
        "def": 74,
        "int": 87,
        "align": "neutral",
        "region": "Desconhecida",
        "status": "Ativo"
      },
      {
        "n": "Kuma",
        "f": "Kuma-V-1.png",
        "t": "O Kuma",
        "role": "Personagem de Meio-Sangue",
        "lore": "Kuma é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Meio-Sangue, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Meio-Sangue",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 81,
        "spd": 65,
        "def": 68,
        "int": 79,
        "align": "neutral",
        "region": "Desconhecida",
        "status": "Ativo"
      },
      {
        "n": "Saru",
        "f": "Saru-V-1.png",
        "t": "O Saru",
        "role": "Personagem de Meio-Sangue",
        "lore": "Saru é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Meio-Sangue, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Meio-Sangue",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 81,
        "spd": 65,
        "def": 68,
        "int": 79,
        "align": "neutral",
        "region": "Desconhecida",
        "status": "Ativo"
      },
      {
        "n": "Solan",
        "f": "Solan-V-1.png",
        "t": "O Solan",
        "role": "Personagem de Meio-Sangue",
        "lore": "Solan é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Meio-Sangue, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Meio-Sangue",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 88,
        "spd": 70,
        "def": 74,
        "int": 87,
        "align": "neutral",
        "region": "Desconhecida",
        "status": "Ativo"
      },
      {
        "n": "Tentaku",
        "f": "Tentaku-V-1.png",
        "t": "O Tentaku",
        "role": "Personagem de Meio-Sangue",
        "lore": "Tentaku é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Meio-Sangue, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Meio-Sangue",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 67,
        "spd": 80,
        "def": 86,
        "int": 63,
        "align": "neutral",
        "region": "Desconhecida",
        "status": "Ativo"
      },
      {
        "n": "Thorne",
        "f": "Thorne-V-1.png",
        "t": "O Thorne",
        "role": "Personagem de Meio-Sangue",
        "lore": "Thorne é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Meio-Sangue, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Meio-Sangue",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 60,
        "spd": 75,
        "def": 80,
        "int": 55,
        "align": "neutral",
        "region": "Desconhecida",
        "status": "Ativo"
      },
      {
        "n": "Valerion",
        "f": "Valerion-V-1.png",
        "t": "O Valerion",
        "role": "Personagem de Meio-Sangue",
        "lore": "Valerion é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Meio-Sangue, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Meio-Sangue",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 74,
        "spd": 85,
        "def": 57,
        "int": 71,
        "align": "neutral",
        "region": "Desconhecida",
        "status": "Ativo"
      }
    ]
  },
  {
    "id": "monstro",
    "name": "Monstros",
    "folder": "Monstros",
    "color": "#27ae60",
    "glow": "rgba(39,174,96,0.4)",
    "color2": "#5ce89a",
    "icon": "🦷",
    "count": 25,
    "region": "Wildmere / Profundezas",
    "trait": "Criaturas além da categorização normal",
    "desc": "Seres que não se encaixam nas categorias convencionais — criaturas antigas, animais que evoluíram além do reconhecível, ou entidades que emergiram de concentrações anômalas de energia. Os Monstros não têm agenda política; agem por instinto, território ou fome.",
    "characters": [
      {
        "n": "Battle Beast",
        "f": "Battle-Beast-V-1.png",
        "t": "O Campeão dos Monstros",
        "role": "Campeão das Bestas",
        "lore": "Um leão humanóide em armadura de guerra — o único Monstro com cognição avançada e código de honra. Battle Beast é campeão de sua espécie: combate os mais fortes que encontra para garantir que os Monstros não sejam extintos por nenhuma das facções da guerra. Sua armadura vermelha é feita de materiais que nenhuma forja humana pode reproduzir.",
        "ab": [
          "Garra do Campeão",
          "Rugido de Guerra",
          "Honra da Besta"
        ],
        "pow": 93,
        "spd": 85,
        "def": 90,
        "int": 75,
        "align": "neutral",
        "region": "Wildmere",
        "status": "Protetor"
      },
      {
        "n": "Besouro",
        "f": "Besouro-V-1.png",
        "t": "O Cavaleiro Inseto",
        "role": "Guerreiro Inseto Ancestral",
        "lore": "Um inseto evoluído ao longo de milênios por exposição a energia Kore residual, tornando-se um ser de armadura natural quase impenetrável. Besouro não tem motivação além da sobrevivência e território — mas seu território é enorme e sua determinação em protegê-lo é absoluta.",
        "ab": [
          "Armadura Quitinosa",
          "Chifre Perfurante",
          "Resistência Absurda"
        ],
        "pow": 82,
        "spd": 72,
        "def": 95,
        "int": 40,
        "align": "neutral",
        "region": "Wildmere",
        "status": "Territorial"
      },
      {
        "n": "Davy Jones",
        "f": "Davy-Jones-V-1.png",
        "t": "O Terror dos Mares",
        "role": "Horror Abissal",
        "lore": "A forma monstruosa completa do Capitão Davy Jones — quando abandona qualquer semblança humana e manifesta toda a sua natureza de criatura abissal. Tentáculos, chifres, uma face de pesadelo oceânico. Esta é o que o pacto o tornou completamente, longe de qualquer ilusão.",
        "ab": [
          "Tentáculos do Abismo",
          "Horror Aquático",
          "Voz das Profundezas"
        ],
        "pow": 90,
        "spd": 72,
        "def": 85,
        "int": 78,
        "align": "evil",
        "region": "Oceano Profundo",
        "status": "Ativo"
      },
      {
        "n": "Gloop",
        "f": "Gloop-V-1.png",
        "t": "A Anomalia Harmônica",
        "role": "Entidade Misteriosa",
        "lore": "Uma criatura de aparência benigna e sons musicais cujo poder real permanece incompreendido. Gloop absorve e retransmite energia em frequências que afetam a magia ao redor. É possivelmente um mecanismo de equilíbrio natural — ou uma arma de uma inteligência que ainda não se revelou.",
        "ab": [
          "Absorção de Energia",
          "Transmissão Harmônica",
          "Anomalia Inexplicável"
        ],
        "pow": 60,
        "spd": 55,
        "def": 68,
        "int": 92,
        "align": "neutral",
        "region": "Desconhecida",
        "status": "Existindo"
      },
      {
        "n": "Guardian Ape",
        "f": "Guardian-Ape-V-1.png",
        "t": "O Guardião Sem Cabeça",
        "role": "Guardião das Florestas Esquecidas",
        "lore": "O protetor dos Pântanos Esquecidos — um macaco colossal que sobreviveu a uma decapitação por pura força de vontade territorial. Sem cabeça, tornou-se paradoxalmente mais aterrorizante e mais poderoso. Uma entidade no pescoço cortado emite sons que dissolvem a magia ao redor.",
        "ab": [
          "Fúria Sem Cabeça",
          "Possessão Territorial",
          "Roar Dissolvente"
        ],
        "pow": 88,
        "spd": 78,
        "def": 85,
        "int": 35,
        "align": "neutral",
        "region": "Pântanos Esquecidos",
        "status": "Guardando"
      },
      {
        "n": "Irmã Friede",
        "f": "Irmã-Friede-V-1.png",
        "t": "A Freira das Ruínas Geladas",
        "role": "Fantasma Assassino do Gelo",
        "lore": "Uma entidade que habita ruínas cobertas de neve eterno — uma freira de aparência serena que se torna algo de pesadelo ao combate. Friede não defende seu território; é o território. É o frio, o silêncio e a morte branca que habitam aquelas ruínas.",
        "ab": [
          "Guilhotina de Gelo",
          "Invisibilidade no Gelo",
          "Morte Silenciosa"
        ],
        "pow": 85,
        "spd": 92,
        "def": 78,
        "int": 82,
        "align": "evil",
        "region": "Ruínas do Norte",
        "status": "Habitando"
      },
      {
        "n": "Pyrogon",
        "f": "Pyrogon-V-1.png",
        "t": "O Dragão das Furnas",
        "role": "Dragão Vulcânico",
        "lore": "Um dragão nascido nas câmaras mais profundas dos vulcões de Ignareth, Pyrogon é feito literalmente de magma solidificado e chamas vivas. Não tem escamas — tem lava que flui e se solidifica em tempo real. Combate ao seu lado significa inevitavelmente lutar no fogo.",
        "ab": [
          "Sopro de Magma Puro",
          "Corpo de Lava",
          "Fusão Vulcânica"
        ],
        "pow": 90,
        "spd": 70,
        "def": 93,
        "int": 45,
        "align": "neutral",
        "region": "Ignareth",
        "status": "Territorial"
      },
      {
        "n": "Ratatoskr",
        "f": "Ratatoskr-V-1.png",
        "t": "O Guardião da Árvore",
        "role": "Guardião da Árvore do Mundo",
        "lore": "O esquilo que corre pelo tronco da Árvore do Mundo — um mensageiro de aparência enganosamente adorável que carrega mensagens entre as raízes e os galhos mais altos. Ratatoskr conhece mais segredos do que qualquer ser em Eryndor, e manipula a todos com informações estrategicamente compartilhadas.",
        "ab": [
          "Velocidade da Árvore",
          "Conhecimento de Todos os Segredos",
          "Mensagens que Movem o Mundo"
        ],
        "pow": 55,
        "spd": 100,
        "def": 48,
        "int": 100,
        "align": "chaos",
        "region": "Árvore do Mundo",
        "status": "Ativo"
      },
      {
        "n": "Root",
        "f": "Root-V-1.png",
        "t": "A Besta Primordial",
        "role": "Criatura da Mutação Pura",
        "lore": "Uma criatura que representa o que acontece quando a natureza perde completamente seu rumo — mutações sobre mutações, resultando em algo que desafia qualquer categorização. Root não é hostil por natureza; é o que é por acidente evolutivo em um mundo de energia Kore.",
        "ab": [
          "Mutação Constante",
          "Adaptação Instintiva",
          "Força da Deformação"
        ],
        "pow": 78,
        "spd": 65,
        "def": 82,
        "int": 25,
        "align": "neutral",
        "region": "Wildmere",
        "status": "Errante"
      },
      {
        "n": "Behemoth",
        "f": "Behemoth-V-1.png",
        "t": "O Behemoth",
        "role": "Personagem de Monstros",
        "lore": "Behemoth é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Monstros, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Monstros",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 74,
        "spd": 85,
        "def": 57,
        "int": 71,
        "align": "neutral",
        "region": "Wildmere / Profundezas",
        "status": "Ativo"
      },
      {
        "n": "Drakul Zar",
        "f": "Drakul-Zar-V-1.png",
        "t": "O Drakul Zar",
        "role": "Personagem de Monstros",
        "lore": "Drakul Zar é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Monstros, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Monstros",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 88,
        "spd": 60,
        "def": 69,
        "int": 87,
        "align": "neutral",
        "region": "Wildmere / Profundezas",
        "status": "Ativo"
      },
      {
        "n": "Garchomp",
        "f": "Garchomp-V-1.png",
        "t": "O Garchomp",
        "role": "Personagem de Monstros",
        "lore": "Garchomp é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Monstros, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Monstros",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 74,
        "spd": 85,
        "def": 57,
        "int": 71,
        "align": "neutral",
        "region": "Wildmere / Profundezas",
        "status": "Ativo"
      },
      {
        "n": "Gargul",
        "f": "Gargul-V-1.png",
        "t": "O Gargul",
        "role": "Personagem de Monstros",
        "lore": "Gargul é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Monstros, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Monstros",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 60,
        "spd": 75,
        "def": 80,
        "int": 55,
        "align": "neutral",
        "region": "Wildmere / Profundezas",
        "status": "Ativo"
      },
      {
        "n": "Glacius",
        "f": "Glacius-V-1.png",
        "t": "O Glacius",
        "role": "Personagem de Monstros",
        "lore": "Glacius é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Monstros, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Monstros",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 67,
        "spd": 80,
        "def": 86,
        "int": 63,
        "align": "neutral",
        "region": "Wildmere / Profundezas",
        "status": "Ativo"
      },
      {
        "n": "Gnash",
        "f": "Gnash-V-1.png",
        "t": "O Gnash",
        "role": "Personagem de Monstros",
        "lore": "Gnash é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Monstros, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Monstros",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 88,
        "spd": 70,
        "def": 74,
        "int": 87,
        "align": "neutral",
        "region": "Wildmere / Profundezas",
        "status": "Ativo"
      },
      {
        "n": "Gorgoroth",
        "f": "Gorgoroth-V-1.png",
        "t": "O Gorgoroth",
        "role": "Personagem de Monstros",
        "lore": "Gorgoroth é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Monstros, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Monstros",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 81,
        "spd": 90,
        "def": 63,
        "int": 79,
        "align": "neutral",
        "region": "Wildmere / Profundezas",
        "status": "Ativo"
      },
      {
        "n": "Ignisaurus",
        "f": "Ignisaurus-V-1.png",
        "t": "O Ignisaurus",
        "role": "Personagem de Monstros",
        "lore": "Ignisaurus é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Monstros, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Monstros",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 88,
        "spd": 60,
        "def": 69,
        "int": 87,
        "align": "neutral",
        "region": "Wildmere / Profundezas",
        "status": "Ativo"
      },
      {
        "n": "Kongor",
        "f": "Kongor-V-1.png",
        "t": "O Kongor",
        "role": "Personagem de Monstros",
        "lore": "Kongor é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Monstros, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Monstros",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 60,
        "spd": 75,
        "def": 80,
        "int": 55,
        "align": "neutral",
        "region": "Wildmere / Profundezas",
        "status": "Ativo"
      },
      {
        "n": "Kragor",
        "f": "Kragor-V-1.png",
        "t": "O Kragor",
        "role": "Personagem de Monstros",
        "lore": "Kragor é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Monstros, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Monstros",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 60,
        "spd": 75,
        "def": 80,
        "int": 55,
        "align": "neutral",
        "region": "Wildmere / Profundezas",
        "status": "Ativo"
      },
      {
        "n": "Kragos",
        "f": "Kragos-V-1.png",
        "t": "O Kragos",
        "role": "Personagem de Monstros",
        "lore": "Kragos é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Monstros, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Monstros",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 60,
        "spd": 75,
        "def": 80,
        "int": 55,
        "align": "neutral",
        "region": "Wildmere / Profundezas",
        "status": "Ativo"
      },
      {
        "n": "Necros",
        "f": "Necros-V-1.png",
        "t": "O Necros",
        "role": "Personagem de Monstros",
        "lore": "Necros é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Monstros, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Monstros",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 60,
        "spd": 75,
        "def": 80,
        "int": 55,
        "align": "neutral",
        "region": "Wildmere / Profundezas",
        "status": "Ativo"
      },
      {
        "n": "Ossifago",
        "f": "Ossifago-V-1.png",
        "t": "O Ossifago",
        "role": "Personagem de Monstros",
        "lore": "Ossifago é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Monstros, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Monstros",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 74,
        "spd": 85,
        "def": 57,
        "int": 71,
        "align": "neutral",
        "region": "Wildmere / Profundezas",
        "status": "Ativo"
      },
      {
        "n": "Vermithrax",
        "f": "Vermithrax-V-1.png",
        "t": "O Vermithrax",
        "role": "Personagem de Monstros",
        "lore": "Vermithrax é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Monstros, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Monstros",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 88,
        "spd": 60,
        "def": 69,
        "int": 87,
        "align": "neutral",
        "region": "Wildmere / Profundezas",
        "status": "Ativo"
      },
      {
        "n": "Volcanus",
        "f": "Volcanus-V-1.png",
        "t": "O Volcanus",
        "role": "Personagem de Monstros",
        "lore": "Volcanus é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Monstros, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Monstros",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 74,
        "spd": 85,
        "def": 57,
        "int": 71,
        "align": "neutral",
        "region": "Wildmere / Profundezas",
        "status": "Ativo"
      },
      {
        "n": "Vorgas",
        "f": "Vorgas-V-1.png",
        "t": "O Vorgas",
        "role": "Personagem de Monstros",
        "lore": "Vorgas é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Monstros, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Monstros",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 60,
        "spd": 75,
        "def": 80,
        "int": 55,
        "align": "neutral",
        "region": "Wildmere / Profundezas",
        "status": "Ativo"
      }
    ]
  },
  {
    "id": "mutante",
    "name": "Mutantes",
    "folder": "Mutantes",
    "color": "#f39c12",
    "glow": "rgba(243,156,18,0.45)",
    "color2": "#ffd460",
    "icon": "🧬",
    "count": 32,
    "region": "Wildmere / Errante",
    "trait": "Transformados pela corrupção do Kore",
    "desc": "Seres que foram expostos à energia Kore corrompida e transformados — não destruídos, mas reescritos. Cada Mutante é uma história de identidade perdida e poder não pedido. Alguns abraçam o que se tornaram; a maioria luta com isso eternamente.",
    "characters": [
      {
        "n": "Bone Kore",
        "f": "Bone-Kore-V-1.png",
        "t": "O Arsenal de Ossos",
        "role": "Arsenal Vivo",
        "lore": "Os ossos de Bone-Kore cresceram para fora de seu corpo em resposta à energia Kore, criando uma armadura natural e um arsenal orgânico. Cada espículo de osso é uma arma potencial. Seu sistema nervoso reescreveu-se para sentir os ossos externos como extremidades funcionais.",
        "ab": [
          "Lança de Osso",
          "Armadura Natural",
          "Regeneração Óssea"
        ],
        "pow": 84,
        "spd": 72,
        "def": 93,
        "int": 62,
        "align": "neutral",
        "region": "Wildmere",
        "status": "Ativo"
      },
      {
        "n": "Crush",
        "f": "Crush-V-1.png",
        "t": "O Bruto Mutado",
        "role": "Força Bruta Pura",
        "lore": "Uma mutação que amplificou cada fibra muscular ao extremo — Crush é o que a fisiologia humana parece quando reescrita sem restrições. Não tem velocidade, não tem técnica sofisticada, mas sua força é tão absurda que a técnica torna-se irrelevante. Uma montanha que decide caminhar.",
        "ab": [
          "Força Ilimitada",
          "Impacto do Coloso",
          "Resistência Mutante"
        ],
        "pow": 92,
        "spd": 48,
        "def": 90,
        "int": 38,
        "align": "chaos",
        "region": "Wildmere",
        "status": "Ativo"
      },
      {
        "n": "Echo Kore",
        "f": "Echo-Kore-V-1.png",
        "t": "O Mutante Sônico",
        "role": "Guerreiro do Som",
        "lore": "Uma mutação de morcego que integrou energia Kore, criando um ser capaz de emitir ondas sônicas que destroem matéria em nível molecular. Echo-Kore usa ecolocalização para enxergar além de qualquer sentido normal — e o que vê, pode destruir com precisão cirúrgica.",
        "ab": [
          "Grito Sônico",
          "Ecolocalização Perfeita",
          "Disrupção Molecular"
        ],
        "pow": 82,
        "spd": 90,
        "def": 72,
        "int": 82,
        "align": "neutral",
        "region": "Errante",
        "status": "Ativo"
      },
      {
        "n": "Gale",
        "f": "Gale-V-1.png",
        "t": "O Caçador do Vento",
        "role": "Predador Aéreo",
        "lore": "Uma mutação entre pássaro e morcego que resultou em domínio absoluto do ar. Gale não só voa — comanda ventos e correntes de ar como extensões de seu próprio corpo. Seu método de caça é remover o ar ao redor da presa até o necessário.",
        "ab": [
          "Domínio do Ar",
          "Vácuo",
          "Voo Supersônico"
        ],
        "pow": 80,
        "spd": 96,
        "def": 68,
        "int": 72,
        "align": "neutral",
        "region": "Céus de Wildmere",
        "status": "Caçando"
      },
      {
        "n": "Kakuzu",
        "f": "Kakuzu-V-1.png",
        "t": "O Costurado",
        "role": "Multi-Célula Adaptativo",
        "lore": "Um ser costurado — literalmente unido de múltiplos corpos, cada um com poderes elementares diferentes. A mutação do Kore fundiu Kakuzu com seus inimigos mortos, expandindo o original com cada ser que derrota. Cada parte de seu corpo tem sua própria consciência, que ele coordena com dificuldade crescente.",
        "ab": [
          "Cinco Corações",
          "Adaptação Elemental",
          "Costura da Morte"
        ],
        "pow": 88,
        "spd": 72,
        "def": 87,
        "int": 78,
        "align": "evil",
        "region": "Errante",
        "status": "Ativo"
      },
      {
        "n": "Lobisome",
        "f": "Lobisome-V-1.png",
        "t": "O Primeiro Lobisomem",
        "role": "Alfa Original",
        "lore": "O primeiro da linhagem — o protótipo da mutação lobisomem que se espalharia por Eryndor. Lobisome não escolheu a transformação mas abraçou-a completamente. Lidera seu clã com autoridade que combina instinto animal e inteligência predatória refinada.",
        "ab": [
          "Transformação Alfa",
          "Chamado da Alcateia",
          "Fúria da Lua"
        ],
        "pow": 83,
        "spd": 88,
        "def": 80,
        "int": 68,
        "align": "chaos",
        "region": "Wildmere",
        "status": "Liderando"
      },
      {
        "n": "Lobisomem V2",
        "f": "Lobisomem-V-2.png",
        "t": "A Segunda Evolução",
        "role": "Lobisomem Evoluído Beta",
        "lore": "A segunda geração da linhagem lobisomem — maior, mais rápido, mais capaz de controlar a transformação. Representa o sucesso da adaptação: onde a primeira geração sofria, a segunda prosperou.",
        "ab": [
          "Transformação Controlada",
          "Garras do Caçador",
          "Sentidos Amplificados"
        ],
        "pow": 85,
        "spd": 90,
        "def": 82,
        "int": 72,
        "align": "neutral",
        "region": "Wildmere",
        "status": "Ativo"
      },
      {
        "n": "Lobisomem V3",
        "f": "Lobisomem-V-3.png",
        "t": "A Terceira Evolução",
        "role": "Lobisomem Ápice",
        "lore": "A terceira e atual geração da mutação lobisomem — quase não se assemelha mais ao lobo original. Esta versão integrou elementos dracônicos na mutação, criando algo novo. Marca o ponto onde a mutação deixou de ser corrupção e tornou-se evolução genuína.",
        "ab": [
          "Forma Dracônica-Lobisomem",
          "Rugido Ancestral",
          "Predador Ápice"
        ],
        "pow": 88,
        "spd": 87,
        "def": 85,
        "int": 75,
        "align": "neutral",
        "region": "Wildmere",
        "status": "Ativo"
      },
      {
        "n": "Malagor",
        "f": "Malagor-V-1.png",
        "t": "O Dragão das Serpentes",
        "role": "Dragão Serpentino Caótico",
        "lore": "Uma mutação que fundiu múltiplas criaturas serpentinas com energia dracônica — o resultado é um ser de múltiplas cabeças serpentinas e poder elemental desconcertante. Malagor não tem hierarquia interna clara entre suas cabeças, tornando seus ataques imprevisíveis mesmo para seus aliados.",
        "ab": [
          "Veneno Dracônico",
          "Múltiplas Mordidas",
          "Caos Serpentino"
        ],
        "pow": 87,
        "spd": 78,
        "def": 82,
        "int": 55,
        "align": "chaos",
        "region": "Sombrath / Wildmere",
        "status": "Ativo"
      },
      {
        "n": "Rage Kore",
        "f": "Rage-Kore-V-1.png",
        "t": "A Fúria Encarnada",
        "role": "Entidade de Fúria",
        "lore": "Uma mutação tão profundamente afetada pela raiva que a própria raiva tornou-se sua substância. Rage-Kore não está com raiva — é a raiva, manifestada em forma física. O cristal Kore que o criou absorveu décadas de sofrimento acumulado antes de transformá-lo.",
        "ab": [
          "Explosão de Raiva Pura",
          "Forma da Fúria",
          "Amplificação da Agonia"
        ],
        "pow": 90,
        "spd": 82,
        "def": 78,
        "int": 42,
        "align": "chaos",
        "region": "Korrfeld",
        "status": "Ativo — Incontrolável"
      },
      {
        "n": "Rin Kore",
        "f": "Rin-Kore-V-1.png",
        "t": "A Vampira do Kore",
        "role": "Predadora Vampírica",
        "lore": "Uma mutação que combinou características vampíricas com energia Kore — asas negras, garras afiadas e um apetite que vai além de sangue. Rin consome energia vital diretamente, e cada consumo a fortalece. Extremamente veloz e extremamente perigosa em combate próximo.",
        "ab": [
          "Consumo de Vida",
          "Asas do Vazio",
          "Velocidade Vampírica"
        ],
        "pow": 83,
        "spd": 95,
        "def": 72,
        "int": 78,
        "align": "evil",
        "region": "Errante",
        "status": "Caçando"
      },
      {
        "n": "Satan Soul",
        "f": "Satan-Soul-V-1.png",
        "t": "A Absorvedora",
        "role": "Portadora da Alma Demoníaca",
        "lore": "Uma mutante que absorveu a alma de um demônio durante a Grande Fratura, fundindo-se com ela sem ser completamente consumida. Satan-Soul existe em equilíbrio precário entre sua identidade original e a entidade que coabita seu corpo — um equilíbrio que fica mais difícil manter a cada batalha.",
        "ab": [
          "Forma Demoníaca",
          "Chamas da Alma Dupla",
          "Equilíbrio do Impossível"
        ],
        "pow": 87,
        "spd": 82,
        "def": 75,
        "int": 82,
        "align": "chaos",
        "region": "Errante",
        "status": "Equilibrando"
      },
      {
        "n": "Savage",
        "f": "Savage-V-1.png",
        "t": "O Lobo Selvagem",
        "role": "Besta Pura",
        "lore": "Uma mutação lobisomem que perdeu completamente o lado humano — Savage é pura besta, puro instinto, pura fúria territorial. Mais poderoso que lobisomens com consciência porque não desperdiça energia em escolhas éticas.",
        "ab": [
          "Fúria Pura",
          "Garras da Besta",
          "Instinto de Predador"
        ],
        "pow": 82,
        "spd": 90,
        "def": 78,
        "int": 20,
        "align": "chaos",
        "region": "Wildmere",
        "status": "Caçando"
      },
      {
        "n": "Tri Gorgon",
        "f": "Tri-Gorgon-V-1.png",
        "t": "O Senhor das Gorgônas",
        "role": "Gorgona de Três Cabeças",
        "lore": "Uma mutação tripla da serpente petrificante — três gorgônas que fundiram seus poderes em um único ser de três cabeças. Cada cabeça tem um ângulo diferente de ataque, tornando impossível desviar de todas simultaneamente. A petrificação é completa em menos de três segundos de contato visual.",
        "ab": [
          "Olhar Petrificante",
          "Três Ângulos de Ataque",
          "Veneno das Serpentes"
        ],
        "pow": 85,
        "spd": 72,
        "def": 82,
        "int": 65,
        "align": "evil",
        "region": "Wildmere",
        "status": "Ativo"
      },
      {
        "n": "Valthier",
        "f": "Valthier-V-1.png",
        "t": "O Predador Elegante",
        "role": "Caçador Refinado",
        "lore": "Um mutante de cabelos brancos que manteve sua elegância e inteligência apesar da transformação. Valthier é o exemplo de que mutação e civilidade não são incompatíveis — e usa essa distinção para ser subestimado, com resultados letais para quem o subestima.",
        "ab": [
          "Lâmina de Kore",
          "Refinamento Mortal",
          "Presença do Predador"
        ],
        "pow": 85,
        "spd": 90,
        "def": 80,
        "int": 88,
        "align": "neutral",
        "region": "Errante",
        "status": "Ativo"
      },
      {
        "n": "Vespera",
        "f": "Vespera-V-1.png",
        "t": "A Ferrão da Sombra",
        "role": "Predadora de Sombra e Veneno",
        "lore": "Uma fusão de vespa e morcego com energia Kore escura — Vespera ataca de cima, na sombra, com um ferrão que paralysa antes de matar. Silenciosa, rápida, letal. É a assassina que os Mutantes usam quando precisam que o alvo nunca veja de onde veio o golpe.",
        "ab": [
          "Ferrão Paralisante",
          "Voo nas Sombras",
          "Veneno de Vespa"
        ],
        "pow": 80,
        "spd": 95,
        "def": 68,
        "int": 78,
        "align": "evil",
        "region": "Errante",
        "status": "Missão"
      },
      {
        "n": "Vyryn Wing",
        "f": "Vyrn-Wing-V-1.png",
        "t": "O Predador Dracônico",
        "role": "Predador dos Céus Dracônico",
        "lore": "Uma mutação que integrou DNA dracônico na linhagem mutante, criando um predador aéreo de proporções impressionantes. Vyryn-Wing não tem a magia de um dragão completo, mas tem sua velocidade, suas garras e seu apetite territorial inexorável.",
        "ab": [
          "Garras Dracônicas",
          "Voo Predatório",
          "Mergulho Letal"
        ],
        "pow": 83,
        "spd": 92,
        "def": 75,
        "int": 58,
        "align": "neutral",
        "region": "Céus de Wildmere",
        "status": "Territorial"
      },
      {
        "n": "Aegis Prime",
        "f": "Aegis Prime-V-1.png",
        "t": "O Aegis Prime",
        "role": "Personagem de Mutantes",
        "lore": "Aegis Prime é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Mutantes, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Mutantes",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 60,
        "spd": 65,
        "def": 75,
        "int": 55,
        "align": "neutral",
        "region": "Wildmere / Errante",
        "status": "Ativo"
      },
      {
        "n": "Bloodfang",
        "f": "Bloodfang-V-1.png",
        "t": "O Bloodfang",
        "role": "Personagem de Mutantes",
        "lore": "Bloodfang é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Mutantes, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Mutantes",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 81,
        "spd": 90,
        "def": 63,
        "int": 79,
        "align": "neutral",
        "region": "Wildmere / Errante",
        "status": "Ativo"
      },
      {
        "n": "Fenrir Rugidor",
        "f": "Fenrir Rugidor-V-1.png",
        "t": "O Fenrir Rugidor",
        "role": "Personagem de Mutantes",
        "lore": "Fenrir Rugidor é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Mutantes, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Mutantes",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 81,
        "spd": 80,
        "def": 58,
        "int": 79,
        "align": "neutral",
        "region": "Wildmere / Errante",
        "status": "Ativo"
      },
      {
        "n": "Frostbite",
        "f": "Frostbite-V-1.png",
        "t": "O Frostbite",
        "role": "Personagem de Mutantes",
        "lore": "Frostbite é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Mutantes, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Mutantes",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 81,
        "spd": 90,
        "def": 63,
        "int": 79,
        "align": "neutral",
        "region": "Wildmere / Errante",
        "status": "Ativo"
      },
      {
        "n": "Gargoyle",
        "f": "Gargoyle-V-1.png",
        "t": "O Gargoyle",
        "role": "Personagem de Mutantes",
        "lore": "Gargoyle é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Mutantes, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Mutantes",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 74,
        "spd": 85,
        "def": 57,
        "int": 71,
        "align": "neutral",
        "region": "Wildmere / Errante",
        "status": "Ativo"
      },
      {
        "n": "Genzo",
        "f": "Genzo-V-1.png",
        "t": "O Genzo",
        "role": "Personagem de Mutantes",
        "lore": "Genzo é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Mutantes, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Mutantes",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 88,
        "spd": 70,
        "def": 74,
        "int": 87,
        "align": "neutral",
        "region": "Wildmere / Errante",
        "status": "Ativo"
      },
      {
        "n": "Grimm",
        "f": "Grimm-V-1.png",
        "t": "O Grimm",
        "role": "Personagem de Mutantes",
        "lore": "Grimm é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Mutantes, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Mutantes",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 88,
        "spd": 70,
        "def": 74,
        "int": 87,
        "align": "neutral",
        "region": "Wildmere / Errante",
        "status": "Ativo"
      },
      {
        "n": "Kruul",
        "f": "Kruul-V-1.png",
        "t": "O Kruul",
        "role": "Personagem de Mutantes",
        "lore": "Kruul é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Mutantes, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Mutantes",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 88,
        "spd": 70,
        "def": 74,
        "int": 87,
        "align": "neutral",
        "region": "Wildmere / Errante",
        "status": "Ativo"
      },
      {
        "n": "Morrigan",
        "f": "Morrigan-V-1.png",
        "t": "O Morrigan",
        "role": "Personagem de Mutantes",
        "lore": "Morrigan é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Mutantes, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Mutantes",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 74,
        "spd": 85,
        "def": 57,
        "int": 71,
        "align": "neutral",
        "region": "Wildmere / Errante",
        "status": "Ativo"
      },
      {
        "n": "Savage Mane",
        "f": "Savage-Mane-V-1.png",
        "t": "O Savage Mane",
        "role": "Personagem de Mutantes",
        "lore": "Savage Mane é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Mutantes, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Mutantes",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 60,
        "spd": 65,
        "def": 75,
        "int": 55,
        "align": "neutral",
        "region": "Wildmere / Errante",
        "status": "Ativo"
      },
      {
        "n": "Scraptron",
        "f": "Scraptron-V-1.png",
        "t": "O Scraptron",
        "role": "Personagem de Mutantes",
        "lore": "Scraptron é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Mutantes, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Mutantes",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 81,
        "spd": 90,
        "def": 63,
        "int": 79,
        "align": "neutral",
        "region": "Wildmere / Errante",
        "status": "Ativo"
      },
      {
        "n": "Tusker",
        "f": "Tusker-V-1.png",
        "t": "O Tusker",
        "role": "Personagem de Mutantes",
        "lore": "Tusker é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Mutantes, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Mutantes",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 60,
        "spd": 75,
        "def": 80,
        "int": 55,
        "align": "neutral",
        "region": "Wildmere / Errante",
        "status": "Ativo"
      },
      {
        "n": "Vector X",
        "f": "Vector-X-V-1.png",
        "t": "O Vector X",
        "role": "Personagem de Mutantes",
        "lore": "Vector X é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Mutantes, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Mutantes",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 74,
        "spd": 85,
        "def": 57,
        "int": 71,
        "align": "neutral",
        "region": "Wildmere / Errante",
        "status": "Ativo"
      },
      {
        "n": "Vespis",
        "f": "Vespis-V-1.png",
        "t": "O Vespis",
        "role": "Personagem de Mutantes",
        "lore": "Vespis é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Mutantes, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Mutantes",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 60,
        "spd": 75,
        "def": 80,
        "int": 55,
        "align": "neutral",
        "region": "Wildmere / Errante",
        "status": "Ativo"
      },
      {
        "n": "Wargen",
        "f": "Wargen-V-1.png",
        "t": "O Wargen",
        "role": "Personagem de Mutantes",
        "lore": "Wargen é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Mutantes, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Mutantes",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 60,
        "spd": 75,
        "def": 80,
        "int": 55,
        "align": "neutral",
        "region": "Wildmere / Errante",
        "status": "Ativo"
      }
    ]
  },
  {
    "id": "oni",
    "name": "Onis",
    "folder": "Onis",
    "color": "#e74c3c",
    "glow": "rgba(231,76,60,0.55)",
    "color2": "#ff9080",
    "icon": "🔥",
    "count": 15,
    "region": "Ignareth",
    "trait": "Nascidos do fogo e da tradição da guerra",
    "desc": "Guerreiros de pele avermelhada e chifres — os Onis são uma raça guerreira que evoluiu ao lado dos vulcões de Ignareth. Sua cultura é de honra marcial absoluta, e sua força física média supera a maioria das outras raças. Sob Zen-Kore-Shin, tornaram-se a força terrestre mais temida da Guerra da Convergência.",
    "characters": [
      {
        "n": "Akuma Ghen",
        "f": "Akuma-Ghen-V-1.png",
        "t": "O Rei Demônio dos Onis",
        "role": "Rei Oni",
        "lore": "O Rei dos Onis antes de Zen-Kore-Shin ascender — ainda vivo e ainda poderoso, mas em conflito com o novo supremo. Akuma-Ghen representa a tradição Oni pura: força acima de tudo, honra acima de vida. Empunha a Lâmina das Chamas que nunca se apaga.",
        "ab": [
          "Lâmina das Chamas Eternas",
          "Aura do Rei Demônio",
          "Tradição de Mil Anos"
        ],
        "pow": 93,
        "spd": 80,
        "def": 88,
        "int": 78,
        "align": "evil",
        "region": "Ignareth",
        "status": "Rei Deposto — Ativo"
      },
      {
        "n": "Enma Oh Ko",
        "f": "Enma-Oh'ko-V-1.png",
        "t": "O General Supremo",
        "role": "General dos Onis",
        "lore": "O maior general militar que os Onis produziram — uma mente tática de precisão assustadora em um corpo de poder devastador. Enma-Oh'ko planeja campanhas com a mesma profundidade que um mago planeja feitiços, e executa-os com a brutali­dade que define os Onis.",
        "ab": [
          "Tática de Guerra Oni",
          "Armadura do General",
          "Golpe que Encerra Batalhas"
        ],
        "pow": 91,
        "spd": 78,
        "def": 92,
        "int": 90,
        "align": "evil",
        "region": "Ignareth",
        "status": "Comandando"
      },
      {
        "n": "General Krogan",
        "f": "General-Krogan-V-1.png",
        "t": "A Besta de Batalha",
        "role": "General Bestial",
        "lore": "Um Oni de forma mais bestial que humanóide — General Krogan representa a linha evolutiva dos Onis que abraçou a animalidade acima da disciplina. Comanda com fúria e instinto em vez de estratégia, o que torna seus ataques impossíveis de prever por táticos convencionais.",
        "ab": [
          "Carga do Krogan",
          "Fúria Animal",
          "Presença Aterrorizante"
        ],
        "pow": 90,
        "spd": 82,
        "def": 88,
        "int": 62,
        "align": "evil",
        "region": "Ignareth",
        "status": "Em Campo"
      },
      {
        "n": "Kaguro",
        "f": "Kaguro-V-1.png",
        "t": "O Oni Assassino",
        "role": "Assassino da Casta Superior",
        "lore": "O mais perigoso dos Onis em combate singular — um assassino de vermelho e preto cujas técnicas de eliminação são cirúrgicas em um corpo de força absurda. Kaguro não mata por ordem; mata porque é sua arte, e cada morte é uma obra perfeita.",
        "ab": [
          "Corte da Extinção",
          "Técnica do Fantasma Oni",
          "Velocidade do Assassino"
        ],
        "pow": 88,
        "spd": 95,
        "def": 78,
        "int": 85,
        "align": "evil",
        "region": "Errante — Missão",
        "status": "Caçando"
      },
      {
        "n": "Kagutsuchi Kore",
        "f": "Kagutsuchi-Kore-V-1.png",
        "t": "O Deus do Fogo Oni",
        "role": "Deus Oni do Kore",
        "lore": "Um Oni que absorveu um Cristal Kore de fogo e tornou-se literalmente um deus do fogo em nível divino. Kagutsuchi-Kore não controla fogo — é fogo, em toda a sua extensão primordial. Sua existência aquece regiões inteiras ao seu redor.",
        "ab": [
          "Forma do Deus do Fogo",
          "Calor que Derrete Pedra",
          "Explosão Kore Ardente"
        ],
        "pow": 95,
        "spd": 80,
        "def": 88,
        "int": 72,
        "align": "evil",
        "region": "Ignareth Central",
        "status": "Divindade Ativa"
      },
      {
        "n": "Kore Magma",
        "f": "Kore-Magma-V-1.png",
        "t": "O Oni de Magma",
        "role": "Oni Elemental",
        "lore": "Um Oni que evoluiu de forma natural nas câmaras mais quentes de Ignareth, até que seu corpo começou a incorporar a rocha fundida ao redor. Kore-Magma não usa magma como arma — é feito de magma, que flui e se solidifica em tempo real. Combate ao seu lado significa inevitavelmente lutar no fogo.",
        "ab": [
          "Corpo de Magma",
          "Fusão com o Vulcão",
          "Calor Absoluto"
        ],
        "pow": 88,
        "spd": 55,
        "def": 97,
        "int": 45,
        "align": "evil",
        "region": "Ignareth",
        "status": "Ativo"
      },
      {
        "n": "Kurenai Rage",
        "f": "Kurenai-Rage-V1.png",
        "t": "A Fúria Vermelha",
        "role": "Berserker Oni",
        "lore": "O berserker supremo dos Onis — um guerreiro de cabelos carmesins cujo poder cresce exponencialmente quanto mais dano sofre. A estratégia padrão de derrotar Kurenai é não o machucar e esperar que ele se mate por frustração, o que nunca funcionou.",
        "ab": [
          "Fúria que Cresce com Dano",
          "Vermelho da Raiva Divina",
          "Berserker Oni"
        ],
        "pow": 91,
        "spd": 85,
        "def": 80,
        "int": 52,
        "align": "chaos",
        "region": "Ignareth",
        "status": "Em Fúria"
      },
      {
        "n": "Kyofu Kore",
        "f": "Kyofu-Kore-V1.png",
        "t": "O Oni do Medo",
        "role": "Oni do Terror",
        "lore": "Um Oni que, ao absorver um Cristal Kore de natureza psíquica, desenvolveu o poder de projetar seu próprio terror diretamente na mente dos oponentes. Kyofu não precisa ser mais forte que você — precisa apenas fazer você acreditar que ele é.",
        "ab": [
          "Projeção de Terror",
          "Ilusão do Fim",
          "Mente Quebrada"
        ],
        "pow": 82,
        "spd": 78,
        "def": 75,
        "int": 95,
        "align": "evil",
        "region": "Ignareth",
        "status": "Ativo"
      },
      {
        "n": "Raijin Kore",
        "f": "Raijin-Kore-V-1.png",
        "t": "O Oni das Tempestades",
        "role": "Oni do Trovão",
        "lore": "Um Oni que canalizou energia Kore de natureza elétrica, tornando-se o Oni das Tempestades — capaz de invocar relâmpagos e ventanias de poder sem precedente. Raijin-Kore rivaliza com deuses do trovão em poder puro, sem ter sangue divino.",
        "ab": [
          "Trovão do Oni",
          "Tempestade Invocada",
          "Relâmpago do Kore"
        ],
        "pow": 90,
        "spd": 88,
        "def": 80,
        "int": 72,
        "align": "evil",
        "region": "Ignareth",
        "status": "Invocando Tempestades"
      },
      {
        "n": "Ryu Kore",
        "f": "Ryu-Kore-V-1.png",
        "t": "O Dragão Oni",
        "role": "Oni Dragão",
        "lore": "A fusão mais completa entre a herança Oni e o sangue dracônico — Ryu-Kore é um Oni que manifestou características dracônicas ao absorver o Kore correto, tornando-se mestre das chamas serpentinas que combinam o fogo Oni com a magia dracônica.",
        "ab": [
          "Chama Serpentina Dracônica",
          "Escamas do Dragão Oni",
          "Voo do Dragão"
        ],
        "pow": 92,
        "spd": 82,
        "def": 88,
        "int": 72,
        "align": "evil",
        "region": "Ignareth",
        "status": "Ativo"
      },
      {
        "n": "Zan Kura",
        "f": "Zan-kura-V-1.png",
        "t": "A Flor da Morte",
        "role": "Oni da Flor Cerejeira",
        "lore": "Um Oni que incorporou a estética da morte-como-beleza — petalas de cerejeira caem ao redor de cada golpe que desfere, e cada golpe é letal. Zan-kura é o Oni mais visualmente impressionante, o que amplifica o terror de vê-lo agir.",
        "ab": [
          "Pétala Assassina",
          "Dança da Cerejeira",
          "Golpe da Beleza Letal"
        ],
        "pow": 87,
        "spd": 92,
        "def": 78,
        "int": 82,
        "align": "evil",
        "region": "Ignareth",
        "status": "Ativo"
      },
      {
        "n": "Zanka Kore",
        "f": "Zanka-Kore-V-1.png",
        "t": "O Oni das Cinzas",
        "role": "Oni da Desolação",
        "lore": "Onde Zanka-Kore passa, cinzas ficam. Não é hipérbole — sua energia Kore de desolação transforma tudo ao redor em cinza fria. Não queima como o fogo, não destrói como força bruta; apenas apaga, de forma lenta e inevitável.",
        "ab": [
          "Toque da Desolação",
          "Cinza Eterno",
          "Extinção Gradual"
        ],
        "pow": 88,
        "spd": 72,
        "def": 85,
        "int": 78,
        "align": "evil",
        "region": "Ignareth",
        "status": "Avançando"
      },
      {
        "n": "Zen Kore Shin",
        "f": "Zen-Kore-Shin-V-1.png",
        "t": "O Supremo dos Onis",
        "role": "Oni Supremo — Mais Próximo da Divindade",
        "lore": "O atual líder supremo dos Onis — um ser que absorveu múltiplos Cristais Kore de forma controlada e tornou-se algo além de Oni. Zen-Kore-Shin é o que a raça Oni seria se continuasse evoluindo por dez mil anos. Não lidera por força, mas por ser simplesmente o mais completo ser que os Onis já produziram.",
        "ab": [
          "Presença do Supremo",
          "Todos os Elementos Oni",
          "Ascensão Kore Perfeita"
        ],
        "pow": 99,
        "spd": 88,
        "def": 93,
        "int": 90,
        "align": "evil",
        "region": "Ignareth — Trono de Fogo",
        "status": "Governando"
      },
      {
        "n": "Kyo Zan",
        "f": "Kyo-Zan-V-1.png",
        "t": "O Kyo Zan",
        "role": "Personagem de Onis",
        "lore": "Kyo Zan é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Onis, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Onis",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 67,
        "spd": 80,
        "def": 86,
        "int": 63,
        "align": "neutral",
        "region": "Ignareth",
        "status": "Ativo"
      },
      {
        "n": "Xar Drakan",
        "f": "Xar-Drakan-V-1.png",
        "t": "O Xar Drakan",
        "role": "Personagem de Onis",
        "lore": "Xar Drakan é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Onis, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Onis",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 88,
        "spd": 60,
        "def": 69,
        "int": 87,
        "align": "neutral",
        "region": "Ignareth",
        "status": "Ativo"
      }
    ]
  },
  {
    "id": "semideus",
    "name": "Semi-Deus",
    "folder": "Semi-Deus",
    "color": "#f1c40f",
    "glow": "rgba(241,196,15,0.5)",
    "color2": "#fff06a",
    "icon": "☀",
    "count": 23,
    "region": "Aethelos",
    "trait": "Sangue divino e poder além do mortal",
    "desc": "Filhos e manifestações dos Primordiais — os Semi-Deuses foram os primeiros guardiões de Eryndor. A destruição dos Cinco Selos é para eles uma falha pessoal que alimenta tanto sua determinação quanto sua culpa. Não são unânimes em propósito: alguns lutam para restaurar a ordem, outros questionam se a ordem valia salvar.",
    "characters": [
      {
        "n": "Aethel",
        "f": "Aethel-V-1.png",
        "t": "A Deusa da Passagem",
        "role": "Divindade da Morte e Transição",
        "lore": "A semi-deusa responsável pela passagem dos mortos entre os mundos. Com os Selos destruídos e as Aparições presas no plano físico, Aethel está sobrecarregada — almas que deveriam ter partido há séculos estão acumuladas, e seu poder para mantê-las em trânsito está atingindo limites.",
        "ab": [
          "Passagem dos Mortos",
          "Manto da Transição",
          "Equilíbrio do Além"
        ],
        "pow": 85,
        "spd": 80,
        "def": 78,
        "int": 95,
        "align": "neutral",
        "region": "Aethelos",
        "status": "Sobrecarregada"
      },
      {
        "n": "Aether Kore",
        "f": "Aether-Kore-V-1.png",
        "t": "O Anjo Caído do Kore",
        "role": "Semi-Deus Corrompido pelo Kore",
        "lore": "Um semi-deus que absorveu um Cristal Kore na tentativa de ampliar seu poder o suficiente para fechar a Fissura do Vazio sozinho. O resultado foi parcialmente bem-sucedido — seu poder cresceu enormemente — mas a corrução do Kore corrói sua natureza divina a cada dia que passa.",
        "ab": [
          "Asas do Anjo Corrompido",
          "Poder Kore Divino",
          "Corrução Crescente"
        ],
        "pow": 96,
        "spd": 85,
        "def": 88,
        "int": 82,
        "align": "chaos",
        "region": "Errante",
        "status": "Corrompendo"
      },
      {
        "n": "Astrolon",
        "f": "Astrolon-V-1.png",
        "t": "O Cavaleiro do Cosmos",
        "role": "Guardião da Ordem Cósmica",
        "lore": "Um semi-deus de armadura dourada que patrulha as fronteiras entre os planos de existência. Astrolon viu a Grande Fratura de uma perspectiva que nenhum mortal experimentaria — de fora, observando todos os planos colidirem simultaneamente. O trauma disso moldou tanto seu propósito quanto suas limitações.",
        "ab": [
          "Armadura Cósmica",
          "Patrulha dos Planos",
          "Ordem entre Mundos"
        ],
        "pow": 92,
        "spd": 82,
        "def": 90,
        "int": 88,
        "align": "good",
        "region": "Entre Planos",
        "status": "Patrulhando"
      },
      {
        "n": "Dio Heaven",
        "f": "Dio-Heaven-V-1.png",
        "t": "O Senhor do Paraíso",
        "role": "Deus da Transcendência",
        "lore": "A forma ascendida de Dio — após décadas de busca por poder perfeito, alcançou um estado semi-divino que transcende categorias convencionais. Dio-Heaven pode parar o tempo, alterar a realidade e conceder ou negar imortalidade. Mas sua arrogância é proporcional ao seu poder.",
        "ab": [
          "Za Warudo — O Mundo",
          "Controle do Tempo",
          "Graça do Paraíso"
        ],
        "pow": 99,
        "spd": 90,
        "def": 88,
        "int": 85,
        "align": "evil",
        "region": "Aethelos",
        "status": "Dominando"
      },
      {
        "n": "Dividade",
        "f": "Dividade-V-1.png",
        "t": "A Deusa da Luz Pura",
        "role": "Encarnação da Luz Divina",
        "lore": "Não é um semi-deus — é uma manifestação direta do Primordial da Luz em forma física. Dividade apareceu quando a Grande Fratura ameaçou destruir o equilíbrio de luz e trevas de Eryndor. É benevolente mas absolutamente imparcial — protege o equilíbrio, não lados.",
        "ab": [
          "Luz Primordial",
          "Purificação Total",
          "Presença da Divindade"
        ],
        "pow": 97,
        "spd": 85,
        "def": 90,
        "int": 92,
        "align": "good",
        "region": "Aethelos",
        "status": "Manifestada"
      },
      {
        "n": "Enel",
        "f": "Enel-V-1.png",
        "t": "O Deus Autoproclamado do Trovão",
        "role": "Deus do Raio",
        "lore": "Um semi-deus que proclamou ser o único deus verdadeiro de Eryndor — não sem fundamento, pois seu poder sobre o trovão é superior ao de qualquer outro usuário de eletricidade. Sua maior fraqueza é acreditar em sua própria invencibilidade, o que o torna previsível para adversários suficientemente humildes.",
        "ab": [
          "Raio Divino Máximo",
          "Corpo de Raio",
          "Deus da Tempestade"
        ],
        "pow": 94,
        "spd": 98,
        "def": 82,
        "int": 72,
        "align": "evil",
        "region": "Aethelos",
        "status": "Auto-Exilado"
      },
      {
        "n": "Haku",
        "f": "Haku-V-1.png",
        "t": "O Dragão das Águas Sagradas",
        "role": "Dragão Deus",
        "lore": "Pequeno em aparência, ilimitado em poder — Haku é um espírito dragão das águas sagradas, um semi-deus que governou rios e chuvas por milênios. Sua transformação entre forma humanóide e forma dracônica é instantânea, e cada forma tem poderes completamente diferentes.",
        "ab": [
          "Forma Dracônica",
          "Espírito das Águas Sagradas",
          "Rio Divino"
        ],
        "pow": 90,
        "spd": 88,
        "def": 82,
        "int": 88,
        "align": "good",
        "region": "Águas Sagradas",
        "status": "Guardando"
      },
      {
        "n": "Ignis",
        "f": "Ignis-V-1.png",
        "t": "O Semi-Deus da Conquista",
        "role": "Demi-Deus da Guerra e do Fogo",
        "lore": "Um semi-deus nascido da união entre um guerreiro humano lendário e a própria chama primordial. Ignis existe para a guerra — não como destruição, mas como o catalisador que força o crescimento. Acredita que a Guerra da Convergência é necessária para queimar o que está podre e fortalecer o que pode sobreviver.",
        "ab": [
          "Chama da Conquista",
          "Armadura de Guerra Divina",
          "Catalisador da Mudança"
        ],
        "pow": 92,
        "spd": 85,
        "def": 85,
        "int": 80,
        "align": "chaos",
        "region": "Aethelos",
        "status": "Em Campo"
      },
      {
        "n": "Imu",
        "f": "Imu-V-1.png",
        "t": "A Soberana das Sombras",
        "role": "Soberana do Mistério",
        "lore": "A entidade no topo da hierarquia do mundo — cujos poderes e motivações reais permanecem o maior mistério de Eryndor. Imu é um semi-deus que ascendeu além do que semi-deuses deveriam atingir, chegando perto demais da divindade pura. Sua sombra se estende sobre os eventos da guerra sem que sua mão seja visível.",
        "ab": [
          "Sombra Soberana",
          "Poder Oculto",
          "Presença que Move o Mundo"
        ],
        "pow": 100,
        "spd": 88,
        "def": 95,
        "int": 100,
        "align": "neutral",
        "region": "Desconhecida",
        "status": "Governando nas Sombras"
      },
      {
        "n": "Nika",
        "f": "Nika-V-1.png",
        "t": "O Deus Sol — O Libertador",
        "role": "Deus da Libertação e Alegria",
        "lore": "A encarnação da alegria e da libertação em forma divina — um semi-deus que representa o desejo fundamental de todo ser vivo de ser livre. O poder de Nika cresce quanto mais pessoas ao seu redor desejam liberdade. Em tempos de opressão como a Guerra da Convergência, esse poder se torna ilimitado.",
        "ab": [
          "Libertação Divina",
          "Goma-Goma das Divindades",
          "Alegria que Move Mundos"
        ],
        "pow": 100,
        "spd": 92,
        "def": 88,
        "int": 85,
        "align": "good",
        "region": "Errante — Lendário",
        "status": "Lendário"
      },
      {
        "n": "Ossuaria",
        "f": "Ossuaria-V-1.png",
        "t": "A Rainha dos Ossos",
        "role": "Rainha do Reino dos Mortos",
        "lore": "A semi-deusa que governa o reino dos mortos como complemento ao trabalho de Aethel. Se a Aethel guia os mortos, Ossuaria os governa no destino final. Com o colapso dos Selos, seu reino está inundado de almas que chegam sem as condições adequadas de recepção.",
        "ab": [
          "Exército dos Ossos",
          "Autoridade sobre os Mortos",
          "Barreira do Além"
        ],
        "pow": 88,
        "spd": 72,
        "def": 90,
        "int": 90,
        "align": "neutral",
        "region": "Reino dos Mortos",
        "status": "Sobrecarregada"
      },
      {
        "n": "Radagon",
        "f": "Radagon-of-the-Golden-Order-V-1.png",
        "t": "O Perfeito Dourado",
        "role": "Cavaleiro da Ordem Divina",
        "lore": "Um semi-deus que buscou a perfeição absoluta através da Ordem Dourada — um código filosófico de combate e existência que busca o ideal platônico do ser. Radagon é ao mesmo tempo um dos Semi-Deuses mais devotos e um dos mais atormentados: sabe que a perfeição não existe, mas não pode parar de buscá-la.",
        "ab": [
          "Golpe da Perfeição Dourada",
          "Ordem como Arma",
          "Martelo dos Fundamentos"
        ],
        "pow": 95,
        "spd": 82,
        "def": 90,
        "int": 90,
        "align": "good",
        "region": "Aethelos",
        "status": "Em Busca da Perfeição"
      },
      {
        "n": "Rei Demônio",
        "f": "Rei-Demonio-V-1.png",
        "t": "O Rei Que Não É",
        "role": "Paradoxo Divino-Demoníaco",
        "lore": "Uma anomalia: um semi-deus com essência demoníaca que nunca tocou Sombrath. O Rei-Demônio nasceu da intersecção entre dois planos que não deveriam se cruzar — antes de Kaelia, antes da Fissura do Vazio. Seu poder combina elementos divinos e demoníacos de forma que nenhuma escola arcana consegue explicar.",
        "ab": [
          "Paradoxo de Dois Mundos",
          "Poder do Limite",
          "Existência Impossível"
        ],
        "pow": 93,
        "spd": 85,
        "def": 88,
        "int": 88,
        "align": "chaos",
        "region": "Entre Planos",
        "status": "Existindo"
      },
      {
        "n": "Shikon Kore",
        "f": "Shikon-Kore-V-1.png",
        "t": "O Colosso do Kore",
        "role": "Semi-Deus Amplificado",
        "lore": "Um semi-deus que integrou um Cristal Kore de forma controlada através de rituais divinos — o experimento mais bem-sucedido de amplificação Kore em sangue semi-divino. Shikon-Kore é imenso, poderoso além da medida usual de Semi-Deuses, e completamente estável. Uma arma de destruição que sabe o que faz.",
        "ab": [
          "Colosso do Kore Divino",
          "Controle Absoluto",
          "Amplificação Estável"
        ],
        "pow": 97,
        "spd": 70,
        "def": 95,
        "int": 85,
        "align": "good",
        "region": "Aethelos",
        "status": "Pronto para Combate"
      },
      {
        "n": "Skarner",
        "f": "Skarner-V-1.png",
        "t": "O Escorpião Cristalino",
        "role": "Deus da Terra e dos Cristais",
        "lore": "Um semi-deus de forma escorpioníde que emergiu das profundezas cristalinas de Eryndor — exatamente das mesmas câmaras onde os Cristais Kore foram formados. Skarner guarda os cristais restantes, sabendo seu poder e seu perigo, esperando que alguém digno apareça para usá-los.",
        "ab": [
          "Cristal Vivo",
          "Garras da Terra",
          "Guardião dos Kore"
        ],
        "pow": 88,
        "spd": 72,
        "def": 93,
        "int": 82,
        "align": "neutral",
        "region": "Câmaras Cristalinas",
        "status": "Guardando"
      },
      {
        "n": "Skel Shin",
        "f": "Skel-Shin-V-1.png",
        "t": "A Entidade Óssea Divina",
        "role": "Divindade Dual",
        "lore": "Uma entidade que existe na fronteira entre a vida divina e a morte estruturada — Skel-Shin é a manifestação de que mesmo os Semi-Deuses têm um fim, e desse fim algo emerge. Seu corpo de osso e luz é o que resta quando um semi-deus passa pelo que os mortais chamam de morte.",
        "ab": [
          "Luz dos Ossos",
          "Dual Natureza",
          "Persistência do Divino"
        ],
        "pow": 88,
        "spd": 78,
        "def": 88,
        "int": 88,
        "align": "neutral",
        "region": "Entre Mundos",
        "status": "Existindo"
      },
      {
        "n": "Sun Wukong",
        "f": "Sun-Wukong-V-1.png",
        "t": "O Rei Macaco",
        "role": "Igual dos Deuses",
        "lore": "Nascido como mortal simples, Sun Wukong desafiou os próprios Semi-Deuses em combate singular e provou ser igual — através de determinação, inteligência e um cajado mágico que pode ter o tamanho de uma agulha ou de uma montanha. É o símbolo de que o potencial não tem origem definida.",
        "ab": [
          "Cajado das Dimensões",
          "Setenta e Duas Transformações",
          "Pêlo que Clona"
        ],
        "pow": 97,
        "spd": 95,
        "def": 88,
        "int": 92,
        "align": "good",
        "region": "Aethelos / Errante",
        "status": "Ativo"
      },
      {
        "n": "Sylvaris",
        "f": "Sylvaris-V-1.png",
        "t": "O Senhor das Florestas Antigas",
        "role": "Deus da Natureza Primordial",
        "lore": "O semi-deus que governa as florestas mais antigas de Eryndor — árvores que pré-datam até os Primordiais. Sylvaris não usa magia de plantas; é a magia das plantas. Cada raiz em todo o continente é uma extensão de seu sistema nervoso.",
        "ab": [
          "Raízes do Mundo",
          "Consciência da Floresta",
          "Crescimento Divino"
        ],
        "pow": 88,
        "spd": 70,
        "def": 92,
        "int": 90,
        "align": "good",
        "region": "Florestas Primordiais",
        "status": "Ativo"
      },
      {
        "n": "The Radiance",
        "f": "The-Radiance-V-1.png",
        "t": "A Radiância Pura",
        "role": "Manifestação da Luz Primordial",
        "lore": "A manifestação mais pura da luz primordial de Eryndor — não uma deusa da luz, mas a própria luz tomando forma para combater a corrupção do Vazio. The Radiance existe apenas enquanto a escuridão que combate existe, tornando sua vitória simultaneamente seu fim.",
        "ab": [
          "Luz que Apaga o Vazio",
          "Bênção da Radiance",
          "Sacrifício da Luz"
        ],
        "pow": 100,
        "spd": 88,
        "def": 90,
        "int": 92,
        "align": "good",
        "region": "Aethelos",
        "status": "Manifestada — Sacrifício Iminente"
      },
      {
        "n": "Aurion",
        "f": "Aurion-V-1.png",
        "t": "O Aurion",
        "role": "Personagem de Semi-Deus",
        "lore": "Aurion é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Semi-Deus, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Semi-Deus",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 60,
        "spd": 75,
        "def": 80,
        "int": 55,
        "align": "neutral",
        "region": "Aethelos",
        "status": "Ativo"
      },
      {
        "n": "Azazel",
        "f": "Azazel-V-1.png",
        "t": "O Azazel",
        "role": "Personagem de Semi-Deus",
        "lore": "Azazel é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Semi-Deus, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Semi-Deus",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 60,
        "spd": 75,
        "def": 80,
        "int": 55,
        "align": "neutral",
        "region": "Aethelos",
        "status": "Ativo"
      },
      {
        "n": "Morthan",
        "f": "Morthan-V-1.png",
        "t": "O Morthan",
        "role": "Personagem de Semi-Deus",
        "lore": "Morthan é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Semi-Deus, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Semi-Deus",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 67,
        "spd": 80,
        "def": 86,
        "int": 63,
        "align": "neutral",
        "region": "Aethelos",
        "status": "Ativo"
      },
      {
        "n": "Xul'gath",
        "f": "Xul'gath-V-1.png",
        "t": "O Xul'gath",
        "role": "Personagem de Semi-Deus",
        "lore": "Xul'gath é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Semi-Deus, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Semi-Deus",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 74,
        "spd": 85,
        "def": 57,
        "int": 71,
        "align": "neutral",
        "region": "Aethelos",
        "status": "Ativo"
      }
    ]
  },
  {
    "id": "vazio",
    "name": "Seres do Vazio",
    "folder": "Seres-do-Vazio",
    "color": "#4a4a7a",
    "glow": "rgba(74,74,122,0.5)",
    "color2": "#9090ff",
    "icon": "∅",
    "count": 17,
    "region": "Voidrift",
    "trait": "Entidades de além da realidade conhecida",
    "desc": "Não são apenas poderosos — são categoricamente diferentes. Os Seres do Vazio existem em um estado de não-ser que a física de Eryndor não acomoda facilmente. Sua presença corrode a realidade ao redor. Sua motivação — se têm uma — é incompreensível para mentes formadas dentro de uma realidade funcional.",
    "characters": [
      {
        "n": "Abyss Maw",
        "f": "Abyss-Maw-V-1.png",
        "t": "O Dragão do Vazio",
        "role": "Dragão da Não-Existência",
        "lore": "O maior ser vivo do Vazio — um dragão cujo corpo é feito de não-existência comprimida. Abyss-Maw não destrói as coisas que devora; apaga-as do registro da realidade. Nenhuma magia de ressurreição funciona em algo que Abyss-Maw consumiu, porque não há mais nada para ressuscitar.",
        "ab": [
          "Apagamento da Realidade",
          "Voo além do Possível",
          "Presença do Vazio Absoluto"
        ],
        "pow": 100,
        "spd": 75,
        "def": 97,
        "int": 78,
        "align": "chaos",
        "region": "Voidrift",
        "status": "Expandindo"
      },
      {
        "n": "Alaric",
        "f": "Alaric-V-1.png",
        "t": "O Viajante dos Fins",
        "role": "Vidente do Apocalipse",
        "lore": "Um Ser do Vazio que viajou através de múltiplas realidades e viu o fim de cada uma delas. Alaric não é hostil — é exausto. Viu tantos fins que não sabe mais se há mundos que escapam, ou se todos terminam apenas de formas diferentes. Partilha este conhecimento com quem encontra, sem se importar com o efeito.",
        "ab": [
          "Conhecimento dos Fins",
          "Viagem entre Realidades",
          "Fadiga do Eterno"
        ],
        "pow": 85,
        "spd": 82,
        "def": 80,
        "int": 100,
        "align": "neutral",
        "region": "Errante",
        "status": "Vagando"
      },
      {
        "n": "Kael",
        "f": "Kael-V-1.png",
        "t": "A Criança do Vazio",
        "role": "Ceifador Jovem",
        "lore": "Aparência de criança, poder de fim de mundo. Kael é um Ser do Vazio jovem — se tal conceito tem significado para eles — e sua foice é desproporcional ao seu tamanho em todos os sentidos. Sua juventude dentro do Vazio significa que ainda tem alguma curiosidade sobre a existência, o que o torna ligeiramente menos inexoravelmente destrutivo.",
        "ab": [
          "Foice do Vazio",
          "Curiosidade Perigosa",
          "Ceifa Jovem"
        ],
        "pow": 88,
        "spd": 88,
        "def": 78,
        "int": 82,
        "align": "chaos",
        "region": "Voidrift",
        "status": "Curioso — Perigoso"
      },
      {
        "n": "Kael'thas",
        "f": "Kael'thas-V-1.png",
        "t": "O Cavaleiro do Vazio",
        "role": "Cavaleiro da Não-Existência",
        "lore": "Um Ser do Vazio que adotou a estética e a lógica de um cavaleiro mortal — armadura, lâmina, código. Kael'thas observou mortais por tanto tempo que começou a imitar sua estrutura, sem compreender completamente por quê. Este comportamento de imitação o torna o Ser do Vazio mais previsível e portanto o mais recrutável por outras facções.",
        "ab": [
          "Lâmina do Vazio",
          "Código Imitado",
          "Armadura da Não-Existência"
        ],
        "pow": 90,
        "spd": 85,
        "def": 88,
        "int": 82,
        "align": "evil",
        "region": "Voidrift",
        "status": "Operativo"
      },
      {
        "n": "Kallysta",
        "f": "Kallysta-V-1.png",
        "t": "A Feiticeira do Vazio",
        "role": "Maga da Não-Existência",
        "lore": "Uma Ser do Vazio que manifesta o poder do Vazio através de padrões que se assemelham à magia mortal, mas operam em princípios inversos. Kallysta não cria — desfaz. Cada feitiço que lança é a negação de algo que existe.",
        "ab": [
          "Magia da Negação",
          "Disrupção do Ser",
          "Feitiçaria da Não-Existência"
        ],
        "pow": 88,
        "spd": 82,
        "def": 78,
        "int": 95,
        "align": "evil",
        "region": "Voidrift",
        "status": "Ativa"
      },
      {
        "n": "Kalthazar",
        "f": "Kalthazar-V-1.png",
        "t": "O Lord Espectral",
        "role": "Senhor Espectral do Vazio",
        "lore": "Um Ser do Vazio que existe como espectro mesmo dentro do Vazio — uma camada adicional de não-ser sobre o não-ser. Kalthazar usa esta natureza duplamente espectral para penetrar defesas que bloqueiam seres físicos e defesas que bloqueiam espíritos simultaneamente.",
        "ab": [
          "Forma Espectral dentro do Vazio",
          "Penetração Total",
          "Presença que Gela o Vazio"
        ],
        "pow": 87,
        "spd": 88,
        "def": 72,
        "int": 90,
        "align": "evil",
        "region": "Voidrift",
        "status": "Infiltrando"
      },
      {
        "n": "Koku Kore",
        "f": "Koku-Kore-V-1.png",
        "t": "O Cavaleiro do Apocalipse do Vazio",
        "role": "Cavaleiro Kore do Vazio",
        "lore": "O encontro improvável entre energia Kore e natureza do Vazio — Koku-Kore é um Ser do Vazio que entrou em contato com um Cristal Kore sem ser destruído, resultando em uma fusão impossível. A energia Kore amplificou o poder do Vazio de formas que os estudiosos do Kore temiam ser possíveis.",
        "ab": [
          "Fusão Kore-Vazio",
          "Cavaleiro do Apocalipse",
          "Poder Impossível"
        ],
        "pow": 95,
        "spd": 80,
        "def": 90,
        "int": 78,
        "align": "chaos",
        "region": "Voidrift",
        "status": "Ativo"
      },
      {
        "n": "Korvessa Nightlash",
        "f": "Korvessa-Nightlash-V-1.png",
        "t": "A Caçadora da Noite",
        "role": "Caçadora do Vazio",
        "lore": "Um Ser do Vazio com dois machados e um código de caça preciso — alvo, perseguição, execução. Korvessa não destrói aleatoriamente; é seletiva, o que a torna a assassina mais eficaz dos Seres do Vazio. Seus alvos são aqueles que buscam fechar a Fissura do Vazio.",
        "ab": [
          "Duplos Machados do Vazio",
          "Furtividade da Não-Existência",
          "Caça Precisa"
        ],
        "pow": 88,
        "spd": 93,
        "def": 78,
        "int": 82,
        "align": "evil",
        "region": "Errante",
        "status": "Caçando"
      },
      {
        "n": "Kraivos",
        "f": "Kraivos-V-1.png",
        "t": "O Guerreiro de Armadura",
        "role": "Combatente do Vazio",
        "lore": "Um Ser do Vazio que evoluiu uma forma mais física e pesada que a maioria de sua espécie — armadura densa, lâmina enorme, combate direto. Kraivos é a prova de que alguns Seres do Vazio preferem a abordagem direta à sutileza da não-existência.",
        "ab": [
          "Armadura do Vazio",
          "Lâmina Pesada da Não-Existência",
          "Combate Direto"
        ],
        "pow": 90,
        "spd": 72,
        "def": 92,
        "int": 68,
        "align": "evil",
        "region": "Voidrift",
        "status": "Em Campo"
      },
      {
        "n": "Krown Kore",
        "f": "Krown-Kore-V-1.png",
        "t": "O Alado do Vazio",
        "role": "Ser do Vazio com Asas",
        "lore": "Um Ser do Vazio que manifesta asas — não para voar, mas para expandir sua área de influência do Vazio. Krown-Kore usa suas asas como campos de força da não-existência, criando zonas onde a realidade começa a falhar ao redor de qualquer coisa que se aproxime.",
        "ab": [
          "Asas do Vazio",
          "Campo de Não-Existência",
          "Coroação do Vazio"
        ],
        "pow": 88,
        "spd": 82,
        "def": 80,
        "int": 80,
        "align": "evil",
        "region": "Voidrift",
        "status": "Expandindo"
      },
      {
        "n": "Malakor",
        "f": "Malakor-V-1.png",
        "t": "O Observador das Penas Negras",
        "role": "Vigia do Vazio",
        "lore": "Um Ser do Vazio que adotou uma forma de penas negras e asas que lembram o luto. Malakor observa o conflito de Eryndor sem intervir diretamente — coleta informações que transmite de volta ao coletivo do Vazio, auxiliando a expansão estratégica da Fissura.",
        "ab": [
          "Observação Total",
          "Transmissão ao Coletivo",
          "Penas da Não-Existência"
        ],
        "pow": 80,
        "spd": 82,
        "def": 72,
        "int": 97,
        "align": "evil",
        "region": "Errante",
        "status": "Observando"
      },
      {
        "n": "Wraith",
        "f": "Wraith-V-1.png",
        "t": "O Espectro Supremo do Vazio",
        "role": "Senhor do Vazio",
        "lore": "O Ser do Vazio mais antigo e mais poderoso — o arquiteto da Grande Fratura. Wraith foi quem coordenou o uso dos Cristais Kore para rasgar a barreira entre mundos. Não odeia Eryndor; simplesmente a considera temporária, como considera temporário tudo que existe dentro duma realidade com limites.",
        "ab": [
          "Rasgadura da Realidade",
          "Senhorio do Vazio",
          "Inevitabilidade"
        ],
        "pow": 100,
        "spd": 92,
        "def": 95,
        "int": 100,
        "align": "chaos",
        "region": "Voidrift — Centro",
        "status": "Senhor Supremo"
      },
      {
        "n": "Akuma Zan",
        "f": "Akuma-Zan-V-1.png",
        "t": "O Akuma Zan",
        "role": "Personagem de Seres do Vazio",
        "lore": "Akuma Zan é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Seres do Vazio, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Seres do Vazio",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 81,
        "spd": 90,
        "def": 63,
        "int": 79,
        "align": "evil",
        "region": "Voidrift",
        "status": "Ativo"
      },
      {
        "n": "Astraon",
        "f": "Astraon-V-1.png",
        "t": "O Astraon",
        "role": "Personagem de Seres do Vazio",
        "lore": "Astraon é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Seres do Vazio, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Seres do Vazio",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 67,
        "spd": 80,
        "def": 86,
        "int": 63,
        "align": "evil",
        "region": "Voidrift",
        "status": "Ativo"
      },
      {
        "n": "Erebus",
        "f": "Erebus-V-1.png",
        "t": "O Erebus",
        "role": "Personagem de Seres do Vazio",
        "lore": "Erebus é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Seres do Vazio, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Seres do Vazio",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 60,
        "spd": 75,
        "def": 80,
        "int": 55,
        "align": "evil",
        "region": "Voidrift",
        "status": "Ativo"
      },
      {
        "n": "Nalakor",
        "f": "Nalakor-V-1.png",
        "t": "O Nalakor",
        "role": "Personagem de Seres do Vazio",
        "lore": "Nalakor é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Seres do Vazio, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Seres do Vazio",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 67,
        "spd": 80,
        "def": 86,
        "int": 63,
        "align": "evil",
        "region": "Voidrift",
        "status": "Ativo"
      },
      {
        "n": "Xanthos",
        "f": "Xanthos-V-1.png",
        "t": "O Xanthos",
        "role": "Personagem de Seres do Vazio",
        "lore": "Xanthos é uma presença recém-reconhecida em Eryndor. Sua imagem já está na galeria, e sua história agora passa a integrar oficialmente a linhagem Seres do Vazio, servindo como peça viva da Guerra da Convergência.",
        "ab": [
          "Golpe de Seres do Vazio",
          "Presença Imponente",
          "Vontade de Combate"
        ],
        "pow": 67,
        "spd": 80,
        "def": 86,
        "int": 63,
        "align": "evil",
        "region": "Voidrift",
        "status": "Ativo"
      }
    ]
  }
];

// Mantém o atlas sincronizado com os arquivos presentes em `images/`.
// As entradas abaixo completam as imagens que existem nas pastas, mas ainda
// não estavam cadastradas no conteúdo principal do site.
const EXTRA_RACE_CHARACTERS = {
  Beserk: ["Frostmorne-V-1.png", "Godfrey-First-Elden-Lord-V-1.png", "Solano-V-1.png", "Uriel-V-1.png", "Vulcan-V-1.png", "Xathur-V-1.png"],
  Demonio: ["Abadom-V-1.png", "Apoliom-V-1.png", "Belial-V-1.png", "Grunbeld-V-2.png", "Topo-V-1.png"],
  Desconhecido: ["Corvus-V-1.png"],
  Gigantes: ["Brawn-V-1.png", "Kos-V-1.png", "Ladon-V-1.png", "Malgorg-V-1.png", "Typhon-V-1.png"],
  Humanos: ["Chougoukin-Kurobikari-V-1.png", "Sakata-Kintoki-V-1.png"],
  Magos: ["Malakai-V-1.png", "Renji-V-1.png"],
  "Meio-Sangue": ["Boreas-V-1.png", "Borok-V-1.png", "Jax-V-1.png", "Kaido-V-1.png"],
  Monstros: ["Karkas-V-1.png", "Magnar-V-1.png", "Morbidus-v-1.png", "Nero-V-1.png", "Nihilus-V-1.png", "Vexor-V-1.png", "Zarich-V-1.png"],
  Mutantes: ["Pyrowolf-V-1.png"],
  Onis: ["Akuma-V-1.png"],
  "Semi-Deus": ["Hercules-V-1.png", "Volthazar-V-1.png"],
  "Seres-do-Vazio": ["Apex-V-1.png", "Onyx-V-1.png"]
};

function prettifyCharacterName(fileName) {
  return fileName
    .replace(/\.(png|jpe?g|webp)$/i, "")
    .replace(/-V-\d+$/i, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (ch) => ch.toUpperCase());
}

function buildExtraCharacter(fileName, race) {
  const displayName = prettifyCharacterName(fileName);
  return {
    n: displayName,
    f: fileName,
    t: `Registro adicional de ${race.name}`,
    role: `Personagem de ${race.name}`,
    lore: `${displayName} já está presente na pasta de imagens da raça ${race.name}, então foi incorporado automaticamente ao atlas para não ficar de fora do site.`,
    ab: ["Ataque Kore", "Presença de Campo", "Instinto de Combate"],
    pow: 68,
    spd: 68,
    def: 68,
    int: 68,
    align: "neutral",
    region: race.region,
    status: "Ativo"
  };
}

for (const race of RACES) {
  const extras = EXTRA_RACE_CHARACTERS[race.folder];
  if (!extras || !race.characters) continue;

  const existing = new Set(race.characters.map((char) => char.f));
  for (const fileName of extras) {
    if (!existing.has(fileName)) {
      race.characters.push(buildExtraCharacter(fileName, race));
    }
  }

  race.count = race.characters.length;
}

