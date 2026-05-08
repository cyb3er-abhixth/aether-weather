export interface GeocodeResult {
  id: number;
  name: string;
  country: string;
  admin1?: string;
  latitude: number;
  longitude: number;
}

export interface WeatherData {
  current: {
    temperature_2m: number;
    apparent_temperature: number;
    weather_code: number;
    wind_speed_10m: number;
    relative_humidity_2m: number;
    is_day: number;
  };

  hourly: {
    time: string[];
    temperature_2m: number[];
    weather_code: number[];
  };

  daily: {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
  };
}

export const POPULAR_CITIES: GeocodeResult[] = [
  {
    id: 1,
    name: "Dubai",
    country: "UAE",
    latitude: 25.2048,
    longitude: 55.2708,
  },
  {
    id: 2,
    name: "Abu Dhabi",
    country: "UAE",
    latitude: 24.4539,
    longitude: 54.3773,
  },
  {
    id: 3,
    name: "Sharjah",
    country: "UAE",
    latitude: 25.3463,
    longitude: 55.4209,
  },
  {
    id: 4,
    name: "London",
    country: "UK",
    latitude: 51.5072,
    longitude: -0.1276,
  },
];