const fs = require("fs");
let data = fs.readFileSync("data.js", "utf8");

// Mapeamento específico de nomes
const loreMap = {
  // Gigantes
  "Bjorn": "Bjorn era um gigante-montanha que carregava uma torre em cima da cabeça — a última casa de um vilarejo que afundou. Sua ferida: ser o altar temporário. Sua promessa: erguer uma torre que nunca afunde.",
  "Crimson": "Crimson era um gigante de fogo nascido de um cristal vermelho de erupção. Sua raiva é tão intensa quanto a lava — e tão difícil de controlar. Sua ferida: incinerrar tudo ao redor. Sua promessa: aprender a flor de lava.",
  "Kabuto": "Kabuto era um guerreiro-coraça que carregava o cascolo de um samurai extinto. Sua armadura é conchas de kori que se movem como vontade própria. Sua ferida: proteger corpos que não tem. Sua promessa: ser o escudo final.",
  "Katsu": "Katsu era um guerreiro comum cujo espírito foi tocado por um cristal gigante. Sua força aumentou mas sua altura também — agora tropeça nas portas de sua juventude. Sua ferida: não se encaixar no mundo pequeno. Sua promessa: quebrar as portas que o limitam.",
  "Oblivion": "Oblivion é um gigante feito de névoa e esquecimento — tudo o que toca some da memória dos sobreviventes. Sua ferida: não ser lembrado. Sua promessa: ser o fim que ninguém recordará.",
  "Torstein": "Torstein é um gigante de gelo que carrega um castelo em cadeia. Sua lenta marcha congela o chão sob seus pés. Sua ferida: tocar sem congelar o mundo. Sua promessa: aquecer o coração uma vez.",
  "Zinogre": "Zinogre era um lobo que o Kore transformou em monstro elétrico. Sua raiva é agora um trovão. Sua ferida: luta sem fome. Sua promessa: acalmar o raio.",
  "Zrik": "Zrik é um gigante pedra que carrega uma inscrição em sua carapaça — um texto que ninguém consegue traduzir. Sua ferida: carregar um segredo sem saber. Sua promessa: decifrar antes que o mundo desabe.",
  // Humanos
  "Garp": "Garp era um herói que jurou proteger o mundo, mas perdeu família na primeira Fratura. Sua força aumentou mas seu sorriso sumiu. Sua ferida: proteger sem conseguir salvar. Sua promessa: ser o escudo que dura mais que a tempestade.",
  "Kaelen": "Kaelen era um mago de Thornwall que buscou desvendar a técnica de Kore. Seu desafio foi transformado em marcas que ardem sob a pele. Sua ferida: tocar o segredo sem dominar. Sua promessa: decifrar o código do cristal.",
  "Scopper Gaban": "Scopper Gaban era um imprestável que virou herói sem querer — cada passo foi acompanhado pelo riso de quem achava que cairia. Mas ele sobreviveu onde os fortes caíram. Sua ferida: rir da própria sobrevivência. Sua promessa: ver o fim sem medo.",
  // Magos
  "Hajime": "Hajime é um mágico branco que carrega um livro amaldiçoado — cada página lida consome um ano de vida. Mas também revela segredos que impedem guerras. Sua ferida: pagar anos por respostas. Sua promessa: terminar o livro antes que o tempo acabe.",
  // Meio-Sangue
  "Gorefist": "Gorefist era um mercador que vendeu armas até ser pego por seu próprio horror. O Kore transformou suas obrigações em lâminas que crescem da mão. Sua ferida: comerciar com o próprio mal. Sua promessa: enfrentar quem compra seu veneno.",
  "Ibaraki": "Ibaraki era um oni que serviu humanos antes da Fratura. Agora sua forma oni é fruto da proteção que lhe foi negada. Sua ferida: ser temido por quem protege. Sua promessa: provar que monstro pode ser guardião.",
  "Kross": "Kross era um ladrão que roubou cristais antes de ser transformado em um. Sua culpa é uma lâmina que corta a própria alma. Sua ferida: cada pedra roubada sangra. Sua promessa: devolver tudo sem deixar rastres.",
  "Kuma": "Kuma era um bruxo que tentou selar a Fratura sozinho. Falhou e perdeu memórias em troca de poderes que não domina completamente. Sua ferida: esquecer o que precisa lembrar. Sua promessa: selar o que abriu.",
  "Saru": "Saru era um sacerdote que rezava para acalmar os monstros. O Kore transformou suas preces em gritos que convocam caos. Sua ferida: bendizer para corromper. Sua promessa: restaurar a paz perdida.",
  "Solan": "Solan era um arqueiro que mirou demônios antes de seus olhos se tornarem flechas vivas. Cada inimigo visto se torna seu alvo inevitável. Sua ferida: tocar sem atirar. Sua promessa: acertar a última flecha.",
  "Tentaku": "Tentaku era um general que marcou o front com sinos. Agora sua batalha é um coro de metais que faz o chão tremer. Sua ferida: ouvir sinos sem silêncio. Sua promessa: tocar final sem ruína.",
  "Thorne": "Thorne era um assassino que matou reis antes de ser tocado por um Kore negro. Sua lâmina agora consome promessas quebradas. Sua ferida: servir a ninguém. Sua promessa: cumprir a última missão.",
  "Valerion": "Valerion era um cavaleiro que jurou lealdade a um rei morto. O Kore transformou seu juramento em marcas que brilham em inimigos. Sua ferida: honrar sem senhor. Sua promessa: encontrar o rei que ainda vive.",
  // Desconhecido
  "Glorivex": "Glorivex surge do Entremundo como desafio personificado — sua forma oscila entre rosto humano e espinha dracônica. É um mistério vivo cujo propósito desconhece até os Semi-Deuses. Sua ferida: não pertencer a nenhuma história. Sua promessa: escrever sua própria linhagem.",
  "Helion": "Helion é a luz que caiu no Entremundo e virou sombra. Não é nem demônio nem anjo — é um intermediário de luz e escuridão. Sua ferida: brilhar sem ser iluminado. Sua promessa: achar a luz.",
  "Noxus": "Noxus é a ausência dada forma — criado quando alguém perguntou qual seria o vazio sem o Vazio. Responde a pergunta vivendo, mas sem resposta verdadeira. Sua ferida: não saber se existe. Sua promessa: descobrir sua própria existência.",
  // Semi-Deuses
  "Aurion": "Aurion era um Semi-Deus que o Kore transformou em amaldiçoado. Sua luz é agora sombra viva. Sua ferida: servir o mal com bondade. Sua promessa: voltar ao céu.",
  "Azazel": "Azazel era um anjo caído que o Kore imbuiu com corrupção. Sua asa é agora fogo corrupto. Sua ferida: servir o mal com bondade. Sua promessa: voltar ao céu.",
  "Morthan": "Morthan era um deus da peste que o Kore transformou em curandeiro. Sua peste é agora medicina. Sua ferida: contaminar para limpar. Sua promessa: achar a cura.",
  "Xul'gath": "Xul'gath era um demônio que o Kore imbuiu com divindade. Sua escuridão é agora clareira. Sua ferida: ser bom sem ser santo. Sua promessa: encontrar o limiar.",
  // Monstros
  "Behemoth": "Behemoth era uma besta primordial que o Kore imbuiu com mente. Sua fome é agora uma batalha instintiva. Sua ferida: devorar sem fome. Sua promessa: saciar a voracidade do mundo.",
  "Drakul Zar": "Drakul Zar era um vampira que bebeu o sangue do sol. Sua noite é agora eternidade de fogo. Sua ferida: sede que queima. Sua promessa: beber a última gota de luz.",
  "Garchomp": "Garchomp era um dragão-marinho que evoluiu ao tocar um cristal. Sua velocidade corta os céus como águas. Sua ferida: nadar sem oceano. Sua promessa: encontrar as águas.",
  "Gargul": "Gargul era um golem que ganhou consciência ao absorver fragmentos de Kore. Sua pedra agora fala mas sem voz. Sua ferida: existir sem som. Sua promessa: falar sem palavras.",
  "Glacius": "Glacius era um elemental gelo que o Kore derreteu parcialmente. Sua forma é agora vapor congelado que corta a carne. Sua ferida: derreter sem dissolver. Sua promessa: solidificar a tempestade.",
  "Gnash": "Gnash era um demônio que perdeu asas e força. Sua boca é agora uma lâmina infinita. Sua ferida: morder sem mandíbula. Sua promessa: mastigar o coração.",
  "Gorgoroth": "Gorgoroth era um titã que o Kore transformou em monstro de pedra. Sua ira é agora um terremoto. Sua ferida: rugir sem eco. Sua promessa: fazer o chão tremer.",
  "Ignisaurus": "Ignisaurus era um dinossauro que evoluiu ao tocar um cristal incandescente. Sua chama consome tudo mas sem fogo. Sua ferida: arder sem calor. Sua promessa: apagar o fogo interno.",
  "Kongor": "Kongor era um gorila gigante que o Kore tornou mais selvagem. Sua força é agora uma tormenta de golpes. Sua ferida: agarrar sem toque. Sua promessa: abraçar sem força.",
  "Kragor": "Kragor era um minotauro que o Kore imbuiu com magia flamejante. Sua força é agora combustão viva. Sua ferida: queimar sem lama. Sua promessa: acalmar a chama.",
  "Kragos": "Kragos era um esqueleto animado por energia de cristal. Sua ossada é agora uma armadura viva. Sua ferida: viver sem carne. Sua promessa: tocar o peito.",
  "Necros": "Necros era um necromante que o Kore transformou em morto-vivo. Sua mágica invoca exércitos de ossos. Sua ferida: comandar sem viver. Sua promessa: encontrar os vivos.",
  "Ossifago": "Ossifago era um canibal que o Kore transformou em monstro de espinhos. Sua fome é agora perfuração viva. Sua ferida: devorar sem boca. Sua promessa: mastigar o ar.",
  "Vermithrax": "Vermithrax era uma rainha vampira que o Kore transformou em dragão. Sua asa envolve o ceu todo. Sua ferida: voar sem voo. Sua promessa: tocar o solo.",
  "Volcanus": "Volcanus era um vulcão que ganhou forma e mente. Sua erupção é agora consciencia. Sua ferida: queimar sem força. Sua promessa: serenar a lava.",
  "Vorgas": "Vorgas era um gigante de lodo que o Kore endureceu. Sua lama é agora cinza viva. Sua ferida: mover sem passos. Sua promessa: andar sem mover.",
  "Zarcon": "Zarcon era um alienígena que o Kore transformou em monstro. Sua tecnologia é agora magia. Sua ferida: calcular sem pensar. Sua promessa: compreender o erro.",
  "Zord": "Zord era um robô gigante que o Kore imbuiu com alma. Sua tecnologia é agora magia viva. Sua ferida: funcionar sem propósito. Sua promessa: encontrar missão.",
  // Onis
  "Kyo Zan": "Kyo Zan era um oni guerreiro que o Kore transformou em demônio. Sua forma é agora um meio-termo. Sua ferida: ser omisso sem equilíbrio. Sua promessa: decidir o lado.",
  "Xar Drakan": "Xar Drakan era um dragão oni que o Kore imbuiu com mente humana. Sua fúria é agora razão viva. Sua ferida: racionalizar o ataque. Sua promessa: parar o fogo.",
  // Seres do Vazio
  "Akuma Zan": "Akuma Zan era um vazio que o Kore deu forma. Sua ausência é agora presença. Sua ferida: existir sem realidade. Sua promessa: encontrar o vazio.",
  "Astraon": "Astraon era uma estrela que o Vazio transformou em ser. Sua luz é agora escuridão. Sua ferida: brilhar sem fogo. Sua promessa: apagar a escuridão.",
  "Erebus": "Erebus era uma sombra primordial que o Kore imbuiu com mente. Sua escuridão é agora consciencia. Sua ferida: ver sem olhos. Sua promessa: observar o fim.",
  "Nalakor": "Nalakor era um voidwalker que o Kore transformou em semi-deus. Sua ausência é agora existencia. Sua ferida: andar sem pisar. Sua promessa: tocar o chão.",
  "Xanthos": "Xanthos era um ser do vazio que o Kore deu forma. Sua não existência é agora real. Sua ferida: ser sem existir. Sua promessa: encontrar o vazio."
};

let count = 0;
for (const [name, lore] of Object.entries(loreMap)) {
  const escapedLore = lore.replace(/"/g, '\\"');
  const pattern = `"n": "${name}"[\\s\\S]*?"lore": "Placeholder"`;
  const regex = new RegExp(pattern, "g");
  const matches = data.match(regex);
  if (matches) {
    data = data.replace(regex, (match) => {
      return match.replace("Placeholder", escapedLore);
    });
    count += matches.length;
  }
}

fs.writeFileSync("data.js", data);
console.log("Substituidos", count, "placeholders");