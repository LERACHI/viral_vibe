export type QuizConfig = {
  slug: string;
  title: string;
  description?: string;
  question: string;
  options: {
    id: string;
    text: string;
    helper?: string;
    votes?: number;
  }[];
  cta?: string;
};

export type Top10Config = {
  slug: string;
  title: string;
  subtitle?: string;
  cta?: string;
  items: {
    id: string;
    title: string;
    description: string;
    tag?: string;
    votes?: number;
  }[];
};

export const quizzes: QuizConfig[] = [
  {
    slug: "reveillon-2026-nordeste-mega-festas",
    title: "Quiz relampago: sua vibe de reveillon",
    description: "Escolha como quer virar o ano e veja o que a galera prefere.",
    question: "Qual estilo de mega festa no Nordeste mais combina com voce?",
    options: [
      {
        id: "porto-galinhas",
        text: "Open bar de frente para o mar em Porto de Galinhas",
        helper: "DJ ate o amanhecer e piscininha morna.",
        votes: 210,
      },
      {
        id: "jeri",
        text: "Pez na areia e eletronico em Jericoacoara",
        helper: "Lua cheia na duna do por do sol.",
        votes: 180,
      },
      {
        id: "morro-sp",
        text: "Festa de ilha em Morro de Sao Paulo",
        helper: "Barco, praia vazia e turbinados de axé.",
        votes: 156,
      },
      {
        id: "salvador",
        text: "Farol da Barra lotado em Salvador",
        helper: "Trio eletrico, fogos e micareta.",
        votes: 132,
      },
    ],
    cta: "Responder e mandar para o grupo",
  },
  {
    slug: "guia-viajar-barato-dezembro",
    title: "Teste rapido de economia",
    description: "Descubra qual hack de viagem barata e seu numero 1.",
    question: "Qual tatico voce usaria agora para cortar custos da viagem?",
    options: [
      {
        id: "mala-capsula",
        text: "Viajar so com mala de bordo",
        helper: "Sem despachar, sem fila, sem taxa extra.",
        votes: 142,
      },
      {
        id: "data-flexivel",
        text: "Flexibilizar a data em 2 ou 3 dias",
        helper: "Pega tarifa escondida e foge do pico.",
        votes: 131,
      },
      {
        id: "amigos-airbnb",
        text: "Fechar casa com amigos no Airbnb",
        helper: "Divide custos e ainda cozinha junto.",
        votes: 118,
      },
      {
        id: "milhas",
        text: "Queimar milhas paradas agora",
        helper: "Assume logo a virada antes do reajuste.",
        votes: 109,
      },
    ],
    cta: "Responder e compartilhar nos stories",
  },
  {
    slug: "lugares-abandonados-brasil-historias-macabras",
    title: "Nivel de coragem urbano",
    description: "Vote e descubra qual rolê assombrado voce toparia encarar.",
    question: "Qual lugar abandonado voce teria coragem de explorar primeiro?",
    options: [
      {
        id: "fordlandia",
        text: "Fordlandia no meio da Amazonia",
        helper: "Cidade fantasma criada por Henry Ford.",
        votes: 176,
      },
      {
        id: "cassino-quitandinha",
        text: "Cassino Quitandinha em Petropolis",
        helper: "Art deco gigante com lendas de fantasmas.",
        votes: 149,
      },
      {
        id: "ilha-cobras",
        text: "Ilha da Queimada Grande",
        helper: "Zero turistas, so jararacas e historias macabras.",
        votes: 121,
      },
      {
        id: "penitenciaria-aha",
        text: "Penitenciaria do Aha em Curitiba",
        helper: "Pavilhoes vazios e inscicoes nas paredes.",
        votes: 103,
      },
    ],
  },
];

