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
//

//Retrive user location to display weather information and make it usable for openweatherAPI else default run for Tacoma
//Stringify location data and store in local storage
//Run some testing for Geolocation API

/*function fetchLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition();
  } else {
    errorAlert();
  }
}


function errorAlert(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert("User denied the request for Geolocation");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Location information is not available");
      break;
    case error.TIMEOUT:
      alert("User location request timed out");
      break;
    case error.UNKNOWN_ERROR:
      alert("Unknown error");
      break;
  }
}
*/
/*
function fetchGeolocation(cityName) {
  var request =
    "http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&appid=63ba60e03a73c951ad4f3018320967e5";

  fetch(request)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      // access lat and lon from data
      // call fetchonecallweather and pass through the lat an lon value
      // render step accept and print cityname
    });
}
//fetchGeolocation();

function fetchOneCallWeather(lat, lon) {
  var request =
    "http://api.openweathermap.org/data/2.5/onecall?appid=63ba60e03a73c951ad4f3018320967e5&lat=${lat}&lon=${lon}&units=imperial&exclude=hourly,minutley";

  fetch(request)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      //render or display the weather data
    });
}
fetchOneCallWeather();*/

key1 = "042f6db5a47c70c4e9172cedc3197e3d";
key2 = "63ba60e03a73c951ad4f3018320967e5";
latprep = JSON.parse(window.localStorage.getItem("lat"));
lonprep = JSON.parse(window.localStorage.getItem("lon"));
lat = latprep.toFixed(2);
lon = lonprep.toFixed(2);
lang = "en";
units = "imperial";
url = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key1}&units=${units}&lang=${lang}&exclude=hourly,minutely`;
urlFrog = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=${5}&appid=${key2}`;

//cityname = JSON.parse(window.localStorage.getItem("cityUserInput"));
//console.log(cityname);

// Display date / time
date = new Date();
console.log(date);
document.body.innerHTML = document.body.innerHTML.replace("pasta", date);

// Locally store city name user input
function userCityInput() {
  cityInputEl = document.getElementById("cityinput");
  cityInputBtnEl = document.getElementById("cityinputbtn");

  cityInputBtnEl.addEventListener("click", function () {
    inputCity = document.getElementById("cityinput").value;
    localStorage.setItem("cityUserInput", JSON.stringify(inputCity));
    cityName = JSON.parse(window.localStorage.getItem("cityUserInput"));
    console.log(cityName);
    var request = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${key1}`;
    fetch(request)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
  });
}
userCityInput();

// Event listner for current location

cityGeoCurrent = document.getElementById("citysearchbtn");
cityGeoCurrent.addEventListener("click", userGeo);

// If user interacts with 5 day weather search by current location retrive lat / lon using Geolocation API and locally store values.

// If user "" but there is an error or user blocks access return alert error for user notification.

function userGeo() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(fetchGeo, errorAlert);
  } else {
  }
}

function fetchGeo(position) {
  lat = position.coords.latitude;
  lon = position.coords.longitude;
  localStorage.setItem("lat", JSON.stringify(lat));
  localStorage.setItem("lon", JSON.stringify(lon));
}

function errorAlert(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert("User denied the request for Geolocation");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Location information is not available");
      break;
    case error.TIMEOUT:
      alert("User location request timed out");
      break;
    case error.UNKNOWN_ERROR:
      alert("Unknown error");
      break;
  }
}

function reversieGeo() {
  fetch(urlFrog)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}
reversieGeo();

function gottaFetchThemAll() {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}
gottaFetchThemAll();

/*function cityNameCall() {
  var request = `"http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&appid=${key1}`;

  fetch(request)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}
cityNameCall();
/*  var request =
    "http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&appid=63ba60e03a73c951ad4f3018320967e5";

  fetch(request)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      // access lat and lon from data
      // call fetchonecallweather and pass through the lat an lon value
      // render step accept and print cityname
    });
}*/

//function fetchOneCallWeather(lat, lon){
//  console.log(apiKey);
//  var request = "http://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=hourly,minutely&////appid=042f6db5a47c70c4e9172cedc3197e3d";

//  fetch(request)
// .then(function (response) {
//   return response.json();
// })
// .then(function (data) {
//  console.log(data);
// });
//}
//fetchOneCallWeather();