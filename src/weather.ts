import * as Type from "./type";
import * as DOM from "./dom";

export const API_KEY: string = "226dbf12f6c9f3e021556ea66e7c95c9";

export async function getCityData(url: string): Promise<any> {
  try {
    const response: Response = await fetch(url, { mode: "cors" });
    const data: Type.City = await response.json();
    if (!data.length) DOM.cityError();
    DOM.removeError();
    const { name, country, lat, lon } = data[0];
    DOM.changeInfo(name, country);
    getWeatherData(lat, lon, API_KEY);
  } catch (error) {
    if (error.code === error.TypeError) {
      DOM.cityError();
    }
  }
}

export async function getWeatherData(
  latitude: number,
  longitude: number,
  API: string
): Promise<any> {
  const FORECAST_URL: string = `https://api.openweathermap.org/data/2.5/forecast/?lat=${latitude}&lon=${longitude}&appid=${API}&units=metric`;
  const response: Response = await fetch(FORECAST_URL, { mode: "cors" });
  const data: Type.Weather = await response.json();
  filterForecastData(data);
}

export function getCoords(): void {
  navigator.geolocation.getCurrentPosition(
    (position: GeolocationPosition) => {
      DOM.removeError();
      const { latitude, longitude } = position.coords;
      const GEOCODING_URL = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${API_KEY}`;
      fetch(GEOCODING_URL)
        .then((response: Response) => response.json())
        .then((data: Type.City) => {
          const { name, country, lat, lon } = data[0];
          DOM.changeInfo(name, country);
          getWeatherData(lat, lon, API_KEY);
        });
    },
    (error) => {
      if (error.code === error.PERMISSION_DENIED) {
        DOM.permissionError();
      }
    }
  );
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
