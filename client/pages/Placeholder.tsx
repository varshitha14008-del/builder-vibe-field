import { Link, useLocation } from "react-router-dom";

const titles: Record<string, { title: string; description: string; cta?: string; to?: string } > = {
  "/tours": {
    title: "Virtual Tours",
    description:
      "Immerse yourself in 360° panoramic walkthroughs of Sikkim's monasteries with multi-language narration.",
    cta: "Preview a Tour",
    to: "/",
  },
  "/map": {
    title: "Interactive Map",
    description:
      "Explore geo-tagged monastery locations, routes, and nearby attractions across Sikkim.",
    cta: "Open Map",
    to: "/",
  },
  "/archives": {
    title: "Digital Archives",
    description:
      "Browse scanned manuscripts, murals, and historical records with AI-powered search.",
    cta: "Browse Highlights",
    to: "/",
  },
  "/calendar": {
    title: "Cultural Calendar",
    description:
      "Discover upcoming festivals, rituals, and events. Plan your visit and participate respectfully.",
    cta: "See Events",
    to: "/",
  },
  "/audio-guide": {
    title: "Smart Audio Guide",
    description:
      "Location-aware audio guides using Bluetooth beacons or GPS with offline support.",
    cta: "Learn More",
    to: "/",
  },
};

export default function Placeholder() {
  const { pathname } = useLocation();
  const info = titles[pathname] ?? { title: "Coming Soon", description: "This section is being crafted. Check back shortly." };

  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,hsl(var(--primary)/0.10)_0%,transparent_60%)]" />
      <div className="container mx-auto px-4 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            {info.title}
          </h1>
          <p className="mt-4 text-lg text-foreground/70">{info.description}</p>
          {info.cta && info.to && (
            <Link to={info.to} className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              {info.cta}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
