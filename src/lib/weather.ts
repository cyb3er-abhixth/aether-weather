import clearDay from "@/assets/clear-day.jpg";
import cloudy from "@/assets/cloudy.jpg";
import rain from "@/assets/rain.jpg";
import snow from "@/assets/snow.jpg";
import night from "@/assets/night.jpg";
import skyHero from "@/assets/sky-hero.jpg";

export interface GeocodeResult {
  id: number;
  name: string;
  country: string;
  admin1?: string;
  latitude: number;
  longitude: number;
  timezone?: string;
}

export interface WeatherData {
  current: {
    temperature_2m: number;
    apparent_temperature: number;
    relative_humidity_2m: number;
    weather_code: number;
    wind_speed_10m: number;
    wind_direction_10m: number;
    pressure_msl: number;
    is_day: number;
    precipitation: number;
    uv_index?: number;
    time: string;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    weather_code: number[];
    precipitation_probability: number[];
    is_day: number[];
  };
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    weather_code: number[];
    precipitation_probability_max: number[];
    sunrise: string[];
    sunset: string[];
  };
  timezone: string;
}

export async function searchLocations(query: string): Promise<GeocodeResult[]> {
  if (!query.trim()) return [];
  const res = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=8&language=en&format=json`
  );
  if (!res.ok) throw new Error("Search failed");
  const data = await res.json();
  return data.results ?? [];
}

export async function fetchWeather(lat: number, lon: number): Promise<WeatherData> {
  const url = new URL("https://api.open-meteo.com/v1/forecast");
  url.searchParams.set("latitude", String(lat));
  url.searchParams.set("longitude", String(lon));
  url.searchParams.set(
    "current",
    "temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,wind_direction_10m,pressure_msl,is_day,precipitation,uv_index"
  );
  url.searchParams.set("hourly", "temperature_2m,weather_code,precipitation_probability,is_day");
  url.searchParams.set(
    "daily",
    "temperature_2m_max,temperature_2m_min,weather_code,precipitation_probability_max,sunrise,sunset"
  );
  url.searchParams.set("timezone", "auto");
  url.searchParams.set("forecast_days", "7");
  const res = await fetch(url.toString());
  if (!res.ok) throw new Error("Weather fetch failed");
  return res.json();
}

// WMO Weather codes -> label
export function describeWeather(code: number, isDay = 1): string {
  const map: Record<number, string> = {
    0: isDay ? "Clear sky" : "Clear night",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Foggy",
    48: "Rime fog",
    51: "Light drizzle",
    53: "Drizzle",
    55: "Heavy drizzle",
    56: "Freezing drizzle",
    57: "Freezing drizzle",
    61: "Light rain",
    63: "Rain",
    65: "Heavy rain",
    66: "Freezing rain",
    67: "Freezing rain",
    71: "Light snow",
    73: "Snow",
    75: "Heavy snow",
    77: "Snow grains",
    80: "Rain showers",
    81: "Rain showers",
    82: "Violent showers",
    85: "Snow showers",
    86: "Heavy snow showers",
    95: "Thunderstorm",
    96: "Thunderstorm w/ hail",
    99: "Severe thunderstorm",
  };
  return map[code] ?? "Unknown";
}

export function backgroundFor(code: number, isDay: number): string {
  if (!isDay) return night;
  if (code === 0 || code === 1) return clearDay;
  if (code === 2) return skyHero;
  if (code === 3 || code === 45 || code === 48) return cloudy;
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82) || code >= 95) return rain;
  if ((code >= 71 && code <= 77) || code === 85 || code === 86) return snow;
  return skyHero;
}

export function windDir(deg: number): string {
  const dirs = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  return dirs[Math.round(deg / 45) % 8];
}

export const POPULAR_CITIES: GeocodeResult[] = [
  { id: 1, name: "New York", country: "USA", latitude: 40.7128, longitude: -74.006 },
  { id: 2, name: "London", country: "UK", latitude: 51.5074, longitude: -0.1278 },
  { id: 3, name: "Tokyo", country: "Japan", latitude: 35.6762, longitude: 139.6503 },
  { id: 4, name: "Paris", country: "France", latitude: 48.8566, longitude: 2.3522 },
  { id: 5, name: "Sydney", country: "Australia", latitude: -33.8688, longitude: 151.2093 },
  { id: 6, name: "Dubai", country: "UAE", latitude: 25.2048, longitude: 55.2708 },
  { id: 7, name: "Reykjavík", country: "Iceland", latitude: 64.1466, longitude: -21.9426 },
  { id: 8, name: "Cape Town", country: "South Africa", latitude: -33.9249, longitude: 18.4241 },
];