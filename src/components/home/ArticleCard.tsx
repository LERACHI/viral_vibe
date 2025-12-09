import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  categoryColor: "trending" | "travel" | "curiosity" | "budget";
  imageUrl: string;
  readTime: string;
  slug: string;
  index?: number;
}

export const ArticleCard = ({
  title,
  excerpt,
  category,
  categoryColor,
  imageUrl,
  readTime,
  slug,
  index = 0,
}: ArticleCardProps) => {
  const [copied, setCopied] = useState(false);
  const colorClasses = {
    trending: "bg-trending text-trending-foreground",
    travel: "bg-travel text-travel-foreground",
    curiosity: "bg-curiosity text-curiosity-foreground",
    budget: "bg-budget text-budget-foreground",
  };

  const categorySlugMap: Record<ArticleCardProps["categoryColor"], string> = {
    trending: "em-alta",
    travel: "viagens",
    curiosity: "curiosidades",
    budget: "economizar",
  };

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const isBrowser = typeof window !== "undefined";
    const url = isBrowser ? `${window.location.origin}/artigo/${slug}` : `/artigo/${slug}`;
    try {
      if (isBrowser && navigator.share) {
        await navigator.share({
          title,
          text: `Olha isso: ${title}`,
          url,
        });
      } else if (isBrowser && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (error) {
      console.error("Erro ao compartilhar card", error);
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="card-hover bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <Link to={`/artigo/${slug}`} className="block">
            <img
              src={imageUrl}
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </Link>
          <Badge className={`absolute top-3 left-3 ${colorClasses[categoryColor]} border-none shadow-md hover:opacity-95`}>
            {category}
          </Badge>
        </div>

        {/* Content */}
        <div className="p-5">
          <Link to={`/artigo/${slug}`} className="block">
            <h3 className="font-display text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {excerpt}
            </p>
          </Link>
          <div className="flex items-center justify-between text-muted-foreground text-xs">
            <div className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5" />
              <span>{readTime}</span>
            </div>
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1 text-primary hover:underline"
            >
              <Share2 className="h-3.5 w-3.5" />
              <span>Compartilhar</span>
            </button>
          </div>
          {copied && (
            <p className="text-[11px] text-primary mt-1">
              Link copiado! Marque seu amigo.
            </p>
          )}
        </div>
      </div>
    </motion.article>
  );
};
