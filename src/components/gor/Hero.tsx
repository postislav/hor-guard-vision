import heroCase from "@/assets/hero-case.png";
import { TacticalButton } from "./TacticalButton";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 tactical-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute top-24 right-0 w-[60%] h-[60%] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <div className="space-y-8 animate-fade-up">
          <div className="label-tag">
            СИСТЕМА СПОСТЕРЕЖЕННЯ // UA-2025
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[0.95] uppercase">
            Контролюй <span className="text-gold">периметр.</span>
            <br />
            Не виходячи з укриття.
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            ГОР-1 — портативна система відеоспостереження 360° в захищеному кейсі.
            Чотири камери, 100 метрів кабелю, один екран.
            <span className="text-foreground"> Розгортання за 3–5 хвилин.</span>
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <TacticalButton variant="primary">
              Замовити <ArrowRight className="w-4 h-4" />
            </TacticalButton>
            <TacticalButton variant="outline">Детальніше</TacticalButton>
          </div>

          <div className="flex items-center gap-6 pt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold animate-pulse" />
              Status: Operational
            </span>
            <span>v.01 / GOR-1</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -m-6 corner-brackets" />
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-gold/70 z-10">
            <span>UNIT-001</span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 bg-gold rounded-full" /> LIVE
            </span>
          </div>
          <div className="relative bg-panel/40 clip-tactical p-8 ring-1 ring-border overflow-hidden">
            <div className="absolute inset-0 tactical-grid opacity-50" />
            <img
              src={heroCase}
              alt="ГОР-1 захищений кейс з обладнанням"
              width={1024}
              height={1024}
              className="relative w-full h-auto drop-shadow-[0_20px_40px_hsl(var(--gold)/0.25)]"
            />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              <span>SCHEMATIC // CASE-A</span>
              <span>360° COVERAGE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
