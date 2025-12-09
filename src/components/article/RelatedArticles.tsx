import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import type { Article } from "@/data/articles";
import { motion } from "framer-motion";

interface RelatedArticlesProps {
  articles: Article[];
}

export const RelatedArticles = ({ articles }: RelatedArticlesProps) => {
  if (articles.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-border">
      <h2 className="font-display text-2xl font-bold text-foreground mb-6">
        Artigos Relacionados
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <motion.article
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              to={`/artigo/${article.slug}`}
              className="group block"
            >
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-3">
                <img
                  src={article.imageUrl}
                  alt={article.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <Badge
                  variant={article.categoryColor}
                  className="absolute top-3 left-3"
                >
                  {article.category}
                </Badge>
              </div>
              <h3 className="font-display font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                <Clock className="h-3.5 w-3.5" />
                <span>{article.readTime} de leitura</span>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
