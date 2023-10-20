import * as Type from "./type";
import * as DOM from "./dom";

export const API_KEY: string = "226dbf12f6c9f3e021556ea66e7c95c9";

export async function getCityData(key: string): Promise<any> {
  const response: Response = await fetch(key, { mode: "cors" });
  const data: Type.City = await response.json();
  if (!data.length) DOM.displayError();
  const { name, country, lat, lon } = data[0];
  DOM.removeError();
  DOM.changeInfo(name, country);
  getWeatherData(lat, lon, API_KEY);
}

export async function getWeatherData(
  latitude: number,
  longitude: number,
  API: string
): Promise<any> {
  const FORECAST_API: string = `https://api.openweathermap.org/data/2.5/forecast/?lat=${latitude}&lon=${longitude}&appid=${API}&units=metric`;
  const response: Response = await fetch(FORECAST_API, { mode: "cors" });
  const data: Type.Weather = await response.json();
  filterForecastData(data);
}

function filterForecastData(data: Type.Weather): void {
  DOM.changeDate(data.list[0].dt_txt);
  DOM.changeWeatherInfo(data);
  const uniqueForecastDays: Array<number> = [];
  const fiveForecastDays: Array<object> = data.list.filter((list) => {
    const forecastDate: number = new Date(list.dt_txt).getDate();
    if (!uniqueForecastDays.includes(forecastDate))
      return uniqueForecastDays.push(forecastDate);
  });
  if (fiveForecastDays.length > 5) fiveForecastDays.splice(0, 1);
  DOM.clearCards();
  fiveForecastDays.forEach((day: Type.Day) => {
    DOM.createCards(day);
  });
}
export * as Weather from "./weather";
