let cityChoice;

if("geolocation" in navigator) {
  navigator.geolocation.watchPosition((position) => {
    
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat='
        + position.coords.latitude + '&lon='
        + position.coords.longitude + '&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric';
    
    let request = new XMLHttpRequest(); 
    request.open('GET', url); 
    request.responseType = 'json'; 
    request.send(); 

    request.onload = function() {
      if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
          let reponse = request.response;
          let temperature = reponse.main.temp;
          let city       = reponse.name;
          document.querySelector('#temperature_label').textContent = temperature;
          document.querySelector('#city').textContent = city;
        }
        else {
          alert('Something went wrong, please come back later.');
        }
      }
    }
  }, error, options);
  
  var options = {
    enableHighAccuracy: true
  }
}
else {
  cityChoice = "saint-jean-de-luz";
  receiveTemperature(cityChoice);
}

let changeCity = document.querySelector('#change');
changeCity.addEventListener('click', () => {
  cityChoice = prompt('Which city do you want to see?');
  receiveTemperature(cityChoice);
});

function error() {
  cityChoice = "saint-jean-de-luz";
  receiveTemperature(cityChoice);
}

function receiveTemperature(city) {
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric';

  let request = new XMLHttpRequest(); 
  request.open('GET', url); 
  request.responseType = 'json'; 
  request.send(); 

  request.onload = function() {
    if (request.readyState === XMLHttpRequest.DONE) {
      if (request.status === 200) {
        let reponse = request.response;
        // console.log(reponse);
        let temperature = reponse.main.temp;
        let city       = reponse.name;
        // console.log(temperature);
        document.querySelector('#temperature_label').textContent = temperature;
        document.querySelector('#city').textContent = city;
      }
      else {
        alert('Something went wrong, please come back later.');
      }
    }
  }
}