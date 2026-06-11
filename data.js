const RACES = [
  {
    "id": "amaldic",
    "name": "Amaldi�oados",
    "folder": "Amaldi�oados",
    "color": "#c0392b",
    "glow": "rgba(192,57,43,0.5)",
    "color2": "#ff6b57",
    "icon": "?",
    "count": 11,
    "region": "Korrfeld",
    "trait": "Imortais pela maldi��o do Kore",
    "desc": "Guerreiros que absorveram Cristais Kore sem ritual de prote��o e se transformaram em algo entre mortal e divino � presos em corpos imortais que nunca conhecer�o paz. Cada Amaldi�oado carrega a maldi��o de seu primeiro contato com o Kore, manifestada de forma �nica.",
    "characters": [
      {
        "n": "Crimson Kore",
        "f": "Crimson-Kore.png",
        "t": "O Primeiro Amaldi�oado",
        "role": "Patriarca da Maldi��o",
        "lore": "O primeiro ser a tocar um Cristal Kore sem prote��o ritual. Sua transforma��o em segundos demonstrou ao mundo o poder e o horror dos cristais. Governa os Amaldi�oados n�o por escolha, mas porque � the mais antigo � e portanto o mais poderoso. Seu armor carmesim pulsa com a energia primordial que consome seu ser h� mil�nios.",
        "ab": [
          "Aura Carmesim",
          "Propaga��o da Maldi��o",
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
        "lore": "Um rei que renunciou ao seu pr�prio nome ao pacto com o Vazio em troca de poder eterno. Empunha uma lan�a colossial forjada de ossos de drag�es ca�dos. Ningu�m mais lembra quem ele foi, nem mesmo ele mesmo � apenas o peso de s�culos de guerras sem prop�sito.",
        "ab": [
          "Lan�a das Eras",
          "Vazio do Ego",
          "Invoca��o Drac�nica"
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
        "role": "Samurai Amaldi�oado",
        "lore": "Outrora um nobre samurai do oriente, Ren tocou um fragmento de Kore durante uma batalha e foi consumido por chamas negras que nunca se apagaram. Sua t�cnica de espada permanece impec�vel, por�m sua alma arde em agonia eterna. Dizem que chora l�grimas de sangue quando mata, pois ainda sente cada vida que cessa.",
        "ab": [
          "L�mina das Chamas Negras",
          "Corte Fantasma",
          "Purgat�rio de Chamas"
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
        "lore": "Mais antigo que a maioria das civiliza��es, Skull Knight foi um paladino que recusou morrer ao final de uma guerra perdida. Absorveu fragmentos de Kore de soldados ca�dos e tornou-se o guardi�o involunt�rio do equil�brio entre vida e morte. Combate tanto dem�nios quanto anjos, pois n�o confia em nenhum dos dois lados.",
        "ab": [
          "Espada da Aniquila��o",
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
        "role": "Manifesta��o das Almas",
        "lore": "N�o � um ser individual � � a manifesta��o coletiva de todas as almas que morreram queimadas pela energia do Kore corrupto. Cada alma que absorveu aumentou seu poder e sua tormenta. Combate com a habilidade de todos que o comp�em, mas sofre com a mem�ria de cada uma de suas mortes constituintes.",
        "ab": [
          "Tempestade de Chamas Primordiais",
          "Mem�ria dos Ca�dos",
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
        "lore": "Imperador de um reino esquecido cuja capital queimou quando a Grande Fratura libertou os dem�nios. Absorveu m�ltiplos Cristais Kore ao mesmo tempo em um ato desesperado de sobreviv�ncia, tornando-se irreconhec�vel. Agora comanda ex�rcitos de mortos e jura reconstruir seu imp�rio, mas n�o tem mais certeza do que isso significa.",
        "ab": [
          "Ex�rcito dos Damnados",
          "Cetro da Ru�na",
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
        "role": "Guardi�o do Limiar",
        "lore": "Um ser t�o antigo que o Kore que o corrompeu quase consumiu completamente sua ess�ncia, deixando apenas uma silhueta espectral de poder imaculado. Zenon n�o luta por nenhum lado, mas age como um freio natural ao excesso � intervindo quando qualquer ra�a amea�a destruir o equil�brio de Eryndor.",
        "ab": [
          "Vazio Branco",
          "Barreira do Limiar",
          "Extin��o da Forma"
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
        "role": "Personagem de Amaldi�oados",
        "lore": "Pyre tocou o Kore ap�s a Grande Fratura, buscando curar sua vila que morria de fome. A cura veio em forma de chamas que consomem tudo menos a si mesmas. Inflama a terra em sinal vermelho para marcar o campo de batalha. Sua ferida: alimentar o fogo sem queimar quem ainda respira. Sua promessa: que as chamas cessem quando o �ltimo inverno reine.",
        "ab": [
          "Golpe de Amaldi�oados",
          "Presen�a Imponente",
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
        "role": "Personagem de Amaldi�oados",
        "lore": "Scylla emergiu do abismo de Korrfeld ap�s a Fratura, quando o oceano virou est�tua de sal. Cada tent�culo carrega uma batalha perdida, cada olho v� um futuro imenso. Sua ferida: lembrar tudo e ainda assim falhar. Sua promessa: afogar o que o mundo n�o pode suportar.",
        "ab": [
          "Golpe de Amaldi�oados",
          "Presen�a Imponente",
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
        "role": "Personagem de Amaldi�oados",
        "lore": "Valerius era um general antes da Fratura, comandando ex�rcitos que hoje s�o ru�na. Sua maldi��o o transformou em estatua viva: cada vit�ria petrifica-lhe um membro, mas tamb�m lhe confere imortalidade na forma de pedra. Sua ferida: sentir o peso das batalhas perdidas. Sua promessa: erguer um monumento a cada soldado ca�do.",
        "ab": [
          "Golpe de Amaldi�oados",
          "Presen�a Imponente",
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
        "role": "Personagem de Amaldi�oados",
        "lore": "Zoro navegou os mares de Korrfeld seguindo estrelas que brilhavam com luz de Kore. Agora sua caravela voa entre as nuvens, mas cada vela � uma alma amaldi�oada que ele n�o p�de salvar. Sua ferida: ver o c�u como pris�o. Sua promessa: encontrar o porto onde as ondas n�o cortam carne.",
        "ab": [
          "Golpe de Amaldi�oados",
          "Presen�a Imponente",
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
    "name": "Apari��es",
    "folder": "Apari��es",
    "color": "#8ab4c0",
    "glow": "rgba(138,180,192,0.35)",
    "color2": "#d0e8f0",
    "icon": "??",
    "count": 8,
    "region": "Plano Espiritual",
    "trait": "Existem entre os mundos f�sico e espiritual",
    "desc": "Esp�ritos de guerreiros e magos que recusaram partir ap�s a morte. Quando a Grande Fratura colapsou a barreira entre o mundo espiritual e f�sico, as Apari��es tornaram-se permanentemente ancoradas ao plano mortal � condenadas ou aben�oadas com uma segunda exist�ncia et�rea.",
    "characters": [
      {
        "n": "Bone Plume",
        "f": "Bone-Plume-V-1.png",
        "t": "O Esp�rito das Sepulturas",
        "role": "Assombrador",
        "lore": "Nascida das ossadas coletivas de guerreiros tombados em uma batalha que durou sete anos. Cada pena de seu corpo espectral � feita de fragmentos de osso animados por restos de consci�ncia dos soldados mortos. Voa sobre campos de batalha, colhendo as �ltimas mem�rias dos moribundos.",
        "ab": [
          "Tempestade de Penas �sseas",
          "Colheita de Mem�rias",
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
        "t": "O Guardi�o dos Sinos",
        "role": "Or�culo Arcano",
        "lore": "Esp�rito de um mago que dedicou sua vida a estudar a resson�ncia entre sons e realidade. Em morte, fundiu-se com seus instrumentos rituais, tornando-se um ser de sinos e magia viva. Cada toque de seu corpo ressoa como uma nota que altera a realidade ao redor.",
        "ab": [
          "Resson�ncia Arcana",
          "Toque da Revela��o",
          "Sinfon�a de Destrui��o"
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
        "role": "Espi�o Entre-Mundos",
        "lore": "Corvus foi um bardo que conhecia todos os segredos de todos os reinos. Assassinado por saber demais, sua alma recusou partir antes de transmitir tudo o que sabia. Agora existe como um corvo de sombra, mensageiro entre os vivos e os mortos, e espi�o involunt�rio de todas as fac��es.",
        "ab": [
          "Voo Sombrio",
          "Transmiss�o Mental",
          "Vis�o dos Mundos"
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
        "lore": "O esp�rito de um grande mago cujo corpo foi destru�do em combate, mas cuja f�ria ardente era t�o intensa que sua alma tomou a forma de um cr�nio em chamas. Ossuarion � o esp�rito de batalha puro � raiva destilada em forma et�rea, incapaz de sentir paz at� que seu assassino seja encontrado.",
        "ab": [
          "Explos�o de Fogo Espiritual",
          "Cr�nio da Perdi��o",
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
        "t": "O Guardi�o Ca�do",
        "role": "Esp�rito Protetor",
        "lore": "Um paladino de renome que morreu defendendo inocentes de um ataque demon�aco. Sua devo��o era t�o profunda que sua alma n�o poderia partir enquanto houvesse inocentes em perigo. Agora vaga como um guerreiro de l�mina de luz, protegendo os fracos dos horrores da Guerra da Converg�ncia.",
        "ab": [
          "L�mina de Luz Sagrada",
          "Escudo dos Inocentes",
          "B�n��o do M�rtir"
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
        "lore": "Um general de alto escal�o cujo senso de dever era t�o arraigado que n�o consegue aceitar o pr�prio fim. Morreu no momento em que uma batalha estava prestes a ser decidida e permanece naquele momento, incapaz de aceitar que a guerra que ele conhecia terminou s�culos atr�s. Continua lutando contra inimigos h� muito desaparecidos.",
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
        "role": "Personagem de Apari��es",
        "lore": "Kaminari apareceu no Plano Espiritual antes da Fratura, como �ltimo sussurro de um mago que quebrou o sil�ncio. Cada raio que emana de sua forma � uma palavra n�o dita na vida: furia, aviso, confess�o. Sua ferida: falar sem ser ouvido. Sua promessa: iluminar a escurid�o at� que algu�m responda.",
        "ab": [
          "Golpe de Apari��es",
          "Presen�a Imponente",
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
        "role": "Personagem de Apari��es",
        "lore": "Mycelium era um druida da Floresta de Wildmere, morto ao tocar um cristal pulverizado no solo. Sua consci�ncia se espalhou como fungo, conectando ra�zes de todo o continente. Agora cresce em sil�ncio, ouvindo as batalhas. Sua ferida: ser mil vozes e nenhuma delas individual. Sua promessa: transmitir as �ltimas palavras dos ca�dos at� as ra�zes mais profundas.",
        "ab": [
          "Golpe de Apari��es",
          "Presen�a Imponente",
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
    "icon": "?",
    "count": 14,
    "region": "Wildmere / Norte",
    "trait": "F�ria que supera limites f�sicos",
    "desc": "Guerreiros-n�mades do extremo norte e das florestas primordiais, os Beserk s�o a prova de que a carne pode superar o imposs�vel quando movida por f�ria suficiente. Rejeitam toda ordem estabelecida e vivem pela lei do poder. Paradoxalmente, s�o os mais honestos de todas as ra�as.",
    "characters": [
      {
        "n": "Guts",
        "f": "Guts-2.png",
        "t": "O Guerreiro Negro",
        "role": "Campe�o do Beserk",
        "lore": "O �nico guerreiro Beserk a ter sobrevivido a cem batalhas sem um arranh�o que ele n�o infligiu a si mesmo. Empunha uma espada do tamanho de uma �rvore jovem com uma s� m�o. Guts n�o luta por gl�ria ou poder � luta porque � a �nica coisa que sabe fazer, e o peso de um passado brutal o impede de parar.",
        "ab": [
          "Espad�o Drakar",
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
        "t": "O Drag�o Beserk",
        "role": "Guerreiro Kore",
        "lore": "Um Beserk que absorveu voluntariamente energia de Kore, tornando-se algo entre guerreiro e drag�o. Sua armadura cresceu como escamas do seu pr�prio corpo. Kaldor � a prova de que um Beserk com disciplina suficiente pode absorver o Kore sem se tornar Amaldi�oado � mas o pre�o foi perder toda a humanidade que lhe restava.",
        "ab": [
          "Escamas de Drag�o",
          "Sopro do Kore",
          "F�ria Drac�nica"
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
        "lore": "Diferente dos demais Beserk, Ksante � um combatente que estuda, aprende e adapta. Sua armadura de chamas arco-�ris absorve t�cnicas inimigas e as replica com o dobro da for�a. � o �nico Beserk que usa diplomacia como arma, mas quando a diplomacia falha, sua brutalidade supera qualquer advers�rio.",
        "ab": [
          "Absor��o de T�cnicas",
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
        "lore": "Um Beserk com sangue de le�o primordial em suas veias. Seu rugido sozinho despeda�a pedra e rompe forma��es militares. Como rei dos cl�s do norte, Leon manteve sua gente fora da Guerra da Converg�ncia por anos � mas quando os dem�nios queimaram seu lar, ele jurou que n�o haveria pedra dos reinos demon�acos que ficaria sobre outra.",
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
        "t": "O Senhor das L�minas",
        "role": "Soberano Beserk",
        "lore": "O Beserk que tentou civilizar o caos de sua ra�a. Kaelthorn acredita que os Beserk poderiam conquistar o mundo se parassem de guerrear entre si. Sua armadura de ouro e negro representa esta dualidade � o selvagem disciplinado. Comanda ex�rcitos com uma m�o e espalha destrui��o com a outra.",
        "ab": [
          "Comando de Batalha",
          "Duplas L�minas Negras",
          "Presen�a do Senhor"
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
        "t": "O Inabal�vel",
        "role": "Lenda Viva",
        "lore": "A lenda dos Beserk � um guerreiro de cabelos brancos que n�o envelheceu em dois s�culos de batalhas. Dizem que ele foi morto quarenta e sete vezes e se recusou a permanecer morto. Ragnar n�o afirma nenhum poder sobrenatural � apenas uma vontade que encontrou ser mais forte que a morte.",
        "ab": [
          "Recusa � Morte",
          "For�a do Lend�rio",
          "Golpe dos Cem S�culos"
        ],
        "pow": 91,
        "spd": 77,
        "def": 94,
        "int": 70,
        "align": "chaos",
        "region": "Errante",
        "status": "Lend�rio"
      },
      {
        "n": "Vorgreth",
        "f": "Vorgreth.png",
        "t": "A Chama do Caos",
        "role": "Guerreiro de Fogo",
        "lore": "Um h�brido entre Beserk e uma antiga linhagem de dem�nio de fogo, Vorgreth n�o escolheu ser o que �. Sua apar�ncia assusta at� outros Beserk � mas sua lealdade �s tradi��es de sua ra�a � inabal�vel. Combate com chamas que ele mesmo n�o consegue controlar completamente, tornando-o t�o perigoso para aliados quanto para inimigos.",
        "ab": [
          "Chamas Incontrol�veis",
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
        "role": "Guerreiro �pice",
        "lore": "Uma muta��o Beserk evolutiva � ossos que cresceram para fora do corpo, formando uma armadura natural de espinhos de ferro biol�gico. Vorgrim � o que os Beserk poderiam se tornar se continuassem evoluindo por mil anos. N�o � mais completamente org�nico, mas tampouco � inorg�nico � � algo terceiro.",
        "ab": [
          "Espinhos de Ferro",
          "Adapta��o Evolutiva",
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
        "lore": "Grom vangloriou em Wildmere antes da Fratura, quando seu rugido partiu montanhas. O Kore transformou seu berserker em f�ria contagiante: onde passa, guerreiros perdem a raz�o. Sua ferida: n�o distinguir inimigo de aliado nos ataques de f�ria. Sua promessa: encontrar final em batalha, onde a f�ria � justa.",
        "ab": [
          "Golpe de Beserk",
          "Presen�a Imponente",
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
        "lore": "Ksante era um mercador de runas em Thornwall, escravo de um Kore que lhe exigiu tributos em sangue. Cada tatuagem em sua pele � uma runa viva, uma batalha ganhada ou perdida. Sua ferida: carregar o hist�rico de cada marca. Sua promessa: quebrar as runas que n�o servem � batalha final.",
        "ab": [
          "Golpe de Beserk",
          "Presen�a Imponente",
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
        "t": "O Martelo de Ferro",
        "role": "Guerreiro de Forja",
        "lore": "Thomas era um ferreiro de Wildmere antes de tocar um cristal de Kore incandescente. Sua forja virou temple interior; cada martelo � golpe, cada metal � chama. Sua ferida: caldo que nunca esfria. Sua promessa: moldar a �ltima arma sem toque de fogo.",
        "ab": [
          "Golpe de Beserk",
          "Presen�a Imponente",
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
        "t": "O An�o de Batalha",
        "role": "Guerreiro de Pedra",
        "lore": "Thorin era um an�o de Montanhas do Norte antes de um Kore rubro transformar sua armadura em rocha viva. Cada golpe abre fissuras na terra; cada passos causa terremotos. Sua ferida: carregar o peso das montanhas. Sua promessa: erguer uma torre que alcance o c�u sem derrubar.",
        "ab": [
          "Golpe de Beserk",
          "Presen�a Imponente",
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
        "t": "O Trov�o Ancestral",
        "role": "Guerreiro das Mar�s",
        "lore": "Thrum era um pescador de Thornwall antes de tocar um cristal bravo que captou os trov�es. Sua for�a agora vincula-se �s mar�s � cresce com o luar, diminui com o sol. Sua ferida: ouvir o oceano sem respirar. Sua promessa: acalmar a tempestade que carrega.",
        "ab": [
          "Golpe de Beserk",
          "Presen�a Imponente",
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
        "t": "O Vento Cortante",
        "role": "Guerreiro do C�u",
        "lore": "Zephyrus era um mensageiro que voava sobre Wildmere antes de tocar um Kore azul que se fundiu com seus pulm�es. Agora cada exala��o corta carne; cada passo levanta redemoinhos. Sua ferida: n�o respirar sem destruir. Sua promessa: soprar a �ltima brisa sem sangramento.",
        "ab": [
          "Golpe de Beserk",
          "Presen�a Imponente",
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
    "icon": "?",
    "count": 9,
    "region": "Terras Devastadas",
    "trait": "Sobreviventes que transformaram a fome em linhagem",
    "desc": "Os Canibais surgiram nos territ�rios onde a guerra, a fome e a Fratura tornaram a carne mais valiosa que o ouro. Eles n�o veem o ato de devorar como barb�rie, mas como heran�a: absorver o poder, a mem�ria e a for�a do derrotado faz parte de sua cultura. Entre eles, sobreviver nunca foi suficiente; � preciso carregar o outro dentro de si.",
    "characters": [
      {
        "n": "Dokuro",
        "f": "Dokuro-V-1.png",
        "t": "O Ossu�rio Vivo",
        "role": "Patriarca da Fome",
        "lore": "Dokuro foi o primeiro dos Canibais a transformar a fome em doutrina. Depois de perder seu cl� para a guerra, devorou os mortos n�o por desespero, mas para aprender a continuar lutando. Cada vit�ria sua � celebrada como um ritual de incorpora��o.",
        "ab": [
          "Rito da Carne",
          "Mem�ria Digestiva",
          "F�ria do Ossu�rio"
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
        "role": "Estrat�gia da Mesa",
        "lore": "Ganshu organiza campos de batalha como cozinhas: escolhe o que ser� preservado, o que ser� consumido e o que ser� transformado em arma. Sua genialidade � temida porque sua crueldade nunca � impulsiva.",
        "ab": [
          "Corte Preciso",
          "Fervura de Ossos",
          "Banquete T�tico"
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
        "n": "Goku Maru",
        "f": "Goku-Maru-V-1.png",
        "t": "O Devoto do Banquete",
        "role": "Fan�tico Ritual",
        "lore": "Goku Maru transformou a fome em religi�o. Para ele, cada refei��o � um juramento, e cada inimigo derrotado deve ser devolvido ao mundo atrav�s do fogo do est�mago. Ele conduz rituais coletivos antes das batalhas, convencendo os seus de que consumir o vencido � tamb�m herdar sua coragem.",
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
        "lore": "Reigen sobreviveu entre fac��es mais fortes usando l�bia, medo e oportunismo. Ele vendeu b�n��os falsas, mapas falsos e promessas falsas at� perceber que a mentira podia ser t�o nutritiva quanto a carne.",
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
        "role": "Ca�adora de Restos",
        "lore": "Ryouka cresceu em campos onde as crian�as aprendiam cedo a dividir ou morrer. Ela desenvolveu um estilo de combate leve e brutal, sempre buscando desmembrar o advers�rio antes que ele pudesse reagir.",
        "ab": [
          "Passo da Ca�a",
          "Fome Cortante",
          "Execu��o R�pida"
        ],
        "pow": 75,
        "spd": 91,
        "def": 63,
        "int": 71,
        "align": "chaos",
        "region": "Terras Devastadas",
        "status": "Em Ca�a"
      },
      {
        "n": "Ryogen",
        "f": "Ryogen-V-1.png",
        "t": "O Mestre do Corte Frio",
        "role": "Carrasco Ritual",
        "lore": "Ryogen � o lado disciplinado do cl�: silencioso, preciso e quase cerimonial. Ele n�o mata por prazer, mas por necessidade de manter o equil�brio interno dos Canibais, eliminando os que enfraquecem o grupo. Sua l�mina gelada serve para preservar o que o fogo da fome destruiria r�pido demais.",
        "ab": [
          "L�mina Fria",
          "Sil�ncio do Carrasco",
          "Preserva��o do Corpo"
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
        "n": "Soma",
        "f": "Soma-V-1.png",
        "t": "O Herdeiro do Sabor",
        "role": "Alquimista da Carne",
        "lore": "Soma enxerga o corpo como um laborat�rio. Ele mistura sangue, temperos, venenos e magia para extrair for�a, mem�ria e resist�ncia dos derrotados. Seu talento tornou o cl� mais temido, porque at� feridas podem ser convertidas em vantagem quando ele est� por perto.",
        "ab": [
          "Mistura Visceral",
          "T�cnica do Paladar",
          "Transforma��o Nutritiva"
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
        "lore": "Sukuna domina os Canibais por for�a, presen�a e uma fome que n�o conhece limite. Em vez de esconder o horror da carne devorada, ele o elevou a s�mbolo de soberania.",
        "ab": [
          "Mandato da Carne",
          "Dom�nio do Banquete",
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
        "t": "A �ltima Mordida",
        "role": "Executor Final",
        "lore": "Zankoku � a face mais temida dos Canibais: calmo, quase gentil, at� o momento da execu��o. Ele acredita que o �ltimo golpe deve ser o mais limpo poss�vel para honrar o alimento que vir� depois.",
        "ab": [
          "Mordida Final",
          "Execu��o Limpa",
          "Honra da Sobreviv�ncia"
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
    "name": "Dem�nio",
    "folder": "Demonio",
    "color": "#8e44ad",
    "glow": "rgba(142,68,173,0.5)",
    "color2": "#c47ef0",
    "icon": "??",
    "count": 30,
    "region": "Sombrath",
    "trait": "Nascidos do pecado e do caos primordial",
    "desc": "Dem�nios do plano infernal, os Dem�nios existem h� mais tempo que a maioria das ra�as de Eryndor. Sua libera��o pelos Selos destru�dos n�o foi um acidente � foi um plano mil�nios em elabora��o. Cada dem�nio tem uma ess�ncia diferente, mas todos compartilham o desejo de consumir e expandir.",
    "characters": [
      {
        "n": "Aatrox",
        "f": "Aatrox-V-1.png",
        "t": "O Exterminador dos Mundos",
        "role": "Destruidor Primordial",
        "lore": "N�o � um dem�nio comum � � uma entidade primordial de destrui��o selada em uma espada por divindades que temiam seu poder. Quando a Grande Fratura enfraqueceu os selos dimensionais, Aatrox se libertou e come�ou sua miss�o milenar: a extin��o de toda vida em Eryndor. N�o por �dio, mas porque acredita que a extin��o � liberta��o.",
        "ab": [
          "Espada da Extin��o",
          "Forma do Aniquilador",
          "Voo da Destrui��o"
        ],
        "pow": 100,
        "spd": 88,
        "def": 90,
        "int": 85,
        "align": "evil",
        "region": "Sombrath",
        "status": "Ativo � Ca�ando"
      },
      {
        "n": "Danji",
        "f": "Danji-V-1.png",
        "t": "O Ca�ador de Anjos",
        "role": "Ca�ador Dimensional",
        "lore": "Um dem�nio de chama roxa que desenvolveu um gosto peculiar: ca�ar Semi-Deuses e Apari��es pela emo��o da ca�a. N�o � o mais poderoso dos dem�nios, mas � o mais r�pido e o mais obstinado. Nenhuma de suas presas escapou duas vezes.",
        "ab": [
          "Chama Roxa Devastadora",
          "Rastreio Dimensional",
          "Golpe do Ca�ador"
        ],
        "pow": 82,
        "spd": 95,
        "def": 72,
        "int": 78,
        "align": "evil",
        "region": "Errante",
        "status": "Ca�ando"
      },
      {
        "n": "Drakhar",
        "f": "Drakhar.png",
        "t": "O Senhor do Caos",
        "role": "Lorde do Caos",
        "lore": "Um dem�nio de dreadlocks brancos e poder ca�tico que n�o obedece nem ao pr�prio Sukuna. Drakhar � o caos personificado � suas a��es seguem l�gica pr�pria incompreens�vel para mentes ordin�rias. Paradoxalmente, isso o torna o dem�nio mais imprevis�vel e portanto o mais perigoso em batalha aberta.",
        "ab": [
          "Explos�o do Caos",
          "Imprevisibilidade Absoluta",
          "Fragmenta��o da Realidade"
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
        "t": "O Drag�o Carmesim",
        "role": "Comandante Drac�nico",
        "lore": "O maior drag�o demon�aco de Sombrath, Drakon-Ghen tem envergadura que eclipsa cidades inteiras. Foi libertado pela Grande Fratura e imediatamente estabeleceu dom�nio sobre os c�us do sul. Sua exist�ncia mudou os conflitos a�reos � nenhum ex�rcito pode combater por terra enquanto ele patrulha o ar.",
        "ab": [
          "Sopro do Apocalipse",
          "Dom�nio do Ar",
          "Escamas Infernais"
        ],
        "pow": 97,
        "spd": 78,
        "def": 95,
        "int": 70,
        "align": "evil",
        "region": "C�us do Sul",
        "status": "Dominando"
      },
      {
        "n": "Dread",
        "f": "Dread-V-1.png",
        "t": "O Medo Encarnado",
        "role": "Senhor do Terror",
        "lore": "Uma entidade que n�o tem forma fixa � manifesta-se como o pior medo de quem a observa. Dread n�o precisa matar seus inimigos com for�a bruta; a maioria morre de p�nico antes de precisar usar as garras. � o arma psicol�gica mais eficaz de Sukuna.",
        "ab": [
          "Manifesta��o do Medo",
          "Vis�o de Terror",
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
        "t": "O Pico da Perfei��o",
        "role": "Entidade de Poder",
        "lore": "Uma anomalia entre os dem�nios � um ser de perfei��o f�sica absoluta e poder ilimitado que se acredita ser a manifesta��o do ideal de for�a pura. Golden Sperm n�o tem emo��es complexas: apenas poder, e a vontade de demonstr�-lo.",
        "ab": [
          "For�a Absoluta",
          "Corpo Perfeito",
          "Press�o Divina"
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
        "t": "O Tit� Infernal",
        "role": "Tit� do Fogo",
        "lore": "Um tit� demon�aco de dimens�es colossais, Golgoth n�o foi criado pelos Primordiais � nasceu no n�cleo de Sombrath h� eons. Seu corpo � literalmente feito de ferro fundido e chamas. Quando caminha, a terra racha. Quando grita, montanhas desmoronam.",
        "ab": [
          "Punho da Extin��o",
          "Corpo de Lava",
          "Grito do Apocalipse"
        ],
        "pow": 98,
        "spd": 40,
        "def": 97,
        "int": 38,
        "align": "evil",
        "region": "Sombrath Profundo",
        "status": "Dormindo � Despertando"
      },
      {
        "n": "Kokushibo",
        "f": "Kokushibo-V-1.png",
        "t": "O Mestre das L�minas Lunares",
        "role": "Mestre da Espada Demon�aca",
        "lore": "Outrora um humano que se tornou o maior espadachim de todos os tempos, Kokushibo vendeu sua humanidade para superar seu irm�o. Tornou-se um dem�nio e desenvolveu a Respira��o da Lua � uma t�cnica de espada com dezesseis l�minas crescendo do pr�prio corpo. Em mil anos de exist�ncia, nenhum espadachim igualou-o.",
        "ab": [
          "Respira��o da Lua � D�cimo Sexto Padr�o",
          "L�minas do Corpo",
          "Olhos dos Esp�ritos"
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
        "t": "O Intam�vel",
        "role": "Besta Divina Indom�vel",
        "lore": "Uma besta demon�aca que nunca foi derrotada na hist�ria registrada. Mahoraga adapta-se a qualquer ataque em segundos � seu escudo shikigami analisa, processa e cria imunidade a qualquer t�cnica em uma �nica rota��o. � considerado o ser vivo mais indom�vel de Eryndor.",
        "ab": [
          "Adapta��o Infinita",
          "Escudo Shikigami",
          "Devasta��o Total"
        ],
        "pow": 100,
        "spd": 85,
        "def": 100,
        "int": 80,
        "align": "evil",
        "region": "Sombrath",
        "status": "N�o Aprision�vel"
      },
      {
        "n": "Monspiet",
        "f": "Monspiet-V-1.png",
        "t": "O F�nix dos Dez",
        "role": "Comandante dos Dez Mandamentos",
        "lore": "Um dos Dez Mandamentos � a elite mais poderosa dos dem�nios. Monspiet tem o poder do P�ssaro Negro, capaz de lan�ar chamas que apagam qualquer luz e corros�o que dissolve barreiras m�gicas. Apesar de sua afilia��o demon�aca, mant�m um c�digo de honra peculiar.",
        "ab": [
          "P�ssaro Negro",
          "Chamas da Extin��o da Luz",
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
        "t": "O Ap�stolo Imortal",
        "role": "Ap�stolo da Guerra",
        "lore": "Um dem�nio-ap�stolo que existe h� mais de tr�s s�culos, sobrevivendo a batalhas que mataram ex�rcitos inteiros. Zodd respeita apenas os guerreiros mais poderosos � e passa a vida buscando algu�m capaz de mat�-lo. Teme apenas a profecia que prev� sua derrota �s m�os de algu�m que ainda n�o nasceu.",
        "ab": [
          "Transforma��o Apost�lica",
          "L�mina da Morte Certa",
          "Imortalidade do Ap�stolo"
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
        "lore": "O dem�nio de oito cabe�as, cada uma representando uma forma de corrup��o diferente. Orochi n�o precisa de for�a bruta � seu veneno dissolve a mat�ria, corr�i a magia e envenena at� os esp�ritos. A maior amea�a de Orochi � sua paci�ncia: pode esperar s�culos pela oportunidade certa.",
        "ab": [
          "Veneno das Oito Cabe�as",
          "Corrup��o Progressiva",
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
        "t": "O Rei das Maldi��es",
        "role": "Senhor Supremo dos Dem�nios",
        "lore": "O mais poderoso dem�nio-feiticeiro que j� existiu � um ser da era pr�-divina que os Semi-Deuses tentaram apagar da hist�ria. Sukuna lidou com a Grande Fratura n�o como vitimizado pelos eventos, mas como arquiteto oculto deles. Sua f�rmula de quatro bra�os e dom�nio sobre m�ltiplos dom�nios o torna virtualmente ilimitado em combate.",
        "ab": [
          "Dom�nio Primordial � Malefic�ncia",
          "Cleave",
          "Flecha Divina"
        ],
        "pow": 100,
        "spd": 96,
        "def": 92,
        "int": 100,
        "align": "evil",
        "region": "Sombrath � Trono dos Ossos",
        "status": "Ascendendo"
      },
      {
        "n": "Surtur",
        "f": "Surtur-V-1.png",
        "t": "O Fim do Mundo",
        "role": "Rei do Fogo do Fim dos Tempos",
        "lore": "Uma profecia fala de Surtur � o gigante demon�aco de fogo que encerrar� Eryndor em chamas no fim dos tempos. A profecia n�o diz se esse � um evento inevit�vel ou apenas um aviso. Surtur tomou o conhecimento da profecia e decidiu acelerar o cronograma.",
        "ab": [
          "Espada do Apocalipse",
          "Chamas do Fim",
          "Presen�a do Fim dos Tempos"
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
        "lore": "Um warlock-general que descobriu como consumir partes das almas dos inimigos derrotados, absorvendo seus poderes e mem�rias. Swain conhece os segredos de centenas de guerreiros mortos � cada batalha o torna mais completo, mais terr�vel, mais incompreens�vel para quem o enfrenta pela primeira vez.",
        "ab": [
          "Consumo de Almas",
          "Forma do Abutre Demon�aco",
          "Conhecimento dos Mortos"
        ],
        "pow": 86,
        "spd": 78,
        "def": 75,
        "int": 97,
        "align": "evil",
        "region": "Sombrath / Thornwall Ocupado",
        "status": "Avan�ando"
      },
      {
        "n": "Thul",
        "f": "Thul-V-1.png",
        "t": "O Primordial �sseo",
        "role": "Dem�nio Primordial",
        "lore": "Um dem�nio anterior � pr�pria categoriza��o de dem�nios � Thul existia quando os Primordiais ainda molda o mundo. Seu corpo de osso branco-acinzentado � feito de fragmentos de entidades que ele consumiu ao longo de eons. N�o tem ambi��es, n�o tem lealdades � apenas existe, consome e persiste.",
        "ab": [
          "Consumo Primordial",
          "Ossos da Era Primeira",
          "Persist�ncia Eterna"
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
        "role": "Manipuladora da Exist�ncia",
        "lore": "Apar�ncia ilusoriamente infantil esconde um poder que dobra os limites da realidade. Yoru n�o precisa de for�a f�sica � ela simplesmente reescreve as regras do espa�o ao redor de seus inimigos. Sua maior fraqueza � tamb�m sua maior for�a: ela se diverte com o caos que cria.",
        "ab": [
          "Dobra da Realidade",
          "Invers�o do Espa�o",
          "Riso do Fim"
        ],
        "pow": 90,
        "spd": 92,
        "def": 65,
        "int": 98,
        "align": "chaos",
        "region": "Errante",
        "status": "Ativa � Ca�tica"
      },
      {
        "n": "Yrul",
        "f": "Yrul-V-1.png",
        "t": "O Anjo Ca�do",
        "role": "Semideus Corrompido",
        "lore": "Yrul foi um Semi-Deus antes de ser seduziado pelo poder de Sombrath. Diferente dos dem�nios que nasceram no plano infernal, ele conhece a luz e escolheu as trevas � tornando-o mais perigoso que qualquer dem�nio nativo, pois entende exatamente o que est� combatendo.",
        "ab": [
          "Asas da Queda",
          "Luz Corrompida",
          "Trai��o Divina"
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
        "lore": "Um elemental demon�aco de fogo puro � n�o tem consci�ncia elaborada, mas tem poder enorme e instinto predat�rio refinado. Zoran manifesta-se como um v�rtice de chamas e vontade de destrui��o. Sukuna usa-o como arma de s�tio: onde Zoran vai, n�o sobra pedra sobre pedra.",
        "ab": [
          "V�rtice de Fogo Puro",
          "Instinto Predat�rio",
          "Forma Elemental"
        ],
        "pow": 88,
        "spd": 80,
        "def": 82,
        "int": 42,
        "align": "evil",
        "region": "Sombrath",
        "status": "Arma de S�tio"
      },
      {
        "n": "Cyber Gore",
        "f": "Cyber-Gore-V-1.png",
        "t": "O Cyber Gore",
        "role": "Personagem de Dem�nio",
        "lore": "Cyber Gore emergiu do núcleo de Sombrath quando força bruta tentou dominar a tecnologia. Sua carne se tornou aço vivente, mas sua alma permaneceu demoníaca. Chegou após a Fratura em busca de um equilíbrio que o mundo não lhe deu.",
        "ab": [
          "Golpe de Dem�nio",
          "Presen�a Imponente",
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
        "role": "Personagem de Dem�nio",
        "lore": "Garrison era um general que lutou contra demônios antes de ser corrompido por um fragmento de Kore roxo. Agora comanda um exército de sombras em batalhas que já terminaram há séculos. Sua ferida: ver a vitória como derrota. Sua promessa: reescrever a história da guerra.",
        "ab": [
          "Golpe de Dem�nio",
          "Presen�a Imponente",
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
        "role": "Personagem de Dem�nio",
        "lore": "Mordecai era um mago da Torre de Ossos que buscou estudar o Vazio. O Kore mostrou-lhe segredos que ninguém deveria saber — agora suas mãos sangram conhecimento proibido. Sua ferida: carregar verdades que enlouquecem. Sua promessa: codificar os segredos antes que o Vazio o encontre.",
        "ab": [
          "Golpe de Dem�nio",
          "Presen�a Imponente",
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
        "role": "Personagem de Dem�nio",
        "lore": "Obsidius era um cristal vivo nas profundezas de Sombrath. A Fratura o transformou de pedra em demônio de fogo, mas a obsessão por formas retas persiste. Sua ferida: ser oblíquo no mundo dos planos. Sua promessa: esculpir uma face bonita antes do fim.",
        "ab": [
          "Golpe de Dem�nio",
          "Presen�a Imponente",
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
        "role": "Personagem de Dem�nio",
        "lore": "Oogway renasceu das cinzas de um monastério destruído, mas não como sábio — como vingança viva. Cada golpe é um ensinamento não dado, cada vitória é um monge que não salvou. Sua ferida: a colmeia da ordem destruída. Sua promessa: restaurar o templo em ruínas.",
        "ab": [
          "Golpe de Dem�nio",
          "Presen�a Imponente",
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
        "role": "Personagem de Dem�nio",
        "lore": "Platinum Sperm nasceu do desejo de perfeição demoníaca — uma forma física ideal que ignora toda imperfeição. A perfeição é seu dom, mas também sua prisão. Sua ferida: nunca conhecer imperfeição. Sua promessa: encontrar a imperfeita que o complete.",
        "ab": [
          "Golpe de Dem�nio",
          "Presen�a Imponente",
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
        "role": "Personagem de Dem�nio",
        "lore": "Pyros era um sacerdote que rezava pelas chamas antes de ser tocado pelo Kore. Agora sua oração é fogo puro que consome tudo, incluindo suas palavras. Sua ferida: os rituais perdidos. Sua promessa: acender a última vela no altar abandonado.",
        "ab": [
          "Golpe de Dem�nio",
          "Presen�a Imponente",
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
        "role": "Personagem de Dem�nio",
        "lore": "Sad Sperm surgiu do luto excessivo por uma batalha perdida — suas lágrimas viraram veneno que corrói a esperança. Combatem tristeza transformada em arma. Sua ferida: não conseguir chorar sem destruir. Sua promessa: secar as lágrimas do mundo.",
        "ab": [
          "Golpe de Dem�nio",
          "Presen�a Imponente",
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
        "role": "Personagem de Dem�nio",
        "lore": "Shadoweaver era um ladrão que roubava sombras de inimigos em Wildmere. O Kore lhe deu o poder de literalizar o que roubava — agora lança sombras como lâminas. Sua ferida: as sombras roubadas não são suas. Sua promessa: devolver o que roubou.",
        "ab": [
          "Golpe de Dem�nio",
          "Presen�a Imponente",
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
        "role": "Personagem de Dem�nio",
        "lore": "Sion era um soldado cuja morte foi duvidoso na primeira Fratura. Recusou-se a ficar morto e agora opera com segunda licença. Sua ferida: existir como falha no mundo. Sua promessa: corrigir a falha que o trouxe de volta.",
        "ab": [
          "Golpe de Dem�nio",
          "Presen�a Imponente",
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
        "role": "Personagem de Dem�nio",
        "lore": "Xar Koth era um historiador que registrou batalhas em pedra. O Kore lhe deu a capacidade de carvar eventos futuros — mas a tinta é seu próprio sangue. Sua ferida: escrever seu próprio fim. Sua promessa: registrar a última página.",
        "ab": [
          "Golpe de Dem�nio",
          "Presen�a Imponente",
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
    "icon": "?",
    "count": 12,
    "region": "O Entremundo",
    "trait": "Origem e motiva��es completamente desconhecidas",
    "desc": "Entidades cuja origem, motiva��o e natureza s�o inteiramente enigm�ticas. Nem os Semi-Deuses conseguem categorizar os Desconhecidos adequadamente. Eles observam o conflito de Eryndor com uma mistura de curiosidade e indiferen�a que sugere uma perspectiva fundamentalmente diferente do tempo e do prop�sito.",
    "characters": [
      {
        "n": "Aurelius",
        "f": "Aurelius-V-1.png",
        "t": "O Cavaleiro de Prata",
        "role": "Indefinido / Protetor",
        "lore": "Um ser de armadura prateada mec�nica que apareceu sem origem conhecida nas bordas do conflito entre Semi-Deuses e Dem�nios. N�o fala com ningu�m, n�o aceita aliados, mas consistentemente posiciona-se contra for�as de destrui��o total. Alguns acreditam que � um servo de um Primordial que ainda n�o se revelou.",
        "ab": [
          "Armadura Imposs�vel",
          "Velocidade Mec�nica",
          "Prop�sito Oculto"
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
        "role": "Indefinido / Or�culo de Timelines",
        "lore": "Uma silhueta roxa que existe em m�ltiplas linhas temporais simultaneamente. Garrick viu o fim de Eryndor em 847 vers�es diferentes e est� buscando as poucas onde o mundo sobrevive. Ningu�m sabe se sua presen�a em uma batalha significa que essa linha sobreviver� � ou que ele est� apenas observando como morre.",
        "ab": [
          "Vis�o de Timelines",
          "Presen�a M�ltipla",
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
        "t": "O Drag�o C�smico",
        "role": "Indefinido / Entidade C�smica",
        "lore": "Um drag�o de apar�ncia alien�gena � tons de roxo e amarelo que n�o correspondem a nenhuma esp�cie drac�nica conhecida de Eryndor. Glorivex sugere origens al�m do mundo f�sico, possivelmente de um plano c�smico que os Primordiais nunca mapearam. N�o � hostil, mas sua simples presen�a desestabiliza a magia ao redor.",
        "ab": [
          "Presen�a C�smica",
          "Respira��o N�o-Elementar",
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
        "lore": "Uma entidade que veste a apar�ncia de um bobo da corte c�smico � mas seu riso racha a realidade ao redor. Jester pode ser uma divindade esquecida, pode ser uma manifesta��o do Vazio com senso de humor, pode ser algo que nenhuma categoriza��o conhecida abarca. Seus atos parecem aleat�rios mas sempre, sempre servem a algum prop�sito oculto.",
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
        "status": "Pregando Pe�as"
      },
      {
        "n": "Kiran",
        "f": "Kiran-V-1.png",
        "t": "O Guerreiro de Ouro Envelhecido",
        "role": "Indefinido / Guerreiro Milenar",
        "lore": "Um guerreiro de apar�ncia humana envelhecida mas for�a que desmente cada ruga. Kiran nunca diz de onde vem, nunca explica o que busca, nunca revela para quem luta. Sua t�cnica de combate � a mais antiga documentada � anterior a qualquer escola conhecida de qualquer ra�a.",
        "ab": [
          "Arte Marcial Primordial",
          "For�a que Desmente a Idade",
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
        "lore": "Uma criatura entre deus e animal, com um rosto de fome permanente e um corpo que desafia anatomia conhecida. Maw-Shin representa o instinto puro levado � divindade � � o que acontece quando a natureza primordial ganha consci�ncia e poder sem perder sua animalidade.",
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
        "lore": "Uma entidade de apar�ncia deliciosa e poder mortal. Mellifera manifesta-se como uma divindade de mel, abelhas e natureza � mas a natureza que representa n�o � suave. � a natureza que mata sem remorso, que polui e purifica com a mesma indiferen�a. Seus favores s�o t�o perigosos quanto sua hostilidade.",
        "ab": [
          "Enxame da Divindade",
          "Mel Venenoso",
          "B�n��o da Colmeia"
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
        "lore": "Uma criatura de escurid�o e luz estelar que surgiu sem antecedentes durante a Grande Fratura. Stellaris n�o se comunica na linguagem de nenhuma ra�a conhecida � mas sua presen�a parece proteger regi�es de serem completamente consumidas pelo Vazio. Pode ser um mecanismo de defesa do pr�prio cosmos de Eryndor.",
        "ab": [
          "Luz Estelar",
          "Escurid�o Protetora",
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
        "role": "Indefinido / Ca�ador Interdimensional",
        "lore": "Vane nunca falou. Nunca sorriu. Nunca demonstrou emo��o de qualquer tipo. Aparece, combate com maestria letal, e desaparece. Alguns teorizam que Vane � um servo de uma entidade que existe al�m do alcance de Eryndor � um ca�ador enviado para coletar algo que ainda n�o foi identificado.",
        "ab": [
          "Sil�ncio Absoluto",
          "T�cnica Perfeita",
          "Origem Al�m"
        ],
        "pow": 86,
        "spd": 93,
        "def": 78,
        "int": 75,
        "align": "neutral",
        "region": "Desconhecida",
        "status": "Miss�o Oculta"
      },
      {
        "n": "Glorivex",
        "f": "Glorivex-V-2.png",
        "t": "O Glorivex",
        "role": "Personagem de Desconhecido",
        "lore": "Glorivex surge do Entremundo como desafio personificado — sua forma oscila entre rosto humano e espinha dracônica. É um mistério vivo cujo propósito desconhece até os Semi-Deuses. Sua ferida: não pertencer a nenhuma história. Sua promessa: escrever sua própria linhagem.",
        "ab": [
          "Golpe de Desconhecido",
          "Presen�a Imponente",
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
        "lore": "Helion é a luz que caiu no Entremundo e virou sombra. Não é nem demônio nem anjo — é um intermediário de luz e escuridão. Sua ferida: brilhar sem ser iluminado. Sua promessa: achar a luz.",
        "ab": [
          "Golpe de Desconhecido",
          "Presen�a Imponente",
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
        "lore": "Noxus é a ausência dada forma — criado quando alguém perguntou qual seria o vazio sem o Vazio. Responde a pergunta vivendo, mas sem resposta verdadeira. Sua ferida: não saber se existe. Sua promessa: descobrir sua própria existência.",
        "ab": [
          "Golpe de Desconhecido",
          "Presen�a Imponente",
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
    "icon": "??",
    "count": 20,
    "region": "Todo o Continente",
    "trait": "For�as da natureza em forma de ser vivo",
    "desc": "Os Gigantes n�o s�o simplesmente criaturas grandes � s�o manifesta��es vivas de for�as primordiais. Antes da Guerra da Converg�ncia, permaneciam indiferentes �s guerras dos mortais. Agora que o conflito amea�a o pr�prio tecido da realidade, at� os Gigantes precisam escolher lados.",
    "characters": [
      {
        "n": "Asura",
        "f": "Asura-V-1.png",
        "t": "O Deus da Guerra",
        "role": "Deus Guerreiro dos Gigantes",
        "lore": "Com bra�os infinitos e for�a que supera qualquer c�lculo mortal, Asura � a manifesta��o do conflito vivo. N�o pode morrer enquanto houver guerra no mundo � e portanto, enquanto Eryndor existir em seu estado atual, Asura � efetivamente eterno. Combate n�o por escolha mas por natureza.",
        "ab": [
          "Mil Punhos",
          "F�ria Infinita",
          "Presen�a da Guerra"
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
        "t": "O Drag�o Azul",
        "role": "Drag�o-Gigante do Kore",
        "lore": "Um drag�o de propor��es gigantescas infundido com energia Kore azul, criando um ser que n�o � apenas drag�o, n�o � apenas gigante � � uma for�a da natureza ativa. Azure Kore controla tempestades de energia Kore, tornando cada ataque n�o apenas f�sicamente devastador mas magicamente corrosivo.",
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
        "region": "C�us do Norte",
        "status": "Ativo"
      },
      {
        "n": "Charizard",
        "f": "Charizard.png",
        "t": "O Drag�o Lend�rio",
        "role": "Rei Drac�nico Ancestral",
        "lore": "Um drag�o que a magia antiga de Eryndor elevou � statura de Gigante h� eons. Charizard � a prova de que drag�es antigos o suficiente transcendem sua categoria original. N�o pertence a nenhum lado do conflito, mas quando se manifesta, os ex�rcitos param e contemplam.",
        "ab": [
          "Inferno Azul",
          "Presen�a do Lend�rio",
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
        "t": "O Trov�o Viking",
        "role": "Senhor de Guerra N�rdico",
        "lore": "Um gigante de tradi��o viking cujo povo habita as ilhas do extremo norte. Elbaf luta com uma lan�a que canalizou raios durante dois s�culos, tornando-a um condutor de tempestade. Seu povo � os Gigantes N�rdicos � � o �nico grupo de Gigantes com estrutura social coesa e c�digo de honra definido.",
        "ab": [
          "Lan�a das Tempestades",
          "Grito de Guerra N�rdico",
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
        "lore": "Um gigante de um olho que controla os ventos e as mar�s. Harald comanda as tempestades do oceano norte, protegendo as rotas mar�timas dos Gigantes N�rdicos. Acredita que a Guerra da Converg�ncia � uma tempestade como as que ele conhece � destrutiva mas necess�ria para limpar o que est� podre.",
        "ab": [
          "Controle das Mar�s",
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
        "t": "O Enxame dos Cr�nios",
        "role": "Entidade de Enxame",
        "lore": "N�o � um �nico gigante � � uma col�nia de cr�nios menores que se organizam em algo que aparenta ser um �nico ser gigante. Hydraskull representa um tipo de intelig�ncia coletiva e de for�a distribu�da: destrua partes, mas o todo se reagrupa imediatamente.",
        "ab": [
          "Enxame Indestrut�vel",
          "Regenera��o do Coletivo",
          "Vis�o de Centenas"
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
        "t": "O Drag�o dos Mares",
        "role": "A Criatura Mais Poderosa Viva",
        "lore": "A criatura mais poderosa que respira hoje em Eryndor � um drag�o-gigante que nunca foi derrotado em batalha aberta. Kaido dominou os oceanos por s�culos e agora observa a Guerra da Converg�ncia com interesse crescente. Quando ele finalmente escolher um lado, o conflito terminar� � da maneira que ele decidir.",
        "ab": [
          "Drag�o dos Mares",
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
        "t": "O Deus da Trai��o",
        "role": "Gigante Trickster",
        "lore": "O gigante-deus das ilus�es e da trai��o. Loki n�o � confi�vel por nenhuma fac��o mas � essencial para todas, porque seus truques frequentemente resolvem problemas que a for�a bruta n�o consegue. Est� jogando um jogo cujas regras apenas ele conhece � e est� ganhando.",
        "ab": [
          "Ilus�o Perfeita",
          "Metamorfose",
          "Manipula��o C�smica"
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
        "t": "O Am�lgama",
        "role": "Entidade Coletiva",
        "lore": "Uma massa sombria que � a fus�o de m�ltiplas almas gigantescas � cada uma de um guerreiro lend�rio ca�do durante a Grande Fratura. Multi-Supreme herdou os poderes e mem�rias de todos eles, tornando-se um arquivo vivo de t�cnicas de combate perdidas h� gera��es.",
        "ab": [
          "T�cnicas Absorvidas",
          "For�a do Coletivo",
          "Mem�ria de Guerreiros"
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
        "role": "Serpente que Corr�i a Realidade",
        "lore": "A serpente que morde as ra�zes da realidade � n�o metaforicamente, mas literalmente. Nidhogg existe no plano mais profundo de Eryndor e corr�i os fundamentos sobre os quais o mundo foi constru�do. A Grande Fratura acelerou seu processo; os Primordiais a criaram como um mecanismo de fim de ciclo, n�o de destrui��o.",
        "ab": [
          "Mordida das Ra�zes",
          "Corros�o da Realidade",
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
        "t": "O Horror C�smico",
        "role": "Divindade do Horror Antigo",
        "lore": "Um ser de horror c�smico � tent�culos de n�voa, olhos que veem al�m da dimens�o, consci�ncia que n�o pode ser compreendida por mentes mortais. Nyxthos existia antes dos Primordiais e ser� quando eles forem esquecidos. Observa a guerra com o interesse de quem l� uma briga de formigas.",
        "ab": [
          "Loucura do Abismo",
          "Tent�culos Dimensionais",
          "Presen�a Incompreens�vel"
        ],
        "pow": 100,
        "spd": 60,
        "def": 97,
        "int": 100,
        "align": "chaos",
        "region": "Entre Dimens�es",
        "status": "Observando"
      },
      {
        "n": "Radahn",
        "f": "Radahn-V-1.png",
        "t": "O Esmagador de Estrelas",
        "role": "General dos Gigantes Celestes",
        "lore": "Um general de propor��es divinas que literalmente parou as estrelas de se moverem usando suas t�cnicas gravitacionais. Radahn absorveu tanto conhecimento arcano em seu corpo f�sico que se tornou uma for�a gravitacional em si mesmo. Combatentes ao redor dele experimentam gravidade alterada.",
        "ab": [
          "Controle Gravitacional",
          "Festival da Arena",
          "For�a das Estrelas Paradas"
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
        "lore": "Bjorn era um gigante-montanha que carregava uma torre em cima da cabeça — a última casa de um vilarejo que afundou. Sua ferida: ser o altar temporário. Sua promessa: erguer uma torre que nunca afunde.",
        "ab": [
          "Golpe de Gigantes",
          "Presen�a Imponente",
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
        "lore": "Crimson era um gigante de fogo nascido de um cristal vermelho de erupção. Sua raiva é tão intensa quanto a lava — e tão difícil de controlar. Sua ferida: incinerrar tudo ao redor. Sua promessa: aprender a flor de lava.",
        "ab": [
          "Golpe de Gigantes",
          "Presen�a Imponente",
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
        "lore": "Kabuto era um guerreiro-coraça que carregava o cascolo de um samurai extinto. Sua armadura é conchas de kori que se movem como vontade própria. Sua ferida: proteger corpos que não tem. Sua promessa: ser o escudo final.",
        "ab": [
          "Golpe de Gigantes",
          "Presen�a Imponente",
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
        "lore": "Katsu era um guerreiro comum cujo espírito foi tocado por um cristal gigante. Sua força aumentou mas sua altura também — agora tropeça nas portas de sua juventude. Sua ferida: não se encaixar no mundo pequeno. Sua promessa: quebrar as portas que o limitam.",
        "ab": [
          "Golpe de Gigantes",
          "Presen�a Imponente",
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
        "lore": "Oblivion é um gigante feito de névoa e esquecimento — tudo o que toca some da memória dos sobreviventes. Sua ferida: não ser lembrado. Sua promessa: ser o fim que ninguém recordará.",
        "ab": [
          "Golpe de Gigantes",
          "Presen�a Imponente",
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
        "lore": "Torstein é um gigante de gelo que carrega um castelo em cadeia. Sua lenta marcha congela o chão sob seus pés. Sua ferida: tocar sem congelar o mundo. Sua promessa: aquecer o coração uma vez.",
        "ab": [
          "Golpe de Gigantes",
          "Presen�a Imponente",
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
        "lore": "Zinogre era um lobo que o Kore transformou em monstro elétrico. Sua raiva é agora um trovão. Sua ferida: luta sem fome. Sua promessa: acalmar o raio.",
        "ab": [
          "Golpe de Gigantes",
          "Presen�a Imponente",
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
        "lore": "Zrik é um gigante pedra que carrega uma inscrição em sua carapaça — um texto que ninguém consegue traduzir. Sua ferida: carregar um segredo sem saber. Sua promessa: decifrar antes que o mundo desabe.",
        "ab": [
          "Golpe de Gigantes",
          "Presen�a Imponente",
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
    "icon": "?",
    "count": 22,
    "region": "Thornwall",
    "trait": "Potencial ilimitado pela determina��o",
    "desc": "A ra�a mais numerosa e adapt�vel de Eryndor. Os Humanos n�o t�m os poderes inatos de dem�nios ou o peso eterno dos Amaldi�oados � mas compensam com determina��o, criatividade e uma capacidade de crescer al�m de todo limite que deveriam ter. Os maiores e mais devastadores guerreiros de Eryndor come�aram como humanos comuns.",
    "characters": [
      {
        "n": "Aokiji",
        "f": "Aokiji.png",
        "t": "O Almirante de Gelo",
        "role": "Almirante do Zero Absoluto",
        "lore": "Um almirante com controle sobre o zero absoluto � o frio que para toda movimento, toda vida, toda possibilidade. Aokiji n�o usa seu poder levianamente; viu demais para ser entusiasta da destrui��o. Mas quando o usa, nenhuma chama sobrevive.",
        "ab": [
          "Gelo Eterno",
          "Zero Absoluto",
          "Era do Gelo Perp�tuo"
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
        "lore": "Uma rainha de cabelo vermelho e for�a que envergonha ex�rcitos inteiros. Astrid ascendeu ao trono n�o por nascimento, mas por ser a �ltima sobrevivente de sua fam�lia ap�s um massacre demon�aco. Cada batalha que vence � dedicada aos mortos que ningu�m mais vingou.",
        "ab": [
          "Machado da Rainha",
          "F�ria da Sobrevivente",
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
        "t": "O Lend�rio",
        "role": "Guerreiro Lend�rio Nascido",
        "lore": "Nasceu sob a mais m� das estrelas e foi rejeitado por isso � um poder absurdo que aterroriza todos ao redor. Broly n�o escolheu ser o que �; o poder o escolheu. Seu corpo � uma bateria viva de energia destruidora que cresce sem limite aparente.",
        "ab": [
          "Grande Impulso Verde",
          "Poder Ilimitado",
          "Meteoro Lend�rio"
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
        "t": "O Capit�o Amaldi�oado dos Mares",
        "role": "Capit�o do Holand�s Voador",
        "lore": "Um capit�o que fez um pacto proibido pelo amor que nunca recebeu e acabou trocando seu cora��o por poder sobre as profundezas. Agora controla as criaturas dos oceanos e comanda o Holand�s Voador � o navio dos mortos que navega entre os planos de exist�ncia.",
        "ab": [
          "Controle dos Mares",
          "Cora��o Aprisionado",
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
        "t": "O Revolucion�rio do Mundo",
        "role": "L�der da Revolu��o Global",
        "lore": "O homem mais perigoso do mundo para toda forma de tirania e injusti�a. Dragon nasceu com controle sobre os ventos e tempestades, mas seu poder mais aterrorizante � sua capacidade de inspirar � de transformar pessoas comuns em for�as de mudan�a.",
        "ab": [
          "Tempestade Revolucion�ria",
          "Inspira��o Inabal�vel",
          "Vento da Liberdade"
        ],
        "pow": 88,
        "spd": 85,
        "def": 80,
        "int": 97,
        "align": "good",
        "region": "Errante",
        "status": "Ativo � Organizando"
      },
      {
        "n": "Emporio Alnino",
        "f": "Emporio-Alnino.png",
        "t": "O Menino Prodigio",
        "role": "Prodigio Incompreens�vel",
        "lore": "Uma crian�a cujo poder desafia toda compreens�o de desenvolvimento natural. Emporio nasceu com a capacidade de criar e manipular esp�ritos � entidades que existem apenas por sua imagina��o. Cada esp�rito que cria tem poder real e permanente.",
        "ab": [
          "Cria��o de Esp�ritos",
          "Imagina��o Materializada",
          "Prodigio do Imposs�vel"
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
        "lore": "Um guerreiro que dominou n�o um, mas todos os quatro elementos primordiais atrav�s de d�cadas de treino extremo. Enjin n�o tem o poder bruto de um dem�nio ou a magia inata de um Semi-Deus � mas combina elementos em padr�es t�o complexos que superam oponentes teoricamente superiores.",
        "ab": [
          "S�ntese Elemental",
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
        "t": "A Dan�a das L�minas",
        "role": "Defensora de sua Terra",
        "lore": "Uma guerreira que dan�a com l�minas levitantes em padr�es imposs�veis de prever ou defender. Irelia nunca lutou por conquista � cada batalha foi em defesa de sua terra natal devastada por invasores. Seu poder cresce quanto mais luta, quanto mais tem a proteger.",
        "ab": [
          "Dan�a das L�minas",
          "Tempestade de Corte",
          "Inabal�vel"
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
        "t": "O Enigma dos Tr�s Olhos",
        "role": "Indefinido / Guerreiro Misterioso",
        "lore": "Um guerreiro de tr�s olhos cuja origem permanece mist�rio at� para seus aliados. Seus tr�s olhos percebem realidades sobrepostas simultaneamente. N�o fala sobre seu passado, mas suas t�cnicas s�o reconhec�veis como das mais antigas civiliza��es humanas extintas.",
        "ab": [
          "Tr�s Vis�es",
          "T�cnica Arcaica",
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
        "t": "O Matador de Deuses do Trov�o",
        "role": "God Slayer do Trov�o",
        "lore": "Neto de um lend�rio mago, Laxus herdou o poder de matar deuses do trov�o � literalmente consumir trov�es divinos e torn�-los mais fortes. Em um mundo onde semi-deuses e gigantes do trov�o proliferam, Laxus tornou-se uma necessidade estrat�gica para a sobreviv�ncia humana.",
        "ab": [
          "Raio de Destrui��o Divina",
          "Consumo de Trov�o",
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
        "lore": "Uma guerreira que alcan�ou perfei��o f�sica absoluta sem nenhum poder m�gico inato � apenas treino. Maki compensa sua falta de magia com uma maestria em armas que transcende qualquer m�gico. Cada arma que toca torna-se extens�o perfeita de seu corpo.",
        "ab": [
          "Maestria de Armas",
          "Perfei��o F�sica",
          "Adapta��o Instant�nea"
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
        "t": "A Deusa da Podrid�o",
        "role": "Guerreira Amaldi�oada da Podrid�o",
        "lore": "Uma guerreira que carrega uma maldi��o de podrid�o que devora seu pr�prio corpo � mas a cada batalha, floresce, cicatriza e recome�a. Seu bra�o dourado prot�tico � mais forte que qualquer a�o. Malenia nunca encontrou derrotas, mesmo quando literalmente destr�i-se para vencer.",
        "ab": [
          "Florescer Escarlate",
          "Bra�o de Ouro",
          "Maldi��o da Podrid�o"
        ],
        "pow": 95,
        "spd": 92,
        "def": 75,
        "int": 78,
        "align": "chaos",
        "region": "Errante",
        "status": "Buscando Prop�sito"
      },
      {
        "n": "Raiden",
        "f": "Raiden.png",
        "t": "O Deus do Trov�o Mortal",
        "role": "Deus do Trov�o Humano",
        "lore": "Um guerreiro que n�o nasceu deus mas tornou-se um atrav�s de batalhas que transcendem o humano. Raiden canalizou raios durante d�cadas at� que seu corpo se tornou um condutor vivo de eletricidade divina. Protege os humanos contra Onis e dem�nios com poder que nenhum mortal deveria ter.",
        "ab": [
          "Trov�o Mortal Divino",
          "Velocidade do Raio",
          "Prote��o Eletromagn�tica"
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
        "t": "A Maior Amea�a que Existiu",
        "role": "O Ser que Aterrorizou o Mundo",
        "lore": "O pirata mais perigoso que j� viveu � o �nico ser que fez os maiores poderes de Eryndor se unirem temporariamente para derrot�-lo. Xebec n�o queria poder ou riqueza � queria destruir a ordem estabelecida pela raiz. Sua morte foi o evento que precedeu a Grande Fratura.",
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
        "region": "Lend�rio",
        "status": "Falecido � Herdeiro Desconhecido"
      },
      {
        "n": "Shamrock",
        "f": "Shamrock.png",
        "t": "O Druida da Batalha",
        "role": "Druida Guerreiro Celta",
        "lore": "Um druida guerreiro que combina a magia da natureza com t�cnicas de batalha brutais de sua tradi��o celta. Shamrock faz a terra lutar ao seu lado � pedras voam, ra�zes prendem, o solo engole. A natureza que ele controla n�o � gentil; � a natureza predat�ria em seu estado original.",
        "ab": [
          "F�ria da Natureza",
          "Ritmo da Batalha Dru�dica",
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
        "role": "Imperador do Equil�brio",
        "lore": "Um imperador que existe n�o para conquista, mas para equil�brio. Shanks � o �nico ser capaz de interromper qualquer conflito com sua presen�a � sua energia vital � t�o refinada que projeta como uma for�a gravitacional de intimida��o pura. Perdeu um bra�o por escolha e tornou-se mais poderoso depois.",
        "ab": [
          "Haki do Conquistador",
          "L�mina Perfeita",
          "Presen�a do Imperador"
        ],
        "pow": 97,
        "spd": 90,
        "def": 88,
        "int": 95,
        "align": "good",
        "region": "Oceano Sul / Errante",
        "status": "Mantendo Equil�brio"
      },
      {
        "n": "Solaria",
        "f": "Solaria.png",
        "t": "A Guerreira do Sol",
        "role": "Campe� da Luz Solar",
        "lore": "Uma guerreira aben�oada pelo sol primordial de Eryndor, Solaria canalizou durante d�cadas a luz solar diretamente em seu corpo. Pode transformar luz em for�a de combate, em cura ou em destrui��o. Em batalhas noturnas, cria seu pr�prio sol.",
        "ab": [
          "Feixe Solar",
          "B�n��o da Luz",
          "Cria��o de Solst�cio"
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
        "role": "Ca�ador do Sobrenatural",
        "lore": "Um ser humano comum � literalmente sem energia m�gica inata � que se tornou o maior ca�ador de criaturas sobrenaturais de Eryndor. Toji compreendeu algo fundamental: poder m�gico � previs�vel, e o imprevis�vel mata o previs�vel. Cada batalha que vence � com t�cnica pura e intelig�ncia.",
        "ab": [
          "T�cnica de Matan�a de Feiticeiros",
          "Corpo Aperfei�oado",
          "Imprevisibilidade"
        ],
        "pow": 88,
        "spd": 97,
        "def": 75,
        "int": 92,
        "align": "neutral",
        "region": "Errante",
        "status": "Ca�ando"
      },
      {
        "n": "Vice Almirante Bastille",
        "f": "Vice-Almirante Bastille.png",
        "t": "O Gigante de Armadura",
        "role": "Oficial Militar de Elite",
        "lore": "Um vice-almirante de estatura gigantesca e armadura impenetr�vel que lidera os esfor�os militares humanos contra a invas�o demon�aca no sul. Bastille � a prova de que a estrutura e a disciplina militares podem enfrentar poder sobrenatural quando aplicadas com intelig�ncia estrat�gica.",
        "ab": [
          "Armadura de Elite",
          "Comando T�tico",
          "L�mina dos Gigantes"
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
        "lore": "Garp era um herói que jurou proteger o mundo, mas perdeu família na primeira Fratura. Sua força aumentou mas seu sorriso sumiu. Sua ferida: proteger sem conseguir salvar. Sua promessa: ser o escudo que dura mais que a tempestade.",
        "ab": [
          "Golpe de Humanos",
          "Presen�a Imponente",
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
        "lore": "Kaelen era um mago de Thornwall que buscou desvendar a técnica de Kore. Seu desafio foi transformado em marcas que ardem sob a pele. Sua ferida: tocar o segredo sem dominar. Sua promessa: decifrar o código do cristal.",
        "ab": [
          "Golpe de Humanos",
          "Presen�a Imponente",
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
        "lore": "Scopper Gaban era um imprestável que virou herói sem querer — cada passo foi acompanhado pelo riso de quem achava que cairia. Mas ele sobreviveu onde os fortes caíram. Sua ferida: rir da própria sobrevivência. Sua promessa: ver o fim sem medo.",
        "ab": [
          "Golpe de Humanos",
          "Presen�a Imponente",
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
    "icon": "?",
    "count": 8,
    "region": "Torres do Ex�lio",
    "trait": "Controladores das leis arcanas do mundo",
    "desc": "Estudiosos e praticantes das artes arcanas que foram for�ados ao ex�lio quando a Grande Fratura desestabilizou os fundamentos da magia. Agora retornam, sabendo que seu conhecimento � insubstitu�vel para conter a expans�o do Vazio. Os Magos s�o poucos mas cada um representa s�culos de conhecimento concentrado.",
    "characters": [
      {
        "n": "Dravok",
        "f": "Dravok-V-1.png",
        "t": "O Feiticeiro das Bestas",
        "role": "Mago Bestial",
        "lore": "Um mago que abandonou a magia convencional para estudar os esp�ritos animais primordiais. Dravok canaliza a ess�ncia de predadores extintos, tornando-se temporariamente algo entre feiticeiro e besta. Sua especialidade � adaptar e combinar � cada forma animal que absorve adiciona ao seu repert�rio.",
        "ab": [
          "Esp�ritos Animais",
          "Fus�o Bestial",
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
        "lore": "O criador original � um mago que passou s�culos estudando como dar vida artificial a mat�ria inerte. Gowther n�o � o que parece; cria entidades que s�o indistingu�veis de seres vivos, mas s�o fundamentalmente diferentes. A fronteira entre cria��o e vida real � algo que ele examina sem descanso.",
        "ab": [
          "Cria��o de Vida Artificial",
          "Manipula��o de Mem�rias",
          "Alquimia do Ser"
        ],
        "pow": 75,
        "spd": 68,
        "def": 70,
        "int": 100,
        "align": "neutral",
        "region": "Torres do Ex�lio",
        "status": "Ativo"
      },
      {
        "n": "Kurogam Enma",
        "f": "Kurogam-Enma-V-1.png",
        "t": "A Feiticeira das Chamas",
        "role": "Feiticeira Destrutiva",
        "lore": "Uma feiticeira cujo dom�nio sobre o fogo arcano � t�o total que seu pr�prio corpo queima em manifesta��o permanente de poder. Kurogam-Enma n�o usa fire como elemento � usa fogo como linguagem, expressando sua vontade atrav�s de chamas que obedecem pensamentos.",
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
        "region": "Torres do Ex�lio",
        "status": "Ativa"
      },
      {
        "n": "Melina",
        "f": "Melina-V-1.png",
        "t": "A Donzela Guia",
        "role": "Maga da Orienta��o",
        "lore": "Aparentemente gentil, Melina carrega um prop�sito devastador que ela pr�pria questiona. Sua magia � de orienta��o e transforma��o � ela n�o destr�i, ela dirige. Mas o que ela dirige pode ser t�o destrutivo quanto qualquer arma. Conhece segredos dos Semi-Deuses que eles prefeririam que permanecessem secretos.",
        "ab": [
          "Orienta��o da Chama",
          "Transforma��o do Destino",
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
        "lore": "Um mago que cruzou deliberadamente os limites do que a ordem arcana permite � desenvolvendo t�cnicas de raio que desequilibram o pr�prio campo m�gico ao redor. Shinso foi exilado n�o por ser maligno, mas por ser inconvenientemente poderoso para as estruturas estabelecidas.",
        "ab": [
          "Raio Proibido",
          "Disrup��o M�gica",
          "Arte Proibida do Trov�o"
        ],
        "pow": 86,
        "spd": 85,
        "def": 72,
        "int": 90,
        "align": "chaos",
        "region": "Torres do Ex�lio",
        "status": "Exilado � Ativo"
      },
      {
        "n": "Void",
        "f": "Void-V-1.png",
        "t": "O Arcano da Morte",
        "role": "Arquimago da Morte",
        "lore": "Um feiticeiro que n�o estuda a morte como conceito filos�fico, mas como sistema t�cnico manipul�vel. Void descobriu que a morte � uma forma de energia como qualquer outra � e que pode ser canalizada, redirecionada e amplificada. � o pesadelo de qualquer ser que acredita que morrer � o pior destino poss�vel.",
        "ab": [
          "Manipula��o da Morte",
          "Arqueiro da Extin��o",
          "Barreira do Fim"
        ],
        "pow": 87,
        "spd": 72,
        "def": 80,
        "int": 97,
        "align": "evil",
        "region": "Torres do Ex�lio",
        "status": "Pesquisando"
      },
      {
        "n": "Zephyr",
        "f": "Zephyr-V-1.png",
        "t": "O Caos do Vento",
        "role": "Mago das Tempestades",
        "lore": "Um mago cujo dom�nio sobre ventos e tempestades � vasto mas notoriamente inst�vel � a magia de Zephyr funciona perfeitamente quando ele mant�m calma, o que raramente acontece. Extremamente poderoso em momentos de necessidade; perigosamente imprevis�vel no resto do tempo.",
        "ab": [
          "Tempestade do Caos",
          "Vento do Imposs�vel",
          "Controle pelo Caos"
        ],
        "pow": 85,
        "spd": 88,
        "def": 70,
        "int": 82,
        "align": "chaos",
        "region": "Torres do Ex�lio",
        "status": "Ativo � Ca�tico"
      },
      {
        "n": "Hajime",
        "f": "Hajime.png",
        "t": "O Hajime",
        "role": "Personagem de Magos",
        "lore": "Hajime é um mágico branco que carrega um livro amaldiçoado — cada página lida consome um ano de vida. Mas também revela segredos que impedem guerras. Sua ferida: pagar anos por respostas. Sua promessa: terminar o livro antes que o tempo acabe.",
        "ab": [
          "Golpe de Magos",
          "Presen�a Imponente",
          "Vontade de Combate"
        ],
        "pow": 67,
        "spd": 90,
        "def": 56,
        "int": 63,
        "align": "neutral",
        "region": "Torres do Ex�lio",
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
    "icon": "?",
    "count": 12,
    "region": "Desconhecida",
    "trait": "O �nico ser entre dois mundos",
    "desc": "Uma categoria de uma �nica exist�ncia conhecida � a Meio-Sangue. Nascida de pai demon�aco e m�e semi-divina, ro � um paradoxo imposs�vel que a f�sica e a magia de Eryndor deveriam ter impedido de existir. Ela � a chave das profecias de salva��o e destrui��o do mundo.",
    "characters": [
      {
        "n": "Kaelia",
        "f": "Kaelia-V-1.png",
        "t": "A Filha do Imposs�vel",
        "role": "Meio-Sangue � Chave das Profecias",
        "lore": "Nascida de um Dem�nio e uma Semi-Deusa em uma uni�o que deveria ser imposs�vel, Kaelia carrega em seu sangue tanto o poder destrutivo de Sombrath quanto a gra�a divina de Aethelos. Pode atravessar todos os planos de exist�ncia sem dano. Pode fechar a Fissura do Vazio � mas fech�-la pode exigir sua pr�pria aniquila��o. Ela sabe disso. Ainda assim, caminha em dire��o ao seu destino.",
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
        "region": "Errante � Buscada por Todos",
        "status": "A Profecia a Encontra"
      },
      {
        "n": "Barba Branca",
        "f": "Barba-Branca-V-1.png",
        "t": "O Imperador dos Mares",
        "role": "Lenda do Mar e do Sangue",
        "lore": "Barba Branca nasceu humano, mas o mar o moldou como se fosse uma ra�a � parte. Suas batalhas contra monstros e imp�rios deixaram nele marcas de algo al�m da humanidade comum. Depois de cruzar linhas que poucos humanos sobreviveriam para contar, foi reconhecido entre os Meio-Sangue como algu�m que carrega for�as incompat�veis no mesmo corpo.",
        "ab": [
          "Terremoto S�smico",
          "Voz do Trov�o",
          "Maremoto"
        ],
        "pow": 98,
        "spd": 72,
        "def": 90,
        "int": 85,
        "align": "neutral",
        "region": "Lend�rio",
        "status": "Falecido � Lenda"
      },
      {
        "n": "Katauri",
        "f": "Katauri-2.png",
        "t": "A Espada do Limiar",
        "role": "Duellista entre Sangues",
        "lore": "Katauri nunca pertenceu inteiramente aos humanos. A linhagem que o gerou foi marcada por uma antiga mistura de sangue demon�aco e divino, algo que ele passou a esconder por anos. Ao aceitar essa verdade, tornou-se Meio-Sangue e passou a lutar como ponte viva entre pureza e corrup��o.",
        "ab": [
          "Corte Perfeito",
          "T�cnica do Oriente",
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
        "lore": "Gorefist era um mercador que vendeu armas até ser pego por seu próprio horror. O Kore transformou suas obrigações em lâminas que crescem da mão. Sua ferida: comerciar com o próprio mal. Sua promessa: enfrentar quem compra seu veneno.",
        "ab": [
          "Golpe de Meio-Sangue",
          "Presen�a Imponente",
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
        "lore": "Ibaraki era um oni que serviu humanos antes da Fratura. Agora sua forma oni é fruto da proteção que lhe foi negada. Sua ferida: ser temido por quem protege. Sua promessa: provar que monstro pode ser guardião.",
        "ab": [
          "Golpe de Meio-Sangue",
          "Presen�a Imponente",
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
        "lore": "Kross era um ladrão que roubou cristais antes de ser transformado em um. Sua culpa é uma lâmina que corta a própria alma. Sua ferida: cada pedra roubada sangra. Sua promessa: devolver tudo sem deixar rastres.",
        "ab": [
          "Golpe de Meio-Sangue",
          "Presen�a Imponente",
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
        "lore": "Kuma era um bruxo que tentou selar a Fratura sozinho. Falhou e perdeu memórias em troca de poderes que não domina completamente. Sua ferida: esquecer o que precisa lembrar. Sua promessa: selar o que abriu.",
        "ab": [
          "Golpe de Meio-Sangue",
          "Presen�a Imponente",
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
        "lore": "Saru era um sacerdote que rezava para acalmar os monstros. O Kore transformou suas preces em gritos que convocam caos. Sua ferida: bendizer para corromper. Sua promessa: restaurar a paz perdida.",
        "ab": [
          "Golpe de Meio-Sangue",
          "Presen�a Imponente",
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
        "lore": "Solan era um arqueiro que mirou demônios antes de seus olhos se tornarem flechas vivas. Cada inimigo visto se torna seu alvo inevitável. Sua ferida: tocar sem atirar. Sua promessa: acertar a última flecha.",
        "ab": [
          "Golpe de Meio-Sangue",
          "Presen�a Imponente",
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
        "lore": "Tentaku era um general que marcou o front com sinos. Agora sua batalha é um coro de metais que faz o chão tremer. Sua ferida: ouvir sinos sem silêncio. Sua promessa: tocar final sem ruína.",
        "ab": [
          "Golpe de Meio-Sangue",
          "Presen�a Imponente",
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
        "lore": "Thorne era um assassino que matou reis antes de ser tocado por um Kore negro. Sua lâmina agora consome promessas quebradas. Sua ferida: servir a ninguém. Sua promessa: cumprir a última missão.",
        "ab": [
          "Golpe de Meio-Sangue",
          "Presen�a Imponente",
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
        "lore": "Valerion era um cavaleiro que jurou lealdade a um rei morto. O Kore transformou seu juramento em marcas que brilham em inimigos. Sua ferida: honrar sem senhor. Sua promessa: encontrar o rei que ainda vive.",
        "ab": [
          "Golpe de Meio-Sangue",
          "Presen�a Imponente",
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
    "icon": "??",
    "count": 25,
    "region": "Wildmere / Profundezas",
    "trait": "Criaturas al�m da categoriza��o normal",
    "desc": "Seres que n�o se encaixam nas categorias convencionais � criaturas antigas, animais que evolu�ram al�m do reconhec�vel, ou entidades que emergiram de concentra��es an�malas de energia. Os Monstros n�o t�m agenda pol�tica; agem por instinto, territ�rio ou fome.",
    "characters": [
      {
        "n": "Battle Beast",
        "f": "Battle-Beast-V-1.png",
        "t": "O Campe�o dos Monstros",
        "role": "Campe�o das Bestas",
        "lore": "Um le�o human�ide em armadura de guerra � o �nico Monstro com cogni��o avan�ada e c�digo de honra. Battle Beast � campe�o de sua esp�cie: combate os mais fortes que encontra para garantir que os Monstros n�o sejam extintos por nenhuma das fac��es da guerra. Sua armadura vermelha � feita de materiais que nenhuma forja humana pode reproduzir.",
        "ab": [
          "Garra do Campe�o",
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
        "lore": "Um inseto evolu�do ao longo de mil�nios por exposi��o a energia Kore residual, tornando-se um ser de armadura natural quase impenetr�vel. Besouro n�o tem motiva��o al�m da sobreviv�ncia e territ�rio � mas seu territ�rio � enorme e sua determina��o em proteg�-lo � absoluta.",
        "ab": [
          "Armadura Quitinosa",
          "Chifre Perfurante",
          "Resist�ncia Absurda"
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
        "lore": "A forma monstruosa completa do Capit�o Davy Jones � quando abandona qualquer semblan�a humana e manifesta toda a sua natureza de criatura abissal. Tent�culos, chifres, uma face de pesadelo oce�nico. Esta � o que o pacto o tornou completamente, longe de qualquer ilus�o.",
        "ab": [
          "Tent�culos do Abismo",
          "Horror Aqu�tico",
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
        "t": "A Anomalia Harm�nica",
        "role": "Entidade Misteriosa",
        "lore": "Uma criatura de apar�ncia benigna e sons musicais cujo poder real permanece incompreendido. Gloop absorve e retransmite energia em frequ�ncias que afetam a magia ao redor. � possivelmente um mecanismo de equil�brio natural � ou uma arma de uma intelig�ncia que ainda n�o se revelou.",
        "ab": [
          "Absor��o de Energia",
          "Transmiss�o Harm�nica",
          "Anomalia Inexplic�vel"
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
        "t": "O Guardi�o Sem Cabe�a",
        "role": "Guardi�o das Florestas Esquecidas",
        "lore": "O protetor dos P�ntanos Esquecidos � um macaco colossal que sobreviveu a uma decapita��o por pura for�a de vontade territorial. Sem cabe�a, tornou-se paradoxalmente mais aterrorizante e mais poderoso. Uma entidade no pesco�o cortado emite sons que dissolvem a magia ao redor.",
        "ab": [
          "F�ria Sem Cabe�a",
          "Possess�o Territorial",
          "Roar Dissolvente"
        ],
        "pow": 88,
        "spd": 78,
        "def": 85,
        "int": 35,
        "align": "neutral",
        "region": "P�ntanos Esquecidos",
        "status": "Guardando"
      },
      {
        "n": "Irm� Friede",
        "f": "Irm�-Friede-V-1.png",
        "t": "A Freira das Ru�nas Geladas",
        "role": "Fantasma Assassino do Gelo",
        "lore": "Uma entidade que habita ru�nas cobertas de neve eterno � uma freira de apar�ncia serena que se torna algo de pesadelo ao combate. Friede n�o defende seu territ�rio; � o territ�rio. � o frio, o sil�ncio e a morte branca que habitam aquelas ru�nas.",
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
        "region": "Ru�nas do Norte",
        "status": "Habitando"
      },
      {
        "n": "Pyrogon",
        "f": "Pyrogon-V-1.png",
        "t": "O Drag�o das Furnas",
        "role": "Drag�o Vulc�nico",
        "lore": "Um drag�o nascido nas c�maras mais profundas dos vulc�es de Ignareth, Pyrogon � feito literalmente de magma solidificado e chamas vivas. N�o tem escamas � tem lava que flui e se solidifica em tempo real. Combate ao seu lado significa inevitavelmente lutar no fogo.",
        "ab": [
          "Sopro de Magma Puro",
          "Corpo de Lava",
          "Fus�o Vulc�nica"
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
        "t": "O Guardi�o da �rvore",
        "role": "Guardi�o da �rvore do Mundo",
        "lore": "O esquilo que corre pelo tronco da �rvore do Mundo � um mensageiro de apar�ncia enganosamente ador�vel que carrega mensagens entre as ra�zes e os galhos mais altos. Ratatoskr conhece mais segredos do que qualquer ser em Eryndor, e manipula a todos com informa��es estrategicamente compartilhadas.",
        "ab": [
          "Velocidade da �rvore",
          "Conhecimento de Todos os Segredos",
          "Mensagens que Movem o Mundo"
        ],
        "pow": 55,
        "spd": 100,
        "def": 48,
        "int": 100,
        "align": "chaos",
        "region": "�rvore do Mundo",
        "status": "Ativo"
      },
      {
        "n": "Root",
        "f": "Root-V-1.png",
        "t": "A Besta Primordial",
        "role": "Criatura da Muta��o Pura",
        "lore": "Uma criatura que representa o que acontece quando a natureza perde completamente seu rumo � muta��es sobre muta��es, resultando em algo que desafia qualquer categoriza��o. Root n�o � hostil por natureza; � o que � por acidente evolutivo em um mundo de energia Kore.",
        "ab": [
          "Muta��o Constante",
          "Adapta��o Instintiva",
          "For�a da Deforma��o"
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
        "lore": "Behemoth era uma besta primordial que o Kore imbuiu com mente. Sua fome é agora uma batalha instintiva. Sua ferida: devorar sem fome. Sua promessa: saciar a voracidade do mundo.",
        "ab": [
          "Golpe de Monstros",
          "Presen�a Imponente",
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
        "lore": "Drakul Zar era um vampira que bebeu o sangue do sol. Sua noite é agora eternidade de fogo. Sua ferida: sede que queima. Sua promessa: beber a última gota de luz.",
        "ab": [
          "Golpe de Monstros",
          "Presen�a Imponente",
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
        "lore": "Garchomp era um dragão-marinho que evoluiu ao tocar um cristal. Sua velocidade corta os céus como águas. Sua ferida: nadar sem oceano. Sua promessa: encontrar as águas.",
        "ab": [
          "Golpe de Monstros",
          "Presen�a Imponente",
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
        "lore": "Gargul era um golem que ganhou consciência ao absorver fragmentos de Kore. Sua pedra agora fala mas sem voz. Sua ferida: existir sem som. Sua promessa: falar sem palavras.",
        "ab": [
          "Golpe de Monstros",
          "Presen�a Imponente",
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
        "lore": "Glacius era um elemental gelo que o Kore derreteu parcialmente. Sua forma é agora vapor congelado que corta a carne. Sua ferida: derreter sem dissolver. Sua promessa: solidificar a tempestade.",
        "ab": [
          "Golpe de Monstros",
          "Presen�a Imponente",
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
        "lore": "Gnash era um demônio que perdeu asas e força. Sua boca é agora uma lâmina infinita. Sua ferida: morder sem mandíbula. Sua promessa: mastigar o coração.",
        "ab": [
          "Golpe de Monstros",
          "Presen�a Imponente",
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
        "lore": "Gorgoroth era um titã que o Kore transformou em monstro de pedra. Sua ira é agora um terremoto. Sua ferida: rugir sem eco. Sua promessa: fazer o chão tremer.",
        "ab": [
          "Golpe de Monstros",
          "Presen�a Imponente",
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
        "lore": "Ignisaurus era um dinossauro que evoluiu ao tocar um cristal incandescente. Sua chama consome tudo mas sem fogo. Sua ferida: arder sem calor. Sua promessa: apagar o fogo interno.",
        "ab": [
          "Golpe de Monstros",
          "Presen�a Imponente",
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
        "lore": "Kongor era um gorila gigante que o Kore tornou mais selvagem. Sua força é agora uma tormenta de golpes. Sua ferida: agarrar sem toque. Sua promessa: abraçar sem força.",
        "ab": [
          "Golpe de Monstros",
          "Presen�a Imponente",
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
        "lore": "Kragor era um minotauro que o Kore imbuiu com magia flamejante. Sua força é agora combustão viva. Sua ferida: queimar sem lama. Sua promessa: acalmar a chama.",
        "ab": [
          "Golpe de Monstros",
          "Presen�a Imponente",
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
        "lore": "Kragos era um esqueleto animado por energia de cristal. Sua ossada é agora uma armadura viva. Sua ferida: viver sem carne. Sua promessa: tocar o peito.",
        "ab": [
          "Golpe de Monstros",
          "Presen�a Imponente",
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
        "lore": "Necros era um necromante que o Kore transformou em morto-vivo. Sua mágica invoca exércitos de ossos. Sua ferida: comandar sem viver. Sua promessa: encontrar os vivos.",
        "ab": [
          "Golpe de Monstros",
          "Presen�a Imponente",
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
        "lore": "Ossifago era um canibal que o Kore transformou em monstro de espinhos. Sua fome é agora perfuração viva. Sua ferida: devorar sem boca. Sua promessa: mastigar o ar.",
        "ab": [
          "Golpe de Monstros",
          "Presen�a Imponente",
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
        "lore": "Vermithrax era uma rainha vampira que o Kore transformou em dragão. Sua asa envolve o ceu todo. Sua ferida: voar sem voo. Sua promessa: tocar o solo.",
        "ab": [
          "Golpe de Monstros",
          "Presen�a Imponente",
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
        "lore": "Volcanus era um vulcão que ganhou forma e mente. Sua erupção é agora consciencia. Sua ferida: queimar sem força. Sua promessa: serenar a lava.",
        "ab": [
          "Golpe de Monstros",
          "Presen�a Imponente",
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
        "lore": "Vorgas era um gigante de lodo que o Kore endureceu. Sua lama é agora cinza viva. Sua ferida: mover sem passos. Sua promessa: andar sem mover.",
        "ab": [
          "Golpe de Monstros",
          "Presen�a Imponente",
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
    "icon": "??",
    "count": 32,
    "region": "Wildmere / Errante",
    "trait": "Transformados pela corrup��o do Kore",
    "desc": "Seres que foram expostos � energia Kore corrompida e transformados � n�o destru�dos, mas reescritos. Cada Mutante � uma hist�ria de identidade perdida e poder n�o pedido. Alguns abra�am o que se tornaram; a maioria luta com isso eternamente.",
    "characters": [
      {
        "n": "Bone Kore",
        "f": "Bone-Kore-V-1.png",
        "t": "O Arsenal de Ossos",
        "role": "Arsenal Vivo",
        "lore": "Os ossos de Bone-Kore cresceram para fora de seu corpo em resposta � energia Kore, criando uma armadura natural e um arsenal org�nico. Cada esp�culo de osso � uma arma potencial. Seu sistema nervoso reescreveu-se para sentir os ossos externos como extremidades funcionais.",
        "ab": [
          "Lan�a de Osso",
          "Armadura Natural",
          "Regenera��o �ssea"
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
        "role": "For�a Bruta Pura",
        "lore": "Uma muta��o que amplificou cada fibra muscular ao extremo � Crush � o que a fisiologia humana parece quando reescrita sem restri��es. N�o tem velocidade, n�o tem t�cnica sofisticada, mas sua for�a � t�o absurda que a t�cnica torna-se irrelevante. Uma montanha que decide caminhar.",
        "ab": [
          "For�a Ilimitada",
          "Impacto do Coloso",
          "Resist�ncia Mutante"
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
        "t": "O Mutante S�nico",
        "role": "Guerreiro do Som",
        "lore": "Uma muta��o de morcego que integrou energia Kore, criando um ser capaz de emitir ondas s�nicas que destroem mat�ria em n�vel molecular. Echo-Kore usa ecolocaliza��o para enxergar al�m de qualquer sentido normal � e o que v�, pode destruir com precis�o cir�rgica.",
        "ab": [
          "Grito S�nico",
          "Ecolocaliza��o Perfeita",
          "Disrup��o Molecular"
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
        "t": "O Ca�ador do Vento",
        "role": "Predador A�reo",
        "lore": "Uma muta��o entre p�ssaro e morcego que resultou em dom�nio absoluto do ar. Gale n�o s� voa � comanda ventos e correntes de ar como extens�es de seu pr�prio corpo. Seu m�todo de ca�a � remover o ar ao redor da presa at� o necess�rio.",
        "ab": [
          "Dom�nio do Ar",
          "V�cuo",
          "Voo Supers�nico"
        ],
        "pow": 80,
        "spd": 96,
        "def": 68,
        "int": 72,
        "align": "neutral",
        "region": "C�us de Wildmere",
        "status": "Ca�ando"
      },
      {
        "n": "Kakuzu",
        "f": "Kakuzu-V-1.png",
        "t": "O Costurado",
        "role": "Multi-C�lula Adaptativo",
        "lore": "Um ser costurado � literalmente unido de m�ltiplos corpos, cada um com poderes elementares diferentes. A muta��o do Kore fundiu Kakuzu com seus inimigos mortos, expandindo o original com cada ser que derrota. Cada parte de seu corpo tem sua pr�pria consci�ncia, que ele coordena com dificuldade crescente.",
        "ab": [
          "Cinco Cora��es",
          "Adapta��o Elemental",
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
        "lore": "O primeiro da linhagem � o prot�tipo da muta��o lobisomem que se espalharia por Eryndor. Lobisome n�o escolheu a transforma��o mas abra�ou-a completamente. Lidera seu cl� com autoridade que combina instinto animal e intelig�ncia predat�ria refinada.",
        "ab": [
          "Transforma��o Alfa",
          "Chamado da Alcateia",
          "F�ria da Lua"
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
        "t": "A Segunda Evolu��o",
        "role": "Lobisomem Evolu�do Beta",
        "lore": "A segunda gera��o da linhagem lobisomem � maior, mais r�pido, mais capaz de controlar a transforma��o. Representa o sucesso da adapta��o: onde a primeira gera��o sofria, a segunda prosperou.",
        "ab": [
          "Transforma��o Controlada",
          "Garras do Ca�ador",
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
        "t": "A Terceira Evolu��o",
        "role": "Lobisomem �pice",
        "lore": "A terceira e atual gera��o da muta��o lobisomem � quase n�o se assemelha mais ao lobo original. Esta vers�o integrou elementos drac�nicos na muta��o, criando algo novo. Marca o ponto onde a muta��o deixou de ser corrup��o e tornou-se evolu��o genu�na.",
        "ab": [
          "Forma Drac�nica-Lobisomem",
          "Rugido Ancestral",
          "Predador �pice"
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
        "t": "O Drag�o das Serpentes",
        "role": "Drag�o Serpentino Ca�tico",
        "lore": "Uma muta��o que fundiu m�ltiplas criaturas serpentinas com energia drac�nica � o resultado � um ser de m�ltiplas cabe�as serpentinas e poder elemental desconcertante. Malagor n�o tem hierarquia interna clara entre suas cabe�as, tornando seus ataques imprevis�veis mesmo para seus aliados.",
        "ab": [
          "Veneno Drac�nico",
          "M�ltiplas Mordidas",
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
        "t": "A F�ria Encarnada",
        "role": "Entidade de F�ria",
        "lore": "Uma muta��o t�o profundamente afetada pela raiva que a pr�pria raiva tornou-se sua subst�ncia. Rage-Kore n�o est� com raiva � � a raiva, manifestada em forma f�sica. O cristal Kore que o criou absorveu d�cadas de sofrimento acumulado antes de transform�-lo.",
        "ab": [
          "Explos�o de Raiva Pura",
          "Forma da F�ria",
          "Amplifica��o da Agonia"
        ],
        "pow": 90,
        "spd": 82,
        "def": 78,
        "int": 42,
        "align": "chaos",
        "region": "Korrfeld",
        "status": "Ativo � Incontrol�vel"
      },
      {
        "n": "Rin Kore",
        "f": "Rin-Kore-V-1.png",
        "t": "A Vampira do Kore",
        "role": "Predadora Vamp�rica",
        "lore": "Uma muta��o que combinou caracter�sticas vamp�ricas com energia Kore � asas negras, garras afiadas e um apetite que vai al�m de sangue. Rin consome energia vital diretamente, e cada consumo a fortalece. Extremamente veloz e extremamente perigosa em combate pr�ximo.",
        "ab": [
          "Consumo de Vida",
          "Asas do Vazio",
          "Velocidade Vamp�rica"
        ],
        "pow": 83,
        "spd": 95,
        "def": 72,
        "int": 78,
        "align": "evil",
        "region": "Errante",
        "status": "Ca�ando"
      },
      {
        "n": "Satan Soul",
        "f": "Satan-Soul-V-1.png",
        "t": "A Absorvedora",
        "role": "Portadora da Alma Demon�aca",
        "lore": "Uma mutante que absorveu a alma de um dem�nio durante a Grande Fratura, fundindo-se com ela sem ser completamente consumida. Satan-Soul existe em equil�brio prec�rio entre sua identidade original e a entidade que coabita seu corpo � um equil�brio que fica mais dif�cil manter a cada batalha.",
        "ab": [
          "Forma Demon�aca",
          "Chamas da Alma Dupla",
          "Equil�brio do Imposs�vel"
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
        "lore": "Uma muta��o lobisomem que perdeu completamente o lado humano � Savage � pura besta, puro instinto, pura f�ria territorial. Mais poderoso que lobisomens com consci�ncia porque n�o desperdi�a energia em escolhas �ticas.",
        "ab": [
          "F�ria Pura",
          "Garras da Besta",
          "Instinto de Predador"
        ],
        "pow": 82,
        "spd": 90,
        "def": 78,
        "int": 20,
        "align": "chaos",
        "region": "Wildmere",
        "status": "Ca�ando"
      },
      {
        "n": "Tri Gorgon",
        "f": "Tri-Gorgon-V-1.png",
        "t": "O Senhor das Gorg�nas",
        "role": "Gorgona de Tr�s Cabe�as",
        "lore": "Uma muta��o tripla da serpente petrificante � tr�s gorg�nas que fundiram seus poderes em um �nico ser de tr�s cabe�as. Cada cabe�a tem um �ngulo diferente de ataque, tornando imposs�vel desviar de todas simultaneamente. A petrifica��o � completa em menos de tr�s segundos de contato visual.",
        "ab": [
          "Olhar Petrificante",
          "Tr�s �ngulos de Ataque",
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
        "role": "Ca�ador Refinado",
        "lore": "Um mutante de cabelos brancos que manteve sua eleg�ncia e intelig�ncia apesar da transforma��o. Valthier � o exemplo de que muta��o e civilidade n�o s�o incompat�veis � e usa essa distin��o para ser subestimado, com resultados letais para quem o subestima.",
        "ab": [
          "L�mina de Kore",
          "Refinamento Mortal",
          "Presen�a do Predador"
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
        "t": "A Ferr�o da Sombra",
        "role": "Predadora de Sombra e Veneno",
        "lore": "Uma fus�o de vespa e morcego com energia Kore escura � Vespera ataca de cima, na sombra, com um ferr�o que paralysa antes de matar. Silenciosa, r�pida, letal. � a assassina que os Mutantes usam quando precisam que o alvo nunca veja de onde veio o golpe.",
        "ab": [
          "Ferr�o Paralisante",
          "Voo nas Sombras",
          "Veneno de Vespa"
        ],
        "pow": 80,
        "spd": 95,
        "def": 68,
        "int": 78,
        "align": "evil",
        "region": "Errante",
        "status": "Miss�o"
      },
      {
        "n": "Vyryn Wing",
        "f": "Vyrn-Wing-V-1.png",
        "t": "O Predador Drac�nico",
        "role": "Predador dos C�us Drac�nico",
        "lore": "Uma muta��o que integrou DNA drac�nico na linhagem mutante, criando um predador a�reo de propor��es impressionantes. Vyryn-Wing n�o tem a magia de um drag�o completo, mas tem sua velocidade, suas garras e seu apetite territorial inexor�vel.",
        "ab": [
          "Garras Drac�nicas",
          "Voo Predat�rio",
          "Mergulho Letal"
        ],
        "pow": 83,
        "spd": 92,
        "def": 75,
        "int": 58,
        "align": "neutral",
        "region": "C�us de Wildmere",
        "status": "Territorial"
      },
      {
        "n": "Aegis Prime",
        "f": "Aegis Prime-V-1.png",
        "t": "O Aegis Prime",
        "role": "Personagem de Mutantes",
        "lore": "Placeholder",
        "ab": [
          "Golpe de Mutantes",
          "Presen�a Imponente",
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
        "lore": "Placeholder",
        "ab": [
          "Golpe de Mutantes",
          "Presen�a Imponente",
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
        "lore": "Placeholder",
        "ab": [
          "Golpe de Mutantes",
          "Presen�a Imponente",
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
        "lore": "Placeholder",
        "ab": [
          "Golpe de Mutantes",
          "Presen�a Imponente",
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
        "lore": "Placeholder",
        "ab": [
          "Golpe de Mutantes",
          "Presen�a Imponente",
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
        "lore": "Placeholder",
        "ab": [
          "Golpe de Mutantes",
          "Presen�a Imponente",
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
        "lore": "Placeholder",
        "ab": [
          "Golpe de Mutantes",
          "Presen�a Imponente",
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
        "lore": "Placeholder",
        "ab": [
          "Golpe de Mutantes",
          "Presen�a Imponente",
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
        "lore": "Placeholder",
        "ab": [
          "Golpe de Mutantes",
          "Presen�a Imponente",
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
        "lore": "Placeholder",
        "ab": [
          "Golpe de Mutantes",
          "Presen�a Imponente",
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
        "lore": "Placeholder",
        "ab": [
          "Golpe de Mutantes",
          "Presen�a Imponente",
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
        "lore": "Placeholder",
        "ab": [
          "Golpe de Mutantes",
          "Presen�a Imponente",
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
        "lore": "Placeholder",
        "ab": [
          "Golpe de Mutantes",
          "Presen�a Imponente",
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
        "lore": "Placeholder",
        "ab": [
          "Golpe de Mutantes",
          "Presen�a Imponente",
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
        "lore": "Placeholder",
        "ab": [
          "Golpe de Mutantes",
          "Presen�a Imponente",
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
    "icon": "??",
    "count": 15,
    "region": "Ignareth",
    "trait": "Nascidos do fogo e da tradi��o da guerra",
    "desc": "Guerreiros de pele avermelhada e chifres � os Onis s�o uma ra�a guerreira que evoluiu ao lado dos vulc�es de Ignareth. Sua cultura � de honra marcial absoluta, e sua for�a f�sica m�dia supera a maioria das outras ra�as. Sob Zen-Kore-Shin, tornaram-se a for�a terrestre mais temida da Guerra da Converg�ncia.",
    "characters": [
      {
        "n": "Akuma Ghen",
        "f": "Akuma-Ghen-V-1.png",
        "t": "O Rei Dem�nio dos Onis",
        "role": "Rei Oni",
        "lore": "O Rei dos Onis antes de Zen-Kore-Shin ascender � ainda vivo e ainda poderoso, mas em conflito com o novo supremo. Akuma-Ghen representa a tradi��o Oni pura: for�a acima de tudo, honra acima de vida. Empunha a L�mina das Chamas que nunca se apaga.",
        "ab": [
          "L�mina das Chamas Eternas",
          "Aura do Rei Dem�nio",
          "Tradi��o de Mil Anos"
        ],
        "pow": 93,
        "spd": 80,
        "def": 88,
        "int": 78,
        "align": "evil",
        "region": "Ignareth",
        "status": "Rei Deposto � Ativo"
      },
      {
        "n": "Enma Oh Ko",
        "f": "Enma-Oh'ko-V-1.png",
        "t": "O General Supremo",
        "role": "General dos Onis",
        "lore": "O maior general militar que os Onis produziram � uma mente t�tica de precis�o assustadora em um corpo de poder devastador. Enma-Oh'ko planeja campanhas com a mesma profundidade que um mago planeja feiti�os, e executa-os com a brutali�dade que define os Onis.",
        "ab": [
          "T�tica de Guerra Oni",
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
        "lore": "Um Oni de forma mais bestial que human�ide � General Krogan representa a linha evolutiva dos Onis que abra�ou a animalidade acima da disciplina. Comanda com f�ria e instinto em vez de estrat�gia, o que torna seus ataques imposs�veis de prever por t�ticos convencionais.",
        "ab": [
          "Carga do Krogan",
          "F�ria Animal",
          "Presen�a Aterrorizante"
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
        "lore": "O mais perigoso dos Onis em combate singular � um assassino de vermelho e preto cujas t�cnicas de elimina��o s�o cir�rgicas em um corpo de for�a absurda. Kaguro n�o mata por ordem; mata porque � sua arte, e cada morte � uma obra perfeita.",
        "ab": [
          "Corte da Extin��o",
          "T�cnica do Fantasma Oni",
          "Velocidade do Assassino"
        ],
        "pow": 88,
        "spd": 95,
        "def": 78,
        "int": 85,
        "align": "evil",
        "region": "Errante � Miss�o",
        "status": "Ca�ando"
      },
      {
        "n": "Kagutsuchi Kore",
        "f": "Kagutsuchi-Kore-V-1.png",
        "t": "O Deus do Fogo Oni",
        "role": "Deus Oni do Kore",
        "lore": "Um Oni que absorveu um Cristal Kore de fogo e tornou-se literalmente um deus do fogo em n�vel divino. Kagutsuchi-Kore n�o controla fogo � � fogo, em toda a sua extens�o primordial. Sua exist�ncia aquece regi�es inteiras ao seu redor.",
        "ab": [
          "Forma do Deus do Fogo",
          "Calor que Derrete Pedra",
          "Explos�o Kore Ardente"
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
        "lore": "Um Oni que evoluiu de forma natural nas c�maras mais quentes de Ignareth, at� que seu corpo come�ou a incorporar a rocha fundida ao redor. Kore-Magma n�o usa magma como arma � � feito de magma, que flui e se solidifica em tempo real. Combate ao seu lado significa inevitavelmente lutar no fogo.",
        "ab": [
          "Corpo de Magma",
          "Fus�o com o Vulc�o",
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
        "t": "A F�ria Vermelha",
        "role": "Berserker Oni",
        "lore": "O berserker supremo dos Onis � um guerreiro de cabelos carmesins cujo poder cresce exponencialmente quanto mais dano sofre. A estrat�gia padr�o de derrotar Kurenai � n�o o machucar e esperar que ele se mate por frustra��o, o que nunca funcionou.",
        "ab": [
          "F�ria que Cresce com Dano",
          "Vermelho da Raiva Divina",
          "Berserker Oni"
        ],
        "pow": 91,
        "spd": 85,
        "def": 80,
        "int": 52,
        "align": "chaos",
        "region": "Ignareth",
        "status": "Em F�ria"
      },
      {
        "n": "Kyofu Kore",
        "f": "Kyofu-Kore-V1.png",
        "t": "O Oni do Medo",
        "role": "Oni do Terror",
        "lore": "Um Oni que, ao absorver um Cristal Kore de natureza ps�quica, desenvolveu o poder de projetar seu pr�prio terror diretamente na mente dos oponentes. Kyofu n�o precisa ser mais forte que voc� � precisa apenas fazer voc� acreditar que ele �.",
        "ab": [
          "Proje��o de Terror",
          "Ilus�o do Fim",
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
        "role": "Oni do Trov�o",
        "lore": "Um Oni que canalizou energia Kore de natureza el�trica, tornando-se o Oni das Tempestades � capaz de invocar rel�mpagos e ventanias de poder sem precedente. Raijin-Kore rivaliza com deuses do trov�o em poder puro, sem ter sangue divino.",
        "ab": [
          "Trov�o do Oni",
          "Tempestade Invocada",
          "Rel�mpago do Kore"
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
        "t": "O Drag�o Oni",
        "role": "Oni Drag�o",
        "lore": "A fus�o mais completa entre a heran�a Oni e o sangue drac�nico � Ryu-Kore � um Oni que manifestou caracter�sticas drac�nicas ao absorver o Kore correto, tornando-se mestre das chamas serpentinas que combinam o fogo Oni com a magia drac�nica.",
        "ab": [
          "Chama Serpentina Drac�nica",
          "Escamas do Drag�o Oni",
          "Voo do Drag�o"
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
        "lore": "Um Oni que incorporou a est�tica da morte-como-beleza � petalas de cerejeira caem ao redor de cada golpe que desfere, e cada golpe � letal. Zan-kura � o Oni mais visualmente impressionante, o que amplifica o terror de v�-lo agir.",
        "ab": [
          "P�tala Assassina",
          "Dan�a da Cerejeira",
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
        "role": "Oni da Desola��o",
        "lore": "Onde Zanka-Kore passa, cinzas ficam. N�o � hip�rbole � sua energia Kore de desola��o transforma tudo ao redor em cinza fria. N�o queima como o fogo, n�o destr�i como for�a bruta; apenas apaga, de forma lenta e inevit�vel.",
        "ab": [
          "Toque da Desola��o",
          "Cinza Eterno",
          "Extin��o Gradual"
        ],
        "pow": 88,
        "spd": 72,
        "def": 85,
        "int": 78,
        "align": "evil",
        "region": "Ignareth",
        "status": "Avan�ando"
      },
      {
        "n": "Zen Kore Shin",
        "f": "Zen-Kore-Shin-V-1.png",
        "t": "O Supremo dos Onis",
        "role": "Oni Supremo � Mais Pr�ximo da Divindade",
        "lore": "O atual l�der supremo dos Onis � um ser que absorveu m�ltiplos Cristais Kore de forma controlada e tornou-se algo al�m de Oni. Zen-Kore-Shin � o que a ra�a Oni seria se continuasse evoluindo por dez mil anos. N�o lidera por for�a, mas por ser simplesmente o mais completo ser que os Onis j� produziram.",
        "ab": [
          "Presen�a do Supremo",
          "Todos os Elementos Oni",
          "Ascens�o Kore Perfeita"
        ],
        "pow": 99,
        "spd": 88,
        "def": 93,
        "int": 90,
        "align": "evil",
        "region": "Ignareth � Trono de Fogo",
        "status": "Governando"
      },
      {
        "n": "Kyo Zan",
        "f": "Kyo-Zan-V-1.png",
        "t": "O Kyo Zan",
        "role": "Personagem de Onis",
        "lore": "Kyo Zan era um oni guerreiro que o Kore transformou em demônio. Sua forma é agora um meio-termo. Sua ferida: ser omisso sem equilíbrio. Sua promessa: decidir o lado.",
        "ab": [
          "Golpe de Onis",
          "Presen�a Imponente",
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
        "lore": "Xar Drakan era um dragão oni que o Kore imbuiu com mente humana. Sua fúria é agora razão viva. Sua ferida: racionalizar o ataque. Sua promessa: parar o fogo.",
        "ab": [
          "Golpe de Onis",
          "Presen�a Imponente",
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
    "icon": "?",
    "count": 23,
    "region": "Aethelos",
    "trait": "Sangue divino e poder al�m do mortal",
    "desc": "Filhos e manifesta��es dos Primordiais � os Semi-Deuses foram os primeiros guardi�es de Eryndor. A destrui��o dos Cinco Selos � para eles uma falha pessoal que alimenta tanto sua determina��o quanto sua culpa. N�o s�o un�nimes em prop�sito: alguns lutam para restaurar a ordem, outros questionam se a ordem valia salvar.",
    "characters": [
      {
        "n": "Aethel",
        "f": "Aethel-V-1.png",
        "t": "A Deusa da Passagem",
        "role": "Divindade da Morte e Transi��o",
        "lore": "A semi-deusa respons�vel pela passagem dos mortos entre os mundos. Com os Selos destru�dos e as Apari��es presas no plano f�sico, Aethel est� sobrecarregada � almas que deveriam ter partido h� s�culos est�o acumuladas, e seu poder para mant�-las em tr�nsito est� atingindo limites.",
        "ab": [
          "Passagem dos Mortos",
          "Manto da Transi��o",
          "Equil�brio do Al�m"
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
        "t": "O Anjo Ca�do do Kore",
        "role": "Semi-Deus Corrompido pelo Kore",
        "lore": "Um semi-deus que absorveu um Cristal Kore na tentativa de ampliar seu poder o suficiente para fechar a Fissura do Vazio sozinho. O resultado foi parcialmente bem-sucedido � seu poder cresceu enormemente � mas a corru��o do Kore corr�i sua natureza divina a cada dia que passa.",
        "ab": [
          "Asas do Anjo Corrompido",
          "Poder Kore Divino",
          "Corru��o Crescente"
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
        "role": "Guardi�o da Ordem C�smica",
        "lore": "Um semi-deus de armadura dourada que patrulha as fronteiras entre os planos de exist�ncia. Astrolon viu a Grande Fratura de uma perspectiva que nenhum mortal experimentaria � de fora, observando todos os planos colidirem simultaneamente. O trauma disso moldou tanto seu prop�sito quanto suas limita��es.",
        "ab": [
          "Armadura C�smica",
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
        "t": "O Senhor do Para�so",
        "role": "Deus da Transcend�ncia",
        "lore": "A forma ascendida de Dio � ap�s d�cadas de busca por poder perfeito, alcan�ou um estado semi-divino que transcende categorias convencionais. Dio-Heaven pode parar o tempo, alterar a realidade e conceder ou negar imortalidade. Mas sua arrog�ncia � proporcional ao seu poder.",
        "ab": [
          "Za Warudo � O Mundo",
          "Controle do Tempo",
          "Gra�a do Para�so"
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
        "role": "Encarna��o da Luz Divina",
        "lore": "N�o � um semi-deus � � uma manifesta��o direta do Primordial da Luz em forma f�sica. Dividade apareceu quando a Grande Fratura amea�ou destruir o equil�brio de luz e trevas de Eryndor. � benevolente mas absolutamente imparcial � protege o equil�brio, n�o lados.",
        "ab": [
          "Luz Primordial",
          "Purifica��o Total",
          "Presen�a da Divindade"
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
        "t": "O Deus Autoproclamado do Trov�o",
        "role": "Deus do Raio",
        "lore": "Um semi-deus que proclamou ser o �nico deus verdadeiro de Eryndor � n�o sem fundamento, pois seu poder sobre o trov�o � superior ao de qualquer outro usu�rio de eletricidade. Sua maior fraqueza � acreditar em sua pr�pria invencibilidade, o que o torna previs�vel para advers�rios suficientemente humildes.",
        "ab": [
          "Raio Divino M�ximo",
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
        "t": "O Drag�o das �guas Sagradas",
        "role": "Drag�o Deus",
        "lore": "Pequeno em apar�ncia, ilimitado em poder � Haku � um esp�rito drag�o das �guas sagradas, um semi-deus que governou rios e chuvas por mil�nios. Sua transforma��o entre forma human�ide e forma drac�nica � instant�nea, e cada forma tem poderes completamente diferentes.",
        "ab": [
          "Forma Drac�nica",
          "Esp�rito das �guas Sagradas",
          "Rio Divino"
        ],
        "pow": 90,
        "spd": 88,
        "def": 82,
        "int": 88,
        "align": "good",
        "region": "�guas Sagradas",
        "status": "Guardando"
      },
      {
        "n": "Ignis",
        "f": "Ignis-V-1.png",
        "t": "O Semi-Deus da Conquista",
        "role": "Demi-Deus da Guerra e do Fogo",
        "lore": "Um semi-deus nascido da uni�o entre um guerreiro humano lend�rio e a pr�pria chama primordial. Ignis existe para a guerra � n�o como destrui��o, mas como o catalisador que for�a o crescimento. Acredita que a Guerra da Converg�ncia � necess�ria para queimar o que est� podre e fortalecer o que pode sobreviver.",
        "ab": [
          "Chama da Conquista",
          "Armadura de Guerra Divina",
          "Catalisador da Mudan�a"
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
        "role": "Soberana do Mist�rio",
        "lore": "A entidade no topo da hierarquia do mundo � cujos poderes e motiva��es reais permanecem o maior mist�rio de Eryndor. Imu � um semi-deus que ascendeu al�m do que semi-deuses deveriam atingir, chegando perto demais da divindade pura. Sua sombra se estende sobre os eventos da guerra sem que sua m�o seja vis�vel.",
        "ab": [
          "Sombra Soberana",
          "Poder Oculto",
          "Presen�a que Move o Mundo"
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
        "t": "O Deus Sol � O Libertador",
        "role": "Deus da Liberta��o e Alegria",
        "lore": "A encarna��o da alegria e da liberta��o em forma divina � um semi-deus que representa o desejo fundamental de todo ser vivo de ser livre. O poder de Nika cresce quanto mais pessoas ao seu redor desejam liberdade. Em tempos de opress�o como a Guerra da Converg�ncia, esse poder se torna ilimitado.",
        "ab": [
          "Liberta��o Divina",
          "Goma-Goma das Divindades",
          "Alegria que Move Mundos"
        ],
        "pow": 100,
        "spd": 92,
        "def": 88,
        "int": 85,
        "align": "good",
        "region": "Errante � Lend�rio",
        "status": "Lend�rio"
      },
      {
        "n": "Ossuaria",
        "f": "Ossuaria-V-1.png",
        "t": "A Rainha dos Ossos",
        "role": "Rainha do Reino dos Mortos",
        "lore": "A semi-deusa que governa o reino dos mortos como complemento ao trabalho de Aethel. Se a Aethel guia os mortos, Ossuaria os governa no destino final. Com o colapso dos Selos, seu reino est� inundado de almas que chegam sem as condi��es adequadas de recep��o.",
        "ab": [
          "Ex�rcito dos Ossos",
          "Autoridade sobre os Mortos",
          "Barreira do Al�m"
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
        "lore": "Um semi-deus que buscou a perfei��o absoluta atrav�s da Ordem Dourada � um c�digo filos�fico de combate e exist�ncia que busca o ideal plat�nico do ser. Radagon � ao mesmo tempo um dos Semi-Deuses mais devotos e um dos mais atormentados: sabe que a perfei��o n�o existe, mas n�o pode parar de busc�-la.",
        "ab": [
          "Golpe da Perfei��o Dourada",
          "Ordem como Arma",
          "Martelo dos Fundamentos"
        ],
        "pow": 95,
        "spd": 82,
        "def": 90,
        "int": 90,
        "align": "good",
        "region": "Aethelos",
        "status": "Em Busca da Perfei��o"
      },
      {
        "n": "Rei Dem�nio",
        "f": "Rei-Demonio-V-1.png",
        "t": "O Rei Que N�o �",
        "role": "Paradoxo Divino-Demon�aco",
        "lore": "Uma anomalia: um semi-deus com ess�ncia demon�aca que nunca tocou Sombrath. O Rei-Dem�nio nasceu da intersec��o entre dois planos que n�o deveriam se cruzar � antes de Kaelia, antes da Fissura do Vazio. Seu poder combina elementos divinos e demon�acos de forma que nenhuma escola arcana consegue explicar.",
        "ab": [
          "Paradoxo de Dois Mundos",
          "Poder do Limite",
          "Exist�ncia Imposs�vel"
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
        "lore": "Um semi-deus que integrou um Cristal Kore de forma controlada atrav�s de rituais divinos � o experimento mais bem-sucedido de amplifica��o Kore em sangue semi-divino. Shikon-Kore � imenso, poderoso al�m da medida usual de Semi-Deuses, e completamente est�vel. Uma arma de destrui��o que sabe o que faz.",
        "ab": [
          "Colosso do Kore Divino",
          "Controle Absoluto",
          "Amplifica��o Est�vel"
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
        "t": "O Escorpi�o Cristalino",
        "role": "Deus da Terra e dos Cristais",
        "lore": "Um semi-deus de forma escorpion�de que emergiu das profundezas cristalinas de Eryndor � exatamente das mesmas c�maras onde os Cristais Kore foram formados. Skarner guarda os cristais restantes, sabendo seu poder e seu perigo, esperando que algu�m digno apare�a para us�-los.",
        "ab": [
          "Cristal Vivo",
          "Garras da Terra",
          "Guardi�o dos Kore"
        ],
        "pow": 88,
        "spd": 72,
        "def": 93,
        "int": 82,
        "align": "neutral",
        "region": "C�maras Cristalinas",
        "status": "Guardando"
      },
      {
        "n": "Skel Shin",
        "f": "Skel-Shin-V-1.png",
        "t": "A Entidade �ssea Divina",
        "role": "Divindade Dual",
        "lore": "Uma entidade que existe na fronteira entre a vida divina e a morte estruturada � Skel-Shin � a manifesta��o de que mesmo os Semi-Deuses t�m um fim, e desse fim algo emerge. Seu corpo de osso e luz � o que resta quando um semi-deus passa pelo que os mortais chamam de morte.",
        "ab": [
          "Luz dos Ossos",
          "Dual Natureza",
          "Persist�ncia do Divino"
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
        "lore": "Nascido como mortal simples, Sun Wukong desafiou os pr�prios Semi-Deuses em combate singular e provou ser igual � atrav�s de determina��o, intelig�ncia e um cajado m�gico que pode ter o tamanho de uma agulha ou de uma montanha. � o s�mbolo de que o potencial n�o tem origem definida.",
        "ab": [
          "Cajado das Dimens�es",
          "Setenta e Duas Transforma��es",
          "P�lo que Clona"
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
        "lore": "O semi-deus que governa as florestas mais antigas de Eryndor � �rvores que pr�-datam at� os Primordiais. Sylvaris n�o usa magia de plantas; � a magia das plantas. Cada raiz em todo o continente � uma extens�o de seu sistema nervoso.",
        "ab": [
          "Ra�zes do Mundo",
          "Consci�ncia da Floresta",
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
        "t": "A Radi�ncia Pura",
        "role": "Manifesta��o da Luz Primordial",
        "lore": "A manifesta��o mais pura da luz primordial de Eryndor � n�o uma deusa da luz, mas a pr�pria luz tomando forma para combater a corrup��o do Vazio. The Radiance existe apenas enquanto a escurid�o que combate existe, tornando sua vit�ria simultaneamente seu fim.",
        "ab": [
          "Luz que Apaga o Vazio",
          "B�n��o da Radiance",
          "Sacrif�cio da Luz"
        ],
        "pow": 100,
        "spd": 88,
        "def": 90,
        "int": 92,
        "align": "good",
        "region": "Aethelos",
        "status": "Manifestada � Sacrif�cio Iminente"
      },
      {
        "n": "Aurion",
        "f": "Aurion-V-1.png",
        "t": "O Aurion",
        "role": "Personagem de Semi-Deus",
        "lore": "Aurion era um Semi-Deus que o Kore transformou em amaldiçoado. Sua luz é agora sombra viva. Sua ferida: servir o mal com bondade. Sua promessa: voltar ao céu.",
        "ab": [
          "Golpe de Semi-Deus",
          "Presen�a Imponente",
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
        "lore": "Azazel era um anjo caído que o Kore imbuiu com corrupção. Sua asa é agora fogo corrupto. Sua ferida: servir o mal com bondade. Sua promessa: voltar ao céu.",
        "ab": [
          "Golpe de Semi-Deus",
          "Presen�a Imponente",
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
        "lore": "Morthan era um deus da peste que o Kore transformou em curandeiro. Sua peste é agora medicina. Sua ferida: contaminar para limpar. Sua promessa: achar a cura.",
        "ab": [
          "Golpe de Semi-Deus",
          "Presen�a Imponente",
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
        "lore": "Xul'gath era um demônio que o Kore imbuiu com divindade. Sua escuridão é agora clareira. Sua ferida: ser bom sem ser santo. Sua promessa: encontrar o limiar.",
        "ab": [
          "Golpe de Semi-Deus",
          "Presen�a Imponente",
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
    "icon": "�",
    "count": 17,
    "region": "Voidrift",
    "trait": "Entidades de al�m da realidade conhecida",
    "desc": "N�o s�o apenas poderosos � s�o categoricamente diferentes. Os Seres do Vazio existem em um estado de n�o-ser que a f�sica de Eryndor n�o acomoda facilmente. Sua presen�a corrode a realidade ao redor. Sua motiva��o � se t�m uma � � incompreens�vel para mentes formadas dentro de uma realidade funcional.",
    "characters": [
      {
        "n": "Abyss Maw",
        "f": "Abyss-Maw-V-1.png",
        "t": "O Drag�o do Vazio",
        "role": "Drag�o da N�o-Exist�ncia",
        "lore": "O maior ser vivo do Vazio � um drag�o cujo corpo � feito de n�o-exist�ncia comprimida. Abyss-Maw n�o destr�i as coisas que devora; apaga-as do registro da realidade. Nenhuma magia de ressurrei��o funciona em algo que Abyss-Maw consumiu, porque n�o h� mais nada para ressuscitar.",
        "ab": [
          "Apagamento da Realidade",
          "Voo al�m do Poss�vel",
          "Presen�a do Vazio Absoluto"
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
        "lore": "Um Ser do Vazio que viajou atrav�s de m�ltiplas realidades e viu o fim de cada uma delas. Alaric n�o � hostil � � exausto. Viu tantos fins que n�o sabe mais se h� mundos que escapam, ou se todos terminam apenas de formas diferentes. Partilha este conhecimento com quem encontra, sem se importar com o efeito.",
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
        "t": "A Crian�a do Vazio",
        "role": "Ceifador Jovem",
        "lore": "Apar�ncia de crian�a, poder de fim de mundo. Kael � um Ser do Vazio jovem � se tal conceito tem significado para eles � e sua foice � desproporcional ao seu tamanho em todos os sentidos. Sua juventude dentro do Vazio significa que ainda tem alguma curiosidade sobre a exist�ncia, o que o torna ligeiramente menos inexoravelmente destrutivo.",
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
        "status": "Curioso � Perigoso"
      },
      {
        "n": "Kael'thas",
        "f": "Kael'thas-V-1.png",
        "t": "O Cavaleiro do Vazio",
        "role": "Cavaleiro da N�o-Exist�ncia",
        "lore": "Um Ser do Vazio que adotou a est�tica e a l�gica de um cavaleiro mortal � armadura, l�mina, c�digo. Kael'thas observou mortais por tanto tempo que come�ou a imitar sua estrutura, sem compreender completamente por qu�. Este comportamento de imita��o o torna o Ser do Vazio mais previs�vel e portanto o mais recrut�vel por outras fac��es.",
        "ab": [
          "L�mina do Vazio",
          "C�digo Imitado",
          "Armadura da N�o-Exist�ncia"
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
        "role": "Maga da N�o-Exist�ncia",
        "lore": "Uma Ser do Vazio que manifesta o poder do Vazio atrav�s de padr�es que se assemelham � magia mortal, mas operam em princ�pios inversos. Kallysta n�o cria � desfaz. Cada feiti�o que lan�a � a nega��o de algo que existe.",
        "ab": [
          "Magia da Nega��o",
          "Disrup��o do Ser",
          "Feiti�aria da N�o-Exist�ncia"
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
        "lore": "Um Ser do Vazio que existe como espectro mesmo dentro do Vazio � uma camada adicional de n�o-ser sobre o n�o-ser. Kalthazar usa esta natureza duplamente espectral para penetrar defesas que bloqueiam seres f�sicos e defesas que bloqueiam esp�ritos simultaneamente.",
        "ab": [
          "Forma Espectral dentro do Vazio",
          "Penetra��o Total",
          "Presen�a que Gela o Vazio"
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
        "lore": "O encontro improv�vel entre energia Kore e natureza do Vazio � Koku-Kore � um Ser do Vazio que entrou em contato com um Cristal Kore sem ser destru�do, resultando em uma fus�o imposs�vel. A energia Kore amplificou o poder do Vazio de formas que os estudiosos do Kore temiam ser poss�veis.",
        "ab": [
          "Fus�o Kore-Vazio",
          "Cavaleiro do Apocalipse",
          "Poder Imposs�vel"
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
        "t": "A Ca�adora da Noite",
        "role": "Ca�adora do Vazio",
        "lore": "Um Ser do Vazio com dois machados e um c�digo de ca�a preciso � alvo, persegui��o, execu��o. Korvessa n�o destr�i aleatoriamente; � seletiva, o que a torna a assassina mais eficaz dos Seres do Vazio. Seus alvos s�o aqueles que buscam fechar a Fissura do Vazio.",
        "ab": [
          "Duplos Machados do Vazio",
          "Furtividade da N�o-Exist�ncia",
          "Ca�a Precisa"
        ],
        "pow": 88,
        "spd": 93,
        "def": 78,
        "int": 82,
        "align": "evil",
        "region": "Errante",
        "status": "Ca�ando"
      },
      {
        "n": "Kraivos",
        "f": "Kraivos-V-1.png",
        "t": "O Guerreiro de Armadura",
        "role": "Combatente do Vazio",
        "lore": "Um Ser do Vazio que evoluiu uma forma mais f�sica e pesada que a maioria de sua esp�cie � armadura densa, l�mina enorme, combate direto. Kraivos � a prova de que alguns Seres do Vazio preferem a abordagem direta � sutileza da n�o-exist�ncia.",
        "ab": [
          "Armadura do Vazio",
          "L�mina Pesada da N�o-Exist�ncia",
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
        "lore": "Um Ser do Vazio que manifesta asas � n�o para voar, mas para expandir sua �rea de influ�ncia do Vazio. Krown-Kore usa suas asas como campos de for�a da n�o-exist�ncia, criando zonas onde a realidade come�a a falhar ao redor de qualquer coisa que se aproxime.",
        "ab": [
          "Asas do Vazio",
          "Campo de N�o-Exist�ncia",
          "Coroa��o do Vazio"
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
        "lore": "Um Ser do Vazio que adotou uma forma de penas negras e asas que lembram o luto. Malakor observa o conflito de Eryndor sem intervir diretamente � coleta informa��es que transmite de volta ao coletivo do Vazio, auxiliando a expans�o estrat�gica da Fissura.",
        "ab": [
          "Observa��o Total",
          "Transmiss�o ao Coletivo",
          "Penas da N�o-Exist�ncia"
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
        "lore": "O Ser do Vazio mais antigo e mais poderoso � o arquiteto da Grande Fratura. Wraith foi quem coordenou o uso dos Cristais Kore para rasgar a barreira entre mundos. N�o odeia Eryndor; simplesmente a considera tempor�ria, como considera tempor�rio tudo que existe dentro duma realidade com limites.",
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
        "region": "Voidrift � Centro",
        "status": "Senhor Supremo"
      },
      {
        "n": "Akuma Zan",
        "f": "Akuma-Zan-V-1.png",
        "t": "O Akuma Zan",
        "role": "Personagem de Seres do Vazio",
        "lore": "Akuma Zan era um vazio que o Kore deu forma. Sua ausência é agora presença. Sua ferida: existir sem realidade. Sua promessa: encontrar o vazio.",
        "ab": [
          "Golpe de Seres do Vazio",
          "Presen�a Imponente",
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
        "lore": "Astraon era uma estrela que o Vazio transformou em ser. Sua luz é agora escuridão. Sua ferida: brilhar sem fogo. Sua promessa: apagar a escuridão.",
        "ab": [
          "Golpe de Seres do Vazio",
          "Presen�a Imponente",
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
        "lore": "Erebus era uma sombra primordial que o Kore imbuiu com mente. Sua escuridão é agora consciencia. Sua ferida: ver sem olhos. Sua promessa: observar o fim.",
        "ab": [
          "Golpe de Seres do Vazio",
          "Presen�a Imponente",
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
        "lore": "Nalakor era um voidwalker que o Kore transformou em semi-deus. Sua ausência é agora existencia. Sua ferida: andar sem pisar. Sua promessa: tocar o chão.",
        "ab": [
          "Golpe de Seres do Vazio",
          "Presen�a Imponente",
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
        "lore": "Xanthos era um ser do vazio que o Kore deu forma. Sua não existência é agora real. Sua ferida: ser sem existir. Sua promessa: encontrar o vazio.",
        "ab": [
          "Golpe de Seres do Vazio",
          "Presen�a Imponente",
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

// Mant�m o atlas sincronizado com os arquivos presentes em `images/`.
// As entradas abaixo completam as imagens que existem nas pastas, mas ainda
// n�o estavam cadastradas no conte�do principal do site.
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
    lore: `${displayName} j� est� presente na pasta de imagens da ra�a ${race.name}, ent�o foi incorporado automaticamente ao atlas para n�o ficar de fora do site.`,
    ab: ["Ataque Kore", "Presen�a de Campo", "Instinto de Combate"],
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

// Export RACES to window for module access
window.RACES = RACES;


