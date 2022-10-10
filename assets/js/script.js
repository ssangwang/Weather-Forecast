var apiKey = "https://api.openweathermap.org/data/2.5/weather?q=sacramento&appid=783819609a1154fecc0d013aa520cde6"
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
    var srchCity = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput.value + "&appid=783819609a1154fecc0d013aa520cde6";
    fetch(srchCity)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });
    // input data into boxes 
    document.getElementById('currentCity').textContent = (cityInput.value);
}

var srchBtn = document.getElementById('srchBtn');

srchBtn.addEventListener("click", getCity);




