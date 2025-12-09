import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Sparkles, PartyPopper, Share2 } from "lucide-react";
import { addPoints, getUserPoints } from "@/lib/gamification";

type QuizOption = {
  id: string;
  text: string;
  helper?: string;
  votes?: number;
};

type InteractiveQuizProps = {
  slug: string;
  title: string;
  description?: string;
  question: string;
  options: QuizOption[];
  cta?: string;
  shareUrl?: string;
};

const QUIZ_KEY_PREFIX = "viralnow:quiz";
const isBrowser = typeof window !== "undefined";

const votesKey = (slug: string, question: string) =>
  `${QUIZ_KEY_PREFIX}:${slug}:${question}:votes`;
const choiceKey = (slug: string, question: string) =>
  `${QUIZ_KEY_PREFIX}:${slug}:${question}:choice`;

export const InteractiveQuiz = ({
  slug,
  title,
  description,
  question,
  options,
  cta = "Responder e compartilhar",
  shareUrl,
}: InteractiveQuizProps) => {
  const baseVotes = useMemo(
    () =>
      options.reduce<Record<string, number>>((acc, option, index) => {
        acc[option.id] = option.votes ?? Math.max(18 - index * 3, 6);
        return acc;
      }, {}),
    [options]
  );

  const [votes, setVotes] = useState<Record<string, number>>(baseVotes);
  const [selected, setSelected] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [pointsNotice, setPointsNotice] = useState<string | null>(null);
  const [userPoints, setUserPoints] = useState(0);

  useEffect(() => {
    if (!isBrowser) return;
    try {
      const storedVotes = localStorage.getItem(votesKey(slug, question));
      const storedChoice = localStorage.getItem(choiceKey(slug, question));

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
      console.error("Erro ao carregar quiz", error);
      setVotes(baseVotes);
    }
  }, [slug, question, baseVotes]);

  useEffect(() => {
    setCopied(false);
    setPointsNotice(null);
    setUserPoints(getUserPoints());
  }, [slug, question]);

  const totalVotes = useMemo(
    () => Object.values(votes).reduce((sum, value) => sum + value, 0),
    [votes]
  );

  const handleVote = (optionId: string) => {
    if (selected) return;

    setSelected(optionId);
    setVotes((current) => {
      const next = {
        ...current,
        [optionId]: (current?.[optionId] ?? baseVotes[optionId] ?? 0) + 1,
      };

      if (isBrowser) {
        localStorage.setItem(votesKey(slug, question), JSON.stringify(next));
        localStorage.setItem(choiceKey(slug, question), optionId);
      }

      return next;
    });

    addPoints(5);
    setUserPoints(getUserPoints());
    setPointsNotice("+5 pontos pelo voto!");
  };

  const getPercentage = (optionId: string) => {
    if (totalVotes === 0) return 0;
    return Math.round(((votes[optionId] ?? 0) / totalVotes) * 100);
  };

  const buildShareUrl = () => {
    const baseUrl = shareUrl || (isBrowser ? window.location.href : "");
    const url = new URL(baseUrl);
    url.searchParams.set("utm_source", "viralnow");
    url.searchParams.set("utm_medium", "quiz");
    url.searchParams.set("utm_content", slug);
    if (selected) {
      url.searchParams.set("utm_term", selected);
    }
    return url.toString();
  };

  const handleShare = async () => {
    const urlToShare = buildShareUrl();
    const selectedOption = options.find((option) => option.id === selected);
    const shareText = selectedOption
      ? `Acabei de votar em "${selectedOption.text}" no quiz: ${question}`
      : `Responda o quiz: ${question}`;

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
      console.error("Erro ao compartilhar quiz", error);
    }
  };

  return (
    <section className="bg-gradient-to-br from-primary/10 via-background to-card border border-border/60 rounded-2xl p-6 md:p-8 shadow-elegant">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shadow-lg">
          <Sparkles className="h-5 w-5" />
        </div>
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            {title}
          </h2>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
          <p className="text-xs text-primary mt-1">
            Vote ou compartilhe e ganhe +5 pts (semanal).
          </p>
        </div>
      </div>

      <Separator className="my-6" />

      <div className="space-y-6">
        <div className="flex items-start gap-2">
          <PartyPopper className="h-5 w-5 text-primary mt-0.5" />
          <p className="text-base font-semibold text-foreground">{question}</p>
        </div>

        <div className="grid gap-3">
          {options.map((option) => {
            const percentage = getPercentage(option.id);
            const isSelected = selected === option.id;

            return (
              <button
                key={option.id}
                onClick={() => handleVote(option.id)}
                className={`w-full text-left border rounded-xl p-4 transition-all ${
                  isSelected
                    ? "border-primary bg-primary/10 shadow-sm"
                    : "border-border hover:border-primary/60 hover:bg-muted/60"
                }`}
                disabled={Boolean(selected)}
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-semibold text-foreground">
                      {option.text}
                    </p>
                    {option.helper && (
                      <p className="text-sm text-muted-foreground">
                        {option.helper}
                      </p>
                    )}
                  </div>
                  {selected && (
                    <span className="text-sm font-semibold text-primary">
                      {percentage}%
                    </span>
                  )}
                </div>

                <Progress
                  value={selected ? percentage : 0}
                  className="h-2 mt-3"
                />
              </button>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-muted-foreground">
          <p>
            {totalVotes.toLocaleString("pt-BR")} votos registrados neste quiz.
          </p>
          <div className="flex items-center gap-3">
            {pointsNotice && (
              <span className="text-[11px] px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/30">
                {pointsNotice} • você tem {userPoints} pts
              </span>
            )}
            {copied && (
              <span className="text-xs text-primary font-semibold">
                Link copiado! Manda para o grupo.
              </span>
            )}
            <Button
              variant="secondary"
              size="sm"
              className="gap-2"
              onClick={handleShare}
            >
              <Share2 className="h-4 w-4" />
              {selected ? "Compartilhar resultado" : cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
