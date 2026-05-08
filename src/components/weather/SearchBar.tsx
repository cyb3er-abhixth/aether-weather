import { useEffect, useRef, useState } from "react";
import { Search, MapPin, Loader2 } from "lucide-react";
import { searchLocations, type GeocodeResult } from "@/lib/weather";

interface Props {
  onSelect: (loc: GeocodeResult) => void;
}

export function SearchBar({ onSelect }: Props) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<GeocodeResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    setLoading(true);
    const t = setTimeout(async () => {
      try {
        const r = await searchLocations(query);
        setResults(r);
        setOpen(true);
      } finally {
        setLoading(false);
      }
    }, 250);
    return () => clearTimeout(t);
  }, [query]);

  return (
    <div ref={ref} className="relative w-full max-w-xl">
      <div className="glass-strong flex items-center gap-3 rounded-2xl px-5 py-4 shadow-card transition focus-within:ring-2 focus-within:ring-sky-bright">
        <Search className="h-5 w-5 text-foreground/70" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => results.length && setOpen(true)}
          placeholder="Search any city on Earth..."
          className="w-full bg-transparent text-base text-foreground placeholder:text-foreground/50 outline-none"
        />
        {loading && <Loader2 className="h-4 w-4 animate-spin text-foreground/60" />}
      </div>

      {open && results.length > 0 && (
        <div className="glass-strong absolute z-50 mt-2 max-h-80 w-full overflow-auto rounded-2xl shadow-glow animate-fade-up">
          {results.map((r) => (
            <button
              key={`${r.id}-${r.latitude}`}
              onClick={() => {
                onSelect(r);
                setOpen(false);
                setQuery("");
              }}
              className="flex w-full items-center gap-3 px-5 py-3 text-left transition hover:bg-white/10"
            >
              <MapPin className="h-4 w-4 text-sky-bright" />
              <div>
                <div className="text-sm font-semibold text-foreground">{r.name}</div>
                <div className="text-xs text-foreground/70">
                  {[r.admin1, r.country].filter(Boolean).join(", ")}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}