import { ChevronRight } from "lucide-react";

const steps = [
  { n: "01", title: "Розгортання", desc: "Відкрити кейс, дістати камери та кабелі." },
  { n: "02", title: "Монтаж", desc: "Магніт або стяжка. Шарнір 360° на ціль." },
  { n: "03", title: "Підключення", desc: "GX16 в роз'єми реєстратора." },
  { n: "04", title: "Живлення", desc: "Підключити АКБ через XT-60." },
  { n: "05", title: "Моніторинг", desc: "Ввімкнути дисплей. Контроль 24/7." },
];

export const Steps = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container">
        <div className="max-w-3xl mb-16 space-y-6">
          <div className="label-tag">// 05 — Послідовність</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.95]">
            П'ять кроків до <span className="text-gold">контролю</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-2 items-stretch">
          {steps.map((s, i) => (
            <div key={s.n} className="contents">
              <div className="relative bg-panel ring-1 ring-border hover:ring-gold transition-colors p-6 clip-tactical group">
                <div className="font-mono text-[10px] uppercase tracking-widest text-gold mb-4">
                  STEP / {s.n}
                </div>
                <h3 className="font-display text-2xl uppercase tracking-wide mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center -mx-3">
                  <ChevronRight className="w-6 h-6 text-gold/60" strokeWidth={1.5} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
