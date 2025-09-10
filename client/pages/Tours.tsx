import { useMemo } from "react";
import { useTours } from "@/hooks/api";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function ToursPage() {
  const { data } = useTours();
  const tours = useMemo(() => data?.items || [], [data]);

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="mb-4 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Virtual Tours</h1>
        <p className="mt-2 text-foreground/70">Sikkim monasteries showcase. 360° panoramas will appear here as assets are added.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-8 space-y-4">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="text-lg font-semibold">Sikkim Monasteries</div>
            <p className="mt-1 text-sm text-foreground/70">Browse the Interactive Map and Audio Assistant while 360° scenes are prepared.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link to="/map"><Button>Open Interactive Map</Button></Link>
              <Link to="/audio-guide"><Button variant="outline">Open Audio Assistant</Button></Link>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="text-sm font-semibold">Planned 360° Tours</div>
            <ul className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
              {tours.map((t) => (
                <li key={t.id} className="rounded-xl border border-border bg-background p-3">
                  <div className="font-semibold">{t.title}</div>
                  <div className="text-xs text-foreground/70">Languages: {t.languageCodes.join(", ").toUpperCase()}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="lg:col-span-4 space-y-4">
          <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
            <div className="text-sm font-semibold mb-2">How to contribute 360°</div>
            <ul className="list-disc pl-5 text-xs text-foreground/70 space-y-1">
              <li>Capture equirectangular 360° images (2:1) inside monastery courtyards and prayer halls where permitted.</li>
              <li>Host them on a reliable CDN or upload via CMS, then link them to tours.</li>
              <li>We’ll render them here with full pan/zoom once available.</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
