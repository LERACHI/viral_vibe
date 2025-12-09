import heroReveillon from "@/assets/hero-reveillon.jpg";
import natalGramado from "@/assets/natal-gramado.jpg";
import nordesteBeach from "@/assets/nordeste-beach.jpg";
import budgetTravel from "@/assets/budget-travel.jpg";
import lugaresAbandonados from "@/assets/lugares-abandonados.jpg";
import salvadorFesta from "@/assets/salvador-festa.jpg";
import aviaoMitos from "@/assets/aviao-mitos.jpg";

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  categoryColor: "trending" | "travel" | "curiosity" | "budget";
  imageUrl: string;
  imageAlt: string;
  readTime: string;
  views: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  updatedAt: string;
  tags: string[];
}

export const articles: Article[] = [
  {
    id: "1",
    slug: "reveillon-2026-nordeste-mega-festas",
    title: "Réveillon 2026: Os 10 Destinos no Nordeste com as Melhores Mega Festas (e Onde Comprar o Ingresso)",
    excerpt: "De Porto de Galinhas a Morro de São Paulo: descubra quais praias nordestinas vão sediar as festas mais épicas do Ano Novo e garanta seu ingresso antes que esgotem.",
    content: `
## O Nordeste é o Destino dos Sonhos para o Réveillon

Se você está planejando uma virada de ano inesquecível, o Nordeste brasileiro oferece as melhores festas do país. Com praias paradisíacas, clima tropical e uma energia contagiante, a região se tornou o destino favorito dos brasileiros que querem celebrar a chegada de 2026 em grande estilo.

### 1. Porto de Galinhas, Pernambuco

Porto de Galinhas lidera o ranking de destinos mais procurados. As piscinas naturais durante o dia e as festas à beira-mar à noite fazem deste paraíso um destino completo.

**Onde comprar ingressos:** Os principais eventos acontecem no Summerville Beach Resort e no Nannai Resort. Ingressos disponíveis no site Sympla a partir de R$ 350.

### 2. Morro de São Paulo, Bahia

Acessível apenas por barco, Morro de São Paulo oferece uma experiência única. A Terceira Praia concentra os melhores luaus e festas que vadam noite adentro.

**Dica importante:** Reserve sua hospedagem com antecedência, pois a ilha tem capacidade limitada.

### 3. Jericoacoara, Ceará

A vila de Jeri combina deslumbrantes dunas, lagoas cristalinas e uma vida noturna agitada. O réveillon na Duna do Pôr do Sol é uma experiência mística.

### 4. Natal, Rio Grande do Norte

A capital potiguar oferece o melhor custo-benefício do Nordeste. A Praia de Ponta Negra recebe shows gratuitos e queima de fogos espetacular.

### 5. Fernando de Noronha, Pernambuco

Para quem busca exclusividade, Noronha é imbatível. As festas são mais intimistas, mas a experiência de virar o ano no arquipélago é incomparável.

### 6. Salvador, Bahia

O berço do axé não poderia ficar de fora. O Farol da Barra concentra milhões de pessoas para uma das maiores festas do Brasil.

### 7. Praia do Forte, Bahia

Conhecida pelo Projeto Tamar, Praia do Forte oferece réveillon em resorts all-inclusive com festas privativas de alto nível.

### 8. São Miguel do Gostoso, Rio Grande do Norte

O point do kitesurf brasileiro também é destino de réveillon. Festas na areia com pés descalços e muita música eletrônica.

### 9. Pipa, Rio Grande do Norte

A Vila de Pipa atrai um público jovem e descolado. As festas nos beach clubs são concorridas e os ingressos esgotam rápido.

### 10. Maceió, Alagoas

A capital alagoana fecha nossa lista com praias urbanas de águas cristalinas e uma programação cultural diversificada.

## Dicas Para Garantir Seu Réveillon

1. **Reserve com antecedência:** Os melhores hotéis esgotam em setembro
2. **Compre passagens aéreas agora:** Preços sobem até 300% em dezembro
3. **Verifique a política de cancelamento:** Imprevistos acontecem
4. **Leve dinheiro em espécie:** Nem todos os locais aceitam cartão

## Conclusão

O Nordeste brasileiro é, sem dúvida, o melhor destino para quem quer celebrar a chegada de 2026 com sol, praia e muita festa. Escolha seu destino, garanta seus ingressos e prepare-se para uma virada inesquecível!
    `,
    category: "Em Alta",
    categoryColor: "trending",
    imageUrl: heroReveillon,
    imageAlt: "Fogos de artifício sobre a praia de Copacabana no Réveillon",
    readTime: "8 min",
    views: "125.4K",
    author: {
      name: "Marina Costa",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marina",
    },
    publishedAt: "2024-12-01T10:00:00Z",
    updatedAt: "2024-12-05T14:30:00Z",
    tags: ["réveillon", "nordeste", "festas", "ano novo", "viagens"],
  },
  {
    id: "2",
    slug: "natal-luz-gramado-cidades-contos-de-fadas",
    title: "A Magia do Natal Luz Gramado e Outras 4 Cidades Brasileiras Que Viram Contos de Fadas em Dezembro",
    excerpt: "As decorações mais impressionantes do Brasil para você viver a magia natalina em família.",
    content: `
## A Magia do Natal no Brasil

O Brasil pode ser um país tropical, mas isso não impede que algumas cidades se transformem em verdadeiros cenários de contos de fadas durante o período natalino. Conheça os destinos que vão fazer você se sentir dentro de um filme de Natal.

### 1. Gramado, Rio Grande do Sul - O Natal Luz

O Natal Luz de Gramado é o maior evento natalino das Américas. Com mais de 35 anos de tradição, a cidade gaúcha se transforma em um espetáculo de luzes, decorações e apresentações artísticas.

**Destaques do evento:**
- Grande Desfile de Natal com carros alegóricos
- Show de Acendimento das Luzes
- Vila de Natal com casa do Papai Noel
- Espetáculo Nativitaten no Lago Joaquina Rita Bier

**Período:** Outubro a janeiro
**Ingressos:** A partir de R$ 80 para os shows pagos

### 2. Campos do Jordão, São Paulo

A "Suíça Brasileira" capricha na decoração natalina. O clima ameno da serra paulista, combinado com a arquitetura europeia, cria uma atmosfera única.

### 3. Blumenau, Santa Catarina

A cidade de colonização alemã mantém tradições europeias vivas. O Mercado de Natal (Weihnachtsmarkt) oferece produtos típicos e decoração germânica autêntica.

### 4. Penedo, Rio de Janeiro

A pequena Finlândia brasileira celebra o Natal com neve artificial, papai noel finlandês (Joulupukki) e arquitetura escandinava.

### 5. São Paulo - Avenida Paulista

A maior cidade do país não fica para trás. A decoração da Avenida Paulista e o espetáculo de luzes do Parque Ibirapuera atraem milhões de visitantes.

## Dicas Para Aproveitar

- Visite durante a semana para evitar multidões
- Reserve hospedagem com 3 meses de antecedência
- Leve agasalhos mesmo em destinos quentes - as noites esfriam
    `,
    category: "Natal",
    categoryColor: "travel",
    imageUrl: natalGramado,
    imageAlt: "Decoração natalina iluminada em Gramado",
    readTime: "5 min",
    views: "89.2K",
    author: {
      name: "Lucas Ferreira",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lucas",
    },
    publishedAt: "2024-11-28T08:00:00Z",
    updatedAt: "2024-12-03T11:00:00Z",
    tags: ["natal", "gramado", "decoração", "família", "viagens"],
  },
  {
    id: "3",
    slug: "ano-novo-brasil-fogos-artificiais",
    title: "Onde Passar o Ano Novo no Brasil: 5 Cidades Que Vão Entregar o Melhor Espetáculo de Fogos",
    excerpt: "Do Rio a Florianópolis: os destinos que vão entregar shows pirotécnicos inesquecíveis.",
    content: `
## Os Melhores Shows de Fogos do Brasil

A virada do ano é o momento de celebrar conquistas e sonhar com o futuro. E nada melhor do que fazer isso assistindo a um espetáculo de fogos de artifício de tirar o fôlego. Conheça as cidades brasileiras que mais investem em pirotecnia.

### 1. Rio de Janeiro - Copacabana

O réveillon de Copacabana é mundialmente famoso. São 17 minutos de fogos sincronizados com música, vistos por mais de 2 milhões de pessoas na areia.

**Novidades para 2026:**
- Drones luminosos integrados ao show
- Palcos com artistas internacionais
- Áreas VIP com open bar

### 2. Salvador - Farol da Barra

A capital baiana mistura fogos com muito axé. Os trios elétricos começam logo após a meia-noite.

### 3. Florianópolis - Jurerê Internacional

Festas exclusivas com fogos privados dos beach clubs. Ambiente mais intimista e sofisticado.

### 4. Balneário Camboriú - Central Beach

O "Dubai Brasileiro" investe pesado em fogos. A orla iluminada pelos prédios cria um cenário único.

### 5. Recife - Marco Zero

Show de fogos gratuito no coração histórico da cidade, com apresentações culturais pernambucanas.

## Como Escolher Seu Destino

Considere fatores como orçamento, perfil (agitado ou tranquilo) e acompanhantes (família ou amigos). Cada destino oferece uma experiência única.
    `,
    category: "Réveillon",
    categoryColor: "trending",
    imageUrl: salvadorFesta,
    imageAlt: "Celebração de Ano Novo em Salvador",
    readTime: "6 min",
    views: "112.8K",
    author: {
      name: "Ana Beatriz",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana",
    },
    publishedAt: "2024-12-02T09:00:00Z",
    updatedAt: "2024-12-06T16:00:00Z",
    tags: ["réveillon", "fogos", "ano novo", "rio de janeiro", "viagens"],
  },
  {
    id: "4",
    slug: "guia-viajar-barato-dezembro",
    title: "Guia Definitivo: 10 Dicas Geniais Para Viajar Barato Em Dezembro (Mesmo na Alta Temporada!)",
    excerpt: "Mesmo na alta temporada, é possível economizar. Especialistas revelam os segredos.",
    content: `
## É Possível Viajar Barato em Dezembro?

A resposta é sim! Com planejamento e estratégia, você pode curtir as festas de fim de ano sem estourar o orçamento. Reunimos as melhores dicas de especialistas em viagens econômicas.

### 1. Reserve com Antecedência (Muito Antecedência!)

O segredo número um é reservar passagens e hospedagem entre julho e setembro. Os preços podem ser até 60% mais baixos.

### 2. Seja Flexível nas Datas

Viajar nos dias 26/12 ou 27/12 pode economizar até 40% comparado ao dia 23. O mesmo vale para o retorno: volte dia 2 ou 3 de janeiro.

### 3. Considere Destinos Alternativos

Em vez de Florianópolis lotada, que tal Garopaba ou Imbituba? Praias igualmente bonitas com preços muito menores.

### 4. Use Programas de Milhagem

Acumule pontos durante o ano e resgate em dezembro. Muitas pessoas esquecem que têm milhares de pontos parados.

### 5. Hospedagem Compartilhada

Airbnb com amigos ou família divide custos. Uma casa para 8 pessoas sai mais barato que 4 quartos de hotel.

### 6. Cozinhe Suas Refeições

Escolha hospedagem com cozinha. Café da manhã e almoço caseiros economizam muito em 10 dias de viagem.

### 7. Transporte Local Inteligente

Alugue carro apenas nos dias necessários. Use apps de transporte e transporte público quando possível.

### 8. Evite Pacotes Prontos

Montar sua viagem separadamente geralmente sai mais barato que pacotes de agências.

### 9. Aproveite Programações Gratuitas

Shows públicos de réveillon, praias e trilhas não custam nada. Pesquise eventos gratuitos no destino.

### 10. Negocie Diretamente

Ligue para pousadas e hotéis. Muitos oferecem descontos para reservas diretas, sem intermediários.

## Quanto Dá Para Economizar?

Aplicando todas as dicas, é possível economizar de 40% a 60% do valor total da viagem. Em números: uma viagem de R$ 8.000 pode sair por R$ 3.500.
    `,
    category: "Economizar",
    categoryColor: "budget",
    imageUrl: budgetTravel,
    imageAlt: "Pessoa planejando viagem econômica",
    readTime: "8 min",
    views: "156.3K",
    author: {
      name: "Roberto Alves",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Roberto",
    },
    publishedAt: "2024-11-25T07:00:00Z",
    updatedAt: "2024-12-04T10:00:00Z",
    tags: ["economia", "dicas", "viagem barata", "dezembro", "planejamento"],
  },
  {
    id: "5",
    slug: "lugares-abandonados-brasil-historias-macabras",
    title: "10 Lugares Abandonados no Brasil com Histórias Macabras (Perfeito Para Quem Busca Turismo de Aventura)",
    excerpt: "Perfeito para quem busca turismo de aventura e não tem medo de explorar o desconhecido.",
    content: `
## O Fascínio Pelos Lugares Abandonados

O turismo de lugares abandonados, também conhecido como "urbex" (exploração urbana), cresce cada vez mais no Brasil. Conheça locais com histórias arrepiantes que atraem aventureiros de todo o país.

### 1. Hotel & Cassino Quitandinha - Petrópolis, RJ

O maior cassino da América Latina na década de 1940 foi fechado quando Getúlio Vargas proibiu o jogo no Brasil. Hoje, o prédio majestoso abriga apenas fantasmas do passado glamoroso.

**História macabra:** Dizem que o fantasma de um jogador que perdeu tudo ainda vaga pelos corredores.

### 2. Colônia Juliano Moreira - Rio de Janeiro

Antigo hospital psiquiátrico que abrigava mais de 5.000 pacientes em condições desumanas. Muitos prédios estão abandonados e preservam marcas do sofrimento.

### 3. Fordlândia - Pará

A cidade construída por Henry Ford na Amazônia para produzir borracha. O projeto fracassou e a cidade americana no meio da selva foi abandonada.

### 4. Cruzeiro Abandonado - Angra dos Reis, RJ

Um navio de cruzeiro encalhado na costa que pode ser visitado de barco. A estrutura enferrujada cria um cenário pós-apocalíptico.

### 5. Vila de Ararapira - Paraná

Uma vila pesqueira completamente abandonada onde a natureza retomou o espaço. Casas, igreja e cemitério permanecem intactos.

### 6. Sanatório Vicentina Aranha - São José dos Campos, SP

Antigo hospital para tuberculosos com arquitetura gótica. Hoje é parcialmente museu, mas áreas abandonadas alimentam lendas urbanas.

### 7. Penitenciária do Ahú - Curitiba, PR

Prisão desativada onde ocorreram rebeliões violentas. Os pavilhões abandonados ainda guardam inscrições dos detentos.

### 8. Hotel Tropical - Manaus, AM

O luxuoso hotel da era da borracha está em ruínas. A selva invade os salões onde a elite amazônica celebrava.

### 9. Estação Ferroviária de Paranapiacaba - SP

Vila ferroviária inglesa abandonada na Serra do Mar. A neblina constante aumenta a atmosfera misteriosa.

### 10. Ilha da Queimada Grande - Litoral SP

A "Ilha das Cobras" é proibida para visitação. Abandonada pelos humanos, é dominada pela jararaca-ilhoa, uma das cobras mais venenosas do mundo.

## Avisos de Segurança

- Nunca explore sozinho
- Informe alguém sobre seu roteiro
- Leve equipamentos de segurança
- Respeite propriedades privadas
- Alguns locais requerem autorização
    `,
    category: "Curiosidades",
    categoryColor: "curiosity",
    imageUrl: lugaresAbandonados,
    imageAlt: "Lugar abandonado misterioso no Brasil",
    readTime: "10 min",
    views: "203.7K",
    author: {
      name: "Pedro Henrique",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pedro",
    },
    publishedAt: "2024-11-20T12:00:00Z",
    updatedAt: "2024-12-01T08:00:00Z",
    tags: ["lugares abandonados", "urbex", "aventura", "mistério", "turismo"],
  },
  {
    id: "6",
    slug: "mitos-viagem-aviao-ciencia",
    title: "O Que Acontece no Avião Que Ninguém Fala: 5 Mitos Sobre Viajar de Avião Desvendados pela Ciência",
    excerpt: "A ciência explica os maiores mistérios das viagens aéreas que você sempre quis saber.",
    content: `
## Verdades e Mentiras Sobre Voar

Voar de avião ainda gera muitas dúvidas e medos. Consultamos especialistas em aviação para desvendar os maiores mitos sobre viagens aéreas.

### Mito 1: "Abrir a porta do avião em voo é possível"

**FALSO.** A diferença de pressão torna humanamente impossível abrir as portas durante o voo. Seria necessária uma força de mais de 10 toneladas.

### Mito 2: "O ar do avião é cheio de germes"

**PARCIALMENTE VERDADE.** O ar é renovado a cada 2-3 minutos e passa por filtros HEPA que eliminam 99,9% dos vírus e bactérias. O maior risco está nas superfícies tocadas por outros passageiros.

### Mito 3: "Raios podem derrubar aviões"

**FALSO.** Aviões são atingidos por raios regularmente (em média uma vez por ano cada aeronave) e são projetados para dissipar a energia sem danos.

### Mito 4: "O piloto automático faz tudo"

**PARCIALMENTE VERDADE.** O piloto automático auxilia, mas os pilotos monitoram constantemente e fazem todas as decisões críticas, especialmente em decolagens e pousos.

### Mito 5: "Sentar na cauda é mais seguro"

**PARCIALMENTE VERDADE.** Estudos mostram uma taxa de sobrevivência ligeiramente maior nos assentos traseiros em acidentes, mas a diferença é pequena e voar continua sendo o meio de transporte mais seguro.

## Curiosidades Extras

- O oxigênio das máscaras dura apenas 15 minutos (tempo suficiente para o piloto descer a uma altitude respirável)
- A comida tem gosto diferente no ar devido à pressão e umidade
- Aviões podem planar por dezenas de quilômetros mesmo sem motores
    `,
    category: "Ciência",
    categoryColor: "curiosity",
    imageUrl: aviaoMitos,
    imageAlt: "Interior de avião durante voo",
    readTime: "6 min",
    views: "178.5K",
    author: {
      name: "Dra. Carla Santos",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carla",
    },
    publishedAt: "2024-11-22T14:00:00Z",
    updatedAt: "2024-12-02T09:00:00Z",
    tags: ["aviação", "mitos", "ciência", "viagem", "curiosidades"],
  },
  {
    id: "7",
    slug: "reveillon-barato-destinos-pouco-conhecidos",
    title: "Réveillon Barato: 5 Destinos Nacionais Pouco Conhecidos para Fugir do Agito de Copacabana",
    excerpt: "Praias paradisíacas sem multidões e com preços acessíveis para começar 2026 em paz.",
    content: `
## Réveillon Tranquilo e Econômico

Nem todo mundo quer enfrentar multidões no Ano Novo. Se você busca paz, natureza e economia, estes destinos são perfeitos.

### 1. Alter do Chão - Pará

Conhecida como "Caribe Amazônico", oferece praias de água doce e pôr do sol espetacular. Réveillon com fogueira na areia e preços acessíveis.

**Média de gastos:** R$ 150/dia com hospedagem e alimentação

### 2. Ilha do Mel - Paraná

Sem carros e com energia limitada, a ilha oferece desconexão total. Festas simples na praia e contato direto com a natureza.

**Média de gastos:** R$ 180/dia

### 3. São Miguel dos Milagres - Alagoas

Praias desertas com piscinas naturais. O povoado é pequeno, mas tem pousadas charmosas e restaurantes de frutos do mar.

**Média de gastos:** R$ 200/dia

### 4. Caraíva - Bahia

Vila sem energia elétrica convencional (funciona com solar) e ruas de areia. Réveillon com luau, reggae e muita paz.

**Média de gastos:** R$ 170/dia

### 5. Japaratinga - Alagoas

Entre Maragogi e São Miguel dos Milagres, oferece as mesmas belezas com menos turistas e preços menores.

**Média de gastos:** R$ 160/dia

## Comparativo de Economia

| Destino | Diária Média | vs Florianópolis |
|---------|--------------|------------------|
| Alter do Chão | R$ 150 | -70% |
| Ilha do Mel | R$ 180 | -65% |
| São Miguel dos Milagres | R$ 200 | -60% |
| Caraíva | R$ 170 | -67% |
| Japaratinga | R$ 160 | -69% |
    `,
    category: "Alternativo",
    categoryColor: "budget",
    imageUrl: nordesteBeach,
    imageAlt: "Praia tranquila no Nordeste brasileiro",
    readTime: "5 min",
    views: "94.1K",
    author: {
      name: "Juliana Mendes",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Juliana",
    },
    publishedAt: "2024-11-27T11:00:00Z",
    updatedAt: "2024-12-05T13:00:00Z",
    tags: ["réveillon", "economia", "praias", "destinos alternativos", "natureza"],
  },
  {
    id: "8",
    slug: "20-destinos-brasileiros-por-faixa-de-orcamento",
    title: "20 destinos brasileiros por faixa de orcamento para viajar agora",
    excerpt: "Use esta lista como atalho: 20 lugares reais no Brasil organizados por faixa de custo e vibe (praia, montanha, urbano ou natureza).",
    content: `
## Como ler a lista
Organizamos 20 destinos brasileiros por faixa de orcamento e foco de viagem. Combine com o questionario da Viral Destino para montar seu roteiro rapidinho.

### Faixa baixa (ate R$ 3.500 por pessoa)
- Porto de Galinhas (PE) – Praia, Nordeste. Pousada compacta, mergulho em piscinas naturais.
- Maragogi (AL) – Praia, Nordeste. Piscinas naturais e restaurantes de frutos do mar.
- Serra do Cipo (MG) – Natureza, Sudeste. Cachoeiras e trilhas.
- Ouro Preto (MG) – Urbano, Sudeste. Historia, museus e gastronomia mineira.
- Curitiba (PR) – Urbano, Sul. Parques, museus e cafe de especialidade.

### Faixa media (R$ 3.500 a R$ 7.500)
- Jericoacoara (CE) – Praia, Nordeste. Dunas, lagoas e beach clubs.
- Buzios (RJ) – Praia, Sudeste. Praias curtas e gastronomia.
- Campos do Jordao (SP) – Montanha, Sudeste. Clima frio, fondue e passeios de trem.
- Gramado/Canela (RS) – Montanha, Sul. Vibe alpina e parques tematicos.
- Chapada dos Veadeiros (GO) – Natureza, Centro-Oeste. Cachoeiras cenicas.
- Chapada Diamantina (BA) – Natureza, Nordeste. Vales, grutas e trekking.
- Lencois Maranhenses (MA) – Natureza, Nordeste. Lagoas sazonais.
- Rio de Janeiro (RJ) – Urbano/praia, Sudeste. Praia urbana, museus, voos diretos.
- Salvador (BA) – Urbano/praia, Nordeste. Cultura, centros historicos, praia urbana.
- Combo Maragogi/Porto Seguro (BA) – Praia, Nordeste. Resorts e pousadas mid-range.

### Faixa alta (acima de R$ 7.500)
- Fernando de Noronha (PE) – Praia, Nordeste. Praias exclusivas e trilhas.
- Florianopolis (SC) – Praia, Sul. Praias e trilhas com hospedagem premium.
- Monte Verde (MG) – Montanha, Sudeste. Cabanas premium e lareiras.
- Foz do Iguacu (PR) – Natureza, Sul. Cataratas e parque.
- Sao Paulo (SP) – Urbano, Sudeste. Alta gastronomia, shows e museus.
    `,
    category: "Viagens",
    categoryColor: "travel",
    imageUrl: nordesteBeach,
    imageAlt: "Montagem de destinos brasileiros",
    readTime: "7 min",
    views: "54.3K",
    author: {
      name: "Equipe Viral Destino",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ViralDestino",
    },
    publishedAt: "2024-12-10T10:00:00Z",
    updatedAt: "2024-12-10T10:00:00Z",
    tags: ["viagens", "brasil", "orcamento", "praia", "montanha", "urbano", "natureza"],
  },
  {
    id: "9",
    slug: "porto-de-galinhas-2025-guia-rapido",
    title: "Porto de Galinhas em 2025: piscinas naturais, pousadas compactas e mergulhos que valem o print",
    excerpt: "Praia nordestina com pousada boutique, jangadas para as piscinas naturais e um roteiro leve para curtir em 3 a 5 dias.",
    content: `
## Por que Porto de Galinhas em 2025
- Alta em buscas para ferias curtas e feriados prolongados.
- Pousadas compactas modernizaram wi-fi, cafe e late check-out.
- Novas regras ambientais limitam visitantes nas piscinas naturais: reserve jangada com antecedencia.

## Roteiro rapido (3 a 5 dias)
1. Dia 1: Check-in em pousada compacta na vila. Passeio de buggy "ponta a ponta".
2. Dia 2: Jangada cedo para piscinas naturais (maré baixa). Mergulho com snorkel e fotos sub.
3. Dia 3: Praia de Muro Alto para stand up e mar calmo. Almoço com frutos do mar.
4. Dia 4: Bate-volta a Maragogi ou Carneiros para variar o cenaro.
5. Dia 5: Mercado de artesanato e volta com tempo para aeroporto/rodoviaria.

## Orçamento 2025 (por pessoa)
- Pousada compacta: R$ 280 a R$ 450 a diaria em baixa/média temporada.
- Jangada + snorkel: R$ 80 a R$ 150.
- Refeicoes: R$ 70 a R$ 130 por dia em media.
- Transfer Recife > Porto: R$ 120 a R$ 200 (van compartilhada) ou R$ 320+ (privativo).

## Dicas rapidas
- Maré: acompanhe tabela (busque "tabela de mare Porto de Galinhas"). Priorize mares 0.0 a 0.6.
- Horarios: jangada cedo (7h-9h) evita fila e sol forte.
- Sustentabilidade: evite pisar nos corais e use protetor reef safe.
    `,
    category: "Viagens",
    categoryColor: "travel",
    imageUrl: nordesteBeach,
    imageAlt: "Piscinas naturais e mar azul em Porto de Galinhas",
    readTime: "6 min",
    views: "12.4K",
    author: {
      name: "Equipe Viral Destino",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ViralDestino2",
    },
    publishedAt: "2025-01-10T09:00:00Z",
    updatedAt: "2025-01-10T09:00:00Z",
    tags: ["viagens", "porto de galinhas", "praia", "piscinas naturais", "2025"],
  },
  {
    id: "10",
    slug: "maragogi-2025-piscinas-naturais-e-frutos-do-mar",
    title: "Maragogi em 2025: piscinas naturais cristalinas e rota gourmet de frutos do mar",
    excerpt: "Praia nordestina com jangadas para as galés, mar azul-caribe e restaurantes de frutos do mar atualizados para 2025.",
    content: `
## Por que Maragogi agora
- Melhor epoca: mares baixas entre janeiro e abril e agosto a novembro.
- Limite de visitantes nas galés: reserve online com antecedencia para garantir vaga na jangada.
- Restaurantes reforcaram cardapio de frutos do mar e petiscos autorais em 2025.

## Roteiro express (3 a 5 dias)
1. Dia 1: Check-in em pousada proxima à orla. Passeio leve na praia central e jantar de frutos do mar.
2. Dia 2: Jangada cedo para as piscinas naturais (maré 0.0 a 0.6). Snorkel e fotos sub.
3. Dia 3: Praia de Antunes e Barra Grande para mar turquesa e pe na areia.
4. Dia 4: Bate-volta ate Sao Miguel dos Milagres/Carneiros para variar cenarios.
5. Dia 5: Brunch com tapioca/peixes e retorno.

## Orçamento 2025 (por pessoa)
- Pousada compacta: R$ 260 a R$ 430 a diaria em baixa/média.
- Jangada + snorkel: R$ 90 a R$ 160 (dependendo da maré e operador).
- Refeicoes: R$ 80 a R$ 150/dia com frutos do mar.
- Transfer Maceio/Recife > Maragogi: R$ 140 a R$ 250 (van) ou R$ 350+ (privativo).

## Dicas rapidas
- Maré manda no roteiro: cheque tabela de maré Maragogi antes de fechar data.
- Leve dinheiro fisico: alguns quiosques ainda sao cash only.
- Protetor reef safe e nada de pisar nos corais para preservar as galés.
    `,
    category: "Viagens",
    categoryColor: "travel",
    imageUrl: nordesteBeach,
    imageAlt: "Água cristalina e jangadas em Maragogi",
    readTime: "6 min",
    views: "9.8K",
    author: {
      name: "Equipe Viral Destino",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ViralDestino3",
    },
    publishedAt: "2025-01-15T09:00:00Z",
    updatedAt: "2025-01-15T09:00:00Z",
    tags: ["viagens", "maragogi", "praia", "piscinas naturais", "frutos do mar", "2025"],
  },
  {
    id: "11",
    slug: "serra-do-cipo-2025-cachoeiras-e-trilhas",
    title: "Serra do Cipo em 2025: cachoeiras, trilhas e pousadas de natureza perto de BH",
    excerpt: "Destino nature no Sudeste com cachoeiras cristalinas, trilhas curtas e hospedagens cercadas de verde a 2h de Belo Horizonte.",
    content: `
## Por que Serra do Cipo em 2025
- Estradas e sinalizacao melhoradas no parque.
- Limite diario de visitantes em algumas cachoeiras: compre ingresso antecipado quando houver controle.
- Pousadas de natureza com cafe reforcado e day-use em alta.

## Roteiro rapido (3 a 4 dias)
1. Dia 1: Chegada e check-in. Pôr do sol na Cachoeira da Farofa (trilha leve).
2. Dia 2: Manha na Cachoeira Grande (taxa de acesso) e tarde na Cachoeira do Rola Moca.
3. Dia 3: Trilha do Canyon das Bandeirinhas ou Cachoeira do Gavião (para quem quer algo mais longo).
4. Dia 4: Flutuação no rio Cipó + artesanato local antes de voltar.

## Orçamento 2025 (por pessoa)
- Pousada nature/eco: R$ 220 a R$ 380 a diaria em baixa/média.
- Taxas de acesso: R$ 25 a R$ 60 por cachoeira/complexo.
- Alimentacao: R$ 70 a R$ 140/dia (muito pf caseiro e restaurantes regionais).
- Transporte: 2h de BH (carro alugado divide custos; onibus BH > Santana do Riacho + mototáxi).

## Dicas rapidas
- Leve dinheiro fisico: alguns acessos aceitam apenas cash/pix.
- Tênis/trilha leve e papete para trechos molhados.
- Respeite limites de visitantes e descarte zero: leve seu lixo de volta.
    `,
    category: "Viagens",
    categoryColor: "travel",
    imageUrl: lugaresAbandonados,
    imageAlt: "Cachoeira em meio a montanhas na Serra do Cipo",
    readTime: "6 min",
    views: "8.1K",
    author: {
      name: "Equipe Viral Destino",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ViralDestino4",
    },
    publishedAt: "2025-01-18T09:00:00Z",
    updatedAt: "2025-01-18T09:00:00Z",
    tags: ["viagens", "serra do cipo", "natureza", "trilhas", "cachoeiras", "2025"],
  },
  {
    id: "12",
    slug: "ouro-preto-2025-historia-museus-e-gastronomia",
    title: "Ouro Preto em 2025: historia viva, museus e gastronomia mineira num fim de semana",
    excerpt: "Centro historico tombado, igrejas barrocas, museus e restaurantes de Minas que valem a viagem em 2025.",
    content: `
## Por que Ouro Preto agora
- Candidata forte para roteiros culturais de fim de semana em 2025.
- Museus e igrejas com visitas guiadas modernizadas e compra online.
- Novos cafes e bistrôs mineiros reforçam a rota gastro no centro historico.

## Roteiro rapido (2 a 3 dias)
1. Dia 1: Centro historico, Praca Tiradentes, Museu da Inconfidencia. Almoço com pratos mineiros (tutu, tropeiro, torresmo).
2. Dia 2: Igrejas de Sao Francisco de Assis e Nossa Senhora do Pilar. Museu do Oratorio. Cafes coloniais no fim da tarde.
3. Dia 3: Bate-volta a Mariana (trem turistico) ou Lavras Novas para mirantes e ateliês.

## Custos 2025 (por pessoa)
- Pousada no centro: R$ 240 a R$ 420 a diaria em baixa/média.
- Ingressos igrejas/museus: R$ 10 a R$ 40 cada.
- Alimentacao: R$ 80 a R$ 160/dia (pratos mineiros + cafés).
- Transporte: 1h30 de BH; estacione fora das ladeiras mais íngremes.

## Dicas rapidas
- Reserve visitas guiadas em fins de semana (lotam).
- Calçado aderente: ladeiras de pedra escorregam na chuva.
- Leve dinheiro/PIX para artesanato e quitandas.
    `,
    category: "Viagens",
    categoryColor: "travel",
    imageUrl: lugaresAbandonados,
    imageAlt: "Vista de igrejas históricas em Ouro Preto",
    readTime: "6 min",
    views: "7.4K",
    author: {
      name: "Equipe Viral Destino",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ViralDestino5",
    },
    publishedAt: "2025-01-20T09:00:00Z",
    updatedAt: "2025-01-20T09:00:00Z",
    tags: ["viagens", "ouro preto", "historia", "museus", "gastronomia", "2025"],
  },
  {
    id: "13",
    slug: "curitiba-2025-parques-museus-e-cafes",
    title: "Curitiba em 2025: parques, museus e rota de cafes de especialidade",
    excerpt: "Capital do Sul com roteiros verdes, cultura e cafe geek em alta para um fim de semana inteligente.",
    content: `
## Por que Curitiba em 2025
- Linha Turismo ampliada: mais horarios para parques e museus.
- Cena de cafes especiais em alta (Cabelludo, Rause, We Coffee e afins).
- Festival de inverno 2025 com programacao estendida em julho.

## Roteiro rapido (2 a 3 dias)
1. Dia 1: Jardim Botanico cedo (foto na estufa), Opera de Arame e Almoco no Santa Felicidade.
2. Dia 2: Museu Oscar Niemeyer (MON) + Museu do Olho; cafes especiais no fim da tarde no centro/batel.
3. Dia 3: Parque Tangua + Bosque do Papa (Memorial Polones). Se tiver tempo, Mercado Municipal para brunch.

## Custos 2025 (por pessoa)
- Hotel/pousada central: R$ 220 a R$ 420 a diaria (baixa/média).
- Linha Turismo: R$ 60 a R$ 80 (24h).
- Alimentacao: R$ 80 a R$ 150/dia; cafes especiais ~R$ 15-25 cada.
- Transporte: onibus urbano com cartao transporte ou app; aeroporto > centro ~R$ 30-50 (app).

## Dicas rapidas
- Clima imprevisivel: leve corta-vento e blusa leve mesmo no verão.
- Comprar ingressos do MON online evita filas em alta temporada.
- Use cartao para facilitar transporte; muitas catracas nao aceitam dinheiro.
    `,
    category: "Viagens",
    categoryColor: "travel",
    imageUrl: lugaresAbandonados,
    imageAlt: "Parque e arquitetura moderna em Curitiba",
    readTime: "6 min",
    views: "6.9K",
    author: {
      name: "Equipe Viral Destino",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ViralDestino6",
    },
    publishedAt: "2025-01-22T09:00:00Z",
    updatedAt: "2025-01-22T09:00:00Z",
    tags: ["viagens", "curitiba", "urbano", "parques", "museus", "cafes", "2025"],
  },
  {
    id: "14",
    slug: "jericoacoara-curiosidades-dunas-lagoas-beach-clubs",
    title: "Curiosidades de Jericoacoara: dunas, lagoas e beach clubs que mudam a cada maré",
    excerpt: "Os fatos rapidos e pouco falados de Jeri: ventos que movem as dunas, lagoas que somem e voltam, e beach clubs que mudam a experiencia a cada estacao.",
    content: `
## Ventos que redesenham o mapa
- Os ventos alisios de agosto a dezembro empurram areia suficiente para mudar o desenho das dunas todo ano.
- A Duna do Por do Sol cresce e encolhe sazonalmente; fotos de 2022 ja estao diferentes em 2025.

## Lagoas que somem e retornam
- A Lagoa do Paraiso e a Lagoa Azul enchem com chuvas de fev-abr e podem baixar bastante no fim do ano.
- Em anos de pouca chuva, alguns trechos ficam rasos e criam bancos de areia fotogenicos (mas exigem sandalia por causa do calor).

## Beach clubs versao 2025
- Tickets online com slot de horario para evitar superlotacao em alta temporada.
- Cardapios migraram para menus digitais e mais opcoes de mocktails (sem alcool) para dias de kite e wind.
- Cadeiras instagramaveis e decks se revezam: o cenario muda a cada temporada.

## Roteiro relampago em clima de curiosidades
- Manha: buggy ate Tatajuba para ver a lagoa com balanços e tirolesa; note como a areia avanca sobre antigos caminhos.
- Tarde: kitesurf em Jeri (vento garantido em ago-dez) ou relax nas redes da Lagoa do Paraiso.
- Por do sol: duna ou Pedra Furada (trilha leve; evite maré alta).

## Dicas praticas
- Maré e vento importam: consulte tabela de mare + previsao de vento (Windguru) antes de decidir se vai kite ou lagoa.
- Transporte: 4x4 obrigatorio; transfers de Jijoca ou Cruz estao mais rigorosos com capacidade de passageiros.
- Sustentabilidade: leve trash bag; microplastico na areia aumenta depois de feriados, e voce pode ajudar a reduzir.
    `,
    category: "Curiosidades",
    categoryColor: "curiosity",
    imageUrl: nordesteBeach,
    imageAlt: "Dunas e mar azul em Jericoacoara",
    readTime: "5 min",
    views: "5.7K",
    author: {
      name: "Equipe Viral Destino",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ViralDestino7",
    },
    publishedAt: "2025-01-24T09:00:00Z",
    updatedAt: "2025-01-24T09:00:00Z",
    tags: ["jericoacoara", "curiosidades", "praia", "dunas", "lagoas", "beach clubs", "2025"],
  },
];

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find((article) => article.slug === slug);
};

export const getRelatedArticles = (currentSlug: string, limit: number = 3): Article[] => {
  const current = getArticleBySlug(currentSlug);
  if (!current) return articles.slice(0, limit);
  
  return articles
    .filter((article) => article.slug !== currentSlug)
    .filter((article) => 
      article.categoryColor === current.categoryColor ||
      article.tags.some((tag) => current.tags.includes(tag))
    )
    .slice(0, limit);
};
