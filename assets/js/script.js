//set search into local storage. 
function getCity(){
    var cityInput = document.getElementById('srchBx');
    localStorage.setItem("City", cityInput.value);
    var srchCity = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityInput.value + "&cnt=6&appid=783819609a1154fecc0d013aa520cde6&units=imperial";
    fetch(srchCity)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        // set current city 
        document.getElementById('crntTemp').textContent = "Temperature: " + data.list[0].main.temp + "℉";
        document.getElementById('crntWind').textContent = "Wind: " + data.list[0].wind.speed + "mph";
        document.getElementById('crntHumid').textContent ="Humidity: " + data.list[0].main.humidity + "%";
        // set forecast 
        for(i = 1; i<data.list.length; i++) {
            var forecastTemp = document.createElement('li');
            var forecastWind = document.createElement('li');
            var forecastHumid = document.createElement('li');
            var forecastDate = document.createElement('h3')
            var forecastBox = document.getElementById('5day');
            forecastDate.textContent = moment().add(i, 'days').calendar();
            forecastTemp.textContent = "Temperature: " + data.list[i].main.temp + "℉";
            forecastWind.textContent = "Wind: " + data.list[i].wind.speed + "mph";
            forecastHumid.textContent ="Humidity: " + data.list[i].main.humidity + "%";
            forecastBox.append(forecastDate);
            forecastDate.append(forecastTemp);
            forecastDate.append(forecastHumid);
            forecastDate.append(forecastWind);
        }

    });

    // input data into boxes 
    document.getElementById('currentCity').textContent = (cityInput.value);
    document.getElementById('recent1').textContent = cityInput.value;

}

// search button
var srchBtn = document.getElementById('srchBtn');

srchBtn.addEventListener("click", getCity);




