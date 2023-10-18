import * as Weather from "./weather";

const location = document.getElementById("location") as HTMLInputElement | null;
const temperature = document.getElementById("temp") as HTMLElement;
const feelsLike = document.getElementById("feels-like") as HTMLElement;
const precipitation = document.getElementById("precipitation") as HTMLElement;
const humidity = document.getElementById("humidity") as HTMLElement;
const windSpeed = document.getElementById("wind-speed") as HTMLElement;
const gustSpeed = document.getElementById("gust-speed") as HTMLElement;
const description = document.getElementById("description") as HTMLElement;
const error = document.getElementById("error") as HTMLElement;
const weatherImage = document.getElementById(
  "weather-image"
) as HTMLImageElement;
const weatherCardDiv = document.querySelector(
  ".weather-cards"
) as HTMLDivElement;

export function changeInfo(cityName: string, countryName: string): void {
  const city = document.getElementById("city") as HTMLElement;
  const country = document.getElementById("country") as HTMLElement;
  city.textContent = cityName;
  country.textContent = countryName;
  if (city.textContent.length >= 20) {
    city.style.fontSize = "2rem";
  }
}

export function changeDate(dateData: string) {
  const date = document.getElementById("date") as HTMLElement;
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  } as const;
  date.textContent = new Date(dateData).toLocaleDateString("en-GB", options);
}

export function changeError(): void {
  location.style.marginTop = "2.1rem";
  error.style.display = "block";
  error.textContent = "Please enter a city name.";
  return;
}

export function displayError(): void {
  location.style.marginTop = "2.1rem";
  error.style.display = "block";
}

export function removeError(): void {
  location.style.marginTop = "0rem";
  error.style.display = "none";
}

function searchCity(): void {
  const search = document.getElementById("search") as HTMLElement;
  search.addEventListener("click", function () {
    const city: string = location.value.trim();
    if (!city) changeError();
    const GEOCODING_API: string = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${Weather.API_KEY}`;
    Weather.getCityData(GEOCODING_API);
  });
}

function inputEnterKey(): void {
  location.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      const city: string = location.value.trim();
      if (!city) changeError();
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
