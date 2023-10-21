/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.ts":
/*!********************!*\
  !*** ./src/dom.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOM: () => (/* reexport module object */ _dom__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   changeDate: () => (/* binding */ changeDate),
/* harmony export */   changeInfo: () => (/* binding */ changeInfo),
/* harmony export */   changeWeatherInfo: () => (/* binding */ changeWeatherInfo),
/* harmony export */   cityError: () => (/* binding */ cityError),
/* harmony export */   clearCards: () => (/* binding */ clearCards),
/* harmony export */   createCards: () => (/* binding */ createCards),
/* harmony export */   displayLoading: () => (/* binding */ displayLoading),
/* harmony export */   permissionError: () => (/* binding */ permissionError),
/* harmony export */   removeError: () => (/* binding */ removeError)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.ts");
var location = document.getElementById("location");
var error = document.getElementById("error");
function changeInfo(cityName, countryName) {
    var city = document.getElementById("city");
    var country = document.getElementById("country");
    city.textContent = cityName;
    country.textContent = countryName;
    if (city.textContent.length >= 20) {
        city.style.fontSize = "2rem";
    }
}
function changeDate(dateData) {
    var options = {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
    };
    var date = document.getElementById("date");
    date.textContent = new Date(dateData).toLocaleDateString("en-GB", options);
}
function changeWeatherInfo(data) {
    var temperature = document.getElementById("temp");
    var feelsLike = document.getElementById("feels-like");
    var precipitation = document.getElementById("precipitation");
    var humidity = document.getElementById("humidity");
    var wind = document.getElementById("wind-speed");
    var gust = document.getElementById("gust-speed");
    var image = document.getElementById("weather-image");
    var description = document.getElementById("description");
    temperature.textContent = Math.round(data.list[0].main.temp) + "°c";
    feelsLike.textContent = Math.round(data.list[0].main.feels_like) + "°c";
    precipitation.textContent = data.list[0].pop * 100 + "%";
    humidity.textContent = data.list[0].main.humidity + "%";
    wind.textContent = Math.round(data.list[0].wind.speed) + "m/s";
    gust.textContent = Math.round(data.list[0].wind.gust) + "m/s";
    image.src = changeImage(data.list[0].weather[0].main);
    description.textContent = capitalizeDescription(data.list[0].weather[0].description);
}
function cityError() {
    location.style.marginTop = "2.1rem";
    error.style.display = "block";
    error.textContent = "Please check search input.";
    return;
}
function permissionError() {
    location.style.marginTop = "2.1rem";
    error.style.display = "block";
    error.textContent = "Please request permission.";
    return;
}
function removeError() {
    location.style.marginTop = "0rem";
    error.style.display = "none";
}
function createCards(data) {
    var options = {
        weekday: "long",
        month: "short",
        day: "numeric",
    };
    var cardContainer = document.querySelector(".weather-cards");
    var card = document.createElement("li");
    card.classList.add("card");
    cardContainer.appendChild(card);
    var day = document.createElement("h3");
    var weather = document.createElement("img");
    var temperature = document.createElement("h4");
    var humidity = document.createElement("h4");
    var wind = document.createElement("h4");
    day.textContent = new Date(data.dt_txt).toLocaleDateString("en-GB", options);
    weather.src = changeImage(data.weather[0].main);
    temperature.textContent = "Temperature: " + Math.round(data.main.temp) + "°c";
    humidity.textContent = "Humidity: " + data.main.humidity + "%";
    wind.textContent = "Wind Speed: " + Math.round(data.wind.speed) + "m/s";
    card.appendChild(day);
    card.appendChild(weather);
    card.appendChild(temperature);
    card.appendChild(humidity);
    card.appendChild(wind);
}
function clearCards() {
    var cardContainer = document.querySelector(".weather-cards");
    cardContainer.innerHTML = "";
}
function displayLoading() {
    var loader = document.querySelector(".loading");
    loader.classList.add("display");
    setTimeout(function () {
        loader.classList.remove("display");
    }, 1500);
}
function capitalizeDescription(description) {
    var splitLetters = description.split(" ");
    for (var i = 0; i < splitLetters.length; i++) {
        splitLetters[i] =
            splitLetters[i].charAt(0).toUpperCase() + splitLetters[i].slice(1);
    }
    var capitalString = splitLetters.join(" ");
    return capitalString;
}
function changeImage(weather) {
    if (weather === "Clear") {
        return "https://openweathermap.org/img/wn/01d@2x.png";
    }
    else if (weather === "Rain") {
        return "https://openweathermap.org/img/wn/10d@2x.png";
    }
    else if (weather === "Drizle") {
        return "https://openweathermap.org/img/wn/09d@2x.png";
    }
    else if (weather === "Thunderstorm") {
        return "https://openweathermap.org/img/wn/11d@2x.png";
    }
    else if (weather === "Snow") {
        return "https://openweathermap.org/img/wn/13d@2x.png";
    }
    else if (weather === "Atmosphere") {
        return "https://openweathermap.org/img/wn/50d@2x.png";
    }
    else if (weather === "Clouds") {
        return "https://openweathermap.org/img/wn/02d@2x.png";
    }
}




/***/ }),

/***/ "./src/interface.ts":
/*!**************************!*\
  !*** ./src/interface.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Interface: () => (/* reexport module object */ _interface__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   loadFunctions: () => (/* binding */ loadFunctions),
/* harmony export */   location: () => (/* binding */ location)
/* harmony export */ });
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ "./src/weather.ts");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.ts");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interface */ "./src/interface.ts");


