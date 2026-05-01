const items = [
  { qty: "×4", name: "Камери Caddx Ratel PRO", detail: "Starlight 1/1.8\" сенсор, кут 60°" },
  { qty: "×1", name: "Захищений кейс керування", detail: "Монітор 15.6\" Full HD + реєстратор" },
  { qty: "×4", name: "Кабелі по 25м", detail: "Роз'єми GX16, екранований" },
  { qty: "×1", name: "Акумулятор 6S2P Li-ion", detail: "XT-60 конектор, 22.2В" },
  { qty: "×1", name: "USB-маніпулятор", detail: "Керування меню реєстратора" },
  { qty: "опц.", name: "Модуль гарячої заміни АКБ", detail: "Безперервна робота 24/7" },
];

export const Kit = () => {
  return (
    <section id="kit" className="py-24 lg:py-32">
      <div className="container">
        <div className="max-w-3xl mb-16 space-y-6">
          <div className="label-tag">// 03 — Комплектація</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.95]">
            Що в <span className="text-gold">кейсі</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <article
              key={it.name}
              className="group relative bg-panel ring-1 ring-border hover:ring-gold transition-all p-8 clip-tactical"
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-6">
                ITEM / {String(i + 1).padStart(2, "0")}
              </div>
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-display text-5xl text-gold leading-none">{it.qty}</span>
              </div>
              <h3 className="font-display text-xl uppercase tracking-wide mb-2">{it.name}</h3>
              <p className="text-sm text-muted-foreground">{it.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
