import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Scale } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="top" className="container py-10 scroll-mt-24">
        <div className="bg-card border border-border/60 rounded-2xl p-8 shadow-elegant space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <Scale className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Termos de Uso
              </p>
              <h1 className="font-display text-3xl font-bold text-foreground leading-tight">
                Uso rapido, responsavel e com creditos claros
              </h1>
            </div>
          </div>

          <section className="space-y-3 text-muted-foreground leading-relaxed">
            <h2 className="font-semibold text-foreground">1. Conteudo e finalidade</h2>
            <p>
              Entregamos conteudo editorial, listas e quizzes para entretenimento e inspiracao.
              Nao somos consultoria financeira, juridica ou medica. Use nossas informacoes como
              ponto de partida, nao como decisao final.
            </p>
          </section>

          <section className="space-y-3 text-muted-foreground leading-relaxed">
            <h2 className="font-semibold text-foreground">2. Direitos autorais</h2>
            <p>
              Todo o conteudo e protegido por direitos autorais. Compartilhe os links - nao
              replique o texto integral sem autorizacao. Ao compartilhar, mantenha a marca
              e o link original visiveis.
            </p>
          </section>

          <section className="space-y-3 text-muted-foreground leading-relaxed">
            <h2 className="font-semibold text-foreground">3. Interacoes</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Votos e quizzes sao para engajamento e podem usar contadores simulados.</li>
              <li>Comentarios devem manter respeito; conteudo ofensivo pode ser removido.</li>
              <li>Trapacas em rankings/pontos podem resultar em reset dos pontos locais.</li>
            </ul>
          </section>

          <section className="space-y-3 text-muted-foreground leading-relaxed">
            <h2 className="font-semibold text-foreground">4. Limitacao de responsabilidade</h2>
            <p>
              Nao garantimos disponibilidade ininterrupta do site. Nao nos responsabilizamos por
              danos decorrentes do uso indevido do conteudo. Links externos pertencem a terceiros.
            </p>
          </section>

          <section className="space-y-3 text-muted-foreground leading-relaxed">
            <h2 className="font-semibold text-foreground">5. Alteracoes</h2>
            <p>
              Podemos atualizar estes Termos e notificaremos em destaque na home quando ocorrer.
              O uso continuado apos alteracoes implica concordancia com a versao vigente.
            </p>
          </section>

          <div className="pt-2 text-right">
            <a href="#top" className="text-primary text-sm hover:underline">
              Voltar ao topo
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
