import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Bell, Send } from "lucide-react";

type InlineSignupProps = {
  title?: string;
  description?: string;
  context?: string;
};

export const InlineSignup = ({
  title = "Receba alertas rápidos",
  description = "Novas listas, quizzes e alertas direto no seu email ou WhatsApp.",
  context,
}: InlineSignupProps) => {
  const [emailOrWhatsapp, setEmailOrWhatsapp] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailOrWhatsapp.trim()) return;
    setSubmitted(true);
    // noop: aqui conectaria a um backend ou service
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-card border border-border/60 rounded-2xl p-6 md:p-8 shadow-elegant"
    >
      <div className="flex items-start gap-3">
        <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
          <Bell className="h-5 w-5" />
        </div>
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-2">
            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
              {title}
            </h3>
            {context && (
              <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground border border-border/60">
                {context}
              </span>
            )}
          </div>
          <p className="text-muted-foreground text-sm">{description}</p>
          {submitted ? (
            <p className="text-sm font-semibold text-primary">
              Pronto! Você receberá os alertas assim que tivermos novidades.
            </p>
          ) : (
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleSubmit}>
              <Input
                value={emailOrWhatsapp}
                onChange={(e) => setEmailOrWhatsapp(e.target.value)}
                placeholder="Seu email ou WhatsApp com DDD"
                className="rounded-xl"
              />
              <Button type="submit" className="rounded-xl gap-2">
                <Send className="h-4 w-4" />
                Receber alertas
              </Button>
            </form>
          )}
          <p className="text-[12px] text-muted-foreground/80">
            Sem spam. Enviamos apenas quando sair algo realmente quente.
          </p>
        </div>
      </div>
    </motion.div>
  );
};
