export interface Project {
  slug: string;
  title: string;
  client: string;
  date?: string;
  featured: boolean;
  url?: string;
  category: "education" | "gamejam";
  role?: string;
  descriptionPt: string;
  descriptionEn: string;
  coverImage: string;
}

export const projects: Project[] = [
  {
    slug: "parasitologia-vr",
    title: "Parasitologia VR - Haemonchus contortus",
    client: "PUCPR / CRE",
    date: "2025-05",
    featured: false,
    url: "https://youtu.be/ErEpZbjMB5o",
    category: "education",
    role: "Diretor, Level & Game Design, UI/UX/IxD",
    descriptionPt:
      "Experiência gamificada e imersiva, desenvolvida para o curso de veterinária da PUCPR em conjunto com uma professora do curso. Atuei como diretor do projeto, coordenando a equipe de desenvolvimento, distribuindo as tarefas e também na parte de desenvolvimento, como Level Designer, Game Designer e UI/UX/IxD.",
    descriptionEn:
      "A gamified, immersive experience developed for PUCPR's veterinary program together with a course professor. I acted as project director, coordinating the development team and task distribution, while also working hands-on as Level Designer, Game Designer, and UI/UX/IxD.",
    coverImage: "/covers/parasitologia-vr.png",
  },
  {
    slug: "mecflu-vr",
    title: "MECFLU VR",
    client: "PUCPR / CRE",
    date: "2024-06",
    featured: false,
    category: "education",
    role: "UI/UX",
    descriptionPt:
      "Simulação imersiva sobre o experimento de Reynolds (mecânica de fluidos). Projeto desenvolvido para o Centro de Realidade Estendida da PUCPR em parceria com a DIVE Realities, empresa de desenvolvimento de experiências em realidade virtual de São Paulo/SP. Nesse projeto fui responsável pela parte de UI/UX.",
    descriptionEn:
      "An immersive simulation of Reynolds' fluid dynamics experiment. Developed for PUCPR's Extended Reality Center in partnership with DIVE Realities, a VR experience studio based in São Paulo. I was responsible for the UI/UX.",
    coverImage: "/covers/mecflu-vr.webp",
  },
  {
    slug: "mecflu-vr-perda-de-carga",
    title: "MECFLU VR - Perda de Carga",
    client: "PUCPR / CRE",
    date: "2024-06",
    featured: false,
    category: "education",
    role: "UI/UX",
    descriptionPt:
      "Continuação da primeira versão da experiência. Projeto desenvolvido para o Centro de Realidade Estendida da PUCPR em parceria com a DIVE Realities, empresa de desenvolvimento de experiências em realidade virtual de São Paulo/SP. Nesse projeto fui responsável pela parte de UI/UX.",
    descriptionEn:
      "A continuation of the first version of the experience. Developed for PUCPR's Extended Reality Center in partnership with DIVE Realities, a São Paulo-based VR studio. I was responsible for the UI/UX.",
    coverImage: "/covers/mecflu-vr-perda-de-carga.webp",
  },
  {
    slug: "visualizacao-de-funcoes-matematicas",
    title: "Visualização de Funções Matemáticas",
    client: "PUCPR / CRE",
    date: "2023-12",
    featured: false,
    url: "https://blogs.pucpr.br/realidadeestendida/2024/03/15/jogo-de-realidade-virtual-auxilia-estudantes-no-aprendizado-de-funcoes-matematicas/",
    category: "education",
    role: "UI/UX/Game Design",
    descriptionPt:
      "Experiência imersiva educacional para visualização de funções matemáticas. Projeto desenvolvido para o Centro de Realidade Estendida da PUCPR. Nesse projeto eu fui responsável pelo UI/UX/Game Design.",
    descriptionEn:
      "An educational immersive experience for visualizing mathematical functions. Developed for PUCPR's Extended Reality Center, where I was responsible for UI/UX/Game Design.",
    coverImage: "/covers/visualizacao-de-funcoes-matematicas.webp",
  },
  {
    slug: "direito-e-nao-coisas",
    title: "Direito e Não-Coisas",
    client: "PUCPR / CRE",
    featured: false,
    category: "education",
    descriptionPt:
      "Direito e Não-Coisas VR é uma simulação imersiva que provoca uma reflexão crítica sobre a sociedade orientada por dados, evidenciando como algoritmos e dispositivos conectados capturam, processam e transformam ações cotidianas em perfis digitais.",
    descriptionEn:
      "Direito e Não-Coisas VR is an immersive simulation that provokes critical reflection on a data-driven society, showing how algorithms and connected devices capture, process, and turn everyday actions into digital profiles.",
    coverImage: "/covers/direito-e-nao-coisas.png",
  },
  {
    slug: "gastrogame-vr",
    title: "GastroGameVR",
    client: "PUCPR / CRE",
    featured: false,
    category: "education",
    descriptionPt:
      "GastroGame é uma experiência gamificada em Realidade Virtual desenvolvida para o curso de Medicina da PUCPR – Campus Londrina, com foco no ensino de doenças do aparelho digestivo. A proposta coloca o estudante dentro do estômago, como se fosse uma câmera endoscópica, desafiando-o a identificar patologias e tomar decisões clínicas de forma imersiva e interativa.",
    descriptionEn:
      "GastroGame is a gamified VR experience developed for PUCPR's Medicine program (Londrina campus), focused on teaching digestive system diseases. It places the student inside the stomach, acting as an endoscopic camera, challenging them to identify pathologies and make clinical decisions in an immersive, interactive way.",
    coverImage: "/covers/gastrogame-vr.png",
  },
  {
    slug: "exploradores-de-cavernas",
    title: "Exploradores de Cavernas",
    client: "PUCPR / CRE",
    featured: false,
    category: "education",
    descriptionPt:
      "Exploradores de Cavernas VR é uma experiência em Realidade Virtual inspirada em O Caso dos Exploradores de Cavernas, de Lon L. Fuller, que conduz o estudante por uma vivência imersiva dos acontecimentos que antecedem o julgamento apresentado na obra. A proposta busca tornar concretos conceitos iniciais da Teoria do Direito e do Direito Penal por meio da participação ativa na narrativa.",
    descriptionEn:
      "Cave Explorers VR is a virtual reality experience inspired by The Case of the Speluncean Explorers by Lon L. Fuller, guiding the student through an immersive account of the events leading up to the trial described in the work. It aims to make foundational concepts of Legal Theory and Criminal Law concrete through active participation in the narrative.",
    coverImage: "/covers/exploradores-de-cavernas.png",
  },
  {
    slug: "neuro-amefe",
    title: "Neuro AMEFE",
    client: "PUCPR / CRE",
    featured: false,
    category: "education",
    descriptionPt:
      "Neuro A.M.E.FE é uma experiência digital interativa voltada ao apoio do ensino na área da saúde, estruturada para estimular o raciocínio clínico e a tomada de decisão por meio de simulações aplicadas ao contexto neurofuncional.",
    descriptionEn:
      "Neuro A.M.E.FE is an interactive digital experience that supports health education, designed to stimulate clinical reasoning and decision-making through simulations applied to neurofunctional contexts.",
    coverImage: "/covers/neuro-amefe.webp",
  },
  {
    slug: "estrutura-de-produto",
    title: "Estrutura de Produto",
    client: "PUCPR / CRE",
    featured: false,
    category: "education",
    descriptionPt:
      "Estrutura de produto é uma experiência colaborativa onde os alunos são desafiados a fazer uma montagem de um produto de forma otimizada, sem comunicar os verdadeiros nomes das peças.",
    descriptionEn:
      "Product Structure is a collaborative experience where students are challenged to assemble a product in an optimized way, without being able to say the real names of the parts.",
    coverImage: "/covers/estrutura-de-produto.png",
  },
  {
    slug: "crime-scene-vr",
    title: "Crime Scene VR - Cadeia de Custódia de Evidências Digitais",
    client: "PUCPR / CRE",
    featured: false,
    category: "education",
    descriptionPt:
      "Crime Scene VR – Cadeia de Custódia de Evidências Digitais é uma simulação imersiva que desafia o estudante a identificar, coletar e preservar evidências digitais em um cenário investigativo, aplicando corretamente os protocolos de cadeia de custódia.",
    descriptionEn:
      "Crime Scene VR – Digital Evidence Chain of Custody is an immersive simulation that challenges the student to identify, collect, and preserve digital evidence in an investigative scenario, correctly applying chain-of-custody protocols.",
    coverImage: "/covers/crime-scene-vr.webp",
  },
  {
    slug: "par-a-rage-game",
    title: "PAR - A Rage Game",
    client: "The Very Serious Juniper Dev Game Jam",
    featured: false,
    url: "https://tejota.itch.io/par",
    category: "gamejam",
    descriptionPt:
      "Um jogo simples, criado para a The Very Serious Juniper Dev Game Jam de 2026. O jogo é uma pista de minigolfe, onde o usuário não tem controle total sobre a força da tacada nem a direção, e deve tentar fazer o buraco em menos tacadas possíveis.",
    descriptionEn:
      "A simple game made for The Very Serious Juniper Dev Game Jam (2026). It's a mini-golf course where the player doesn't have full control over the shot's power or direction, and must try to sink the hole in as few strokes as possible.",
    coverImage: "/covers/par-a-rage-game.png",
  },
  {
    slug: "disability-racer",
    title: "Disability Racer",
    client: "Alpacone Games Studio",
    date: "2022",
    featured: true,
    url: "https://alpaconegames.itch.io/dr",
    category: "gamejam",
    descriptionPt:
      "O jogo foi exposto no CSEDU 2024 na França. Multiplayer local para 4 jogadores desenvolvido durante a matéria “Jogos Sérios” do curso de desenvolvimento de Jogos Digitais da PUCPR.",
    descriptionEn:
      "Showcased at CSEDU 2024 in France. A local 4-player multiplayer game developed during the \"Serious Games\" course of PUCPR's Digital Games program.",
    coverImage: "/covers/disability-racer.png",
  },
  {
    slug: "the-forgotten-soda",
    title: "The Forgotten Soda",
    client: "Code for a Cause 2025",
    date: "2025-03",
    featured: false,
    url: "https://tejota.itch.io/soda",
    category: "gamejam",
    descriptionPt:
      "Jogo desenvolvido para a Code for a Cause de 2025. Nessa game jam fui premiado com um dos 5 gifts que incluíam um pacote de pixel art, usado para desenvolver o jogo. É um infinite runner onde o jogador deve devolver um refrigerante esquecido pela pessoa que comprou. 76º lugar de 290 jogos desenvolvidos, com destaque para a arte e adesão ao tema.",
    descriptionEn:
      "A game developed for Code for a Cause 2025. In this jam I won one of 5 prize gifts, including a pixel art pack used to build the game. It's an infinite runner where the player must return a soda left behind by the person who bought it. Ranked 76th out of 290 games, recognized for its art and strong adherence to the theme.",
    coverImage: "/covers/the-forgotten-soda.png",
  },
  {
    slug: "bubble-wave",
    title: "Bubble Wave",
    client: "Global Game Jam 2025",
    date: "2025-01",
    featured: false,
    url: "https://tejota.itch.io/bubblewave",
    category: "gamejam",
    descriptionPt:
      "Jogo desenvolvido para a Global Game Jam de 2025 com o tema “Bubble”. Jogo competitivo multiplayer local, onde os jogadores devem acertar os botões em momentos certos para conseguir inflar uma bolha até a vitória. Desenvolvido em 48 horas.",
    descriptionEn:
      "A game developed for Global Game Jam 2025 with the theme \"Bubble\". A local multiplayer competitive game where players must hit buttons at the right moments to inflate a bubble to victory. Built in 48 hours.",
    coverImage: "/covers/bubble-wave.png",
  },
  {
    slug: "roots-race",
    title: "Roots Race",
    client: "Alpacone Games Studio",
    date: "2023",
    featured: true,
    url: "https://alpaconegames.itch.io/rr-race",
    category: "gamejam",
    descriptionPt:
      "Primeiro lugar na Game Jam GameForm de 2023. Premiação: R$ 7.500,00. Multiplayer local para 4 pessoas, com o tema de corrida de plantas, desenvolvido durante a Global Game Jam de 2023 e finalizado durante a Game Jam GameForm.",
    descriptionEn:
      "1st place at the GameForm 2023 Game Jam. Prize: R$7,500. A local 4-player plant-racing game, started during Global Game Jam 2023 and finished during the GameForm Game Jam.",
    coverImage: "/covers/roots-race.png",
  },
];
