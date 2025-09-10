import { useEffect, useMemo, useRef, useState } from "react";
import "pannellum/build/pannellum.js";
import { useTours } from "@/hooks/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { api } from "@/lib/api";

declare global { interface Window { pannellum: any } }

type Scene = { id: string; title: string; url: string };

type Stored = Record<string, { title: string; url: string }>;
const LS_KEY = "monastery360_tour_scenes";

export default function ToursPage() {
  const { data, refetch } = useTours();
  const tours = useMemo(() => data?.items || [], [data]);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const viewerRef = useRef<any>(null);
  const [scenes, setScenes] = useState<Scene[]>([]);
  const [currentId, setCurrentId] = useState<string>("");
  const [newUrl, setNewUrl] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [assignTourId, setAssignTourId] = useState<string | undefined>(undefined);

  // Load scenes from server tours + localStorage override
  useEffect(() => {
    const raw = localStorage.getItem(LS_KEY);
    const stored: Stored = raw ? JSON.parse(raw) : {};
    const fromStored: Scene[] = Object.entries(stored).map(([tourId, v]) => ({ id: tourId, title: v.title, url: v.url }));
    const fromServer: Scene[] = tours
      .filter((t: any) => t.panoramaUrl)
      .map((t: any) => ({ id: t.id, title: t.title, url: t.panoramaUrl as string }));
    // Merge, local stored takes precedence
    const map = new Map<string, Scene>();
    for (const s of fromServer) map.set(s.id, s);
    for (const s of fromStored) map.set(s.id, s);
    const merged = Array.from(map.values());
    setScenes(merged);
    if (merged[0]) setCurrentId(merged[0].id);
    if (!assignTourId && tours[0]) setAssignTourId(tours[0].id);
  }, [tours]);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/pannellum@2.5.6/build/pannellum.css";
    document.head.appendChild(link);
    return () => { document.head.removeChild(link); };
  }, []);

  useEffect(() => {
    if (!containerRef.current || !window.pannellum) return;
    if (!scenes.length) return;
    containerRef.current.innerHTML = "";
    const sceneMap: Record<string, any> = {};
    for (const s of scenes) sceneMap[s.id] = { type: "equirectangular", panorama: s.url, pitch: 0, yaw: 0, hfov: 100, crossOrigin: "anonymous" };
    const first = currentId || scenes[0]?.id;
    setCurrentId(first || "");
    viewerRef.current = window.pannellum.viewer(containerRef.current, {
      default: { firstScene: first, autoLoad: true },
      scenes: sceneMap,
      showZoomCtrl: true,
      keyboardZoom: true,
    });
  }, [scenes, currentId]);

  const current = scenes.find((s) => s.id === currentId);

  async function addScene() {
    const url = newUrl.trim();
    const title = newTitle.trim() || (tours.find(t => t.id === assignTourId)?.title || "Custom 360");
    const tourId = assignTourId || "custom";
    if (!url) return;
    await api.setTourPanorama(tourId, { panoramaUrl: url, title });
    await refetch();
    const storedRaw = localStorage.getItem(LS_KEY);
    const stored: Stored = storedRaw ? JSON.parse(storedRaw) : {};
    stored[tourId] = { title, url };
    localStorage.setItem(LS_KEY, JSON.stringify(stored));
    setNewUrl("");
    setNewTitle("");
  }

  const hasScene = (tourId: string) => scenes.some(s => s.id === tourId);

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="mb-4 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Virtual Tours</h1>
        <p className="mt-2 text-foreground/70">Attach 360° images (2:1 equirectangular) to each Sikkim tour and view them instantly.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-9 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          {scenes.length ? (
            <div ref={containerRef} className="h-[70vh] w-full" />
          ) : (
            <div className="h-[70vh] w-full flex items-center justify-center text-sm text-foreground/70">No 360° added yet. Use the form to attach panoramas to tours.</div>
          )}
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
              <Select value={assignTourId} onValueChange={setAssignTourId}>
                <SelectTrigger className="w-full"><SelectValue placeholder="Select tour" /></SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {tours.map((t)=> (
                      <SelectItem key={t.id} value={t.id}>{t.title}</SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Input placeholder="https://.../your-360.jpg" value={newUrl} onChange={(e)=> setNewUrl(e.target.value)} />
              <Input placeholder="Title (e.g., Rumtek Courtyard)" value={newTitle} onChange={(e)=> setNewTitle(e.target.value)} />
              <Button onClick={addScene} disabled={!newUrl.trim() || !assignTourId}>Attach to tour</Button>
            </div>
            {current ? <div className="mt-3 text-xs text-foreground/70">Viewing: {current.title}</div> : null}
          </div>

          <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
            <div className="text-sm font-semibold mb-2">Planned 360° Tours</div>
            <ul className="mt-2 space-y-2">
              {tours.map((t) => (
                <li key={t.id} className="rounded-lg border border-border bg-background p-2">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <div className="font-semibold text-sm">{t.title}</div>
                      <div className="text-xs text-foreground/70">Languages: {t.languageCodes.join(", ").toUpperCase()}</div>
                    </div>
                    {hasScene(t.id) ? (
                      <Button size="sm" onClick={()=> setCurrentId(t.id)}>View</Button>
                    ) : (
                      <Button size="sm" variant="outline" onClick={()=> { setAssignTourId(t.id); }}>
                        Add panorama
                      </Button>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
