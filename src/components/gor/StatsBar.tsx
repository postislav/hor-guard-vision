const stats = [
  { value: "360°", label: "Контроль периметру" },
  { value: "3-5хв", label: "Час розгортання" },
  { value: "100м", label: "Загальна довжина кабелів" },
  { value: "IP67", label: "Захист корпусу" },
];

export const StatsBar = () => {
  return (
    <section className="border-y border-border bg-panel/60">
      <div className="container grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-border">
        {stats.map((s) => (
          <div key={s.label} className="px-6 py-8 lg:py-10 group hover:bg-panel-elevated transition-colors">
            <div className="font-display text-5xl lg:text-6xl text-gold leading-none mb-2 group-hover:tracking-wider transition-all">
              {s.value}
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
