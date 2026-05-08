import { Wind, Droplets, Gauge, Thermometer, Sunrise, Sunset } from "lucide-react";
import { WeatherIcon } from "./WeatherIcon";
import { describeWeather, windDir, type WeatherData, type GeocodeResult } from "@/lib/weather";

interface Props {
  loc: GeocodeResult;
  data: WeatherData;
}

export function CurrentWeather({ loc, data }: Props) {
  const c = data.current;
  const sunrise = new Date(data.daily.sunrise[0]).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const sunset = new Date(data.daily.sunset[0]).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const localTime = new Date(c.time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <div className="glass-strong rounded-3xl p-8 md:p-10 shadow-glow animate-fade-up">
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="text-sm font-medium uppercase tracking-widest text-foreground/70">
            {loc.country} · {localTime} local
          </div>
          <h1 className="mt-1 text-4xl md:text-5xl font-bold text-gradient">
            {loc.name}
          </h1>
          <p className="mt-2 text-lg text-foreground/80">{describeWeather(c.weather_code, c.is_day)}</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="animate-float text-sky-glow">
            <WeatherIcon code={c.weather_code} isDay={c.is_day} className="h-24 w-24 md:h-32 md:w-32" />
          </div>
          <div className="text-right">
            <div className="text-7xl md:text-8xl font-extrabold leading-none tracking-tighter text-foreground">
              {Math.round(c.temperature_2m)}°
            </div>
            <div className="mt-2 text-sm text-foreground/70">
              Feels like {Math.round(c.apparent_temperature)}°
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
        <Stat icon={<Wind className="h-4 w-4" />} label="Wind" value={`${Math.round(c.wind_speed_10m)} km/h ${windDir(c.wind_direction_10m)}`} />
        <Stat icon={<Droplets className="h-4 w-4" />} label="Humidity" value={`${c.relative_humidity_2m}%`} />
        <Stat icon={<Gauge className="h-4 w-4" />} label="Pressure" value={`${Math.round(c.pressure_msl)} hPa`} />
        <Stat icon={<Thermometer className="h-4 w-4" />} label="Precip." value={`${c.precipitation} mm`} />
        <Stat icon={<Sunrise className="h-4 w-4" />} label="Sunrise" value={sunrise} />
        <Stat icon={<Sunset className="h-4 w-4" />} label="Sunset" value={sunset} />
      </div>
    </div>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="glass rounded-2xl p-4 transition hover:bg-white/10">
      <div className="flex items-center gap-2 text-foreground/70">
        {icon}
        <span className="text-xs uppercase tracking-wider">{label}</span>
      </div>
      <div className="mt-1 text-base font-semibold text-foreground">{value}</div>
    </div>
  );
}