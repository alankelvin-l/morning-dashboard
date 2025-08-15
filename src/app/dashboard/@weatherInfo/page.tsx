import { getGeo } from "@/lib/server/geo";
import { getWeather } from "@/lib/fetchers/openMeteo";
import weatherCodeEmoji from "@/lib/mappers/weatherCodeEmoji";
import weatherCodeText from "@/lib/mappers/weatherCodeText";

export default async function WeatherInfoPage() {
    const geo = await getGeo();
    const weatherInfo = await getWeather(geo.latitude, geo.longitude);

    if (!geo || !weatherInfo) {
        return (
            <div className="p-4 text-center">
                <p className="text-gray-500">Unable to fetch weather information.</p>
            </div>
        );
    }

    return (
        <div className="p-4 flex flex-col items-center justify-center text-center bg-[oklch(27.8%_.033_256.848)] rounded-2xl">
            <p className="text-sm font-semibold mb-2">{decodeURI(geo.city ?? "")}, {geo.country}</p>
            <span className="text-[6rem] mb-2">
                {Math.round(weatherInfo.temperature)}°
            </span>
            <p className="text-gray-500" >
                 {weatherCodeText[weatherInfo.condition]} {weatherCodeEmoji[weatherInfo.condition]}
            </p>
        </div>
    );
}
