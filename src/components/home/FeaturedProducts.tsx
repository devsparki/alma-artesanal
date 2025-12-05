import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
}

interface FeaturedProductsProps {
  products: Product[];
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <section className="section-padding">
      <div className="container-wide mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16 animate-fade-up">
          <span className="font-body text-sm tracking-widest uppercase text-primary">
            Destaques
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mt-2">
            Peças em Destaque
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto">
            Conheça algumas das nossas criações mais especiais, cada uma com sua história única.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <article
              key={product.id}
              className={`group card-artisan overflow-hidden animate-fade-up delay-${(index + 1) * 100}`}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="font-body text-xs tracking-widest uppercase text-primary">
                  {product.category}
                </span>
                <h3 className="font-display text-xl font-medium text-foreground mt-1">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between mt-4">
                  <span className="font-body text-lg font-semibold text-accent">
                    {product.price}
                  </span>
                  <Link
                    to="/portfolio"
                    className="font-body text-sm text-primary flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Ver mais <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/portfolio" className="btn-outline-artisan">
            Ver Todas as Peças
          </Link>
        </div>
      </div>
    </section>
  );
}
