import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ShieldCheck } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="top" className="container py-10 scroll-mt-24">
        <div className="bg-card border border-border/60 rounded-2xl p-8 shadow-elegant space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Politica de Privacidade
              </p>
              <h1 className="font-display text-3xl font-bold text-foreground leading-tight">
                Transparencia total sobre dados, sem letra miuda
              </h1>
            </div>
          </div>

          <section className="space-y-3 text-muted-foreground leading-relaxed">
            <h2 className="font-semibold text-foreground">1. Dados que coletamos</h2>
            <p>
              Coletamos apenas o necessario para oferecer recomendacoes e experiencias
              personalizadas: navegacao nas paginas, filtros usados, votos em quizzes e
              preferencias salvas no seu dispositivo (localStorage). Nao vendemos dados,
              nao perfilamos para anuncios de terceiros.
            </p>
          </section>

          <section className="space-y-3 text-muted-foreground leading-relaxed">
            <h2 className="font-semibold text-foreground">2. Como usamos seus dados</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Melhorar recomendacoes de artigos, listas Top 10 e quizzes.</li>
              <li>Exibir historico local de tags e filtros para voce retomar onde parou.</li>
              <li>Enviar alertas opt-in (email/WhatsApp) apenas quando houver novidades quentes.</li>
            </ul>
          </section>

          <section className="space-y-3 text-muted-foreground leading-relaxed">
            <h2 className="font-semibold text-foreground">3. Armazenamento e retencao</h2>
            <p>
              Preferimos armazenamento local no seu dispositivo (localStorage). Dados de contato
              usados em alertas sao removidos mediante solicitacao ou descadastro. Logs anonimos
              de uso sao agregados e nao identificam voce.
            </p>
          </section>

          <section className="space-y-3 text-muted-foreground leading-relaxed">
            <h2 className="font-semibold text-foreground">4. Seus direitos</h2>
            <p>
              Voce pode solicitar acesso, correcao ou exclusao dos seus dados de contato a qualquer
              momento. Para itens armazenados localmente, basta limpar os dados do navegador; para
              alertas, responda SAIR em qualquer mensagem ou use o formulario de contato.
            </p>
          </section>

          <section className="space-y-3 text-muted-foreground leading-relaxed">
            <h2 className="font-semibold text-foreground">5. Contato</h2>
            <p>
              Duvidas? Fale conosco em <a className="text-primary hover:underline" href="/contato">/contato</a>.
              Levamos privacidade a serio e respondemos rapido.
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

export default Privacy;
