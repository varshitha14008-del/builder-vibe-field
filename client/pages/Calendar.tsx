import { useMemo, useState } from "react";
import { useEvents, useMonasteries } from "@/hooks/api";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function CalendarPage() {
  const { data: events } = useEvents();
  const { data: monasteries } = useMonasteries();
  const [mon, setMon] = useState<string>("all");

  const mons = monasteries?.items || [];
  const items = events?.items || [];

  const filtered = useMemo(() => items.filter(e => mon === "all" || (e.location||"").toLowerCase().includes(mon.toLowerCase())), [items, mon]);

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="mb-4 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Cultural Calendar</h1>
        <p className="mt-2 text-foreground/70">Festival and ritual dates across Sikkim monasteries.</p>
      </div>

      <div className="mb-6 max-w-md">
        <Select value={mon} onValueChange={setMon}>
          <SelectTrigger><SelectValue placeholder="Filter by monastery" /></SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all">All</SelectItem>
              {mons.map((m)=> (<SelectItem key={m.id} value={m.name}>{m.name}</SelectItem>))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((e)=> (
          <div key={e.id} className="rounded-xl border border-border bg-card p-4 shadow-sm">
            <div className="text-sm text-foreground/70">{new Date(e.dateISO).toLocaleDateString()}</div>
            <div className="mt-1 font-semibold">{e.title}</div>
            {e.location ? <div className="text-sm text-foreground/70">{e.location}</div> : null}
          </div>
        ))}
      </div>
    </section>
  );
}
