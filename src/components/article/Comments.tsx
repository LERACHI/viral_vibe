import { useEffect, useMemo, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

type Comment = {
  id: string;
  name: string;
  message: string;
  createdAt: string;
};

type CommentsProps = {
  slug: string;
  articleTitle?: string;
};

const STORAGE_PREFIX = "viralnow:comments";

const storageKey = (slug: string) => `${STORAGE_PREFIX}:${slug}`;

const isBrowser = typeof window !== "undefined";

export const Comments = ({ slug, articleTitle }: CommentsProps) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isBrowser) return;
    try {
      const saved = localStorage.getItem(storageKey(slug));
      if (saved) {
        setComments(JSON.parse(saved));
      }
    } catch (err) {
      console.error("Erro ao carregar comentários", err);
    }
  }, [slug]);

  const saveComments = (next: Comment[]) => {
    setComments(next);
    if (!isBrowser) return;
    localStorage.setItem(storageKey(slug), JSON.stringify(next));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    const trimmedName = name.trim();
    const trimmedMessage = message.trim();

    if (trimmedName.length < 2) {
      setError("Digite um nome com pelo menos 2 caracteres.");
      return;
    }

    if (trimmedMessage.length < 10) {
      setError("O comentário precisa ter pelo menos 10 caracteres.");
      return;
    }

    const newComment: Comment = {
      id: crypto.randomUUID(),
      name: trimmedName,
      message: trimmedMessage,
      createdAt: new Date().toISOString(),
    };

    const nextComments = [newComment, ...comments].slice(0, 50);
    saveComments(nextComments);
    setMessage("");
  };

  const totalComments = comments.length;

  const subtitle = useMemo(() => {
    if (totalComments === 0) return "Seja o primeiro a comentar.";
    if (totalComments === 1) return "1 comentário neste artigo.";
    return `${totalComments} comentários neste artigo.`;
  }, [totalComments]);

  return (
    <section className="mt-12">
      <div className="bg-card border border-border/60 rounded-2xl p-6 md:p-8 shadow-elegant">
        <div className="flex flex-col gap-2 mb-6">
          <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
            Engajamento
          </p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Comentários
          </h2>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground">
                Nome
              </label>
              <Input
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Como devemos te chamar?"
                autoComplete="name"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Comentário
                </label>
                <span className="text-xs text-muted-foreground">
                  Mínimo 10 caracteres
                </span>
              </div>
              <Textarea
                id="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Compartilhe sua opinião, dicas ou perguntas sobre este artigo."
                rows={5}
              />
            </div>

            {error && (
              <p className="text-sm text-destructive bg-destructive/10 border border-destructive/50 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            <Button type="submit" className="w-full md:w-auto">
              Publicar comentário
            </Button>
            <p className="text-xs text-muted-foreground">
              Comentários ficam salvos apenas neste navegador. Seja respeitoso e
              evite compartilhar dados pessoais.
            </p>
          </form>

          <div className="space-y-4">
            {comments.length === 0 ? (
              <div className="border border-dashed border-border rounded-xl p-6 text-center text-muted-foreground">
                Nenhum comentário ainda. Que tal iniciar a conversa?
              </div>
            ) : (
              <div className="space-y-4">
                {comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="border border-border/60 rounded-xl p-4 bg-muted/40"
                  >
                    <div className="flex items-start gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback>
                          {comment.name.slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-foreground text-sm">
                            {comment.name}
                          </p>
                          <span className="text-[11px] text-muted-foreground">
                            {formatDistanceToNow(new Date(comment.createdAt), {
                              addSuffix: true,
                              locale: ptBR,
                            })}
                          </span>
                        </div>
                        {articleTitle && (
                          <p className="text-xs text-muted-foreground">
                            Sobre: {articleTitle}
                          </p>
                        )}
                        <Separator className="my-2" />
                        <p className="text-sm text-foreground leading-relaxed whitespace-pre-line">
                          {comment.message}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
