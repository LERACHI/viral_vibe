export type CategoryKey = "trending" | "travel" | "curiosity" | "budget";

export type CategoryInfo = {
  key: CategoryKey;
  slug: string;
  label: string;
  description: string;
  gradient: string;
};

export const categories: CategoryInfo[] = [
  {
    key: "trending",
    slug: "em-alta",
    label: "Em Alta",
    description: "O que est\u00e1 pegando fogo agora entre os leitores.",
    gradient: "from-primary/20 via-trending/20 to-background",
  },
  {
    key: "travel",
    slug: "viagens",
    label: "Viagens",
    description: "Destinos, roteiros e inspira\u00e7\u00e3o para sua pr\u00f3xima trip.",
    gradient: "from-travel/20 via-primary/10 to-background",
  },
  {
    key: "curiosity",
    slug: "curiosidades",
    label: "Curiosidades",
    description: "Listas e descobertas para compartilhar e marcar os amigos.",
    gradient: "from-curiosity/15 via-primary/10 to-background",
  },
  {
    key: "budget",
    slug: "economizar",
    label: "Economizar",
    description: "Hacks e guias para gastar menos sem perder a experi\u00eancia.",
    gradient: "from-budget/20 via-primary/10 to-background",
  },
];

export const getCategoryBySlug = (slug?: string) =>
  categories.find((category) => category.slug === slug);
