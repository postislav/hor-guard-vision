import { AlertTriangle, Cable, Monitor } from "lucide-react";

const specs: [string, string][] = [
  ["Захист", "IP67"],
  ["Канали", "4"],
  ["Дисплей", "15.6\" Full HD"],
  ["Сенсор", "Starlight 1/1.8\""],
  ["Кут огляду", "360° / 60°"],
  ["Кабелі", "4×25м"],
  ["Живлення", "7–32В XT-60"],
  ["Споживання", "<4W"],
  ["Температура", "−10…+45°C"],
  ["Розгортання", "3–5хв"],
  ["AI", "WizSense"],
  ["Запис", "AI Coding"],
];

export const Specs = () => {
  return (
    <section id="specs" className="py-24 lg:py-32 bg-panel/30 border-y border-border">
      <div className="container grid lg:grid-cols-2 gap-12 lg:gap-16">
        <div>
          <div className="label-tag mb-6">// 04 — Характеристики</div>
          <h2 className="font-display text-4xl md:text-5xl uppercase leading-[0.95] mb-10">
            Технічні <span className="text-gold">дані</span>
          </h2>

          <div className="ring-1 ring-border bg-background clip-tactical">
            <table className="w-full">
              <tbody>
                {specs.map(([k, v], i) => (
                  <tr key={k} className={i % 2 ? "bg-panel/40" : ""}>
                    <td className="px-5 py-3.5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground border-b border-border w-1/2">
                      {k}
                    </td>
                    <td className="px-5 py-3.5 font-display text-lg text-foreground border-b border-border tracking-wide">
                      {v}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex gap-4 p-5 bg-warning/10 ring-1 ring-warning/40 clip-tactical-sm">
            <AlertTriangle className="w-5 h-5 text-warning shrink-0 mt-0.5" />
            <p className="text-sm text-foreground">
              <span className="font-mono uppercase text-warning text-xs tracking-widest block mb-1">
                Увага
              </span>
              Живлення 7–32В. Перевищення або неправильна полярність — пошкодження пристрою.
            </p>
          </div>
        </div>

        <div className="space-y-4 lg:pt-32">
          <div className="bg-background ring-1 ring-border clip-tactical p-7">
            <div className="flex items-center gap-3 mb-5">
              <Cable className="w-5 h-5 text-gold" />
              <h3 className="font-display text-xl uppercase tracking-wide">Порти та роз'єми</h3>
            </div>
            <ul className="space-y-3 text-sm">
              {[
                ["GX16-4", "4× вхід камер"],
                ["XT-60", "Вхід живлення 7–32В"],
                ["HDMI", "Зовнішній дисплей"],
                ["USB-A ×2", "Маніпулятор / накопичувач"],
                ["RJ-45", "Конфігурація мережі"],
              ].map(([p, d]) => (
                <li key={p} className="flex justify-between border-b border-border/60 pb-2 last:border-0">
                  <span className="font-mono text-xs uppercase tracking-widest text-gold">{p}</span>
                  <span className="text-muted-foreground">{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-background ring-1 ring-border clip-tactical p-7">
            <div className="flex items-center gap-3 mb-5">
              <Monitor className="w-5 h-5 text-gold" />
              <h3 className="font-display text-xl uppercase tracking-wide">Режими дисплею</h3>
            </div>
            <ul className="space-y-3 text-sm">
              {[
                ["Quad", "4 канали одночасно"],
                ["Single", "Повноекранний канал"],
                ["PIP", "Картинка-в-картинці"],
                ["Auto-cycle", "Автоматичне перемикання"],
                ["AI-Alert", "Підсвічування при детекції"],
              ].map(([p, d]) => (
                <li key={p} className="flex justify-between border-b border-border/60 pb-2 last:border-0">
                  <span className="font-mono text-xs uppercase tracking-widest text-gold">{p}</span>
                  <span className="text-muted-foreground">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
