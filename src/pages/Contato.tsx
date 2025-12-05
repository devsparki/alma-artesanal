import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, Mail, Instagram, Facebook, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Contato = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = encodeURIComponent(
      `Mensagem do site:\n\nNome: ${formData.name}\nEmail: ${formData.email}\nAssunto: ${formData.subject}\n\nMensagem: ${formData.message}`
    );
    
    window.open(`https://api.whatsapp.com/send/?phone=554991572719&text&type=phone_number&app_absent=0?text=${message}`, '_blank');
    
    toast({
      title: "Mensagem enviada!",
      description: "Você será redirecionado para o WhatsApp.",
    });
  };

  const contactInfo = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+55 49 9157-2719",
      href: "https://api.whatsapp.com/send/?phone=554991572719&text&type=phone_number&app_absent=0",
      color: "bg-[#25D366]"
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "contato@maosdearte.com",
      href: "mailto:contato@maosdearte.com",
      color: "bg-primary"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@maosdearte",
      href: "https://instagram.com/maosdearte",
      color: "bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737]"
    },
    {
      icon: Facebook,
      label: "Facebook",
      value: "/maosdearte",
      href: "https://facebook.com/maosdearte",
      color: "bg-[#1877F2]"
    }
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="section-padding bg-secondary/50">
        <div className="container-wide mx-auto text-center">
          <span className="font-body text-sm tracking-widest uppercase text-primary">
            Contato
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-foreground mt-2 animate-fade-up">
            Fale Conosco
          </h1>
          <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto animate-fade-up delay-100">
            Tem alguma dúvida ou quer fazer uma encomenda? Entre em contato e responderei o mais rápido possível.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="space-y-8 animate-fade-up">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">
                  Vamos Conversar?
                </h2>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Estou sempre disponível para atender você. Escolha o canal de sua preferência ou preencha o formulário ao lado.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 card-artisan hover:shadow-lg transition-all group"
                  >
                    <div className={`w-12 h-12 rounded-full ${info.color} flex items-center justify-center`}>
                      <info.icon size={20} className="text-background" />
                    </div>
                    <div>
                      <p className="font-body text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-body font-medium text-foreground group-hover:text-primary transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Location */}
              <div className="card-artisan p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-medium text-foreground mb-1">
                      Ateliê
                    </h3>
                    <p className="font-body text-muted-foreground text-sm">
                      Rua das Artes, 123 - Centro<br />
                      São Paulo - SP, 01234-567<br />
                      <span className="text-primary">Visitas com agendamento prévio</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-up delay-200">
              <form onSubmit={handleSubmit} className="card-artisan p-8 space-y-6">
                <h3 className="font-display text-xl font-medium text-foreground mb-4">
                  Envie uma Mensagem
                </h3>

                <div className="space-y-2">
                  <Label htmlFor="name" className="font-body">Nome</Label>
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

                <div className="space-y-2">
                  <Label htmlFor="subject" className="font-body">Assunto</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Sobre o que deseja falar?"
                    required
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-body">Mensagem</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Escreva sua mensagem..."
                    rows={5}
                    required
                    className="bg-background resize-none"
                  />
                </div>

                <Button type="submit" variant="artisan" size="lg" className="w-full">
                  <Send size={18} />
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="section-padding bg-primary">
        <div className="container-wide mx-auto text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-primary-foreground mb-4">
            Prefere Conversar Diretamente?
          </h2>
          <p className="font-body text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Clique no botão abaixo e vamos conversar pelo WhatsApp. Respondo rapidamente!
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=554991572719&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-background font-body font-medium rounded-lg hover:opacity-90 transition-opacity shadow-lg"
          >
            <MessageCircle size={24} />
            Chamar no WhatsApp
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;
