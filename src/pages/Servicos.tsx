import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle, Clock, Palette, MessageSquare, Send, Star, Quote } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const steps = [
  {
    icon: MessageSquare,
    title: "1. Conversa Inicial",
    description: "Você entra em contato descrevendo sua ideia ou necessidade. Conversamos sobre tamanho, cores, estilo e prazo."
  },
  {
    icon: Palette,
    title: "2. Projeto & Orçamento",
    description: "Desenvolvo uma proposta personalizada com desenho/esboço e valor. Você aprova antes de iniciarmos."
  },
  {
    icon: Clock,
    title: "3. Criação",
    description: "Com tudo aprovado, começo a criar sua peça. Envio fotos do progresso para você acompanhar."
  },
  {
    icon: CheckCircle,
    title: "4. Entrega",
    description: "Peça finalizada com carinho, embalada com cuidado e enviada para você ou retirada no ateliê."
  }
];

const testimonials = [
  {
    name: "Carla Mendes",
    text: "Encomendei um presente de casamento personalizado. A comunicação foi excelente e o resultado superou todas as expectativas!",
    rating: 5
  },
  {
    name: "Roberto Alves",
    text: "Precisava de peças específicas para decorar meu restaurante. O trabalho foi impecável e dentro do prazo combinado.",
    rating: 5
  }
];

const Servicos = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    productType: "",
    description: "",
    deadline: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = encodeURIComponent(
      `Nova solicitação de encomenda:\n\nNome: ${formData.name}\nEmail: ${formData.email}\nTelefone: ${formData.phone}\nTipo: ${formData.productType}\nDescrição: ${formData.description}\nPrazo: ${formData.deadline}`
    );
    
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
    
    toast({
      title: "Solicitação enviada!",
      description: "Você será redirecionado para o WhatsApp.",
    });
  };

  return (
    <Layout>
      {/* Header */}
      <section className="section-padding bg-secondary/50">
        <div className="container-wide mx-auto text-center">
          <span className="font-body text-sm tracking-widest uppercase text-primary">
            Serviços
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-foreground mt-2 animate-fade-up">
            Encomendas Personalizadas
          </h1>
          <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto animate-fade-up delay-100">
            Transforme sua ideia em uma peça única e exclusiva. Trabalho com encomendas sob medida para criar exatamente o que você precisa.
          </p>
        </div>
      </section>

      {/* How it Works */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <span className="font-body text-sm tracking-widest uppercase text-primary">
              Processo
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mt-2">
              Como Funciona
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`card-artisan p-6 text-center animate-fade-up delay-${(index + 1) * 100}`}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display text-lg font-medium text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section className="section-padding bg-secondary/50">
        <div className="container-narrow mx-auto">
          <div className="text-center mb-12">
            <span className="font-body text-sm tracking-widest uppercase text-primary">
              Formulário
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mt-2">
              Solicite Seu Orçamento
            </h2>
            <p className="font-body text-muted-foreground mt-4">
              Preencha o formulário abaixo e entrarei em contato para discutirmos sua encomenda.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="card-artisan p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-body">Nome completo</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Seu nome"
                  required
                  className="bg-background"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="font-body">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="seu@email.com"
                  required
                  className="bg-background"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone" className="font-body">Telefone/WhatsApp</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(11) 99999-9999"
                  required
                  className="bg-background"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="productType" className="font-body">Tipo de Produto</Label>
                <Input
                  id="productType"
                  value={formData.productType}
                  onChange={(e) => setFormData({ ...formData, productType: e.target.value })}
                  placeholder="Ex: Cerâmica, Crochê, Madeira..."
                  required
                  className="bg-background"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="font-body">Descreva sua ideia</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Conte sobre o que você imagina: tamanho, cores, estilo, finalidade..."
                rows={5}
                required
                className="bg-background resize-none"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="deadline" className="font-body">Prazo desejado</Label>
              <Input
                id="deadline"
                value={formData.deadline}
                onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                placeholder="Ex: 30 dias, sem pressa, urgente..."
                className="bg-background"
              />
            </div>

            <Button type="submit" variant="artisan" size="lg" className="w-full">
              <Send size={18} />
              Enviar Solicitação
            </Button>
          </form>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="text-center mb-12">
            <span className="font-body text-sm tracking-widest uppercase text-primary">
              Depoimentos
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mt-2">
              Clientes Satisfeitos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <article
                key={index}
                className={`card-artisan p-8 relative animate-fade-up delay-${(index + 1) * 100}`}
              >
                <Quote size={40} className="absolute top-6 right-6 text-primary/10" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-primary fill-primary" />
                  ))}
                </div>
                <p className="font-body text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                <p className="font-display text-foreground font-medium">
                  {testimonial.name}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Servicos;
