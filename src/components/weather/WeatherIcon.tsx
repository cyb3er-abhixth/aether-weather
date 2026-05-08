import {
  Sun, Moon, Cloud, CloudSun, CloudMoon, CloudDrizzle, CloudRain,
  CloudSnow, CloudLightning, CloudFog,
} from "lucide-react";

export function WeatherIcon({ code, isDay = 1, className = "h-6 w-6" }: { code: number; isDay?: number; className?: string }) {
  const day = isDay === 1;
  if (code === 0) return day ? <Sun className={className} /> : <Moon className={className} />;
  if (code === 1 || code === 2) return day ? <CloudSun className={className} /> : <CloudMoon className={className} />;
  if (code === 3) return <Cloud className={className} />;
  if (code === 45 || code === 48) return <CloudFog className={className} />;
  if (code >= 51 && code <= 57) return <CloudDrizzle className={className} />;
  if ((code >= 61 && code <= 67) || (code >= 80 && code <= 82)) return <CloudRain className={className} />;
  if ((code >= 71 && code <= 77) || code === 85 || code === 86) return <CloudSnow className={className} />;
  if (code >= 95) return <CloudLightning className={className} />;
  return <Cloud className={className} />;
}