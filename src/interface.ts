import * as Weather from "./weather";
import * as DOM from "./dom";

const location = document.getElementById("location") as HTMLInputElement | null;

function searchCity(): void {
  const search = document.getElementById("search") as HTMLElement;
  search.addEventListener("click", function () {
    const city: string = location.value.trim();
    if (!city) DOM.changeError();
    const GEOCODING_API: string = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${Weather.API_KEY}`;
    Weather.getCityData(GEOCODING_API);
  });
}

function inputEnterKey(): void {
  location.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      const city: string = location.value.trim();
      if (!city) DOM.changeError();
      const GEOCODING_API: string = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${Weather.API_KEY}`;
      Weather.getCityData(GEOCODING_API);
    }
  });
}

export function loadFunctions(): void {
  searchCity();
  inputEnterKey();
}

export * as Interface from "./interface";
