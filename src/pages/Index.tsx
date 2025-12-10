import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { AboutPreview } from "@/components/home/AboutPreview";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

import heroImage from "@/assets/hero-artisan.jpg";
import artisanImage from "@/assets/artisan-portrait.jpg";
import productWood from "@/assets/product-wood.jpg";
import productCrochet from "@/assets/product-crochet.jpg";
import productCeramic from "@/assets/product-ceramic.jpg";

const featuredProducts = [
  {
    id: 1,
    name: "Kit especial 10 Cestas Clássicas Média",
    category: "Madeira",
    price: "R$ 120,00",
    image: productWood,
  },
  {
    id: 2,
    name: "Manta em Crochê Artesanal",
    category: "Crochê",
    price: "R$ 320,00",
    image: productCrochet,
  },
  {
    id: 3,
    name: "Vaso Decorativo em Cerâmica",
    category: "Cerâmica",
    price: "R$ 250,00",
    image: productCeramic,
  },
];

const Index = () => {
  return (
    <Layout>
      <HeroSection heroImage={heroImage} />
      <FeaturedProducts products={featuredProducts} />
      <AboutPreview artisanImage={artisanImage} />
      <TestimonialsSection />
    </Layout>
  );
};

export default Index;
