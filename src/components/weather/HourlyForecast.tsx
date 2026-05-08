import { WeatherIcon } from "./WeatherIcon";
import type { WeatherData } from "@/lib/weather";

export function HourlyForecast({ data }: { data: WeatherData }) {
  const now = new Date(data.current.time).getTime();
  const startIdx = data.hourly.time.findIndex((t) => new Date(t).getTime() >= now);
  const slice = Array.from({ length: 24 }, (_, i) => startIdx + i).filter((i) => i < data.hourly.time.length);

  return (
    <div className="glass rounded-3xl p-6 shadow-card animate-fade-up">
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-foreground/70">Next 24 hours</h2>
      <div className="flex gap-3 overflow-x-auto pb-2 [scrollbar-width:thin]">
        {slice.map((i) => {
          const t = new Date(data.hourly.time[i]);
          const hour = t.toLocaleTimeString([], { hour: "numeric" });
          return (
            <div
              key={i}
              className="glass flex min-w-[78px] flex-col items-center gap-2 rounded-2xl px-3 py-4 transition hover:scale-105 hover:bg-white/15"
            >
              <div className="text-xs font-medium text-foreground/70">{hour}</div>
              <div className="text-sky-glow">
                <WeatherIcon code={data.hourly.weather_code[i]} isDay={data.hourly.is_day[i]} className="h-7 w-7" />
              </div>
              <div className="text-base font-bold text-foreground">{Math.round(data.hourly.temperature_2m[i])}°</div>
              <div className="text-[10px] text-sky-bright">{data.hourly.precipitation_probability[i]}%</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}