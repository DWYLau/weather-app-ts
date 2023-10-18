import * as Interface from "./interface";

export const API_KEY: string = "226dbf12f6c9f3e021556ea66e7c95c9";

export async function getCityData(key: string): Promise<any> {
  const response: Response = await fetch(key, { mode: "cors" });
  const data = await response.json();
  if (!data.length) {
    Interface.displayError();
  }
  const { name, country, lat, lon } = data[0];
  Interface.removeError();
  Interface.changeInfo(name, country);
  getWeatherData(lat, lon, API_KEY);
}

export async function getWeatherData(
  latitude: number,
  longitude: number,
  API: string
): Promise<any> {
  const FORECAST_API: string = `https://api.openweathermap.org/data/2.5/forecast/?lat=${latitude}&lon=${longitude}&appid=${API}&units=metric`;
  const response: Response = await fetch(FORECAST_API, { mode: "cors" });
  const data = await response.json();
  filterForecastData(data);
}

function filterForecastData(data: Data) {
  const test: any = data.list[0];

  console.log(test.dt_txt);
}
export * as Weather from "./weather";

interface Data {
  list: Array<object>;
}

interface Main {
  dt_txt: string;
}
