/*
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
//  var request = "http://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=hourly,minutely&appid=042f6db5a47c70c4e9172cedc3197e3d";

//  fetch(request)
// .then(function (response) {
//   return response.json();
// })
// .then(function (data) {
//  console.log(data);
// });
//}
//fetchOneCallWeather();

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
fetchGeolocation();

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
fetchOneCallWeather();
*/