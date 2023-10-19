import * as Type from "./type";

const location = document.getElementById("location") as HTMLInputElement | null;
const error = document.getElementById("error") as HTMLElement;
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

export function changeDate(dateData: string): void {
  const date = document.getElementById("date") as HTMLElement;
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  } as const;
  date.textContent = new Date(dateData).toLocaleDateString("en-GB", options);
}

export function changeWeatherInfo(data: Type.Weather): void {
  const temperature = document.getElementById("temp") as HTMLElement;
  const feelsLike = document.getElementById("feels-like") as HTMLElement;
  const precipitation = document.getElementById("precipitation") as HTMLElement;
  const humidity = document.getElementById("humidity") as HTMLElement;
  const windSpeed = document.getElementById("wind-speed") as HTMLElement;
  const gustSpeed = document.getElementById("gust-speed") as HTMLElement;
  const description = document.getElementById("description") as HTMLElement;
  const image = document.getElementById("weather-image") as HTMLImageElement;
  temperature.textContent = Math.round(data.list[0].main.temp) + "°c";
  feelsLike.textContent = Math.round(data.list[0].main.feels_like) + "°c";
  precipitation.textContent = data.list[0].pop * 100 + "%";
  humidity.textContent = data.list[0].main.humidity + "%";
  windSpeed.textContent = Math.round(data.list[0].wind.speed) + "m/s";
  gustSpeed.textContent = Math.round(data.list[0].wind.gust) + "m/s";
  description.textContent = capitalizeDescription(
    data.list[0].weather[0].description
  );
  image.src = changeImage(data.list[0].weather[0].main);
}

function changeImage(weather: string): string {
  if (weather === "Clear") {
    return "https://openweathermap.org/img/wn/01d@2x.png";
  } else if (weather === "Rain") {
    return "https://openweathermap.org/img/wn/10d@2x.png";
  } else if (weather === "Drizle") {
    return "https://openweathermap.org/img/wn/09d@2x.png";
  } else if (weather === "Thunderstorm") {
    return "https://openweathermap.org/img/wn/11d@2x.png";
  } else if (weather === "Snow") {
    return "https://openweathermap.org/img/wn/13d@2x.png";
  } else if (weather === "Atmosphere") {
    return "https://openweathermap.org/img/wn/50d@2x.png";
  } else if (weather === "Clouds") {
    return "https://openweathermap.org/img/wn/02d@2x.png";
  }
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

function capitalizeDescription(description: string): string {
  let splitLetters: string[] = description.split(" ");
  for (let i = 0; i < splitLetters.length; i++) {
    splitLetters[i] =
      splitLetters[i].charAt(0).toUpperCase() + splitLetters[i].slice(1);
  }
  let capitalString: string = splitLetters.join(" ");
  return capitalString;
}

export * as DOM from "./dom";
