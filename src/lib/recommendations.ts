import { articles, type Article } from "@/data/articles";

const HISTORY_KEY = "viralnow:history:tags";
const HISTORY_MAX = 20;
const isBrowser = typeof window !== "undefined";

export const recordTags = (tags: string[]) => {
  if (!isBrowser) return;
  try {
    const stored = JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]") as string[];
    const merged = [...tags, ...stored].slice(0, HISTORY_MAX);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(merged));
  } catch (error) {
    console.error("Erro ao salvar histórico de tags", error);
  }
};

export const getRecommendedArticles = ({
  currentSlug,
  limit = 4,
  fallbackCategory,
}: {
  currentSlug: string;
  limit?: number;
  fallbackCategory?: string;
}): Article[] => {
  const tagHistory = loadHistory();
  const scored = articles
    .filter((article) => article.slug !== currentSlug)
    .map((article) => {
      const matchesTag = article.tags.some((tag) => tagHistory.includes(tag));
      const tagScore = article.tags.filter((tag) => tagHistory.includes(tag)).length;
      const categoryScore = fallbackCategory && article.categoryColor === fallbackCategory ? 1 : 0;
      return {
        article,
        score: tagScore * 2 + categoryScore,
      };
    })
    .sort((a, b) => b.score - a.score);

  const withScore = scored.filter((item) => item.score > 0).map((i) => i.article);

  if (withScore.length >= limit) return withScore.slice(0, limit);

  const remaining = articles
    .filter((article) => article.slug !== currentSlug && !withScore.includes(article))
    .slice(0, limit - withScore.length);

  return [...withScore, ...remaining].slice(0, limit);
};

const loadHistory = (): string[] => {
  if (!isBrowser) return [];
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]") as string[];
  } catch (error) {
    console.error("Erro ao ler histórico de tags", error);
    return [];
  }
};
