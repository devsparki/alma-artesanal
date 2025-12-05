import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, Mail, Instagram, Facebook, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const enviarMensagem = () => {
    if (!nome || !email || !mensagem) {
      toast({ title: "Preencha todos os campos!", variant: "destructive" });
      return;
    }

    const text = encodeURIComponent(
      `Olá! Meu nome é ${nome}.\nMeu e-mail é: ${email}\nMensagem: ${mensagem}`
    );

    window.open(`https://wa.me/554991572719?text=${text}`, "_blank");
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-12">

        <h1 className="text-4xl font-bold text-center mb-10">Entre em Contato</h1>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Formulário */}
          <div className="space-y-6">
            <div>
              <Label>Nome</Label>
              <Input value={nome} onChange={(e) => setNome(e.target.value)} />
            </div>

            <div>
              <Label>E-mail</Label>
              <Input value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div>
              <Label>Mensagem</Label>
              <Textarea rows={5} value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
            </div>

            <Button onClick={enviarMensagem} className="w-full flex items-center gap-2">
              Enviar via WhatsApp <Send size={16} />
            </Button>
          </div>

          {/* Informações */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Phone /> (49) 9157-2719
            </div>

            <div className="flex items-center gap-3">
              <Mail /> vimedecore@gmail.com
            </div>

            <div className="flex items-center gap-3">
              <MapPin /> Correia Pinto - SC
            </div>

            <div className="flex items-center gap-3">
              <Instagram /> @vimedecorevime
            </div>

            <div className="flex items-center gap-3">
              <Facebook /> Vimedecore
            </div>

            <a
              href="https://wa.me/554991572719"
              target="_blank"
              className="flex items-center gap-3 text-green-600 underline"
            >
              <MessageCircle /> Chamar no WhatsApp
            </a>
          </div>

        </div>
      </div>
    </Layout>
  );
}
