import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { articles } from "@/data/articles";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { trackEvent } from "@/lib/analytics";
import { InlineSignup } from "@/components/shared/InlineSignup";
import {
  Search as SearchIcon,
  SlidersHorizontal,
  ArrowUpDown,
  CalendarRange,
  Flame,
  Plane,
  Wallet,
  Lightbulb,
} from "lucide-react";
import { useSearchParams } from "react-router-dom";

type SortOption = "popular" | "recent" | "older";
type DateFilter = "any" | "30" | "90" | "year";
type CategoryFilter = "all" | "trending" | "travel" | "curiosity" | "budget";
type StayFilter = "any" | "hotel" | "pousada" | "hostel" | "camping" | "airbnb";
type DestinationFilter = "any" | "praia" | "montanha" | "cidade" | "natureza";

const stayOptions: { value: StayFilter; label: string }[] = [
  { value: "any", label: "Qualquer" },
  { value: "hotel", label: "Hotel" },
  { value: "pousada", label: "Pousada" },
  { value: "hostel", label: "Hostel" },
  { value: "camping", label: "Camping" },
  { value: "airbnb", label: "Airbnb" },
];

const destinationOptions: { value: DestinationFilter; label: string }[] = [
  { value: "any", label: "Qualquer" },
  { value: "praia", label: "Praias" },
  { value: "montanha", label: "Montanhas" },
  { value: "cidade", label: "Cidades" },
  { value: "natureza", label: "Natureza/eco" },
];

const categoryLabels: Record<CategoryFilter, string> = {
  all: "Todas",
  trending: "Em Alta",
  travel: "Viagens",
  curiosity: "Curiosidades",
  budget: "Economizar",
};

const categoryIcons: Record<CategoryFilter, ReactNode> = {
  all: <SlidersHorizontal className="h-4 w-4" />,
  trending: <Flame className="h-4 w-4 text-trending" />,
  travel: <Plane className="h-4 w-4 text-travel" />,
  curiosity: <Lightbulb className="h-4 w-4 text-curiosity" />,
  budget: <Wallet className="h-4 w-4 text-budget" />,
};

const parseViews = (views: string) => {
  const normalized = views.toLowerCase().replace(/\s/g, "");
  if (normalized.endsWith("m")) {
    return parseFloat(normalized.replace("m", "")) * 1_000_000;
  }
  if (normalized.endsWith("k")) {
    return parseFloat(normalized.replace("k", "")) * 1_000;
  }
  return Number(normalized) || 0;
};

const withinDateRange = (publishedAt: string, range: DateFilter) => {
  if (range === "any") return true;
  const now = new Date();
  const published = new Date(publishedAt);
  const diffDays = (now.getTime() - published.getTime()) / (1000 * 60 * 60 * 24);

  if (range === "30") return diffDays <= 30;
  if (range === "90") return diffDays <= 90;
  if (range === "year") return diffDays <= 365;
  return true;
};

const matchesQuery = (value: string, query: string) =>
  value.toLowerCase().includes(query.toLowerCase());

