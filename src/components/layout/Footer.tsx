import { TrendingUp, Plane, Lightbulb, Wallet, Calculator, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  { label: "Em Alta", href: "/categoria/em-alta#topo", icon: TrendingUp },
  { label: "Viagens", href: "/categoria/viagens#topo", icon: Plane },
  { label: "Curiosidades", href: "/categoria/curiosidades#topo", icon: Lightbulb },
  { label: "Economizar", href: "/categoria/economizar#topo", icon: Wallet },
  { label: "Viral Destino", href: "/calculadora-do-destino#top", icon: Calculator },
];

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100000945036863", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/rachileandro/", label: "Instagram" },
  { icon: Twitter, href: "https://www.instagram.com/rachileandro/", label: "Twitter" },
  { icon: Youtube, href: "https://www.facebook.com/profile.php?id=100000945036863", label: "YouTube" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl gradient-hero">
                <span className="text-xl font-bold text-primary-foreground">V</span>
              </div>
              <span className="font-display text-xl font-bold tracking-tight">
                Viral<span className="text-primary">Now</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6">
              Seu destino para as noticias mais curiosas, dicas de viagem imperdiveis e conteudo que voce vai querer compartilhar.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Categorias</h4>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.label}>
                  <Link
                    to={category.href}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <category.icon className="h-4 w-4" />
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/sobre#top" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sobre Nos
                </Link>
              </li>
              <li>
                <Link to="/politica-de-privacidade#top" className="text-muted-foreground hover:text-foreground transition-colors">
                  Politica de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos-de-uso#top" className="text-muted-foreground hover:text-foreground transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/contato#top" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>(c) {new Date().getFullYear()} ViralNow. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
