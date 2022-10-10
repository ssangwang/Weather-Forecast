var apiKey = "https://api.openweathermap.org/data/2.5/forecast?q=sacramento&cnt=5&appid=783819609a1154fecc0d013aa520cde6"
//check to see if url works
function getapi() {
    fetch(apiKey)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}

getapi();
//set search into local storage. 
function getCity(){
    var cityInput = document.getElementById('srchBx');
    localStorage.setItem("City", cityInput.value);
    var srchCity = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityInput.value + "&cnt=5&appid=783819609a1154fecc0d013aa520cde6&units=imperial";
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
    });

    // input data into boxes 
    document.getElementById('currentCity').textContent = (cityInput.value);
    document.getElementById('recent1').textContent = cityInput.value;

}

// search button
var srchBtn = document.getElementById('srchBtn');

srchBtn.addEventListener("click", getCity);




