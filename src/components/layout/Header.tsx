import { useEffect, useMemo, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, TrendingUp, Plane, Lightbulb, Wallet, Flame, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { articles } from "@/data/articles";

const navItems = [
  { label: "Em Alta", path: "/categoria/em-alta#topo", icon: TrendingUp, color: "text-trending" },
  { label: "Viagens", path: "/categoria/viagens#topo", icon: Plane, color: "text-travel" },
  { label: "Curiosidades", path: "/categoria/curiosidades#topo", icon: Lightbulb, color: "text-curiosity" },
  { label: "Economizar", path: "/categoria/economizar#topo", icon: Wallet, color: "text-budget" },
  { label: "Viral Destino", path: "/calculadora-do-destino#top", icon: Calculator, color: "text-primary" },
];

const parseViews = (views: string) => {
  const normalized = views.toLowerCase().replace(/\s/g, "");
  if (normalized.endsWith("m")) return parseFloat(normalized) * 1_000_000;
  if (normalized.endsWith("k")) return parseFloat(normalized) * 1_000;
  return Number(normalized) || 0;
};

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [spotlightIndex, setSpotlightIndex] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const normalize = (value: string) =>
    value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

  const popularArticles = useMemo(
    () => [...articles].sort((a, b) => parseViews(b.views) - parseViews(a.views)).slice(0, 5),
    []
  );

  const trendingSpotlights = useMemo(
    () => [...articles].sort((a, b) => parseViews(b.views) - parseViews(a.views)).slice(0, 3),
    []
  );

  const trendingSpotlight = trendingSpotlights[spotlightIndex] ?? trendingSpotlights[0];

  const suggestions = useMemo(() => {
    const query = searchTerm.trim();
    if (query.length < 2) return popularArticles;

    const q = normalize(query);
    const filtered = articles
      .filter(
        (article) =>
          normalize(article.title).includes(q) ||
          normalize(article.excerpt).includes(q) ||
          article.tags.some((tag) => normalize(tag).includes(q))
      )
      .slice(0, 6);

    return filtered.length > 0 ? filtered : popularArticles;
  }, [popularArticles, searchTerm]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchTerm.trim();
    if (query.length === 0) return;
    navigate(`/buscar?q=${encodeURIComponent(query)}`);
    setIsSearchOpen(false);
    import("@/lib/analytics").then(({ trackEvent }) =>
      trackEvent({
        name: "header_search_submit",
        props: { queryLength: query.length },
      })
    );
  };

  useEffect(() => {
    setSearchTerm("");
  }, [location.pathname]);

  useEffect(() => {
    if (trendingSpotlights.length < 2) return;
    const interval = setInterval(
      () => setSpotlightIndex((prev) => (prev + 1) % trendingSpotlights.length),
      18000
    );
    return () => clearInterval(interval);
  }, [trendingSpotlights.length]);

  const handleSubscribeClick = () => {
    const isHome = location.pathname === "/";
    const targetId = "newsletter";

    if (isHome) {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    navigate(`/#${targetId}`);
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {trendingSpotlight && (
        <div className="bg-gradient-to-r from-primary/15 via-background to-card border-b border-border/50">
          <div className="container flex items-center justify-between py-2 text-sm">
            <div className="flex-1 flex items-center gap-2 text-foreground overflow-hidden">
              <Flame className="h-4 w-4 text-primary" />
              <span className="font-semibold whitespace-nowrap">Subindo agora:</span>
              <div className="flex-1 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={trendingSpotlight.slug}
                    className="whitespace-nowrap"
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: "-100%", opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                  >
                    <button
                      onClick={() => navigate(`/artigo/${trendingSpotlight.slug}`)}
                      className="text-primary hover:underline"
                    >
                      {trendingSpotlight.title}
                    </button>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            <span className="text-xs text-muted-foreground whitespace-nowrap">
              {trendingSpotlight.views} views - atualiza a cada hora
            </span>
          </div>
        </div>
      )}

      <div className="border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container flex h-16 items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-2 group">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl gradient-hero shadow-glow">
              <span className="text-xl font-bold text-primary-foreground">V</span>
            </div>
            <span className="font-display text-xl font-bold tracking-tight">
              Viral<span className="text-primary">Now</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="group flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
              >
                <item.icon className={`h-4 w-4 ${item.color} opacity-70 group-hover:opacity-100 transition-opacity`} />
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="rounded-lg"
            >
              <Search className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden rounded-lg"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>

            <Button
              className="hidden sm:flex rounded-xl font-semibold"
              size="sm"
              onClick={handleSubscribeClick}
            >
              Inscreva-se
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="border-t border-border/50 overflow-hidden"
            >
              <form className="container py-4" onSubmit={handleSearchSubmit}>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Buscar artigos, curiosidades, destinos..."
                    className="w-full h-12 pl-12 pr-24 rounded-xl border border-border bg-muted/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    autoFocus
                  />
                  <Button
                    type="submit"
                    size="sm"
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl"
                  >
                    Buscar
                  </Button>
                </div>
                <div className="mt-3 bg-card border border-border/60 rounded-xl shadow-lg divide-y divide-border/70 max-h-80 overflow-y-auto">
                  {suggestions.map((item) => (
                    <button
                      type="button"
                      key={item.slug}
                      onClick={() => {
                        import("@/lib/analytics").then(({ trackEvent }) =>
                          trackEvent({
                            name: "header_search_suggestion_click",
                            props: { slug: item.slug },
                          })
                        );
                        navigate(`/artigo/${item.slug}`);
                        setIsSearchOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 hover:bg-muted/60 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-foreground line-clamp-1">
                            {item.title}
                          </p>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            {item.excerpt}
                          </p>
                        </div>
                        <span className="text-[11px] px-2 py-1 rounded-full bg-muted text-muted-foreground">
                          {item.category}
                        </span>
                      </div>
                    </button>
                  ))}
                  <div className="flex items-center justify-between px-4 py-3">
                    <span className="text-xs text-muted-foreground">
                      {searchTerm.trim().length < 2
                        ? "Sugestoes populares"
                        : "Ver todos os resultados"}
                    </span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="rounded-lg"
                      onClick={() => {
                        import("@/lib/analytics").then(({ trackEvent }) =>
                          trackEvent({
                            name: "header_search_go_to_results",
                            props: { queryLength: searchTerm.trim().length },
                          })
                        );
                        navigate(`/buscar?q=${encodeURIComponent(searchTerm.trim())}`);
                        setIsSearchOpen(false);
                      }}
                    >
                      Ir para busca
                    </Button>
                  </div>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-border/50 overflow-hidden bg-background"
            >
              <nav className="container py-4 flex flex-col gap-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    role="link"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex"
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl text-foreground hover:bg-muted transition-colors"
                    >
                      <item.icon className={`h-5 w-5 ${item.color}`} />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  </motion.div>
                ))}
                <Button className="mt-4 rounded-xl font-semibold w-full">
                  Inscreva-se na Newsletter
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
