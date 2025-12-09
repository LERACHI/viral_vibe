import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Mail, MessageCircle, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="top" className="container py-10 scroll-mt-24">
        <div className="bg-card border border-border/60 rounded-2xl p-8 shadow-elegant space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Contato
              </p>
              <h1 className="font-display text-3xl font-bold text-foreground leading-tight">
                Fale com a gente e compartilhe sua pauta quente
              </h1>
              <p className="text-sm text-muted-foreground">
                Sugestao de lista, parceria ou historia que precisa viralizar? Manda aqui.
              </p>
            </div>
          </div>

          <form className="grid gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Nome</label>
                <Input placeholder="Seu nome" className="rounded-xl" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email ou WhatsApp</label>
                <Input placeholder="email@exemplo.com ou (DDD) 99999-9999" className="rounded-xl" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Mensagem</label>
              <Textarea
                rows={5}
                placeholder="Conte a pauta, inclua links e por que acha que merece destaque."
                className="rounded-xl"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="text-xs text-muted-foreground flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                Respondemos em ate 1 dia util. Nada de spam, so assuntos que rendem.
              </div>
              <Button type="button" className="rounded-xl gap-2">
                <Send className="h-4 w-4" />
                Enviar mensagem
              </Button>
            </div>
          </form>

          <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-border">
            <div className="p-4 bg-muted/50 rounded-xl">
              <p className="text-sm font-semibold text-foreground">Parcerias e midia</p>
              <p className="text-sm text-muted-foreground">
                Press kit, publis e ativacoes especiais em quizzes/listas? Conte para nos.
              </p>
            </div>
          </div>

          <div className="pt-4 text-right">
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

export default Contact;
