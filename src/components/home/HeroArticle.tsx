import { motion } from "framer-motion";
import { Clock, Eye, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroArticleProps {
  title: string;
  excerpt: string;
  category: string;
  categoryColor: "trending" | "travel" | "curiosity" | "budget";
  imageUrl: string;
  readTime: string;
  views: string;
  slug: string;
}

export const HeroArticle = ({
  title,
  excerpt,
  category,
  categoryColor,
  imageUrl,
  readTime,
  views,
  slug,
}: HeroArticleProps) => {
  const colorClasses = {
    trending: "bg-trending text-trending-foreground",
    travel: "bg-travel text-travel-foreground",
    curiosity: "bg-curiosity text-curiosity-foreground",
    budget: "bg-budget text-budget-foreground",
  };

  return (
    <Link to={`/artigo/${slug}`}>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative group cursor-pointer overflow-hidden rounded-2xl md:rounded-3xl"
      >
        {/* Image */}
        <div className="relative aspect-[16/10] md:aspect-[21/9] overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 gradient-dark" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
          <Badge className={`w-fit mb-4 ${colorClasses[categoryColor]} border-none`}>
            {category}
          </Badge>

          <h1 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight line-clamp-3">
            {title}
          </h1>

          <p className="text-white/80 text-sm md:text-base max-w-2xl mb-6 line-clamp-2 md:line-clamp-3">
            {excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <Clock className="h-4 w-4" />
              <span>{readTime}</span>
            </div>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <Eye className="h-4 w-4" />
              <span>{views} visualizações</span>
            </div>

            <Button
              variant="secondary"
              className="ml-auto rounded-xl font-semibold group/btn"
            >
              Ler Artigo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-2xl md:rounded-3xl transition-colors duration-300" />
      </motion.article>
    </Link>
  );
};
