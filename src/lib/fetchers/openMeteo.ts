type weather = {
  temperature: number;
  condition: number;
};

export async function getWeather(
  latitude: string,
  longitude: string
): Promise<weather> {
  try {
    const responses = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code&current=temperature_2m`,
      {
        next: { revalidate: 3600 },
      }
    );

    const weatherData = await responses.json();

    return {
      temperature: weatherData.current.temperature_2m,
      condition: weatherData.daily.weather_code[0],
    };
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return {
      temperature: 0,
      condition: 0,
    };
  }
}
