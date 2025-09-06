import { useEffect, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "@/styles/vendor-leaflet.css";
import * as L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { useMonasteries } from "@/hooks/api";

// Fix default icon paths in Vite
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function FitBounds({ positions }: { positions: [number, number][] }) {
  const map = useMap();
  useEffect(() => {
    if (!positions.length) return;
    const bounds = L.latLngBounds(positions.map((p) => L.latLng(p[0], p[1])));
    map.fitBounds(bounds.pad(0.2));
  }, [positions, map]);
  return null;
}

export default function MapPage() {
  const { data } = useMonasteries();
  const positions = useMemo(() => (data?.items || []).map((m) => [m.lat || 27.33, m.lng || 88.61]) as [number, number][], [data]);

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="mb-4 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Interactive Map</h1>
        <p className="mt-2 text-foreground/70">Explore geo-tagged monasteries, routes, and nearby attractions.</p>
      </div>
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        <div className="h-[70vh] w-full">
          <MapContainer center={[27.33, 88.61]} zoom={8} scrollWheelZoom className="h-full w-full">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {data?.items?.map((m) => (
              <Marker key={m.id} position={[m.lat || 27.33, m.lng || 88.61]}>
                <Popup>
                  <div className="font-semibold">{m.name}</div>
                  {m.founded ? <div className="text-sm text-foreground/70">Founded: {m.founded}</div> : null}
                  {m.district ? <div className="text-sm text-foreground/70">District: {m.district}</div> : null}
                </Popup>
              </Marker>
            ))}
            <FitBounds positions={positions} />
          </MapContainer>
        </div>
      </div>
    </section>
  );
}
