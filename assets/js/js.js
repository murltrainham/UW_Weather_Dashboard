/*
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly

GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
*/

// www.w3schools.com/html/html5_geolocation.asp
// https://www.youtube.com/watch?v=nGVoHEZojiQ - Steve Griffith - Prof3ssorSt3v3 (JS & Geolocation)
// https://www.youtube.com/watch?v=NIAqR34eg7I - Steve Griffith - Prof3ssorSt3v3 (OpenWeatherMapAPI)
// https://www.youtube.com/watch?v=6trGQWzg2AI - Asish George Tech - (How to make Weather App using Openweathermap API | Javascript - Responsive Website)
// https://youtu.be/18-Ye2L3ej8 - The Midnight - Gloria
// https://www.studytonight.com/post/how-to-build-a-weather-app-using-javascript-for-complete-beginners
// https://zoom.us/rec/play/pZ5h8CJcC1Pk68_z63DxjHZh8_6XL5R5qhcPnsn3BDAxQfn_V3iebDJIbvylC9PNcf2DlrO-Sx2N4w00. FhIQAgIvCVm2yDiv

// issues to resolve .. having to refresh page to get functionality as initial submit causes lat/lon errors.
// RESOLVED switched to localStorage and calling partdeux within fetchorama (instead of @ the end of pardeux) seemed to enable everything to work properly.
// UPDATE not resolved...its now doing what it was doing before.

var dateGet = moment().format("lll");
console.log(dateGet);
document.body.innerHTML = document.body.innerHTML.replace("pasta", dateGet);

var cityInputEl = document.getElementById("cityinput");
var cityInputBtnEl = document.getElementById("cityinputbtn");

cityInputBtnEl.addEventListener("click", fetchOrama);

var key1 = `042f6db5a47c70c4e9172cedc3197e3d`;
var units = `imperial`;
var lang = `en`;

function fetchOrama() {
  var city = document.getElementById("cityinput").value;

  var request = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${key1}`;

  fetch(request)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        var cityName = data[i].name;
        var lat = data[i].lat;
        var lon = data[i].lon;
        console.log(cityName);
        console.log(lat);
        console.log(lon);
      }
      localStorage.setItem("lat", JSON.stringify(lat));
      localStorage.setItem("lon", JSON.stringify(lon));
      document.body.innerHTML = document.body.innerHTML.replace(
        "Seattle",
        cityName
      );
    });
    requestPartDeux();
}

function requestPartDeux() {
  var lat = JSON.parse(localStorage.getItem("lat"));
  var lon = JSON.parse(localStorage.getItem("lon"));
  var temp = JSON.parse(localStorage.getItem("temp"));
  var humidity = JSON.parse(localStorage.getItem("humidity"));
  var windSpeed = JSON.parse(localStorage.getItem("windSpeed"));
  var uv = JSON.parse(localStorage.getItem("uv"));

  var requestOrama = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key1}&units=${units}&lang=${lang}&exclude=hourly,minutely`;

  fetch(requestOrama)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);     
      var temp = data.current.temp;
      var humidity = data.current.humidity;
      var windSpeed = data.current.wind_speed;
      var uv = data.current.uvi;
      console.log(temp);
      console.log(humidity);
      console.log(windSpeed);
      console.log(uv);
      localStorage.setItem("temp", JSON.stringify(temp));
      localStorage.setItem("humidity", JSON.stringify(humidity));
      localStorage.setItem("windSpeed", JSON.stringify(windSpeed));
      localStorage.setItem("uv", JSON.stringify(uv));
    });
      document.body.innerHTML = document.body.innerHTML.replace("102.5", temp);
      document.body.innerHTML = document.body.innerHTML.replace("90", humidity);
      document.body.innerHTML = document.body.innerHTML.replace("50", windSpeed);
      document.body.innerHTML = document.body.innerHTML.replace("5", uv);
}

/*
  for (var i = 0; i < data.current.length; i++) {
    var temp = data.current[i].temp;
    var humidity = data.current[i].humidity;
    var windSpeed = data.current[i].wind_speed;
    var uv = data.current[i].uvi;
    console.log(temp);
    console.log(humidity);
    console.log(windSpeed);
    console.log(uv);
  }
*/
/*
  function hrugeDataSmorgasbord() {
    var albatross = JSON.parse(localStorage.getItem("cityData"));
    console.log(albatross);
  }
hrugeDataSmorgasbord();
*/
/*
.then(function (data) {
  console.log(data);
  for (var i = 0; i < data.length; i++) {
    var cityName = data[i].name;
    var lat = data[i].lat;
    var lon = data[i].lon;
    console.log(cityName);
    console.log(lat);
    console.log(lon);
  }
  */
/*
  for (var i = 0; i < lemur.length; i++) {
    temp = lemur[i].temp;
    humidity = lemur[i].humidity;
    windSpeed = lemur[i].wind_speed;
    uv = lemur[i].uvi;
    console.log(temp);
    console.log(humidity);
    console.log(windSpeed);
    console.log(uv);
  }
  */
/*
  var requestPartDeux = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key1}&units=${units}&lang=${lang}&exclude=hourly,minutely`;

  fetch(requestPartDeux)
    .then(function (response) {
      return response.json();
    })
    .then(function (lemur) {
      console.log(lemur);
    });
    */