export const top10Lists: Top10Config[] = [
  {
    slug: "reveillon-2026-nordeste-mega-festas",
    title: "Top 10 destinos do Nordeste para virar 2026",
    subtitle: "Vote e ajude a definir quem merece o topo do ranking.",
    cta: "Votar no meu favorito",
    items: [
      {
        id: "porto-galinhas",
        title: "Porto de Galinhas (PE)",
        description: "Pool party, beach clubs e acesso rapido de Recife.",
        tag: "Luxo descalco",
        votes: 410,
      },
      {
        id: "jeri",
        title: "Jericoacoara (CE)",
        description: "Pez na areia, kite e after na Duna do Por do Sol.",
        tag: "Boho premium",
        votes: 360,
      },
      {
        id: "morro-sp",
        title: "Morro de Sao Paulo (BA)",
        description: "Festa na Terceira Praia e vibe de ilha fechada.",
        votes: 332,
      },
      {
        id: "pipa",
        title: "Pipa (RN)",
        description: "Beach clubs, trilhas e insiders do nordeste.",
        votes: 300,
      },
      {
        id: "fernando-noronha",
        title: "Fernando de Noronha (PE)",
        description: "Exclusividade, poucas festas e o mar mais azul.",
        tag: "Exclusivo",
        votes: 274,
      },
      {
        id: "salvador",
        title: "Salvador (BA)",
        description: "Farol da Barra, trio eletrico e axé madrugada.",
        votes: 248,
      },
      {
        id: "praia-forte",
        title: "Praia do Forte (BA)",
        description: "Resorts all inclusive e festas privadas.",
        votes: 220,
      },
      {
        id: "natal",
        title: "Natal (RN)",
        description: "Ponta Negra com fogos, show gratuito e custo amigo.",
        tag: "Custo-beneficio",
        votes: 204,
      },
      {
        id: "sao-gostoso",
        title: "Sao Miguel do Gostoso (RN)",
        description: "Kitesurf, areia infinita e DJ ao por do sol.",
        votes: 186,
      },
      {
        id: "maceio",
        title: "Maceio (AL)",
        description: "Mar de piscina e programacao cultural na orla.",
        votes: 170,
      },
    ],
  },
  {
    slug: "lugares-abandonados-brasil-historias-macabras",
    title: "Top 10 rolês sombrios do Brasil",
    subtitle: "Quem merece o posto de lugar mais macabro?",
    cta: "Registrar meu voto",
    items: [
      {
        id: "hotel-tropical",
        title: "Hotel Tropical (AM)",
        description: "Palacio luxuoso engolido pela selva.",
        votes: 260,
      },
      {
        id: "fordlandia",
        title: "Fordlandia (PA)",
        description: "Cidade americana fantasma no meio da Amazonia.",
        votes: 242,
      },
      {
        id: "penitenciaria-aha",
        title: "Penitenciaria do Aha (PR)",
        description: "Pavilhoes vazios com marcas de rebeliões.",
        votes: 220,
      },
      {
        id: "cassino-quitandinha",
        title: "Cassino Quitandinha (RJ)",
        description: "Art deco gigante com ecos de apostas proibidas.",
        votes: 204,
      },
      {
        id: "colonia-juliano",
        title: "Colonia Juliano Moreira (RJ)",
        description: "Antigo hospital psiquiatrico com predios abandonados.",
        votes: 189,
      },
      {
        id: "cruzeiro-angra",
        title: "Navio encalhado de Angra (RJ)",
        description: "Carcaça oxidada que parece cena de filme.",
        votes: 172,
      },
      {
        id: "ararapira",
        title: "Vila de Ararapira (PR)",
        description: "Cidade tomada pela natureza na divisa SP/PR.",
        votes: 150,
      },
      {
        id: "sanatorio-sjc",
        title: "Sanatorio Vicentina Aranha (SP)",
        description: "Arquitetura gotica com lendas urbanas.",
        votes: 134,
      },
      {
        id: "paranapiacaba",
        title: "Estacao Paranapiacaba (SP)",
        description: "Vila inglesa na neblina eterna.",
        votes: 118,
      },
      {
        id: "ilha-cobras",
        title: "Ilha da Queimada Grande (SP)",
        description: "Proibida para visitas, dominada por jararacas.",
        votes: 102,
      },
    ],
  },
  {
    slug: "guia-viajar-barato-dezembro",
    title: "Top 10 hacks reais para viajar barato",
    subtitle: "Vote no truque que voce jura que funciona de verdade.",
    cta: "Quero votar agora",
    items: [
      {
        id: "alerta-preco",
        title: "Alerta de preco com data flexivel",
        description: "Monitora 5 dias diferentes para achar tarifa escondida.",
        votes: 240,
      },
      {
        id: "cashback",
        title: "Cashback + cupom na reserva",
        description: "Combinar cupom com app que devolve % real.",
        votes: 222,
      },
      {
        id: "mala-bordo",
        title: "Viajar so com mala de bordo",
        description: "Economia de despacho e mobilidade na chegada.",
        votes: 210,
      },
      {
        id: "voo-escala",
        title: "Topar voo com escala estranha",
        description: "Foge do voo direto caro e ainda conhece outro aero.",
        votes: 198,
      },
      {
        id: "cozinha",
        title: "Hospedagem com cozinha",
        description: "Cafe e almoco caseiros para reduzir conta final.",
        votes: 182,
      },
      {
        id: "milhas-transfer",
        title: "Transferir milhas no bonus de 80%",
        description: "Juntar pontos parados da galera e emitir tudo.",
        votes: 168,
      },
      {
        id: "viajar-em-grupo",
        title: "Fechar grupo e dividir Uber/hospedagem",
        description: "O famoso 'casa com piscina' de amigos.",
        votes: 150,
      },
      {
        id: "remarcar",
        title: "Comprar antes e remarcar datas gratis",
        description: "Segura preco e ajusta depois com regra flex.",
        votes: 132,
      },
      {
        id: "teletrabalho",
        title: "Trabalhar remoto 2 dias na viagem",
        description: "Estica estadia e dilui custo das diarias.",
        votes: 120,
      },
      {
        id: "onibus-noturno",
        title: "Onibus noturno para evitar diaria extra",
        description: "Chega cedinho e usa a noite como deslocamento.",
        votes: 108,
      },
    ],
  },
];

export const getQuizBySlug = (slug: string) =>
  quizzes.find((quiz) => quiz.slug === slug);

export const getTop10BySlug = (slug: string) =>
  top10Lists.find((list) => list.slug === slug);
