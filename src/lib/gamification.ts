const POINTS_KEY = "viralnow:points";
const isBrowser = typeof window !== "undefined";

export const getUserPoints = (): number => {
  if (!isBrowser) return 0;
  try {
    return Number(localStorage.getItem(POINTS_KEY) || 0);
  } catch {
    return 0;
  }
};

export const addPoints = (amount: number) => {
  if (!isBrowser) return;
  try {
    const current = getUserPoints();
    const next = current + amount;
    localStorage.setItem(POINTS_KEY, String(next));
  } catch (error) {
    console.error("Erro ao salvar pontos", error);
  }
};

type LeaderboardItem = { name: string; points: number; you?: boolean };

export const getLeaderboard = (): LeaderboardItem[] => {
  const youPoints = getUserPoints();
  const base: LeaderboardItem[] = [
    { name: "Você", points: youPoints, you: true },
    { name: "Lia", points: 185 },
    { name: "Rafa", points: 160 },
    { name: "Gui", points: 140 },
  ];

  return base.sort((a, b) => b.points - a.points).slice(0, 4);
};
