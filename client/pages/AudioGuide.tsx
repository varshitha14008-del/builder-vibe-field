import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useMonasteries, useTours } from "@/hooks/api";
import { audioTracks } from "@/data/audio";
import { useI18n, LANGS, type LangCode } from "@/context/I18nContext";
import { VoiceAssistant } from "@/components/VoiceAssistant";

export default function AudioGuidePage() {
  const { lang, setLang } = useI18n();
  const { data: monasteries } = useMonasteries();
  const { data: tours } = useTours();
  const [selectedId, setSelectedId] = useState<string | undefined>(undefined);
  const [nowPlaying, setNowPlaying] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);

  const list = monasteries?.items || [];
  const nearestLabel = "Auto-select by location";

  const langOptions = LANGS;

  const tracksFor = useMemo(() => (id?: string, l?: LangCode) => {
    return audioTracks.filter((t) => (!id || t.monasteryId === id) && (!l || t.lang === l));
  }, []);

  useEffect(() => {
    if (!selectedId && list.length) setSelectedId(list[0].id);
  }, [list, selectedId]);

  const availableLangs: LangCode[] = useMemo(() => {
    const mons = selectedId ? tracksFor(selectedId).map(t=>t.lang) : [];
    const tourLangs = tours?.items?.filter(t=>t.monasteryId===selectedId).flatMap(t=>t.languageCodes as LangCode[]) || [];
    const set = new Set<LangCode>([...mons, ...tourLangs]);
    return (LANGS.map(l=>l.code).filter(c=>set.has(c as LangCode)) as LangCode[]).length ? (LANGS.map(l=>l.code).filter(c=>set.has(c as LangCode)) as LangCode[]) : (LANGS.map(l=>l.code) as LangCode[]);
  }, [selectedId, tours, tracksFor]);

  function getNearest() {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      let best: { id: string; dist: number } | null = null;
      for (const m of list) {
        if (m.lat == null || m.lng == null) continue;
        const d = Math.hypot((m.lat - latitude), (m.lng - longitude));
        if (!best || d < best.dist) best = { id: m.id, dist: d };
      }
      if (best) setSelectedId(best.id);
    });
  }

  const currentTrack = tracksFor(selectedId, lang)[0] ?? tracksFor(selectedId)[0];
  useEffect(() => { setError(undefined); }, [selectedId, lang]);
  useEffect(() => {
    if ('mediaSession' in navigator && currentTrack) {
      // @ts-ignore
      navigator.mediaSession.metadata = new window.MediaMetadata({ title: currentTrack.title, artist: "Monastery360", album: selectedId });
    }
  }, [currentTrack, selectedId]);

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="mb-6 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Audio Guide</h1>
        <p className="mt-2 text-foreground/70">Location-aware, multi-language audio. Use GPS to auto-select a monastery.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-8 space-y-4">
          <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
            <div className="flex flex-wrap items-center gap-3">
              <Select value={selectedId} onValueChange={setSelectedId}>
                <SelectTrigger className="w-[260px]"><SelectValue placeholder="Select Monastery" /></SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {list.map((m)=> (
                      <SelectItem key={m.id} value={m.id}>{m.name}</SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Select value={lang} onValueChange={(v)=> setLang(v as LangCode)}>
                <SelectTrigger className="w-[180px]"><SelectValue placeholder="Language" /></SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {langOptions.map((l)=> (
                      <SelectItem key={l.code} value={l.code}>{l.native} · {l.label}</SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Button variant="outline" onClick={getNearest}>{nearestLabel}</Button>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="text-sm font-semibold">Now Playing</div>
            <div className="mt-2 text-lg font-semibold">{currentTrack?.title ?? "No track available"}</div>
            <div className="mt-4">
              <audio controls preload="metadata" className="w-full" src={currentTrack?.url} onPlay={()=> { setError(undefined); setNowPlaying(currentTrack?.url); }} onError={()=> setError("Failed to load audio. Check your connection.")} />
            </div>
            {error && (<div className="mt-2 text-sm text-destructive">{error}</div>)}
            {currentTrack?.url ? (
              <div className="mt-3 text-sm text-foreground/70">
                <a href={currentTrack.url} download className="text-primary hover:underline">Download for offline use</a>
              </div>
            ) : null}
          </div>
        </div>

        <aside className="lg:col-span-4 space-y-4">
          <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
            <div className="text-sm font-semibold mb-2">Languages</div>
            <div className="flex flex-wrap gap-2">
              {availableLangs.map((code)=> (
                <Button key={code} size="sm" variant={code===lang?"default":"outline"} onClick={()=> setLang(code)}>
                  {code.toUpperCase()}
                </Button>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
            <div className="text-sm font-semibold mb-2">Tips</div>
            <ul className="list-disc pl-5 text-xs text-foreground/70 space-y-1">
              <li>Use wired or Bluetooth headphones during monastery visits.</li>
              <li>Download tracks in advance for offline access.</li>
              <li>Respect local guidelines while listening on-site.</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
