import { useMemo, useState } from "react";
import { Play } from "lucide-react";

// Замініть це посилання на ваше відео з YouTube
const DEFAULT_YOUTUBE_URL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

const extractYouTubeId = (url: string): string | null => {
  if (!url) return null;
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([A-Za-z0-9_-]{11})/,
  ];
  for (const re of patterns) {
    const m = url.match(re);
    if (m) return m[1];
  }
  return null;
};

interface Props {
  /** YouTube URL — повне посилання або youtu.be */
  youtubeUrl?: string;
  title?: string;
}

export const Video = ({ youtubeUrl = DEFAULT_YOUTUBE_URL, title = "ГОР-1 — демонстрація" }: Props) => {
  const [playing, setPlaying] = useState(false);
  const videoId = useMemo(() => extractYouTubeId(youtubeUrl), [youtubeUrl]);

  if (!videoId) return null;

  const thumb = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
  const embed = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;

  return (
    <section id="video" className="py-24 lg:py-32 border-t border-border bg-panel/30">
      <div className="container">
        <div className="max-w-3xl mb-12 space-y-6">
          <div className="label-tag">// 06 — Відео</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.95]">
            Дивіться <span className="text-gold">в дії</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Польова демонстрація розгортання та роботи системи ГОР-1.
          </p>
        </div>

        <div className="relative bg-background ring-1 ring-border clip-tactical overflow-hidden">
          <div className="absolute top-3 left-4 right-4 z-10 flex justify-between font-mono text-[10px] uppercase tracking-widest text-gold/80 pointer-events-none">
            <span>VIDEO / DEMO-001</span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 bg-destructive rounded-full animate-pulse" /> REC
            </span>
          </div>

          <div className="relative aspect-video">
            {playing ? (
              <iframe
                src={embed}
                title={title}
                allow="accelerated-2d-canvas; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="group absolute inset-0 w-full h-full"
                aria-label="Відтворити відео"
              >
                <img
                  src={thumb}
                  alt={title}
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
                  }}
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-background/40" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="flex items-center gap-4">
                    <span className="grid place-items-center w-20 h-20 bg-gold text-primary-foreground ring-4 ring-gold/30 group-hover:scale-110 transition-transform clip-tactical-sm">
                      <Play className="w-8 h-8 ml-1" fill="currentColor" />
                    </span>
                    <span className="font-display text-2xl uppercase tracking-wider hidden sm:block">
                      {title}
                    </span>
                  </div>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
