// Meteo Application
// API : https://openweathermap.org/current
let city = 'Paris';
receiveTemperature(city);

let changeCity = document.querySelector('#change');
changeCity.addEventListener('click', () => {
    ville = prompt('Which city would you like to see ?');
    receiveTemperature(city);
});

function receiveTemperature(city) {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=7a24c3927190708539a50e76da7dce04&units=metric';

    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        if (request.readyState === 200) {
            let response    = request.response;
            let temperature = response.main.temp;
            document.querySelector('#temperature_label').textContent = temperature;
            let city        = response.name;
            document.querySelector('#city').textContent = city;
        } else {    
            alert ('There is a problem. Please come back later.');
        }
    };
}