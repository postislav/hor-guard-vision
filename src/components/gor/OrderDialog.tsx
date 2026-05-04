import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";
import { TacticalButton } from "./TacticalButton";
import { Phone, User, CheckCircle2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

type Mode = "order" | "call" | "info";

interface Props {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  mode: Mode;
}

const titles: Record<Mode, { label: string; title: string; desc: string }> = {
  order: {
    label: "// Замовлення",
    title: "Оформити замовлення",
    desc: "Залиште дані — менеджер зв'яжеться протягом доби для уточнення комплектації та доставки.",
  },
  call: {
    label: "// Зворотній дзвінок",
    title: "Замовити дзвінок",
    desc: "Вкажіть телефон і зручний час — ми зателефонуємо першими.",
  },
  info: {
    label: "// Запит інформації",
    title: "Отримати деталі",
    desc: "Надішлемо повну специфікацію, прайс і відповіді на ваші запитання.",
  },
};

export const OrderDialog = ({ open, onOpenChange, mode }: Props) => {
  const cfg = titles[mode];
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "" });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://stormix.com.ua/send.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, mode }),
      });

      const data = await res.json();

      if (data.ok) {
        setSubmitted(true);
        toast({
          title: "Запит прийнято",
          description: "Менеджер ГОР-1 зв'яжеться з вами найближчим часом.",
        });
      } else {
        throw new Error(data.error || "Помилка сервера");
      }
    } catch (err) {
      toast({
        title: "Помилка відправки",
        description: "Спробуйте ще раз або зателефонуйте нам напряму.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleClose = (v: boolean) => {
    onOpenChange(v);
    if (!v) {
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: "", phone: "" });
      }, 200);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="bg-panel border-border text-foreground max-w-lg p-0 gap-0 sm:rounded-none clip-tactical">
        <div className="absolute top-3 left-4 right-12 flex justify-between font-mono text-[10px] uppercase tracking-widest text-gold/70 z-10 pointer-events-none">
          <span>FORM-001</span>
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 bg-gold rounded-full animate-pulse" /> SECURE
          </span>
        </div>

        <div className="p-8 pt-10">
          {submitted ? (
            <div className="text-center py-6 space-y-5">
              <div className="mx-auto w-14 h-14 grid place-items-center bg-gold/10 ring-1 ring-gold clip-tactical-sm">
                <CheckCircle2 className="w-7 h-7 text-gold" />
              </div>
              <div className="space-y-2">
                <DialogTitle className="font-display text-3xl uppercase tracking-wide">
                  Запит прийнято
                </DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  Дякуємо. Менеджер ГОР-1 зв'яжеться з вами найближчим часом.
                </DialogDescription>
              </div>
              <TacticalButton variant="outline" onClick={() => handleClose(false)}>
                Закрити
              </TacticalButton>
            </div>
          ) : (
            <>
              <DialogHeader className="space-y-3 mb-6 text-left">
                <span className="label-tag">{cfg.label}</span>
                <DialogTitle className="font-display text-3xl md:text-4xl uppercase tracking-wide leading-none">
                  {cfg.title}
                </DialogTitle>
                <DialogDescription className="text-sm text-muted-foreground leading-relaxed">
                  {cfg.desc}
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Field icon={User} label="Ім'я" required>
                  <input
                    required
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Як до вас звертатись"
                    className="field-input"
                  />
                </Field>

                <Field icon={Phone} label="Телефон" required>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="+380"
                    className="field-input"
                  />
                </Field>

                <div className="flex flex-wrap gap-3 pt-2">
                  <TacticalButton type="submit" variant="primary" disabled={loading}>
                    {loading ? "Передача..." : "Надіслати запит"}
                  </TacticalButton>
                  <TacticalButton type="button" variant="outline" onClick={() => handleClose(false)}>
                    Скасувати
                  </TacticalButton>
                </div>

                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground pt-2">
                  Дані передаються у захищеному режимі та не передаються третім сторонам
                </p>
              </form>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Field = ({
  icon: Icon,
  label,
  required,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) => (
  <label className="block space-y-2">
    <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
      <Icon className="w-3 h-3 text-gold" />
      {label} {required && <span className="text-gold">*</span>}
    </span>
    {children}
  </label>
);
