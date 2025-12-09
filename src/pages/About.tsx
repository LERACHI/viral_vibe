import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Flame, Sparkles, Send } from "lucide-react";
import { InlineSignup } from "@/components/shared/InlineSignup";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="top" className="container py-10 scroll-mt-24">
        <div className="bg-card border border-border/60 rounded-2xl p-8 shadow-elegant">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <Flame className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Sobre Nos
              </p>
              <h1 className="font-display text-3xl font-bold text-foreground leading-tight">
                Somos o atalho para o que todo mundo vai comentar amanha
              </h1>
            </div>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Nao usamos robos frios para decidir o que merece sua atencao. Curamos cada lista,
              quiz e alerta como se fosse um segredo de amigo: rapido, direto e com potencial
              de virar assunto no grupo. Inspirados em creators que vivem garimpando trends,
              transformamos o ruido da internet em historias que pedem para ser compartilhadas.
            </p>
            <p>
              Nossa missao e simples: entregar descobertas que facam voce marcar alguem, salvar
              para depois e voltar por mais. Cada clique aqui vale tempo - e respeitamos isso
              com curadoria obsessiva, visual caprichado e CTAs que levam voce ao ponto certo.
            </p>
            <p className="text-foreground font-semibold">
              Se for quente, vira pauta. Se for util, vira guia. Se for surpreendente, vira viral.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="rounded-xl gap-2">
              <Link to="/buscar">Explorar agora</Link>
            </Button>
            <Button variant="secondary" asChild className="rounded-xl gap-2">
              <Link to="/contato">
                <Send className="h-4 w-4" />
                Fale com a gente
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-10">
          <InlineSignup
            context="Sobre nos"
            title="Fique na lista VIP de alertas"
            description="Receba apenas quando tivermos algo realmente compartilhavel."
          />
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Curadoria obsessiva",
              text: "Garimpamos o que e quente e testamos angulos virais antes de publicar.",
            },
            {
              title: "Conteudo que pede compartilhamento",
              text: "Listas, quizzes e rankings com ganchos sociais para marcar amigos.",
            },
            {
              title: "Velocidade e clareza",
              text: "Microcopy direta, CTA explicito e paginas leves para nao perder o hype.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-card border border-border/60 rounded-xl p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="h-4 w-4 text-primary" />
                <h3 className="font-semibold text-foreground">{item.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-right">
          <a href="#top" className="text-primary text-sm hover:underline">
            Voltar ao topo
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
