import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "outline" | "ghost";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export const TacticalButton = forwardRef<HTMLButtonElement, Props>(
  ({ variant = "primary", className, children, ...props }, ref) => {
    const base =
      "group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 font-mono text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-200 clip-tactical disabled:opacity-50";

    const styles: Record<Variant, string> = {
      primary:
        "bg-gold text-primary-foreground hover:bg-primary-glow hover:shadow-[0_0_24px_-4px_hsl(var(--gold)/0.6)]",
      outline:
        "bg-transparent text-foreground ring-1 ring-inset ring-border hover:ring-gold hover:text-gold",
      ghost:
        "bg-panel text-foreground hover:bg-panel-elevated",
    };

    return (
      <button ref={ref} className={cn(base, styles[variant], className)} {...props}>
        <span className="relative z-10 flex items-center gap-3">{children}</span>
      </button>
    );
  }
);
TacticalButton.displayName = "TacticalButton";
