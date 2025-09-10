import { useEffect, useMemo, useRef, useState } from "react";
import "pannellum/build/pannellum.js";
import { useTours } from "@/hooks/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

declare global { interface Window { pannellum: any } }

type Scene = { id: string; title: string; url: string };

export default function ToursPage() {
  const { data } = useTours();
  const tours = useMemo(() => data?.items || [], [data]);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const viewerRef = useRef<any>(null);
  const [scenes, setScenes] = useState<Scene[]>([
    { id: "demo", title: "Demo 360 (viewer ready)", url: "https://pannellum.org/images/alma.jpg" },
  ]);
  const [currentId, setCurrentId] = useState<string>("demo");
  const [newUrl, setNewUrl] = useState("");
  const [newTitle, setNewTitle] = useState("");

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/pannellum@2.5.6/build/pannellum.css";
    document.head.appendChild(link);
    return () => { document.head.removeChild(link); };
  }, []);

  useEffect(() => {
    if (!containerRef.current || !window.pannellum) return;
    // Rebuild viewer with current scenes
    containerRef.current.innerHTML = "";
    const sceneMap: Record<string, any> = {};
    for (const s of scenes) {
      sceneMap[s.id] = { type: "equirectangular", panorama: s.url, pitch: 0, yaw: 0, hfov: 100 };
    }
    viewerRef.current = window.pannellum.viewer(containerRef.current, {
      default: { firstScene: currentId, autoLoad: true },
      scenes: sceneMap,
      showZoomCtrl: true,
      keyboardZoom: true,
    });
  }, [scenes, currentId]);

  const current = scenes.find((s) => s.id === currentId);

  function addScene() {
    const url = newUrl.trim();
    const title = newTitle.trim() || "Custom 360";
    if (!url) return;
    const id = `scene-${Date.now()}`;
    const next = [...scenes, { id, title, url }];
    setScenes(next);
    setCurrentId(id);
    setNewUrl("");
    setNewTitle("");
  }

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="mb-4 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Virtual Tours</h1>
        <p className="mt-2 text-foreground/70">Load 360° images (2:1 equirectangular). Paste Sikkim monastery panoramas to view instantly.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-9 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div ref={containerRef} className="h-[70vh] w-full" />
        </div>
        <aside className="lg:col-span-3 space-y-4">
          <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
            <div className="text-sm font-semibold mb-2">Scenes</div>
            <div className="space-y-2">
              {scenes.map((s) => (
                <Button key={s.id} variant={s.id === currentId ? "default" : "outline"} className="w-full justify-start" onClick={() => setCurrentId(s.id)}>
                  {s.title}
                </Button>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
            <div className="text-sm font-semibold mb-2">Add Sikkim 360 URL</div>
            <div className="space-y-2">
              <Input placeholder="https://.../your-360.jpg" value={newUrl} onChange={(e)=> setNewUrl(e.target.value)} />
              <Input placeholder="Title (e.g., Rumtek Courtyard)" value={newTitle} onChange={(e)=> setNewTitle(e.target.value)} />
              <Button onClick={addScene} disabled={!newUrl.trim()}>Add</Button>
            </div>
            {current ? <div className="mt-3 text-xs text-foreground/70">Viewing: {current.title}</div> : null}
          </div>

          <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
            <div className="text-sm font-semibold mb-2">Planned 360° Tours</div>
            <ul className="mt-2 space-y-2">
              {tours.map((t) => (
                <li key={t.id} className="rounded-lg border border-border bg-background p-2">
                  <div className="font-semibold text-sm">{t.title}</div>
                  <div className="text-xs text-foreground/70">Languages: {t.languageCodes.join(", ").toUpperCase()}</div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
