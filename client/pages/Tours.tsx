import { useEffect, useRef, useState } from "react";
import "pannellum/build/pannellum.css";
import "pannellum/build/pannellum.js";
import { useTours } from "@/hooks/api";
import { Button } from "@/components/ui/button";

declare global { interface Window { pannellum: any } }

const DEMO_PANOS = [
  { id: "alma", title: "Sample • Alma Observatory", url: "https://pannellum.org/images/alma.jpg" },
  { id: "cerro", title: "Sample • Cerro Toco", url: "https://pannellum.org/images/cerro-toco-0.jpg" },
];

export default function ToursPage() {
  const { data } = useTours();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [current, setCurrent] = useState(DEMO_PANOS[0]);
  const viewerRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current || !window.pannellum) return;
    if (viewerRef.current) {
      viewerRef.current.loadScene(current.id, { panorama: current.url });
      return;
    }
    viewerRef.current = window.pannellum.viewer(containerRef.current, {
      default: { firstScene: current.id, autoLoad: true },
      scenes: Object.fromEntries(
        DEMO_PANOS.map((p) => [p.id, { type: "equirectangular", panorama: p.url, pitch: 0, yaw: 0, hfov: 100 }]),
      ),
      showZoomCtrl: true,
      keyboardZoom: true,
    });
  }, [current]);

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="mb-4 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Virtual Tours</h1>
        <p className="mt-2 text-foreground/70">360° panoramic walkthroughs with narration (sample content shown).</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-9 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div ref={containerRef} className="h-[70vh] w-full" />
        </div>
        <aside className="lg:col-span-3 space-y-4">
          <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
            <div className="text-sm font-semibold mb-2">Available Tours</div>
            <div className="space-y-2">
              {DEMO_PANOS.map((p) => (
                <Button key={p.id} variant={p.id === current.id ? "default" : "outline"} className="w-full justify-start" onClick={() => setCurrent(p)}>
                  {p.title}
                </Button>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
            <div className="text-sm font-semibold mb-2">Your backend tours</div>
            <div className="text-xs text-foreground/70">Once your backend returns /tours with panorama URLs, we’ll list them here.</div>
            <div className="mt-2 text-xs"><span className="font-semibold">Found:</span> {data?.total ?? 0} tours</div>
          </div>
        </aside>
      </div>
    </section>
  );
}
