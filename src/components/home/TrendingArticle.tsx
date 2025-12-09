import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

interface TrendingArticleProps {
  title: string;
  category: string;
  rank: number;
  slug: string;
  index?: number;
}

export const TrendingArticle = ({
  title,
  category,
  rank,
  slug,
  index = 0,
}: TrendingArticleProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link
        to={`/artigo/${slug}`}
        className="group flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors"
      >
        {/* Rank Number */}
        <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg gradient-trending text-white font-display font-bold text-lg">
          {rank}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <span className="text-xs font-medium text-primary uppercase tracking-wide">
            {category}
          </span>
          <h4 className="font-display font-semibold text-foreground text-sm leading-snug mt-1 group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h4>
        </div>

        {/* Icon */}
        <TrendingUp className="flex-shrink-0 h-4 w-4 text-trending opacity-0 group-hover:opacity-100 transition-opacity" />
      </Link>
    </motion.article>
  );
};
