import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    location: "São Paulo, SP",
    text: "A peça que encomendei superou todas as minhas expectativas. O acabamento é impecável e o carinho em cada detalhe é visível. Já virou peça de destaque na minha sala!",
    rating: 5,
  },
  {
    id: 2,
    name: "João Santos",
    location: "Rio de Janeiro, RJ",
    text: "Presente perfeito para minha mãe. Ela se emocionou ao ver o trabalho artesanal. A comunicação durante todo o processo foi excelente.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ana Costa",
    location: "Belo Horizonte, MG",
    text: "Encomendei peças para decorar meu escritório e amei o resultado. Arte de verdade, feita por mãos talentosas. Já estou planejando a próxima encomenda!",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding">
      <div className="container-wide mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16 animate-fade-up">
          <span className="font-body text-sm tracking-widest uppercase text-primary">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mt-2">
            O Que Dizem Nossos Clientes
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.id}
              className={`card-artisan p-8 relative animate-fade-up delay-${(index + 1) * 100}`}
            >
              {/* Quote Icon */}
              <Quote
                size={40}
                className="absolute top-6 right-6 text-primary/10"
              />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-primary fill-primary"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div>
                <p className="font-display text-foreground font-medium">
                  {testimonial.name}
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  {testimonial.location}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
