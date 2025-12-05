import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "554991572719"; // Replace with actual number
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os produtos artesanais.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-float"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={28} className="text-white" />
    </a>
  );
}
