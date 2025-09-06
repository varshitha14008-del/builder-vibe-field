import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`inline-flex items-center gap-2 ${className}`} aria-label="Monastery360 Home">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
        <Sparkles className="h-5 w-5" aria-hidden />
      </span>
      <span className="text-lg font-extrabold tracking-tight">Monastery360</span>
    </Link>
  );
}
