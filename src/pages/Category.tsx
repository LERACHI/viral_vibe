import { useMemo } from "react";
import { useParams, useSearchParams, Navigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArticleCard } from "@/components/home/ArticleCard";
import { articles } from "@/data/articles";
import { getCategoryBySlug } from "@/data/categories";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Flame, Plane, Lightbulb, Wallet } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const ITEMS_PER_PAGE = 6;
const topAnchorId = "topo";

const categoryIcons = {
  trending: <Flame className="h-5 w-5" />,
  travel: <Plane className="h-5 w-5" />,
  curiosity: <Lightbulb className="h-5 w-5" />,
  budget: <Wallet className="h-5 w-5" />,
};

const parseViews = (views: string) => {
  const normalized = views.toLowerCase().replace(/\s/g, "");
  if (normalized.endsWith("m")) return parseFloat(normalized) * 1_000_000;
  if (normalized.endsWith("k")) return parseFloat(normalized) * 1_000;
  return Number(normalized) || 0;
};

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const categoryInfo = getCategoryBySlug(slug);
  const [searchParams, setSearchParams] = useSearchParams();

  if (!categoryInfo) {
    return <Navigate to="/404" replace />;
  }

  const currentPage = Math.max(
    1,
    parseInt(searchParams.get("page") ?? "1", 10) || 1
  );

  const categoryArticles = useMemo(
    () =>
      articles
        .filter((article) => article.categoryColor === categoryInfo.key)
        .sort((a, b) => parseViews(b.views) - parseViews(a.views)),
    [categoryInfo.key]
  );

  const totalPages = Math.max(
    1,
    Math.ceil(categoryArticles.length / ITEMS_PER_PAGE)
  );
  const safePage = Math.min(currentPage, totalPages);
  const start = (safePage - 1) * ITEMS_PER_PAGE;
  const paginated = categoryArticles.slice(start, start + ITEMS_PER_PAGE);

  const goToPage = (page: number) => {
    const next = new URLSearchParams(searchParams.toString());
    if (page <= 1) {
      next.delete("page");
    } else {
      next.set("page", String(page));
    }
    setSearchParams(next, { replace: true });

    trackEvent({
      name: "category_pagination",
      props: {
        category: categoryInfo.slug,
        page,
      },
    });

    const anchor = document.getElementById(topAnchorId);
    anchor?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id={topAnchorId} className="min-h-screen bg-background scroll-mt-24">
      <Header />
      <main className="container py-10">
        <section
          className={`rounded-2xl border border-border/60 bg-gradient-to-br ${categoryInfo.gradient} p-6 md:p-8 shadow-elegant mb-10`}
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center shadow-lg">
                {categoryIcons[categoryInfo.key]}
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Categoria
                </p>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  {categoryInfo.label}
                </h1>
                <p className="text-muted-foreground mt-2 text-sm md:text-base">
                  {categoryInfo.description}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <Badge variant="secondary">
                {categoryArticles.length}{" "}
                {categoryArticles.length === 1 ? "artigo" : "artigos"}
              </Badge>
              <Badge variant="outline">Ordenado por popularidade</Badge>
              <Badge variant="outline">Pag {safePage} de {totalPages}</Badge>
            </div>
          </div>
        </section>

        {paginated.length === 0 ? (
          <div className="border border-dashed border-border/70 rounded-2xl p-10 text-center text-muted-foreground">
            Ainda n\u00e3o temos artigos nesta categoria. Volte em breve!
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginated.map((article, index) => (
                <ArticleCard
                  key={article.id}
                  title={article.title}
                  excerpt={article.excerpt}
                  category={article.category}
                  categoryColor={article.categoryColor}
                  imageUrl={article.imageUrl}
                  readTime={article.readTime}
                  slug={article.slug}
                  index={index}
                />
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between gap-4">
              <Button
                variant="outline"
                size="sm"
                className="rounded-xl gap-2"
                onClick={() => goToPage(Math.max(1, safePage - 1))}
                disabled={safePage === 1}
              >
                <ArrowLeft className="h-4 w-4" />
                Anterior
              </Button>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                {Array.from({ length: totalPages }).map((_, idx) => {
                  const pageNumber = idx + 1;
                  const isActive = pageNumber === safePage;
                  return (
                    <Button
                      key={pageNumber}
                      variant={isActive ? "default" : "outline"}
                      size="sm"
                      className="w-10 rounded-lg"
                      onClick={() => goToPage(pageNumber)}
                    >
                      {pageNumber}
                    </Button>
                  );
                })}
              </div>

              <Button
                variant="outline"
                size="sm"
                className="rounded-xl gap-2"
                onClick={() => goToPage(Math.min(totalPages, safePage + 1))}
                disabled={safePage === totalPages}
              >
                Proximo
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
