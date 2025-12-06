import { Link } from "react-router-dom";
import { Instagram, Mail, Heart, ShoppingBag } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-wide mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-xl font-semibold text-foreground">
              Vime Decore <span className="text-primary">é Arte</span>
            </h3>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">
              Arte feita à mão com alma e dedicação. Cada peça é única, carregando a história e o carinho de quem a criou.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-medium text-foreground">
              Navegação
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/", label: "Início" },
                { href: "/sobre", label: "Sobre" },
                { href: "/portfolio", label: "Portfólio" },
                { href: "/servicos", label: "Serviços" },
                { href: "/contato", label: "Contato" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-medium text-foreground">
              Redes Sociais
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/vimedecorevime/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://shopee.com.br/shop/751195034?fbclid=PAb21jcAOgRxhleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAafwSJ8W3zFVUcMaLe5c8-i8hWuUxiGhn6snNYMyvgO2msrr1HRml3ed46Yjfw_aem_kXMy_cau4j--09a10LL21w&tab=shop&utm_content=link_in_bio&utm_medium=social&utm_source=ig"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Shopee"
              >
                <ShoppingBag size={18} />
              </a>

              <a
                href="mailto:vimedecore@gmail.com"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="font-body text-sm text-muted-foreground text-center flex items-center justify-center gap-1">
            © {currentYear} Vimedecore. Feito com{" "}
            <Heart size={14} className="text-primary fill-primary" /> no Brasil.
          </p>
        </div>
      </div>
    </footer>
  );
}
