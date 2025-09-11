import { useMonasteries } from "@/hooks/api";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function MonasteriesPage() {
  const { data } = useMonasteries();
  const items = data?.items || [];

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="mb-4 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Monasteries of Sikkim</h1>
        <p className="mt-2 text-foreground/70">Brief history, photos, and quick links.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((m) => (
          <div key={m.id} className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <div className="aspect-[4/3] bg-secondary">
              {m.heroImageUrl ? (
                <img src={m.heroImageUrl} alt={m.name} className="h-full w-full object-cover" />
              ) : null}
            </div>
            <div className="p-4 space-y-2">
              <div className="text-lg font-semibold">{m.name}</div>
              <div className="text-xs text-foreground/70">{m.district} • {m.founded}</div>
              {m.description ? <p className="text-sm text-foreground/80">{m.description}</p> : null}
              <div className="flex flex-wrap gap-2 pt-1">
                <Link to="/map"><Button size="sm" variant="outline">View on Map</Button></Link>
                <Link to="/tours"><Button size="sm">Open Tour</Button></Link>
                {m.wikiUrl ? <a href={m.wikiUrl} target="_blank" rel="noreferrer" className="text-sm text-primary hover:underline">Wikipedia</a> : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
