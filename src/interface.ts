import * as Weather from "./weather";
export * as Interface from "./interface";

const location = document.getElementById("location") as HTMLInputElement | null;
const search = document.getElementById("search") as HTMLElement;
const city = document.getElementById("city");
const date = document.getElementById("date");
const countryName = document.getElementById("country");
const temperature = document.getElementById("temp");
const feelsLike = document.getElementById("feels-like");
const precipitation = document.getElementById("precipitation");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind-speed");
const gustSpeed = document.getElementById("gust-speed");
const description = document.getElementById("description");
const weatherImage = document.getElementById("weather-image");
const weatherCardDiv = document.querySelector(".weather-cards");
const error = document.querySelector(".error");

const API_KEY = "226dbf12f6c9f3e021556ea66e7c95c9";

function searchCity(): void {
  search.addEventListener("click", function () {
    const cityName = location.value.trim();
    if (!cityName) return;
    const GEOCODING_API = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${API_KEY}`;
    Weather.getCityData(GEOCODING_API);
  });
}

export function loadFunctions(): void {
  searchCity();
}
