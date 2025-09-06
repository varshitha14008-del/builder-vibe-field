import { Link } from "react-router-dom";
import { Compass, Languages, Headphones, MapPinned, Archive, Search, CloudOff, Shield, Video, MapPin } from "lucide-react";

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-extrabold tracking-tight">{value}</div>
      <div className="mt-1 text-sm text-foreground/70">{label}</div>
    </div>
  );
}

function Feature({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="group rounded-xl border border-border bg-card p-5 shadow-sm transition hover:shadow-md">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-3 text-base font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-foreground/70">{desc}</p>
    </div>
  );
}

export default function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_80%_at_50%_-10%,hsl(var(--primary)/0.15)_0%,transparent_55%)]" />
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <Shield className="h-4 w-4" /> Cultural Preservation • Tourism
              </div>
              <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
                Monastery360
                <span className="block text-foreground/90">Digitize & Explore Sikkim's Monasteries</span>
              </h1>
              <p className="mt-4 text-lg text-foreground/70 max-w-xl">
                Immersive 360° tours, AI-powered archives, and an interactive map—built to preserve heritage and inspire journeys.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link to="/tours" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  Explore Virtual Tours
                </Link>
                <Link to="/map" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground/90 hover:bg-secondary">
                  View Interactive Map
                </Link>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-6">
                <Stat value=">200" label="Monasteries in Sikkim" />
                <Stat value="17th c." label="Historic origins" />
                <Stat value="100%" label="Offline-friendly" />
              </div>
            </div>
            <div className="md:col-span-6">
              <div className="relative mx-auto max-w-xl">
                <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-primary/30 via-accent/20 to-transparent blur-2xl" />
                <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-secondary to-background shadow-xl">
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">360° Preview</div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-3">
                    <div className="rounded-lg border border-border bg-card/90 p-3 backdrop-blur">
                      <div className="flex items-center gap-2 text-sm font-semibold"><Video className="h-4 w-4 text-primary" /> Tour: Rumtek</div>
                      <div className="mt-1 h-16 rounded-md bg-gradient-to-br from-primary/20 to-transparent" />
                    </div>
                    <div className="rounded-lg border border-border bg-card/90 p-3 backdrop-blur">
                      <div className="flex items-center gap-2 text-sm font-semibold"><MapPinned className="h-4 w-4 text-primary" /> Map Overview</div>
                      <div className="relative mt-1 h-16 rounded-md bg-secondary">
                        {["20%","40%","70%"].map((left, i) => (
                          <span key={i} className="absolute top-2" style={{ left }}>
                            <span className="grid place-items-center rounded-full bg-primary text-primary-foreground h-5 w-5 text-[10px] shadow">{i+1}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Everything for exploration & preservation</h2>
          <p className="mt-3 text-foreground/70">
            Tools to navigate, learn, and protect Sikkim’s monastic heritage.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Feature icon={Compass} title="Virtual Tours" desc="360° panoramic walkthroughs with deep zoom and hotspots." />
          <Feature icon={Languages} title="Narrated Guides" desc="Multi-language storytelling for inclusive experiences." />
          <Feature icon={MapPinned} title="Interactive Map" desc="Geo-tagged monasteries with routes & nearby attractions." />
          <Feature icon={Archive} title="Digital Archives" desc="Scanned manuscripts, murals, and rare documents." />
          <Feature icon={Search} title="AI Search" desc="Semantically find people, places, scripts, and motifs." />
          <Feature icon={Headphones} title="Smart Audio" desc="Location-aware audio via Bluetooth beacons or GPS." />
          <Feature icon={CloudOff} title="Offline Mode" desc="Optimized for remote areas with intermittent networks." />
          <Feature icon={Shield} title="Community First" desc="Participatory archiving with custodianship controls." />
        </div>
      </section>

      {/* Map & Tour Previews */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_20%_0%,hsl(var(--accent)/0.12)_0%,transparent_60%)]" />
            <div className="p-6 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Interactive Map</h3>
              <Link to="/map" className="text-sm font-semibold text-primary hover:underline">Open</Link>
            </div>
            <div className="px-6 pb-6">
              <div className="relative h-72 rounded-xl bg-gradient-to-br from-secondary to-background border border-border">
                {[{top:"20%",left:"18%"},{top:"40%",left:"55%"},{top:"65%",left:"35%"},{top:"30%",left:"78%"}].map((p,i)=> (
                  <div key={i} className="absolute -translate-x-1/2 -translate-y-1/2" style={p}>
                    <div className="relative">
                      <span className="absolute -inset-2 rounded-full bg-primary/20 blur" />
                      <span className="grid h-6 w-6 place-items-center rounded-full bg-primary text-primary-foreground shadow">
                        <MapPin className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_80%_0%,hsl(var(--primary)/0.12)_0%,transparent_60%)]" />
            <div className="p-6 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Virtual Tour: Rumtek</h3>
              <Link to="/tours" className="text-sm font-semibold text-primary hover:underline">Enter</Link>
            </div>
            <div className="px-6 pb-6">
              <div className="relative h-72 rounded-xl border border-border bg-gradient-to-br from-primary/15 to-background">
                <div className="absolute inset-0 grid place-items-center">
                  <button className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm">
                    <Video className="h-4 w-4" /> Start 360° Tour
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Archives */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Digital Archives Highlights</h3>
            <p className="mt-2 text-foreground/70">Browse curated selections of manuscripts and murals.</p>
          </div>
          <Link to="/archives" className="text-sm font-semibold text-primary hover:underline">View all</Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {["Ka, Kha Manuscript Folios","Thangka: Guru Rinpoche","Woodblock Prints","Palm-leaf Sutras","Mural: Wheel of Life","Oral Histories"].map((title, i) => (
            <div key={i} className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm">
              <div className="h-40 bg-gradient-to-br from-secondary to-background" />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-foreground/70"><Archive className="h-4 w-4 text-primary" /> Catalogue</div>
                <h4 className="mt-1 font-semibold">{title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cultural Calendar */}
      <section className="container mx-auto px-4 py-16">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Upcoming in the Cultural Calendar</h3>
            <Link to="/calendar" className="text-sm font-semibold text-primary hover:underline">See calendar</Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              { date: "Nov 14", title: "Lhabab Duchen", desc: "Rituals across monasteries; merit-making day." },
              { date: "Dec 08", title: "Kagyed Dance", desc: "Ceremonial cham at Enchey Monastery." },
              { date: "Jan 20", title: "Losar Preparations", desc: "Community events and archive showcases." },
            ].map((e, i) => (
              <div key={i} className="flex gap-4 rounded-xl border border-border bg-background p-4">
                <div className="grid h-14 w-14 place-items-center rounded-lg bg-primary text-primary-foreground text-sm font-bold">{e.date}</div>
                <div>
                  <div className="font-semibold">{e.title}</div>
                  <div className="text-sm text-foreground/70">{e.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_80%_at_50%_-10%,hsl(var(--primary)/0.15)_0%,transparent_55%)]" />
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Experience Sikkim’s Living Heritage</h3>
            <p className="mt-2 text-foreground/70">Join us in building a respectful, inclusive, and accessible platform for monasteries.</p>
            <div className="mt-6 flex justify-center gap-3">
              <Link to="/tours" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-95">Start a Tour</Link>
              <Link to="/archives" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold hover:bg-secondary">Explore Archives</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
