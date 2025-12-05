import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  heroImage: string;
}

export function HeroSection({ heroImage }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Artesanato feito à mão"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
      </div>

      {/* Content */}
      <div className="relative container-wide mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl space-y-8 animate-fade-up">
          <span className="inline-block font-body text-sm tracking-widest uppercase text-primary">
            Artesanato Autêntico
          </span>
          
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground leading-tight">
            Arte feita à mão com{" "}
            <span className="text-primary italic">alma</span> e{" "}
            <span className="text-accent italic">dedicação</span>
          </h1>

          <p className="font-body text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
            Cada peça é única, criada com técnicas tradicionais e materiais 
            selecionados. Descubra o encanto do artesanato brasileiro.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link to="/portfolio" className="btn-artisan group">
              Ver Portfólio
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/servicos" className="btn-outline-artisan">
              Fazer Encomenda
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
