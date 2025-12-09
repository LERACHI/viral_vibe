import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      toast({
        title: "Inscrição confirmada! 🎉",
        description: "Você receberá as melhores notícias no seu email.",
      });
    }
  };

  return (
    <section className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl gradient-hero p-8 md:p-12"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            Não perca nenhuma novidade
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Receba Conteúdo Exclusivo
          </h2>
          <p className="text-white/80 text-lg mb-8">
            As notícias mais curiosas, dicas de viagem imperdíveis e histórias que você não vai encontrar em outro lugar.
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 px-5 rounded-xl bg-white/95 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                required
              />
              <Button
                type="submit"
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 rounded-xl font-semibold shrink-0"
              >
                <Send className="mr-2 h-4 w-4" />
                Inscrever
              </Button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 text-white text-lg font-medium"
            >
              <CheckCircle2 className="h-6 w-6" />
              Obrigado! Verifique seu email.
            </motion.div>
          )}

          <p className="text-white/60 text-xs mt-4">
            Sem spam. Cancele quando quiser.
          </p>
        </div>
      </motion.div>
    </section>
  );
};
