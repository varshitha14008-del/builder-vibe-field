import { PropsWithChildren } from "react";
import { Link, NavLink } from "react-router-dom";
import { Facebook, Github, Globe2, Headphones, Library, MapPinned, Video, Calendar, Settings } from "lucide-react";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useApiConfig } from "@/context/ApiConfigContext";

const navItems = [
  { to: "/tours", label: "Virtual Tours", icon: Video },
  { to: "/map", label: "Interactive Map", icon: MapPinned },
  { to: "/archives", label: "Digital Archives", icon: Library },
  { to: "/calendar", label: "Cultural Calendar", icon: Calendar },
  { to: "/audio-guide", label: "Audio Guide", icon: Headphones },
];

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Logo />
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    isActive
                      ? "bg-secondary text-foreground"
                      : "text-foreground/80 hover:text-foreground hover:bg-secondary"
                  )
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/map" className="hidden sm:inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              Explore Map
            </Link>
            <ConnectDataDialog />
          </div>
        </div>
      </header>

      <main className="relative">{children}</main>

      <footer className="mt-24 border-t border-border bg-secondary/50">
        <div className="container mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
          <div>
            <Logo className="text-xl" />
            <p className="mt-3 text-sm text-foreground/70 max-w-sm">
              A digital heritage platform to explore, preserve, and celebrate the monasteries of Sikkim through immersive technology.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Explore</h4>
            <ul className="space-y-2 text-sm">
              {navItems.map(({ to, label }) => (
                <li key={to}>
                  <Link className="text-foreground/80 hover:text-foreground" to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Follow</h4>
            <div className="flex items-center gap-3 text-foreground/80">
              <a href="#" aria-label="Website" className="hover:text-foreground"><Globe2 className="h-5 w-5" /></a>
              <a href="#" aria-label="Facebook" className="hover:text-foreground"><Facebook className="h-5 w-5" /></a>
              <a href="#" aria-label="GitHub" className="hover:text-foreground"><Github className="h-5 w-5" /></a>
            </div>
            <p className="mt-4 text-xs text-foreground/60">© {new Date().getFullYear()} Monastery360. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ConnectDataDialog() {
  const { config, setConfig } = useApiConfig();
  const [open, setOpen] = useState(false);
  const [baseUrl, setBaseUrl] = useState(config.baseUrl);
  const [apiKey, setApiKey] = useState(config.apiKey || "");
  const [useMock, setUseMock] = useState(config.useMock);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm"><Settings className="h-4 w-4" /> Connect Data</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Connect your backend</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="baseUrl">API Base URL</Label>
            <Input id="baseUrl" placeholder="https://your-api.example.com" value={baseUrl} onChange={(e)=>setBaseUrl(e.target.value)} />
            <p className="text-xs text-foreground/60">Leave empty and enable Mock Data to use built-in demo data.</p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="apiKey">API Key (optional)</Label>
            <Input id="apiKey" placeholder="Paste key if required" value={apiKey} onChange={(e)=>setApiKey(e.target.value)} />
          </div>
          <div className="flex items-center justify-between rounded-md border border-border p-3">
            <div>
              <div className="text-sm font-medium">Use Mock Data</div>
              <div className="text-xs text-foreground/60">Shows sample monasteries, tours, archives, and events.</div>
            </div>
            <Switch checked={useMock} onCheckedChange={(v)=>setUseMock(!!v)} />
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <Button variant="ghost" onClick={()=>setOpen(false)}>Cancel</Button>
            <Button onClick={()=>{ setConfig({ baseUrl: baseUrl.trim(), apiKey: apiKey.trim() || undefined, useMock: useMock || !baseUrl.trim() }); setOpen(false); }}>Save</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
