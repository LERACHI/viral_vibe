import { useMemo, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calculator, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type QuestionRow = {
  id: string;
  section: string;
  input: JSX.Element;
};

type Destination = {
  name: string;
  region: string;
  focus: "praia" | "montanha" | "urbano" | "natureza";
  level: "baixo" | "medio" | "alto";
  note?: string;
};

const brazilDestinations: Destination[] = [
  { name: "Porto de Galinhas (PE)", region: "Nordeste", focus: "praia", level: "baixo", note: "pousada compacta e mergulho" },
  { name: "Maragogi (AL)", region: "Nordeste", focus: "praia", level: "medio", note: "piscinas naturais" },
  { name: "Jericoacoara (CE)", region: "Nordeste", focus: "praia", level: "medio", note: "dunas e lagoas" },
  { name: "Fernando de Noronha (PE)", region: "Nordeste", focus: "praia", level: "alto", note: "ilhas e trilhas" },
  { name: "Ilhabela (SP)", region: "Sudeste", focus: "praia", level: "medio", note: "cachoeiras + praias" },
  { name: "Buzios (RJ)", region: "Sudeste", focus: "praia", level: "medio", note: "praias curtas e gastronomia" },
  { name: "Florianopolis (SC)", region: "Sul", focus: "praia", level: "alto", note: "praias e trilhas" },
  { name: "Serra do Cipo (MG)", region: "Sudeste", focus: "natureza", level: "baixo", note: "cachoeiras e trilhas" },
  { name: "Chapada dos Veadeiros (GO)", region: "Centro-Oeste", focus: "natureza", level: "medio", note: "cachoeiras cenicas" },
  { name: "Chapada Diamantina (BA)", region: "Nordeste", focus: "natureza", level: "medio", note: "vales e cachoeiras" },
  { name: "Lençóis Maranhenses (MA)", region: "Nordeste", focus: "natureza", level: "medio", note: "lagoas sazonais" },
  { name: "Foz do Iguacu (PR)", region: "Sul", focus: "natureza", level: "alto", note: "cataratas e parque" },
  { name: "Campos do Jordao (SP)", region: "Sudeste", focus: "montanha", level: "medio", note: "clima frio e gastronomia" },
  { name: "Gramado/Canela (RS)", region: "Sul", focus: "montanha", level: "medio", note: "roteiro alpine vibe" },
  { name: "Monte Verde (MG)", region: "Sudeste", focus: "montanha", level: "alto", note: "cabana premium" },
  { name: "Ouro Preto (MG)", region: "Sudeste", focus: "urbano", level: "baixo", note: "historia + gastronomia" },
  { name: "Salvador (BA)", region: "Nordeste", focus: "urbano", level: "medio", note: "cultura e praias urbanas" },
  { name: "Rio de Janeiro (RJ)", region: "Sudeste", focus: "urbano", level: "medio", note: "praia urbana e museus" },
  { name: "Sao Paulo (SP)", region: "Sudeste", focus: "urbano", level: "alto", note: "shows, restaurantes, museus" },
  { name: "Curitiba (PR)", region: "Sul", focus: "urbano", level: "baixo", note: "parques e museus" },
];

const CalculatorPage = () => {
  const [budget, setBudget] = useState<string>("");
  const [scope, setScope] = useState<"nacional" | "internacional" | "indiferente">("nacional");
  const [duration, setDuration] = useState<string>("");
  const [focus, setFocus] = useState<"praia" | "montanha" | "urbano">("praia");
  const [company, setCompany] = useState<"solo" | "casal" | "familia" | "grupo">("solo");
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState("");

  const numericBudget = Number(budget.replace(/\D/g, "")) || 0;
  const isLowBudget = numericBudget > 0 && numericBudget <= 1000;
  const nationalMin = 1200; // custo minimo realista para deslocamento + 2 diarias economicas
  const intlMin = 4000; // custo minimo realista para voos curtos + 3 diarias economicas
  const isBelowNational = scope !== "internacional" && numericBudget > 0 && numericBudget < nationalMin;
  const isBelowInternational = scope === "internacional" && numericBudget > 0 && numericBudget < intlMin;
  const canSuggest = !isLowBudget && !isBelowNational && !isBelowInternational;

  const rows: QuestionRow[] = [
    {
      id: "P1",
      section: "Orcamento",
      input: (
        <Input
          type="number"
          min={0}
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          placeholder="Entrada de valor: R$"
          className="rounded-xl"
        />
      ),
    },
    {
      id: "P2",
      section: "Ambito",
      input: (
        <select
          value={scope}
          onChange={(e) => setScope(e.target.value as typeof scope)}
          className="w-full h-11 rounded-xl border border-border bg-background px-3 text-sm"
        >
          <option value="nacional">Brasil (Nacional)</option>
          <option value="internacional">Mundo (Internacional)</option>
          <option value="indiferente">Indiferente</option>
        </select>
      ),
    },
    {
      id: "P3",
      section: "Duracao",
      input: (
        <Input
          type="number"
          min={1}
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="Entrada: dias/noites"
          className="rounded-xl"
        />
      ),
    },
    {
      id: "P4",
      section: "Clima/Foco",
      input: (
        <select
          value={focus}
          onChange={(e) => setFocus(e.target.value as typeof focus)}
          className="w-full h-11 rounded-xl border border-border bg-background px-3 text-sm"
        >
          <option value="praia">Praia e calor</option>
          <option value="montanha">Montanha e frio</option>
          <option value="urbano">Urbano e cultural</option>
        </select>
      ),
    },
    {
      id: "P5",
      section: "Companhia",
      input: (
        <select
          value={company}
          onChange={(e) => setCompany(e.target.value as typeof company)}
          className="w-full h-11 rounded-xl border border-border bg-background px-3 text-sm"
        >
          <option value="solo">Sozinho</option>
          <option value="casal">Casal</option>
          <option value="familia">Familia/Amigos</option>
          <option value="grupo">Grupo/Excursao</option>
        </select>
      ),
    },
  ];

  const result = useMemo(() => {
    const days = Number(duration) || 0;

    const faixa =
      numericBudget <= 3500 ? "baixo" : numericBudget <= 7500 ? "medio" : numericBudget > 0 ? "alto" : "indefinido";

    const isCurta = days > 0 && days <= 3;

    const suggestions: string[] = [];
    const hospedagem: string[] = [];

    const push = (text: string) => {
      if (!suggestions.includes(text)) suggestions.push(text);
    };

    // Destinos nacionais priorizados pela faixa e foco
    if ((scope === "nacional" || scope === "indiferente") && canSuggest) {
      const matched = brazilDestinations.filter(
        (d) => d.level === faixa && (d.focus === focus || d.focus === "natureza" && focus === "montanha")
      );
      matched.slice(0, 5).forEach((d) => push(`${d.name} (${d.region})${d.note ? ` - ${d.note}` : ""}`));
    }

    if (scope === "internacional" && canSuggest) {
      if (focus === "praia") {
        if (faixa === "baixo") push("Buenos Aires + Colonia (bate-volta) com tarifas promocionais");
        if (faixa === "medio") push("Lisboa + Cascais (Portugal)");
        if (faixa === "alto") push("Cancun ou Punta Cana all inclusive");
      }
      if (focus === "montanha") {
        if (faixa === "baixo") push("Santiago (Chile) fora de alta temporada");
        if (faixa === "medio") push("Bariloche (Argentina) em meia estacao");
        if (faixa === "alto") push("Suica/Italia Alpes com chale");
      }
      if (focus === "urbano") {
        if (faixa === "baixo") push("Buenos Aires com roteiro cultural");
        if (faixa === "medio") push("Lisboa ou Madrid (Europa amigos do bolso)");
        if (faixa === "alto") push("Nova York ou Londres express");
      }
    }

    if (isCurta) {
      const fast = scope === "internacional" ? "roteiros com voo direto e pouco deslocamento" : "destinos regionais com voo direto";
      push(`Priorize ${fast} por causa da duracao curta (${days} dias).`);
    }

    if (company === "familia" || company === "grupo") {
      hospedagem.push("Considere airbnb/casa/apto para dividir custos e ter cozinha.");
    } else if (company === "casal") {
      hospedagem.push("Hoteis romanticos ou pousadas com cafe incluso funcionam melhor.");
    } else {
      hospedagem.push("Hostel/hotel com boa localizacao e nota alta de solo travelers.");
    }

    return {
      faixa,
      suggestions: suggestions.slice(0, 3),
      hospedagem,
    };
  }, [company, duration, focus, numericBudget, scope]);

  return (
    <div id="top" className="min-h-screen bg-background">
      <Header />
      <main className="container py-10">
        <div className="flex flex-col items-center text-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
            <Calculator className="h-6 w-6" />
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Viral Destino</p>
          <h1 className="font-display text-3xl font-bold text-foreground leading-tight">
            Monte a sugestao perfeita cruzando orcamento, clima e companhia
          </h1>
          <p className="text-sm text-muted-foreground">
            Escolha orcamento, ambito e vibe e clique em "Ver sugestao" para ver destinos que pedem um print e um compartilhamento imediato.
          </p>
        </div>

        <div className="bg-card border border-border/60 rounded-2xl p-6 md:p-8 shadow-elegant space-y-4">
          <div className="rounded-xl border border-border/60 overflow-hidden">
            <Table>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={row.id} className={index % 2 === 0 ? "bg-muted/20" : ""}>
                    <TableCell className="font-semibold">{row.section}</TableCell>
                    <TableCell>{row.input}</TableCell>
                  </TableRow>
                ))}
                <TableRow className="bg-card/80">
                  <TableCell colSpan={2}>
                    <div className="flex flex-wrap items-center gap-3 justify-between">
                      <p className="text-sm text-muted-foreground">
                        Preencha as colunas e clique para gerar o plano ideal.
                      </p>
                      <Button
                        type="button"
                        className="rounded-xl"
                        onClick={() => {
                          const hasBudget = budget.trim().length > 0;
                          const hasDuration = duration.trim().length > 0;
                          if (!hasBudget || !hasDuration) {
                            setError("Preencha orcamento e duracao para gerar a sugestao.");
                            setShowResult(false);
                            return;
                          }
                          setError("");
                          setShowResult(true);
                        }}
                      >
                        Ver sugestao
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          {error && <p className="text-sm text-destructive">{error}</p>}

          {showResult && (
            <div className="border border-border/60 rounded-xl p-5 bg-card/60 space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <p className="text-sm font-semibold text-foreground">Sugestao gerada</p>
              </div>
              {isLowBudget ? (
                <div className="rounded-xl border border-primary/30 bg-primary/5 p-3 space-y-1">
                  <p className="text-sm font-semibold text-primary">
                    Mini-Aventura Local: seu orcamento de R$ {numericBudget} brilha perto de casa
                  </p>
                  <p className="text-sm text-primary/90">
                    Transforme em staycation ou escapada rapida para uma cidade vizinha. 3 dias em um hotel boutique, museus locais e gastronomia de assinatura, sem gastar com voos.
                  </p>
                </div>
              ) : !canSuggest ? (
                <div className="rounded-xl border border-amber-300 bg-amber-50 p-3 space-y-1 text-amber-900">
                  <p className="text-sm font-semibold">
                    Orcamento abaixo do minimo realista para {scope === "internacional" ? "viagem internacional" : "rota nacional"}.
                  </p>
                  <p className="text-sm">
                    Ajuste para pelo menos R$ {scope === "internacional" ? intlMin : nationalMin} ou escolha ambito nacional para ver opcoes viaveis.
                  </p>
                </div>
              ) : (
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    Sugestoes:{" "}
                    {result.suggestions.length === 0
                      ? "Preencha os campos para ver ideias."
                      : result.suggestions.join(" | ")}
                  </p>
                  <p>Hospedagem indicada: {result.hospedagem.join(" ")}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CalculatorPage;
