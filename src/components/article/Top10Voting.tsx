import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Trophy, ArrowUpRight } from "lucide-react";
import { addPoints, getUserPoints } from "@/lib/gamification";

type Top10Item = {
  id: string;
  title: string;
  description: string;
  tag?: string;
  votes?: number;
};

type Top10VotingProps = {
  slug: string;
  title: string;
  subtitle?: string;
  cta?: string;
  items: Top10Item[];
  shareUrl?: string;
};

const RANKING_KEY_PREFIX = "viralnow:top10";
const isBrowser = typeof window !== "undefined";

const votesKey = (slug: string) => `${RANKING_KEY_PREFIX}:${slug}:votes`;
const choiceKey = (slug: string) => `${RANKING_KEY_PREFIX}:${slug}:choice`;

export const Top10Voting = ({
  slug,
  title,
  subtitle,
  cta = "Quero votar",
  items,
  shareUrl,
}: Top10VotingProps) => {
  const baseVotes = useMemo(
    () =>
      items.reduce<Record<string, number>>((acc, item, index) => {
        acc[item.id] = item.votes ?? Math.max(220 - index * 18, 30);
        return acc;
      }, {}),
    [items]
  );

  const [votes, setVotes] = useState<Record<string, number>>(baseVotes);
  const [selected, setSelected] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [pointsNotice, setPointsNotice] = useState<string | null>(null);
  const [userPoints, setUserPoints] = useState(0);

  useEffect(() => {
    if (!isBrowser) return;
    try {
      const storedVotes = localStorage.getItem(votesKey(slug));
      const storedChoice = localStorage.getItem(choiceKey(slug));
      if (storedVotes) {
        setVotes(JSON.parse(storedVotes));
      } else {
        setVotes(baseVotes);
      }
      if (storedChoice) {
        setSelected(storedChoice);
      } else {
        setSelected(null);
      }
    } catch (error) {
      console.error("Erro ao carregar ranking", error);
      setVotes(baseVotes);
    }
    setUserPoints(getUserPoints());
    setPointsNotice(null);
  }, [slug, baseVotes]);

  const totalVotes = useMemo(
    () => Object.values(votes).reduce((sum, value) => sum + value, 0),
    [votes]
  );

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => (votes[b.id] ?? 0) - (votes[a.id] ?? 0)),
    [items, votes]
  );

  const handleVote = (itemId: string) => {
    if (selected) return;

    setSelected(itemId);
    setVotes((current) => {
      const next = {
        ...current,
        [itemId]: (current?.[itemId] ?? baseVotes[itemId] ?? 0) + 1,
      };

      if (isBrowser) {
        localStorage.setItem(votesKey(slug), JSON.stringify(next));
        localStorage.setItem(choiceKey(slug), itemId);
      }

      return next;
    });

    addPoints(5);
    setUserPoints(getUserPoints());
    setPointsNotice("+5 pontos pelo voto!");
  };

  const buildShareUrl = (itemId?: string) => {
    const baseUrl = shareUrl || (isBrowser ? window.location.href : "");
    const url = new URL(baseUrl);
    url.searchParams.set("utm_source", "viralnow");
    url.searchParams.set("utm_medium", "top10");
    url.searchParams.set("utm_content", slug);
    if (itemId) {
      url.searchParams.set("utm_term", itemId);
    }
    return url.toString();
  };

  const handleShare = async () => {
    const chosen = selected ? items.find((item) => item.id === selected) : undefined;
    const urlToShare = buildShareUrl(chosen?.id);
    const shareText = chosen
      ? `Votei em "${chosen.title}" na lista Top 10: ${title}`
      : `Confira e vote na lista Top 10: ${title}`;

    try {
      if (isBrowser && navigator.share) {
        await navigator.share({
          title,
          text: shareText,
          url: urlToShare,
        });
      } else if (isBrowser && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(urlToShare);
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      }

      addPoints(5);
      setUserPoints(getUserPoints());
      setPointsNotice("+5 pontos por compartilhar!");
    } catch (error) {
      console.error("Erro ao compartilhar ranking", error);
    }
  };

  return (
    <section className="bg-card border border-border/70 rounded-2xl p-6 md:p-8 shadow-elegant">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-400 text-amber-950 flex items-center justify-center shadow-lg">
            <Trophy className="h-5 w-5" />
          </div>
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              {title}
            </h2>
            {subtitle && (
              <p className="text-sm text-muted-foreground">{subtitle}</p>
            )}
            <p className="text-[12px] text-amber-900 mt-1">
              Vote ou compartilhe e ganhe +5 pts na semana.
            </p>
          </div>
        </div>

        <Button
          size="sm"
          variant={selected ? "secondary" : "default"}
          className="gap-2"
          disabled={Boolean(selected)}
          onClick={() => {
            if (!selected && sortedItems.length > 0) {
              handleVote(sortedItems[0].id);
            }
          }}
        >
          <ArrowUpRight className="h-4 w-4" />
          {selected ? "Voto registrado" : cta}
        </Button>
      </div>

      <Separator className="my-4" />

      <div className="space-y-4">
        {sortedItems.map((item, index) => {
          const position = index + 1;
          const itemVotes = votes[item.id] ?? baseVotes[item.id] ?? 0;
          const percentage =
            totalVotes === 0 ? 0 : Math.round((itemVotes / totalVotes) * 100);
          const isTop = index === 0;

          return (
            <button
              key={item.id}
              onClick={() => handleVote(item.id)}
              disabled={Boolean(selected)}
              className={`w-full text-left border rounded-xl p-4 transition-all ${
                selected === item.id
                  ? "border-amber-400 bg-amber-400/10 shadow-sm"
                  : "border-border hover:border-amber-400/70 hover:bg-muted/60"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-muted text-foreground flex items-center justify-center font-display font-semibold">
                  {position}
                </div>

                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-foreground text-base">
                      {item.title}
                    </p>
                    {isTop && (
                      <span className="text-[11px] px-2 py-1 rounded-full bg-amber-400/20 text-amber-900 border border-amber-400/60">
                        Mais votado hoje
                      </span>
                    )}
                    {item.tag && (
                      <span className="text-xs px-2 py-1 rounded-full bg-amber-400/20 text-amber-900 border border-amber-400/60">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>

                  <Progress value={percentage} className="h-2" />

                  <div className="text-xs text-muted-foreground flex items-center gap-2">
                    <span className="font-semibold text-foreground">
                      {itemVotes.toLocaleString("pt-BR")} votos
                    </span>
                    <span>•</span>
                    <span>{percentage}% dos votos</span>
                    {selected === item.id && (
                      <>
                        <span>•</span>
                        <span className="text-amber-900 font-semibold">
                          Seu voto
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-6 text-sm text-muted-foreground">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <span>
            {totalVotes.toLocaleString("pt-BR")} votos acumulados nesta lista.{" "}
            <span className="text-foreground font-semibold">
              Compartilhe para impulsionar seu favorito!
            </span>
          </span>
          <div className="flex items-center gap-2">
            {pointsNotice && (
              <span className="text-[11px] px-2 py-1 rounded-full bg-amber-400/20 text-amber-900 border border-amber-400/60">
                {pointsNotice} • você tem {userPoints} pts
              </span>
            )}
            {copied && (
              <span className="text-xs text-primary font-semibold">
                Link copiado!
              </span>
            )}
            <Button
              variant="secondary"
              size="sm"
              className="rounded-lg gap-2"
              onClick={handleShare}
            >
              <ArrowUpRight className="h-4 w-4" />
              {selected ? "Compartilhar voto" : "Compartilhar Top 10"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
