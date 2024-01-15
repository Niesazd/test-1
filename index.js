function currentDateFunction() {
  let date = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  let hour = String(date.getHours()).padStart(2, "0");
  let minute = String(date.getMinutes()).padStart(2, "0");
  return `${day} ${hour}:${minute}`
}

function searchFn(event) {
  event.preventDefault();
  function cityFunction(response) {
    let city = response.data.city;
    let currentCity = document.querySelector("#current-city");
    let temp = Math.round(response.data.temperature.current);
    let currentTemp = document.querySelector(".current-temperature-value");
    let desc = response.data.condition.description;
    let currentDesc = document.querySelector("#current-weather-description");
    let humidity = response.data.temperature.humidity;
    let currentHumidity = document.querySelector("#current-humidity");
    let wind = response.data.wind.speed;
    let currentWind = document.querySelector("#current-wind-speed");
    
    currentCity.innerHTML = city;
    currentTemp.innerHTML = temp;
    currentDesc.innerHTML = desc;
    currentHumidity.innerHTML = `${humidity}%`;
    currentWind.innerHTML = `${wind}km/h`;
    currentDateFunction();
  }
  
  let city = document.querySelector("#search-input");
  city = city.value;
  let key = "5fe7120d92tc7592472edba320co9e7b";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=metric`;
  
  axios.get(apiUrl).then(cityFunction);
}

let searchCity = document.querySelector("#search-form");
searchCity.addEventListener("submit", searchFn);


let currentDate = document.querySelector("#current-date");
currentDate.innerHTML = currentDateFunction();