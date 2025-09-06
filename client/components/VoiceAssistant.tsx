import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { searchPOI, type POI, geocode } from "@/lib/poi";
import { prettyDistance } from "@/lib/geo";
import { useI18n, type LangCode } from "@/context/I18nContext";
import { Mic, Square, Navigation, Hotel, Utensils, Landmark } from "lucide-react";

export function VoiceAssistant() {
  const { lang } = useI18n();
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<POI[]>([]);
  const [error, setError] = useState<string | undefined>();
  const recRef = useRef<any>(null);

  function speak(text: string, l: LangCode) {
    try {
      const u = new SpeechSynthesisUtterance(text);
      u.lang = l;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(u);
    } catch {}
  }

  function startListening() {
    // @ts-ignore
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) {
      setError("Speech recognition not supported in this browser.");
      return;
    }
    const rec = new SR();
    rec.lang = lang;
    rec.interimResults = false;
    rec.onresult = (e: any) => {
      const text = Array.from(e.results).map((r: any) => r[0].transcript).join(" ");
      setQuery(text);
      runSearch(text);
    };
    rec.onerror = () => setError("Mic error. Check permissions.");
    rec.onend = () => { recRef.current = null; };
    recRef.current = rec;
    rec.start();
  }
  function stopListening() { recRef.current?.stop(); recRef.current = null; }

  async function runSearch(text: string) {
    setLoading(true); setError(undefined); setResults([]);
    try {
      const lower = text.toLowerCase();
      const kind: any = lower.includes("hotel") ? "hotel" : lower.includes("restaurant") || lower.includes("food") || lower.includes("eat") ? "restaurant" : lower.includes("cafe") ? "cafe" : lower.includes("hospital") ? "hospital" : lower.includes("monastery") ? "monastery" : "attraction";
      let lat: number | null = null, lon: number | null = null;
      if (lower.includes("near me") || lower.includes("nearby")) {
        const pos = await new Promise<GeolocationPosition>((res, rej)=> navigator.geolocation.getCurrentPosition(res, rej));
        lat = pos.coords.latitude; lon = pos.coords.longitude;
      } else {
        const m = lower.match(/in ([a-zA-Z\- ]+)/);
        const place = m?.[1] || "Sikkim";
        const g = await geocode(place);
        if (g[0]) { lat = parseFloat(g[0].lat); lon = parseFloat(g[0].lon); }
      }
      if (lat == null || lon == null) throw new Error("Location not found");
      const pois = await searchPOI(lat, lon, kind);
      setResults(pois);
      if (pois.length) speak(`${pois[0].name} at ${prettyDistance(pois[0].distance||0)}`, lang);
    } catch (e:any) {
      setError(e.message || "Search failed");
    } finally { setLoading(false); }
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
      <div className="flex flex-wrap items-center gap-2">
        <Input value={query} onChange={(e)=> setQuery(e.target.value)} placeholder="Ask e.g. 'hotels near me' or 'monasteries in Gangtok'" />
        <Button onClick={()=> runSearch(query)} disabled={!query || loading}>Search</Button>
        {recRef.current ? (
          <Button variant="destructive" onClick={stopListening}><Square className="h-4 w-4"/> Stop</Button>
        ) : (
          <Button variant="secondary" onClick={startListening}><Mic className="h-4 w-4"/> Speak</Button>
        )}
      </div>
      <div className="mt-3 flex flex-wrap gap-2 text-xs">
        <Button variant="outline" size="sm" onClick={()=> runSearch("monasteries near me")}> <Landmark className="h-3 w-3"/> Monasteries near me</Button>
        <Button variant="outline" size="sm" onClick={()=> runSearch("hotels near me")}><Hotel className="h-3 w-3"/> Hotels near me</Button>
        <Button variant="outline" size="sm" onClick={()=> runSearch("restaurants near me")}><Utensils className="h-3 w-3"/> Food near me</Button>
        <Button variant="outline" size="sm" onClick={()=> runSearch("attractions in Sikkim")}><Navigation className="h-3 w-3"/> Sikkim attractions</Button>
      </div>
      {error && <div className="mt-3 text-sm text-destructive">{error}</div>}
      <ul className="mt-4 space-y-2">
        {results.map(r => (
          <li key={r.id} className="rounded-lg border border-border bg-background p-3">
            <div className="font-semibold">{r.name}</div>
            <div className="text-xs text-foreground/70">{r.tags?.name:undefined} {r.distance!=null?`• ${prettyDistance(r.distance)}`:null}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}