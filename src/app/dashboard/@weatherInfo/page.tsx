import { getGeo } from "@/lib/server/geo";
import { getWeather } from "@/lib/fetchers/openMeteo";
import weatherCodeEmoji from "@/lib/mappers/weatherCodeEmoji";
import weatherCodeText from "@/lib/mappers/weatherCodeText";

export default async function WeatherInfoPage() {
  const geo = await getGeo();
  const weatherInfo = await getWeather(geo.latitude, geo.longitude);

  const city = geo.city ? decodeURI(geo.city) : "Your Area";
  const country = geo.country ?? "";
  const temperature = Math.round(weatherInfo.temperature);
  const weatherDescription = weatherCodeText[weatherInfo.condition];
  const weatherEmoji = weatherCodeEmoji[weatherInfo.condition];

  if (!geo || !weatherInfo) {
    return (
      <div className="p-4 text-center">
        <p className="text-gray-500">Unable to fetch weather information.</p>
      </div>
    );
  }

  return (
    <div className="p-4 flex flex-col items-center justify-center text-center bg-[oklch(27.8%_.033_256.848)] rounded-2xl">
      <h2 className="sr-only">Current Weather</h2>
      <p className="text-sm font-semibold mb-2">
        {city}
        {country ? `, ${geo.country}` : ""}
      </p>
      <span
        className="text-[6rem] mb-2"
        aria-label={`Temperature: ${temperature} degrees celsius`}
      >
        {temperature}°
      </span>
      <p className="text-gray-500" aria-label={weatherDescription}>
        {weatherDescription} {weatherEmoji}
      </p>
    </div>
  );
}
