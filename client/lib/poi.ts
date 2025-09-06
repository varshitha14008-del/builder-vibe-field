import { haversine } from "@/lib/geo";

export type POI = { id: string; name: string; lat: number; lon: number; tags?: Record<string, string>; distance?: number };

const endpoint = "https://overpass-api.de/api/interpreter";

export async function searchPOI(lat: number, lon: number, kind: "monastery"|"hotel"|"restaurant"|"attraction"|"cafe"|"hospital", radius = 5000): Promise<POI[]> {
  const tag = kind === "monastery" ? "amenity=place_of_worship" : kind === "hotel" ? "tourism=hotel" : kind === "restaurant" ? "amenity=restaurant" : kind === "cafe" ? "amenity=cafe" : kind === "hospital" ? "amenity=hospital" : "tourism=attraction";
  const q = `[out:json];(node[${tag}](around:${radius},${lat},${lon});way[${tag}](around:${radius},${lat},${lon}););out center 20;`;
  const res = await fetch(endpoint, { method: "POST", body: q, headers: { "Content-Type": "text/plain;charset=UTF-8" } });
  if (!res.ok) throw new Error(`Overpass ${res.status}`);
  const json = await res.json();
  const elements = json.elements || [];
  const items: POI[] = elements.map((e: any) => {
    const center = e.type === "way" ? e.center : { lat: e.lat, lon: e.lon };
    return { id: String(e.id), name: e.tags?.name || (e.tags?.amenity || e.tags?.tourism || "Unnamed"), lat: center.lat, lon: center.lon, tags: e.tags };
  });
  items.forEach(i => { i.distance = haversine(lat, lon, i.lat, i.lon); });
  items.sort((a,b)=> (a.distance||0)-(b.distance||0));
  return items.slice(0, 20);
}

export async function geocode(query: string) {
  const url = new URL("https://nominatim.openstreetmap.org/search");
  url.searchParams.set("format", "json");
  url.searchParams.set("q", query);
  url.searchParams.set("limit", "5");
  const res = await fetch(url.toString(), { headers: { "Accept-Language": "en" } });
  if (!res.ok) throw new Error("Geocoding failed");
  return res.json() as Promise<{ display_name: string; lat: string; lon: string }[]>;
}
