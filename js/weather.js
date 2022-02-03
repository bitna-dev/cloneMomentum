function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const API_KEY = "1e93fd2826b0c820576eec9b29901ce4";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather .temp");
      const city = document.querySelector("#weather .place");
      weather.innerText = `${data.weather[0].main} / ${data.main.temp} ℃`;
      city.innerText = `${data.name}`;
    });
}

function onGeoError() {}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
