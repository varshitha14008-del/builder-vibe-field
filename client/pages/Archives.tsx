import { useMemo, useState } from "react";
import { useArchives, useMonasteries } from "@/hooks/api";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Book, Image as ImageIcon, AudioLines, Film, FileText } from "lucide-react";
import type { ArchiveItem } from "@shared/api";

const TYPES: ArchiveItem["type"][] = ["manuscript", "mural", "thangka", "audio", "video", "photo", "document"];

function TypeBadge({ type }: { type: ArchiveItem["type"] }) {
  const icon = type === "manuscript" ? Book : type === "mural" || type === "thangka" || type === "photo" ? ImageIcon : type === "audio" ? AudioLines : type === "video" ? Film : FileText;
  const label = type[0].toUpperCase() + type.slice(1);
  const Icon = icon as any;
  return (
    <Badge variant="secondary" className="gap-1">
      <Icon className="h-3.5 w-3.5" /> {label}
    </Badge>
  );
}

export default function ArchivesPage() {
  const { data: arch } = useArchives();
  const { data: monasteries } = useMonasteries();

  const [q, setQ] = useState("");
  const [type, setType] = useState<string>("all");
  const [mon, setMon] = useState<string>("all");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<ArchiveItem | null>(null);

  const mons = monasteries?.items || [];
  const items = arch?.items || [];

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return items.filter((it) => {
      const okQ = !query || it.title.toLowerCase().includes(query);
      const okT = type === "all" || it.type === type;
      const okM = mon === "all" || it.monasteryId === mon;
      return okQ && okT && okM;
    });
  }, [items, q, type, mon]);

  const monName = (id?: string) => mons.find((m) => m.id === id)?.name || "Unknown Monastery";

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="mb-4 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Digital Archives</h1>
        <p className="mt-2 text-foreground/70">Browse scanned manuscripts, murals, and historical records.</p>
      </div>

      <div className="mb-6 grid gap-3 md:grid-cols-12">
        <Input className="md:col-span-5" placeholder="Search titles (e.g., Thangka, Folio KA)" value={q} onChange={(e)=> setQ(e.target.value)} />
        <Select value={type} onValueChange={setType}>
          <SelectTrigger className="md:col-span-3"><SelectValue placeholder="Type (All)" /></SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all">All</SelectItem>
              {TYPES.map((t)=> (<SelectItem key={t} value={t}>{t[0].toUpperCase()+t.slice(1)}</SelectItem>))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select value={mon} onValueChange={setMon}>
          <SelectTrigger className="md:col-span-4"><SelectValue placeholder="Monastery (All)" /></SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all">All</SelectItem>
              {mons.map((m)=> (<SelectItem key={m.id} value={m.id}>{m.name}</SelectItem>))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((it) => (
          <button key={it.id} className="group text-left overflow-hidden rounded-xl border border-border bg-card shadow-sm focus:outline-none focus:ring-2 focus:ring-ring" onClick={()=> { setActive(it); setOpen(true); }}>
            {it.thumbnailUrl ? (
              <img src={it.thumbnailUrl} alt={it.title} className="h-40 w-full object-cover" loading="lazy" />
            ) : (
              <div className="h-40 bg-gradient-to-br from-secondary to-background grid place-items-center">
                <div className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{monName(it.monasteryId)}</div>
              </div>
            )}
            <div className="p-4 space-y-1">
              <div className="flex items-center gap-2">
                <TypeBadge type={it.type} />
              </div>
              <div className="font-semibold">{it.title}</div>
              {it.monasteryId ? <div className="text-xs text-foreground/70">{monName(it.monasteryId)}</div> : null}
            </div>
          </button>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{active?.title || "Item"}</DialogTitle>
          </DialogHeader>
          {active ? (
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <TypeBadge type={active.type} />
                {active.monasteryId ? <Badge variant="outline">{monName(active.monasteryId)}</Badge> : null}
              </div>
              <div className="rounded-lg border border-border bg-background p-4 text-sm text-foreground/70">
                This record is part of the Sikkim monastic archive. High-resolution media and metadata fields (script, date, material, dimensions, provenance) can be added via the CMS.
              </div>
              <div className="flex justify-end">
                <Button variant="outline" onClick={()=> setOpen(false)}>Close</Button>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
