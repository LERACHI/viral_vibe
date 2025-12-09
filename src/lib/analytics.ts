type AnalyticsEvent = {
  name: string;
  props?: Record<string, unknown>;
};

const isBrowser = typeof window !== "undefined";

export const trackEvent = ({ name, props = {} }: AnalyticsEvent) => {
  if (!isBrowser) return;

  try {
    const payload = { name, props, ts: Date.now() };
    // Enfileira eventos localmente para futura coleta; tamb\u00e9m loga para debug.
    const existing = JSON.parse(
      localStorage.getItem("viralnow:analytics") || "[]"
    ) as AnalyticsEvent[];
    const next = [...existing, payload].slice(-100); // limita buffer local
    localStorage.setItem("viralnow:analytics", JSON.stringify(next));
    console.debug("[analytics]", name, props);
  } catch (error) {
    console.error("Erro ao registrar evento", error);
  }
};
