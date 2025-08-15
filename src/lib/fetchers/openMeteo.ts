import { fetchWeatherApi } from 'openmeteo';

const API_BASE_URL = 'https://api.open-meteo.com/v1/forecast';

export async function getWeatherData(latitude: number, longitude: number) {
  try {
    const responses = await fetchWeatherApi(API_BASE_URL,{
      latitude,
      longitude,
      current: true,
    });

    const response = responses[0];

    if (!response || !response.current) {
      throw new Error('Failed to fetch weather data');
    }

    return response.current;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
}
