import { WeatherIcon } from "./WeatherIcon";
import { describeWeather, type WeatherData } from "@/lib/weather";
import { Droplets } from "lucide-react";

export function DailyForecast({ data }: { data: WeatherData }) {
  const max = Math.max(...data.daily.temperature_2m_max);
  const min = Math.min(...data.daily.temperature_2m_min);

  return (
    <div className="glass rounded-3xl p-6 shadow-card animate-fade-up">
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-foreground/70">7-day forecast</h2>
      <div className="space-y-2">
        {data.daily.time.map((day, i) => {
          const date = new Date(day);
          const label = i === 0 ? "Today" : date.toLocaleDateString([], { weekday: "short" });
          const dMin = data.daily.temperature_2m_min[i];
          const dMax = data.daily.temperature_2m_max[i];
          const left = ((dMin - min) / (max - min)) * 100;
          const right = ((dMax - min) / (max - min)) * 100;
          return (
            <div key={day} className="grid grid-cols-[60px_36px_1fr_140px_56px] items-center gap-3 rounded-xl px-3 py-2 transition hover:bg-white/10">
              <div className="text-sm font-semibold text-foreground">{label}</div>
              <div className="text-sky-glow">
                <WeatherIcon code={data.daily.weather_code[i]} className="h-6 w-6" />
              </div>
              <div className="hidden text-xs text-foreground/70 md:block truncate">{describeWeather(data.daily.weather_code[i])}</div>
              <div className="md:hidden" />
              <div className="flex items-center gap-2">
                <span className="w-9 text-right text-xs text-foreground/70">{Math.round(dMin)}°</span>
                <div className="relative h-1.5 flex-1 rounded-full bg-white/15">
                  <div
                    className="absolute h-full rounded-full bg-gradient-to-r from-sky-bright to-sky-glow"
                    style={{ left: `${left}%`, width: `${right - left}%` }}
                  />
                </div>
                <span className="w-9 text-xs font-semibold text-foreground">{Math.round(dMax)}°</span>
              </div>
              <div className="flex items-center justify-end gap-1 text-xs text-sky-bright">
                <Droplets className="h-3 w-3" />
                {data.daily.precipitation_probability_max[i]}%
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}