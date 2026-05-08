import { useState, useEffect, useMemo } from "react";
import { Locate, RefreshCw, Loader2 } from "lucide-react";

// Components
import { SearchBar } from "./components/weather/SearchBar";
import { CurrentWeather } from "./components/weather/CurrentWeather";
import { HourlyForecast } from "./components/weather/HourlyForecast";
import { DailyForecast } from "./components/weather/DailyForecast";

// Utils/Data
import { fetchWeather, backgroundFor } from "./lib/weather";
import { POPULAR_CITIES, type GeocodeResult, type WeatherData } from "./lib/constants";

export default function App() {
  const [loc, setLoc] = useState<GeocodeResult>(POPULAR_CITIES[0]);
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const load = async (l: GeocodeResult) => {
    setLoading(true);
    setError(null);
    try {
      const d = await fetchWeather(l.latitude, l.longitude);
      setData(d);
      setLastUpdated(new Date());
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load(loc);
  }, [loc]);

  // Auto-refresh every 5 minutes
  useEffect(() => {
    const id = setInterval(() => load(loc), 5 * 60 * 1000);
    return () => clearInterval(id);
  }, [loc]);

  const useGeolocation = () => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const res = await fetch(
            `https://geocoding-api.open-meteo.com/v1/reverse?latitude=${pos.coords.latitude}&longitude=${pos.coords.longitude}&language=en`
          );
          const j = await res.json();
          const r = j.results?.[0];
          if (r) {
            setLoc({
              id: r.id,
              name: r.name,
              country: r.country,
              admin1: r.admin1,
              latitude: pos.coords.latitude,
              longitude: pos.coords.longitude,
            });
          } else {
            setLoc({
              id: 0,
              name: "My location",
              country: "",
              latitude: pos.coords.latitude,
              longitude: pos.coords.longitude,
            });
          }
        } catch {
          // ignore
        }
      },
      () => setError("Unable to get your location")
    );
  };

  const bg = useMemo(() => {
    if (!data) return null;
    return backgroundFor(data.current.weather_code, data.current.is_day);
  }, [data]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Dynamic background */}
      {bg && (
        <div
          key={bg}
          className="fixed inset-0 -z-10 bg-cover bg-center transition-opacity duration-1000"
          style={{ backgroundImage: `url(${bg})` }}
          aria-hidden
        />
      )}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-sky-deep/70 via-sky-deep/60 to-sky-deep/90" aria-hidden />

      <main className="mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-12">
        {/* Header */}
        <header className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-bright to-sky-glow shadow-glow">
              <span className="text-lg font-extrabold text-primary-foreground">A</span>
            </div>
            <div>
              <div className="text-xl font-bold tracking-tight text-foreground">Aether</div>
              <div className="text-xs text-foreground/60">Real-time weather, anywhere</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={useGeolocation}
              className="glass flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-foreground transition hover:bg-white/15"
            >
              <Locate className="h-4 w-4" /> My location
            </button>
            <button
              onClick={() => load(loc)}
              disabled={loading}
              className="glass flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-foreground transition hover:bg-white/15 disabled:opacity-50"
            >
              <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
              {lastUpdated ? lastUpdated.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "Refresh"}
            </button>
          </div>
        </header>

        {/* Search */}
        <section className="mb-6 flex justify-center">
          <SearchBar onSelect={setLoc} />
        </section>

        {/* Popular */}
        <section className="mb-8 flex flex-wrap justify-center gap-2">
          {POPULAR_CITIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setLoc(c)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
                loc.name === c.name
                  ? "bg-sky-bright text-primary-foreground shadow-glow"
                  : "glass text-foreground/80 hover:bg-white/15"
              }`}
            >
              {c.name}
            </button>
          ))}
        </section>

        {/* Content */}
        {error && (
          <div className="glass rounded-2xl p-6 text-center text-foreground">
            <p>{error}</p>
          </div>
        )}

        {loading && !data && (
          <div className="flex min-h-[40vh] items-center justify-center">
            <Loader2 className="h-10 w-10 animate-spin text-sky-glow" />
          </div>
        )}

        {data && (
          <div className="space-y-6">
            <CurrentWeather loc={loc} data={data} />
            <HourlyForecast data={data} />
            <DailyForecast data={data} />
          </div>
        )}

        <footer className="mt-12 text-center text-xs text-foreground/50">
          Live data from Open-Meteo · Updates every 5 min
        </footer>
      </main>
    </div>
  );
}
