import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,hsl(var(--primary)/0.10)_0%,transparent_60%)]" />
      <div className="min-h-[60vh] container mx-auto px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold mb-2">404</h1>
          <p className="text-lg text-foreground/70 mb-6">This page has wandered off the trail.</p>
          <a href="/" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            Return Home
          </a>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
