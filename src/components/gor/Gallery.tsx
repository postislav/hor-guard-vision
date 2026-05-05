import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";

const photos = [
  { src: g1, caption: "Комплект із кабелями", tag: "IMG / 01" },
  { src: g2, caption: "Кейс із монітором та камерами", tag: "IMG / 02" },
  { src: g3, caption: "Камера крупним планом", tag: "IMG / 03" },
];

export const Gallery = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 lg:py-32 border-t border-border">
      <div className="container">
        <div className="max-w-3xl mb-16 space-y-6">
          <div className="label-tag">// 05 — Галерея</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.95]">
            Система <span className="text-gold">в роботі</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Реальні фото комплекту, розгортання та інтерфейсу оператора.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((p, i) => (
            <button
              type="button"
              key={p.tag}
              onClick={() => setActive(i)}
              className="group relative overflow-hidden bg-panel ring-1 ring-border hover:ring-gold transition-all clip-tactical text-left"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.src}
                  alt={p.caption}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
              </div>
              <div className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-widest text-gold/80 bg-background/70 px-2 py-1">
                {p.tag}
              </div>
              <div className="p-4 border-t border-border">
                <p className="text-sm text-foreground/90">{p.caption}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={active !== null} onOpenChange={(v) => !v && setActive(null)}>
        <DialogContent className="bg-panel border-border max-w-5xl p-2 sm:rounded-none clip-tactical">
          {active !== null && (
            <img
              src={photos[active].src}
              alt={photos[active].caption}
              className="w-full h-auto"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
