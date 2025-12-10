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
import productAlls from "@/assets/product-alls.jpg"

const featuredProducts = [
  {
    id: 1,
    name: "Kit especiaPalha de Pinus para embalagens Pacote com 40g.l 10 Cestas Clássicas Média",
    category: "Madeira",
    price: "R$ 19,00",
    image: productAlls,
  },
  {
    id: 2,
    name: "Cesta Clássica Pequena em Vime Natural",
    category: "Madeira",
    price: "R$ 12,00",
    image: productCrochet,
  },
  {
    id: 3,
    name: "50 hastes de vime enrolado para arranjos / Rococó",
    category: "Madeira",
    price: "R$ 19,30 - 30,90",
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
