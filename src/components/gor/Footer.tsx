export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 grid place-items-center bg-gold text-primary-foreground clip-tactical-sm">
            <span className="font-display text-lg leading-none">Г</span>
          </div>
          <span className="font-display text-2xl tracking-widest text-gold">
            ГОР<span className="text-foreground">-1</span>
          </span>
        </div>

        <div className="text-center font-mono text-xs uppercase tracking-widest text-muted-foreground">
          © 2025 — Всі права захищено
        </div>

        <div className="md:text-right">
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-gold">
            <span className="w-2 h-3 bg-gradient-to-b from-[#005bbb] to-[#005bbb]" />
            <span className="w-2 h-3 bg-[#ffd500]" />
            Зроблено в Україні
          </span>
        </div>
      </div>
    </footer>
  );
};
