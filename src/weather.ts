export * as Weather from "./weather";

export async function getCityData(API: string) {
  const response = await fetch(API, { mode: "cors" });
  const cityData = await response.json();
  console.log(cityData);
}

export async function getWeatherData(
  latitude: string,
  longitude: string,
  API: string
) {
  const FORECAST_API: string = `https://api.openweathermap.org/data/2.5/forecast/?lat=${latitude}&lon=${longitude}&appid=${API}&units=metric`;
  const response = await fetch(FORECAST_API, { mode: "cors" });
  const weatherData = await response.json();
  console.log(weatherData);
}
