import { Link } from "react-router-dom";
import { ArrowRight, Scissors, Heart, Leaf } from "lucide-react";

interface AboutPreviewProps {
  artisanImage: string;
}

export function AboutPreview({ artisanImage }: AboutPreviewProps) {
  const values = [
    { icon: Scissors, title: "Tradição", description: "Técnicas passadas de geração em geração" },
    { icon: Heart, title: "Paixão", description: "Cada peça é feita com amor e dedicação" },
    { icon: Leaf, title: "Sustentável", description: "Materiais naturais e práticas conscientes" },
  ];

  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-wide mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative animate-fade-up">
            <div className="image-frame aspect-[4/5]">
              <img
                src={artisanImage}
                alt="Artesã trabalhando"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div className="space-y-8 animate-fade-up delay-200">
            <div>
              <span className="font-body text-sm tracking-widest uppercase text-primary">
                Nossa História
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mt-2">
                A Arte de Criar com as Mãos
              </h2>
            </div>

            <p className="font-body text-muted-foreground leading-relaxed">
              Há mais de 20 anos, transformamos matérias-primas em obras de arte únicas. 
              Cada peça carrega um pedaço da nossa história, das nossas raízes e do 
              amor pelo artesanato brasileiro. Trabalhamos com técnicas tradicionais, 
              honrando a sabedoria dos que vieram antes de nós.
            </p>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto sm:mx-0 mb-3">
                    <value.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-medium text-foreground">
                    {value.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mt-1">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>

            <Link to="/sobre" className="btn-artisan inline-flex group">
              Conhecer Mais
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
