import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background texture-paper">
      <Header />
      <main className="flex-1 pt-16 sm:pt-20">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
