import * as Weather from "./weather";
import * as DOM from "./dom";

export const location = document.getElementById(
  "location"
) as HTMLInputElement | null;

function searchCity(): void {
  const search = document.getElementById("search") as HTMLElement;
  search.addEventListener("click", function () {
    DOM.displayLoading();
    const city: string = location.value.trim();
    if (!city) DOM.cityError();
    const CITY_URL: string = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${Weather.API_KEY}`;
    Weather.getCityData(CITY_URL);
  });
}

function inputEnterKey(): void {
  location.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      DOM.displayLoading();
      const city: string = location.value.trim();
      if (!city) DOM.cityError();
      const GEOCODING_API: string = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${Weather.API_KEY}`;
      Weather.getCityData(GEOCODING_API);
    }
  });
}

function locateUser(): void {
  const userLocate: HTMLElement = document.getElementById("user-coords");
  userLocate.addEventListener("click", function () {
    DOM.displayLoading();
    Weather.getCoords();
  });
}

function setDefaultCity(): void {
  const GEOCODING_API = `https://api.openweathermap.org/geo/1.0/direct?q=Yokohama&limit=5&appid=${Weather.API_KEY}`;
  Weather.getCityData(GEOCODING_API);
}

export function loadFunctions(): void {
  searchCity();
  inputEnterKey();
  setDefaultCity();
  locateUser();
}

export * as Interface from "./interface";
