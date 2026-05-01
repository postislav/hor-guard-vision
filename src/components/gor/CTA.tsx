import { Phone, Mail } from "lucide-react";
import { TacticalButton } from "./TacticalButton";
import { useOrder } from "./OrderContext";

export const CTA = () => {
  const { open } = useOrder();
  return (
    <section id="contact" className="relative py-32 lg:py-40 overflow-hidden border-y border-border bg-panel/30">
      <div className="absolute inset-0 tactical-grid opacity-30" />
      <div className="absolute inset-0 grid place-items-center pointer-events-none select-none">
        <span className="font-display text-[18rem] md:text-[24rem] lg:text-[32rem] leading-none text-foreground/[0.025] tracking-widest whitespace-nowrap">
          ГОР-1
        </span>
      </div>

      <div className="container relative text-center max-w-2xl space-y-8">
        <div className="label-tag justify-center mx-auto inline-flex">// Контакт</div>
        <h2 className="font-display text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.95]">
          Готові захистити <span className="text-gold">позицію?</span>
        </h2>
        <p className="text-lg text-muted-foreground">
          Зв'яжіться з нами для замовлення, консультації або демонстрації системи.
          Відповідаємо протягом доби.
        </p>
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <TacticalButton variant="primary" onClick={() => open("call")}>
            <Phone className="w-4 h-4" /> Зателефонувати
          </TacticalButton>
          <TacticalButton variant="outline" onClick={() => open("info")}>
            <Mail className="w-4 h-4" /> Написати нам
          </TacticalButton>
        </div>
      </div>
    </section>
  );
};
