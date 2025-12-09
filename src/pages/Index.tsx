import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroArticle } from "@/components/home/HeroArticle";
import { ArticleCard } from "@/components/home/ArticleCard";
import { TrendingArticle } from "@/components/home/TrendingArticle";
import { Newsletter } from "@/components/home/Newsletter";
import { SectionHeader } from "@/components/home/SectionHeader";
import { GamificationSidebar } from "@/components/home/GamificationSidebar";
import { Plane, Lightbulb, Wallet, TrendingUp, Flame } from "lucide-react";
import { articles } from "@/data/articles";

const trendingArticles = [
  {
    title: "Guia Definitivo: 10 Dicas Geniais Para Viajar Barato Em Dezembro",
    category: "Economia",
    rank: 1,
    slug: "guia-viajar-barato-dezembro",
  },
  {
    title: "10 Lugares Abandonados no Brasil com Histórias Macabras",
    category: "Curiosidades",
    rank: 2,
    slug: "lugares-abandonados-brasil-historias-macabras",
  },
  {
    title: "O Que Acontece no Avião Que Ninguém Fala: 5 Mitos Desvendados",
    category: "Ciência",
    rank: 3,
    slug: "mitos-viagem-aviao-ciencia",
  },
  {
    title: "Réveillon 2026: Os 10 Destinos no Nordeste com as Melhores Mega Festas",
    category: "Viagens",
    rank: 4,
    slug: "reveillon-2026-nordeste-mega-festas",
  },
  {
    title: "Réveillon Barato: 5 Destinos Nacionais Pouco Conhecidos",
    category: "Alternativo",
    rank: 5,
    slug: "reveillon-barato-destinos-pouco-conhecidos",
  },
];

const travelArticles = articles.filter(a => 
  ["reveillon-2026-nordeste-mega-festas", "natal-luz-gramado-cidades-contos-de-fadas", "ano-novo-brasil-fogos-artificiais"].includes(a.slug)
);

const budgetArticles = articles.filter(a => 
  ["guia-viajar-barato-dezembro", "reveillon-barato-destinos-pouco-conhecidos"].includes(a.slug)
);

const curiosityArticles = articles.filter(a => 
  ["lugares-abandonados-brasil-historias-macabras", "mitos-viagem-aviao-ciencia"].includes(a.slug)
);

const heroArticle = articles.find(a => a.slug === "reveillon-2026-nordeste-mega-festas")!;

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="container py-6 md:py-10">
          <HeroArticle
            title={heroArticle.title}
            excerpt={heroArticle.excerpt}
            category={heroArticle.category}
            categoryColor={heroArticle.categoryColor}
            imageUrl={heroArticle.imageUrl}
            readTime={`${heroArticle.readTime} de leitura`}
            views={heroArticle.views}
            slug={heroArticle.slug}
          />
        </section>

        {/* Main Content Grid */}
        <section className="container py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Articles Column */}
            <div className="lg:col-span-2 space-y-16">
              {/* Travel Section */}
              <div id="travel">
                <SectionHeader
                  title="Viagens"
                  subtitle="Os melhores destinos para suas férias de fim de ano"
                  icon={Plane}
                  iconColor="text-travel"
                  action={{ label: "Ver mais", href: "/categoria/viagens" }}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {travelArticles.map((article, index) => (
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
              </div>

              {/* Budget Section */}
              <div id="budget">
                <SectionHeader
                  title="Economize na Viagem"
                  subtitle="Dicas para aproveitar mais gastando menos"
                  icon={Wallet}
                  iconColor="text-budget"
                  action={{ label: "Ver mais", href: "/categoria/economizar" }}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {budgetArticles.map((article, index) => (
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
              </div>

              {/* Curiosities Section */}
              <div id="curiosity">
                <SectionHeader
                  title="Curiosidades"
                  subtitle="Histórias que você vai querer compartilhar"
                  icon={Lightbulb}
                  iconColor="text-curiosity"
                  action={{ label: "Ver mais", href: "/categoria/curiosidades" }}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {curiosityArticles.map((article, index) => (
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
              </div>
            </div>

            {/* Sidebar - Trending */}
            <aside className="lg:col-span-1" id="trending">
              <div className="sticky top-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl gradient-trending">
                    <Flame className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">
                      Em Alta Agora
                    </h3>
                    <p className="text-sm text-muted-foreground">Mais lidos nas últimas 24h</p>
                  </div>
                </div>

                <div className="bg-card rounded-2xl border border-border/50 shadow-sm divide-y divide-border/50">
                  {trendingArticles.map((article, index) => (
                    <TrendingArticle key={article.slug} {...article} index={index} />
                  ))}
                </div>

                {/* Quick Stats */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-travel/10 rounded-xl p-4 text-center">
                    <TrendingUp className="h-6 w-6 text-travel mx-auto mb-2" />
                    <div className="font-display font-bold text-2xl text-foreground">2.5M</div>
                    <div className="text-xs text-muted-foreground">Leitores/mês</div>
                  </div>
                  <div className="bg-primary/10 rounded-xl p-4 text-center">
                    <Flame className="h-6 w-6 text-primary mx-auto mb-2" />
                    <div className="font-display font-bold text-2xl text-foreground">847</div>
                    <div className="text-xs text-muted-foreground">Artigos</div>
                  </div>
                </div>

                <div className="mt-6">
                  <GamificationSidebar />
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Newsletter Section */}
        <section id="newsletter" className="container scroll-mt-24">
          <Newsletter />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;


