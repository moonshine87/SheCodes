let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hour = now.getHours();
let minute = now.getMinutes();
let h5 = document.querySelector("h5");
h5.innerHTML = `${day}, ${hour}:${minute}`;
function getCity(event) {
  event.preventDefault();
  let input = document.querySelector("#city");
  let h2 = document.querySelector("h2");
  h2.innerHTML = input.value;
}
let city = document.querySelector("#city-search");
city.addEventListener("submit", getCity);

function changeTemp(event) {
  event.preventDefault();
  let currentTemp = document.querySelector("#current");
  currentTemp.innerHTML = "Temperature: 12 ";
}

function changeTemp2(event) {
  event.preventDefault();
  let currentTemp2 = document.querySelector("#current");
  currentTemp2.innerHTML = "Temperature: 66 ";
}

let tempC = document.querySelector("#temp-c");
tempC.addEventListener("click", changeTemp);

let tempF = document.querySelector("#temp-f");
tempF.addEventListener("click", changeTemp2);

function showWeather(response) {
  let tem = document.querySelector("#current");
  let temperature = Math.round(response.data.main.temp);
  tem.innerHTML = temperature;
}

function retrievePosition(position) {
  let apiKey = "3ba6aedff52d0b0dde86b09136152d6f";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showWeather);
}

navigator.geolocation.getCurrentPosition(retrievePosition);

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(retrievePosition);
}

let button = document.querySelector("#current-location");
button.addEventListener("click", getCurrentPosition);