var location = document.getElementById("location");
function searchCity() {
    var search = document.getElementById("search");
    search.addEventListener("click", function () {
        _dom__WEBPACK_IMPORTED_MODULE_1__.displayLoading();
        var city = location.value.trim();
        if (!city)
            _dom__WEBPACK_IMPORTED_MODULE_1__.cityError();
        var CITY_URL = "https://api.openweathermap.org/geo/1.0/direct?q=".concat(city, "&limit=5&appid=").concat(_weather__WEBPACK_IMPORTED_MODULE_0__.API_KEY);
        _weather__WEBPACK_IMPORTED_MODULE_0__.getCityData(CITY_URL);
    });
}
function inputEnterKey() {
    location.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            _dom__WEBPACK_IMPORTED_MODULE_1__.displayLoading();
            var city = location.value.trim();
            if (!city)
                _dom__WEBPACK_IMPORTED_MODULE_1__.cityError();
            var GEOCODING_API = "https://api.openweathermap.org/geo/1.0/direct?q=".concat(city, "&limit=5&appid=").concat(_weather__WEBPACK_IMPORTED_MODULE_0__.API_KEY);
            _weather__WEBPACK_IMPORTED_MODULE_0__.getCityData(GEOCODING_API);
        }
    });
}
function locateUser() {
    var userLocate = document.getElementById("user-coords");
    userLocate.addEventListener("click", function () {
        _dom__WEBPACK_IMPORTED_MODULE_1__.displayLoading();
        _weather__WEBPACK_IMPORTED_MODULE_0__.getCoords();
    });
}
function setDefaultCity() {
    var GEOCODING_API = "https://api.openweathermap.org/geo/1.0/direct?q=Yokohama&limit=5&appid=".concat(_weather__WEBPACK_IMPORTED_MODULE_0__.API_KEY);
    _weather__WEBPACK_IMPORTED_MODULE_0__.getCityData(GEOCODING_API);
}
function loadFunctions() {
    searchCity();
    inputEnterKey();
    setDefaultCity();
    locateUser();
}




/***/ }),

/***/ "./src/weather.ts":
/*!************************!*\
  !*** ./src/weather.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   API_KEY: () => (/* binding */ API_KEY),
/* harmony export */   Weather: () => (/* reexport module object */ _weather__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   getCityData: () => (/* binding */ getCityData),
/* harmony export */   getCoords: () => (/* binding */ getCoords),
/* harmony export */   getWeatherData: () => (/* binding */ getWeatherData)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.ts");
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather */ "./src/weather.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var API_KEY = "226dbf12f6c9f3e021556ea66e7c95c9";
function getCityData(url) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, _a, name_1, country, lat, lon, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(url, { mode: "cors" })];
                case 1:
                    response = _b.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _b.sent();
                    if (!data.length)
                        _dom__WEBPACK_IMPORTED_MODULE_0__.cityError();
                    _dom__WEBPACK_IMPORTED_MODULE_0__.removeError();
                    _a = data[0], name_1 = _a.name, country = _a.country, lat = _a.lat, lon = _a.lon;
                    _dom__WEBPACK_IMPORTED_MODULE_0__.changeInfo(name_1, country);
                    getWeatherData(lat, lon, API_KEY);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _b.sent();
                    if (error_1.code === error_1.TypeError) {
                        _dom__WEBPACK_IMPORTED_MODULE_0__.cityError();
                    }
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function getWeatherData(latitude, longitude, API) {
    return __awaiter(this, void 0, void 0, function () {
        var FORECAST_URL, response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast/?lat=".concat(latitude, "&lon=").concat(longitude, "&appid=").concat(API, "&units=metric");
                    return [4 /*yield*/, fetch(FORECAST_URL, { mode: "cors" })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    filterForecastData(data);
                    return [2 /*return*/];
            }
        });
    });
}
function getCoords() {
    navigator.geolocation.getCurrentPosition(function (position) {
        _dom__WEBPACK_IMPORTED_MODULE_0__.removeError();
        var _a = position.coords, latitude = _a.latitude, longitude = _a.longitude;
        var GEOCODING_URL = "https://api.openweathermap.org/geo/1.0/reverse?lat=".concat(latitude, "&lon=").concat(longitude, "&limit=1&appid=").concat(API_KEY);
        fetch(GEOCODING_URL)
            .then(function (response) { return response.json(); })
            .then(function (data) {
            var _a = data[0], name = _a.name, country = _a.country, lat = _a.lat, lon = _a.lon;
            _dom__WEBPACK_IMPORTED_MODULE_0__.changeInfo(name, country);
            getWeatherData(lat, lon, API_KEY);
        });
    }, function (error) {
        if (error.code === error.PERMISSION_DENIED) {
            _dom__WEBPACK_IMPORTED_MODULE_0__.permissionError();
        }
    });
}
function filterForecastData(data) {
    _dom__WEBPACK_IMPORTED_MODULE_0__.changeDate(data.list[0].dt_txt);
    _dom__WEBPACK_IMPORTED_MODULE_0__.changeWeatherInfo(data);
    var uniqueForecastDays = [];
    var fiveForecastDays = data.list.filter(function (list) {
        var forecastDate = new Date(list.dt_txt).getDate();
        if (!uniqueForecastDays.includes(forecastDate))
            return uniqueForecastDays.push(forecastDate);
    });
    if (fiveForecastDays.length > 5)
        fiveForecastDays.splice(0, 1);
    _dom__WEBPACK_IMPORTED_MODULE_0__.clearCards();
    fiveForecastDays.forEach(function (day) {
        _dom__WEBPACK_IMPORTED_MODULE_0__.createCards(day);
    });
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface */ "./src/interface.ts");

_interface__WEBPACK_IMPORTED_MODULE_0__.loadFunctions();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map