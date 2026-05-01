import { Zap, Shield, Moon, Brain, Anchor, Box } from "lucide-react";

const features = [
  { n: "01", icon: Zap, title: "Швидке розгортання", desc: "3-5 хвилин без налаштувань. Розпакував — увімкнув — працює." },
  { n: "02", icon: Shield, title: "Безпека оператора", desc: "Кабель 25м від укриття. Жодного контакту з зоною спостереження." },
  { n: "03", icon: Moon, title: "Нічне спостереження", desc: "Starlight-сенсор без ІЧ-підсвічування. Не демаскує позицію." },
  { n: "04", icon: Brain, title: "ШІ-детекція руху", desc: "WizSense розпізнає людину і техніку. Без хибних спрацювань." },
  { n: "05", icon: Anchor, title: "Універсальне кріплення", desc: "Магніт + стяжки, шарнір 360°. Будь-яка поверхня за секунди." },
  { n: "06", icon: Box, title: "Захищений корпус", desc: "IP67, GX16 роз'єми, −10 до +45°C. Працює там, де інші виходять з ладу." },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 lg:py-32 bg-panel/30 border-y border-border">
      <div className="container">
        <div className="max-w-3xl mb-16 space-y-6">
          <div className="label-tag">// 02 — Переваги</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.95]">
            Шість причин обрати <span className="text-gold">ГОР-1</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <article
                key={f.n}
                className="group relative bg-background p-8 lg:p-10 hover:bg-panel transition-colors duration-300"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                <div className="flex items-start justify-between mb-8">
                  <span className="font-display text-5xl text-muted-foreground/30 group-hover:text-gold/40 transition-colors">
                    {f.n}
                  </span>
                  <div className="w-12 h-12 grid place-items-center bg-panel ring-1 ring-border group-hover:ring-gold group-hover:text-gold transition-colors clip-tactical-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="font-display text-2xl uppercase mb-3 tracking-wide">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