const STORAGE_KEY = "viralnow:search:state";
const isBrowser = typeof window !== "undefined";

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [typedQuery, setTypedQuery] = useState(searchParams.get("q") ?? "");
  const [locationTerm, setLocationTerm] = useState(searchParams.get("loc") ?? "");

  const query = searchParams.get("q") ?? "";
  const category = (searchParams.get("category") ?? "all") as CategoryFilter;
  const dateRange = (searchParams.get("date") ?? "any") as DateFilter;
  const sort = (searchParams.get("sort") ?? "popular") as SortOption;
  const stay = (searchParams.get("stay") ?? "any") as StayFilter;
  const destination = (searchParams.get("dest") ?? "any") as DestinationFilter;

  useEffect(() => {
    setTypedQuery(query);
    setLocationTerm(searchParams.get("loc") ?? "");
  }, [query, searchParams]);

  // Restore last filters if user opens a clean /buscar
  useEffect(() => {
    if (!isBrowser) return;
    if (searchParams.toString() !== "") return;

    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return;

    try {
      const parsed = JSON.parse(stored) as Partial<{
        q: string;
        category: CategoryFilter;
        dateRange: DateFilter;
        sort: SortOption;
        stay: StayFilter;
        destination: DestinationFilter;
        location: string;
      }>;
      const next = new URLSearchParams();
      if (parsed.q) next.set("q", parsed.q);
      if (parsed.category) next.set("category", parsed.category);
      if (parsed.dateRange) next.set("date", parsed.dateRange);
      if (parsed.sort) next.set("sort", parsed.sort);
      if (parsed.stay) next.set("stay", parsed.stay);
      if (parsed.destination) next.set("dest", parsed.destination);
      if (parsed.location) next.set("loc", parsed.location);

      if ([...next.keys()].length > 0) {
        setSearchParams(next, { replace: true });
      }
    } catch (error) {
      console.error("Erro ao ler cache de busca", error);
    }
  }, [searchParams, setSearchParams]);

  // Persist current filters locally
  useEffect(() => {
    if (!isBrowser) return;
    const state = { q: query, category, dateRange, sort, stay, destination, location: locationTerm };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [query, category, dateRange, sort, stay, destination, locationTerm]);

  const updateParam = (key: string, value: string | null) => {
    const next = new URLSearchParams(searchParams.toString());
    if (value === null || value === "" || value === "all" || value === "any" || value === "popular") {
      next.delete(key);
    } else {
      next.set(key, value);
    }
    setSearchParams(next, { replace: true });

    trackEvent({
      name: "search_filter_change",
      props: { key, value },
    });
  };

  const filteredArticles = useMemo(() => {
    const result = articles
      .filter((article) => {
        const searchText = query.trim();
        const matches =
          searchText.length === 0 ||
          matchesQuery(article.title, searchText) ||
          matchesQuery(article.excerpt, searchText) ||
          article.tags.some((tag) => matchesQuery(tag, searchText));

        const matchesCategory = category === "all" ? true : article.categoryColor === category;
        const matchesDate = withinDateRange(article.publishedAt, dateRange);
        const matchesStay =
          stay === "any" ? true : article.tags.some((tag) => matchesQuery(tag, stay));
        const matchesDestination =
          destination === "any" ? true : article.tags.some((tag) => matchesQuery(tag, destination));
        const matchesLocation =
          locationTerm.trim().length === 0
            ? true
            : matchesQuery(article.title, locationTerm) ||
              matchesQuery(article.excerpt, locationTerm) ||
              article.tags.some((tag) => matchesQuery(tag, locationTerm));

        return (
          matches &&
          matchesCategory &&
          matchesDate &&
          matchesStay &&
          matchesDestination &&
          matchesLocation
        );
      })
      .sort((a, b) => {
        if (sort === "recent") {
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
        }
        if (sort === "older") {
          return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
        }
        // default: popular
        return parseViews(b.views) - parseViews(a.views);
      });

    return result;
  }, [query, category, dateRange, sort, stay, destination, locationTerm]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateParam("q", typedQuery.trim());
    if (locationTerm.trim()) updateParam("loc", locationTerm.trim());
    else updateParam("loc", null);
    trackEvent({
      name: "search_submit",
      props: {
        query: typedQuery.trim(),
        category,
        dateRange,
        sort,
        stay,
        destination,
        location: locationTerm,
      },
    });
  };

  const resetFilters = () => {
    setTypedQuery("");
    setSearchParams({});
    trackEvent({ name: "search_filters_reset" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container py-10">
        <div className="bg-card border border-border/60 rounded-2xl p-6 md:p-8 shadow-elegant mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shadow-lg">
              <SearchIcon className="h-5 w-5" />
            </div>
            <div>
              <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                Buscar conteudo
              </h1>
              <p className="text-muted-foreground text-sm">
                Filtre por categoria, data de publicacao e popularidade para achar o que quer rapidinho.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                value={typedQuery}
                onChange={(e) => setTypedQuery(e.target.value)}
                placeholder="Buscar artigos, destinos, hacks..."
                className="pl-12 h-12 text-base"
              />
              <Button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl">
                Buscar
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted-foreground">Local (cidades, estados, paises)</label>
                <Input
                  value={locationTerm}
                  onChange={(e) => setLocationTerm(e.target.value)}
                  placeholder="Ex: Jericoacoara, Bahia, Brasil"
                  className="h-11 rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted-foreground">Tipo de estadia</label>
                <select
                  value={stay}
                  onChange={(e) => updateParam("stay", e.target.value)}
                  className="w-full h-11 rounded-xl border border-border bg-background px-3 text-sm"
                >
                  <option value="any">Qualquer</option>
                  <option value="hotel">Hotel</option>
                  <option value="pousada">Pousada</option>
                  <option value="hostel">Hostel</option>
                  <option value="camping">Camping</option>
                  <option value="airbnb">Airbnb</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted-foreground">Tipo de destino</label>
                <select
                  value={destination}
                  onChange={(e) => updateParam("dest", e.target.value)}
                  className="w-full h-11 rounded-xl border border-border bg-background px-3 text-sm"
                >
                  <option value="any">Qualquer</option>
                  <option value="praia">Praias</option>
                  <option value="montanha">Montanhas</option>
                  <option value="cidade">Cidades</option>
                  <option value="natureza">Natureza/eco</option>
                </select>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 items-center">
              {(
                ["all", "trending", "travel", "curiosity", "budget"] as CategoryFilter[]
              ).map((cat) => (
                <Button
                  key={cat}
                  variant={category === cat ? "default" : "outline"}
                  size="sm"
                  className="rounded-xl gap-2"
                  onClick={(e) => {
                    e.preventDefault();
                    updateParam("category", cat);
                  }}
                >
                  {categoryIcons[cat]}
                  {categoryLabels[cat]}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="flex items-center gap-3 border border-border/60 rounded-xl px-3 py-2">
                <CalendarRange className="h-4 w-4 text-muted-foreground" />
                <select
                  value={dateRange}
                  onChange={(e) => updateParam("date", e.target.value)}
                  className="bg-transparent w-full focus:outline-none text-sm"
                >
                  <option value="any">Qualquer data</option>
                  <option value="30">Ultimos 30 dias</option>
                  <option value="90">Ultimos 90 dias</option>
                  <option value="year">Ultimos 12 meses</option>
                </select>
              </div>

              <div className="flex items-center gap-3 border border-border/60 rounded-xl px-3 py-2">
                <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
                <select
                  value={sort}
                  onChange={(e) => updateParam("sort", e.target.value)}
                  className="bg-transparent w-full focus:outline-none text-sm"
                >
                  <option value="popular">Mais populares</option>
                  <option value="recent">Mais recentes</option>
                  <option value="older">Mais antigos</option>
                </select>
              </div>

              <Button
                variant="secondary"
                className="w-full rounded-xl"
                onClick={(e) => {
                  e.preventDefault();
                  resetFilters();
                }}
              >
                Limpar filtros
              </Button>
            </div>
          </form>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-muted-foreground">Resultados</p>
            <h2 className="font-display text-xl font-bold text-foreground">
              {filteredArticles.length} {filteredArticles.length === 1 ? "artigo encontrado" : "artigos encontrados"}
            </h2>
          </div>
          {query && (
            <Badge variant="outline" className="text-xs">
              Busca: "{query}"
            </Badge>
          )}
        </div>

        {filteredArticles.length === 0 ? (
          <div className="space-y-6">
            <div className="border border-dashed border-border/70 rounded-2xl p-8 text-center text-muted-foreground">
              Nenhum resultado para sua busca. Tente mudar filtros ou termos.
            </div>
            <InlineSignup
              context="Busca"
              title="Receba alertas quando sair algo sobre isso"
              description="Deixe seu email ou WhatsApp e avisamos quando publicarmos novos temas relacionados."
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredArticles.map((article) => (
              <a
                key={article.id}
                href={`/artigo/${article.slug}`}
                className="group border border-border/70 rounded-2xl overflow-hidden bg-card hover:border-primary/60 transition-all shadow-sm hover:shadow-lg"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={article.imageUrl}
                    alt={article.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
                <div className="p-5 space-y-3">
                  <Badge variant={article.categoryColor}>{article.category}</Badge>
                  <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{article.readTime}</span>
                    <span>{article.views} views</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default SearchPage;


