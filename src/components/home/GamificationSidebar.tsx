import { useEffect, useState } from "react";
import { Trophy, Sparkles } from "lucide-react";
import { getLeaderboard, getUserPoints } from "@/lib/gamification";

type LeaderboardItem = {
  name: string;
  points: number;
  you?: boolean;
};

export const GamificationSidebar = () => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardItem[]>([]);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    setPoints(getUserPoints());
    setLeaderboard(getLeaderboard());
  }, []);

  return (
    <div className="bg-card border border-border/50 rounded-2xl p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-amber-500" />
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">
              Leaderboard semanal
            </p>
            <p className="font-display font-semibold text-foreground">Pontos</p>
          </div>
        </div>
        <span className="text-sm px-2 py-1 rounded-full bg-amber-500/15 text-amber-900 border border-amber-500/50 flex items-center gap-1">
          <Sparkles className="h-4 w-4" />
          {points} pts
        </span>
      </div>

      <div className="space-y-2">
        {leaderboard.map((item, index) => (
          <div
            key={item.name}
            className={`flex items-center justify-between rounded-xl px-3 py-2 ${
              item.you ? "bg-primary/10 border border-primary/40" : "bg-muted/50"
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="w-6 text-xs text-muted-foreground">#{index + 1}</span>
              <span className="font-medium text-foreground">{item.name}</span>
              {item.you && (
                <span className="text-[10px] px-2 py-1 rounded-full bg-primary text-primary-foreground">
                  você
                </span>
              )}
            </div>
            <span className="text-sm font-semibold text-foreground">{item.points} pts</span>
          </div>
        ))}
      </div>
      <p className="text-[12px] text-muted-foreground mt-3">
        Ganhe +5 pts ao votar e compartilhar. Ranking renova toda segunda-feira.
      </p>
    </div>
  );
};
