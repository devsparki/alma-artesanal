import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

import productWood from "@/assets/product-wood.jpg";
import productCrochet from "@/assets/product-crochet.jpg";
import productCeramic from "@/assets/product-ceramic.jpg";
import productCoroa from "@/assets/product-coroa.jpg";
import productLuz from "@/assets/product-luz.jpg";
import productAlls from  "@/assets/product-alls.jpg";

const categories = ["Todos", "Madeira", "Crochê", "Cerâmica", "Couro"];

const products = [
  { id: 1, name: "Tigela Rústica", category: "Madeira", price: "R$ 180,00", image: productWood, description: "Tigela esculpida à mão em madeira maciça" },
  { id: 2, name: "Manta Artesanal", category: "Crochê", price: "R$ 320,00", image: productCrochet, description: "Manta em crochê com padrão tradicional" },
  { id: 3, name: "Vaso Decorativo", category: "Cerâmica", price: "R$ 250,00", image: productCeramic, description: "Vaso pintado à mão com motivos regionais" },
  { id: 4, name: "Bandeja de Servir", category: "Madeira", price: "R$ 220,00", image: productAlls, description: "Bandeja torneada em madeira de lei" },
  { id: 5, name: "Toalha de Mesa", category: "Crochê", price: "R$ 450,00", image: productCoroa, description: "Toalha com detalhes em renda" },
  { id: 6, name: "Conjunto de Xícaras", category: "Cerâmica", price: "R$ 180,00", image: productLuz, description: "Conjunto de 4 xícaras com pires" },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProducts = activeCategory === "Todos" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const handleOrder = (productName: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de encomendar: ${productName}`);
    window.open(`https://api.whatsapp.com/send/?phone=554991572719&text&type=phone_number&app_absent=0?text=${message}`, '_blank');
  };

  return (
    <Layout>
      {/* Header */}
      <section className="section-padding bg-secondary/50">
        <div className="container-wide mx-auto text-center">
          <span className="font-body text-sm tracking-widest uppercase text-primary">
            Portfólio
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-foreground mt-2 animate-fade-up">
            Nossas Criações
          </h1>
          <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto animate-fade-up delay-100">
            Explore nossa coleção de peças artesanais únicas, cada uma criada com dedicação e amor.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border sticky top-16 sm:top-20 bg-background/95 backdrop-blur-sm z-40">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`font-body text-sm px-5 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <article
                key={product.id}
                className={`group card-artisan overflow-hidden animate-fade-up delay-${((index % 3) + 1) * 100}`}
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
                </div>
                <div className="p-6 space-y-3">
                  <span className="font-body text-xs tracking-widest uppercase text-primary">
                    {product.category}
                  </span>
                  <h3 className="font-display text-xl font-medium text-foreground">
                    {product.name}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="font-body text-lg font-semibold text-accent">
                      {product.price}
                    </span>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleOrder(product.name)}
                      className="gap-2"
                    >
                      <MessageCircle size={16} />
                      Encomendar
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
