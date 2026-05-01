import { TacticalButton } from "./TacticalButton";
import { useOrder } from "./OrderContext";

const links = [
  { href: "#about", label: "Про систему" },
  { href: "#features", label: "Переваги" },
  { href: "#kit", label: "Комплектація" },
  { href: "#specs", label: "Характеристики" },
  { href: "#contact", label: "Контакт" },
];

export const Navigation = () => {
  const { open } = useOrder();
  const scrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container flex items-center justify-between h-16">
        <a href="#" onClick={scrollTop} className="flex items-center gap-3">
          <div className="relative w-8 h-8 grid place-items-center bg-gold text-primary-foreground clip-tactical-sm">
            <span className="font-display text-lg leading-none">Г</span>
          </div>
          <span className="font-display text-2xl tracking-widest text-gold">
            ГОР<span className="text-foreground">-1</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <TacticalButton onClick={() => open("order")} className="hidden md:inline-flex !py-2.5 !px-5">
          Замовити
        </TacticalButton>
      </div>
    </header>
  );
};
