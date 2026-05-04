import { Navigation } from "@/components/gor/Navigation";
import { Hero } from "@/components/gor/Hero";
import { StatsBar } from "@/components/gor/StatsBar";
import { About } from "@/components/gor/About";
import { Features } from "@/components/gor/Features";
import { Kit } from "@/components/gor/Kit";
import { Specs } from "@/components/gor/Specs";
import { Steps } from "@/components/gor/Steps";
import { Gallery } from "@/components/gor/Gallery";
import { Video } from "@/components/gor/Video";
import { CTA } from "@/components/gor/CTA";
import { Footer } from "@/components/gor/Footer";
import { OrderProvider } from "@/components/gor/OrderContext";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "ГОР-1 — Мобільна система периметрального відеоспостереження";
    const meta =
      document.querySelector('meta[name="description"]') ||
      Object.assign(document.createElement("meta"), { name: "description" });
    meta.setAttribute(
      "content",
      "ГОР-1 — портативна система спостереження 360° у захищеному кейсі. 4 камери, 100м кабелю, IP67. Розгортання за 3–5 хвилин."
    );
    if (!meta.parentNode) document.head.appendChild(meta);
  }, []);

  return (
    <OrderProvider>
      <main className="min-h-screen bg-background text-foreground tactical-noise">
        <Navigation />
        <Hero />
        <StatsBar />
        <About />
        <Features />
        <Kit />
        <Specs />
        <Steps />
        <Gallery />
        <Video youtubeUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
        <CTA />
        <Footer />
      </main>
    </OrderProvider>
  );
};

export default Index;
