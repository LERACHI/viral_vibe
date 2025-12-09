import { useParams, Link, Navigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Newsletter } from "@/components/home/Newsletter";
import { SocialShare } from "@/components/article/SocialShare";
import { ArticleJsonLd } from "@/components/article/ArticleJsonLd";
import { RelatedArticles } from "@/components/article/RelatedArticles";
import { Comments } from "@/components/article/Comments";
import { InteractiveQuiz } from "@/components/article/InteractiveQuiz";
import { Top10Voting } from "@/components/article/Top10Voting";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock, Eye, Calendar, ChevronLeft, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getArticleBySlug, getRelatedArticles } from "@/data/articles";
import { getQuizBySlug, getTop10BySlug } from "@/data/engagement";
import { InlineSignup } from "@/components/shared/InlineSignup";
import { getRecommendedArticles, recordTags } from "@/lib/recommendations";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  const article = slug ? getArticleBySlug(slug) : undefined;
  const relatedArticles = slug ? getRelatedArticles(slug, 3) : [];
  const recommendedArticles = slug
    ? getRecommendedArticles({
        currentSlug: slug,
        limit: 4,
        fallbackCategory: article?.categoryColor,
      })
    : [];
  const baseReaders = useMemo(
    () => Math.floor(Math.random() * 120) + 80, // 80-199 readers base
    [slug]
  );
  const [liveReaders, setLiveReaders] = useState(baseReaders);
  const quiz = slug ? getQuizBySlug(slug) : undefined;
  const top10List = slug ? getTop10BySlug(slug) : undefined;
  
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (article) {
      recordTags(article.tags);
    }
  }, [article]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveReaders((current) => {
        const delta = Math.floor(Math.random() * 5) - 2; // -2 a +2
        const next = Math.max(baseReaders - 10, Math.min(baseReaders + 30, current + delta));
        return next;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [baseReaders]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!article) {
    return <Navigate to="/404" replace />;
  }

  const publishDate = new Date(article.publishedAt).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-background">
      <ArticleJsonLd article={article} url={currentUrl} />
      <Header />

      <main>
        {/* Hero Image */}
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <img
            src={article.imageUrl}
            alt={article.imageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          
          {/* Back Button */}
          <div className="absolute top-4 left-4 md:top-8 md:left-8 z-10">
            <Button
              variant="secondary"
              size="sm"
              asChild
              className="backdrop-blur-sm"
            >
              <Link to="/">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Voltar
              </Link>
            </Button>
          </div>
        </div>

        {/* Article Content */}
        <article className="container max-w-4xl -mt-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-2xl shadow-elegant p-6 md:p-10 border border-border/50"
          >
            {/* Category Badge */}
            <Badge variant={article.categoryColor} className="mb-4">
              {article.category}
            </Badge>

            {/* Title */}
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              {article.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 pb-6 border-b border-border mb-6">
              {/* Author */}
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={article.author.avatar} alt={article.author.name} />
                  <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-foreground text-sm">{article.author.name}</p>
                  <p className="text-xs text-muted-foreground">Autor</p>
                </div>
              </div>

              {/* Date */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{publishDate}</span>
              </div>

              {/* Read Time */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{article.readTime} de leitura</span>
              </div>

              {/* Views */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Eye className="h-4 w-4" />
                <span>{article.views} visualizações</span>
              </div>
            </div>

            {/* Social Share */}
            <div className="mb-8">
              <SocialShare
                url={currentUrl}
                title={article.title}
                description={article.excerpt}
              />
              <p className="text-sm text-muted-foreground mt-2">
                {liveReaders} pessoas estão lendo agora.
              </p>
            </div>

            {/* Article Body */}
            <div 
              className="prose prose-lg max-w-none
                prose-headings:font-display prose-headings:text-foreground
                prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-strong:text-foreground prose-strong:font-semibold
                prose-ul:text-muted-foreground prose-ol:text-muted-foreground
                prose-li:marker:text-primary
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground
                prose-table:text-sm
                prose-th:bg-muted prose-th:p-3 prose-th:text-left
                prose-td:p-3 prose-td:border-b prose-td:border-border
              "
              dangerouslySetInnerHTML={{ 
                __html: article.content
                  .replace(/\n## /g, '<h2>')
                  .replace(/\n### /g, '<h3>')
                  .replace(/\n\n/g, '</p><p>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .replace(/^\s*-\s+(.*)$/gm, '<li>$1</li>')
                  .replace(/(<li>.*<\/li>)+/g, '<ul>$&</ul>')
                  .replace(/\|(.+)\|/g, (match) => {
                    const cells = match.split('|').filter(Boolean);
                    return `<tr>${cells.map(cell => `<td>${cell.trim()}</td>`).join('')}</tr>`;
                  })
              }}
            />

            {/* Tags */}
            <div className="mt-10 pt-6 border-t border-border">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-muted-foreground mr-2">Tags:</span>
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Bottom Social Share */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-muted-foreground mb-3">Gostou? Compartilhe com seus amigos!</p>
              <SocialShare
                url={currentUrl}
                title={article.title}
                description={article.excerpt}
              />
            </div>
          </motion.div>

          {(quiz || top10List) && (
            <div className="mt-10 space-y-8">
              {quiz && (
                <InteractiveQuiz
                  slug={article.slug}
                  title={quiz.title}
                  description={quiz.description}
                  question={quiz.question}
                  options={quiz.options}
                  cta={quiz.cta}
                  shareUrl={currentUrl}
                />
              )}

              {top10List && (
                <Top10Voting
                  slug={article.slug}
                  title={top10List.title}
                  subtitle={top10List.subtitle}
                  cta={top10List.cta}
                  shareUrl={currentUrl}
                  items={top10List.items}
                />
              )}
            </div>
          )}

          <Comments slug={article.slug} articleTitle={article.title} />

          <div className="mt-10">
            <InlineSignup
              context="Artigo"
              description="Receba um ping quando saírem novas listas, quizzes ou atualizações desta série."
            />
          </div>

          {/* Related Articles */}
          <RelatedArticles articles={relatedArticles} />

          {/* Personalized recommendations */}
          <section className="mt-12">
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Leituras para você
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recommendedArticles.map((rec) => (
                <Link
                  key={rec.slug}
                  to={`/artigo/${rec.slug}`}
                  className="border border-border/60 rounded-xl p-4 hover:border-primary/60 hover:shadow-lg transition-all bg-card"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <Badge variant={rec.categoryColor}>{rec.category}</Badge>
                    <span className="text-xs text-muted-foreground">{rec.readTime}</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-1 line-clamp-2">
                    {rec.title}
                  </h4>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {rec.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </article>

        {/* Newsletter */}
        <section className="container mt-16">
          <Newsletter />
        </section>
      </main>

      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-shadow"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </div>
  );
};

export default Article;
