
const weatherApi = {
    key: "bab281d79e5f1e9755a68d754cc313e7",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather",
}

function eventCall() {
    const searchInputBox = document.getElementById('input-box').value;
    console.log(searchInputBox);
    getWeatherReport(searchInputBox);
    document.querySelector('.weather-body').style.display = "block";
}

// Get Weather Report
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
        .then(weather => {
            return weather.json();
        }).then(showWeatherReport);
}

// Show Weather Report
function showWeatherReport(weather) {
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    //  celsius
    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max) `;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `Weather Type : ${weather.weather[0].main}`;

    let windSpeed = document.getElementById('wind');
    windSpeed.innerText = `Wind Speed : ${weather.wind.speed}`;

    let humidity = document.getElementById('humidity');
    humidity.innerText = `Humidity : ${weather.main.humidity}`;



    // FARENHEIT
    let temperature1 = document.getElementById('temp1');
    temperature1.innerHTML = `${Math.round((weather.main.temp) * 9 / 5) + 32}&deg;F`;

    let minMaxTemp1 = document.getElementById('min-max1');
    minMaxTemp1.innerHTML = `${Math.floor((weather.main.temp_min) * 9 / 5) + 32}&deg;F (min)/ ${Math.ceil((weather.main.temp_max) * 9 / 5) + 32}&deg;F (max) `;

    let weatherType1 = document.getElementById('weather1');
    weatherType1.innerText = `Weather Type : ${weather.weather[0].main}`;

    let windSpeed1 = document.getElementById('wind1');
    windSpeed1.innerText = `Wind Speed : ${weather.wind.speed}`;

    let humidity1 = document.getElementById('humidity1');
    humidity1.innerText = `Humidity : ${weather.main.humidity}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);

    if (weather.weather[0].main == 'Clear') {
        document.body.style.backgroundImage = "url('images/clear.jpg')";

    } else if (weather.weather[0].main == 'Clouds') {

        document.body.style.backgroundImage = "url('images/cloud.jpg')";

    } else if (weather.weather[0].main == 'Haze') {

        document.body.style.backgroundImage = "url('images/cloud.jpg')";

    } else if (weather.weather[0].main == 'Rain') {

        document.body.style.backgroundImage = "url('images/rain.jpg')";

    } else if (weather.weather[0].main == 'Snow') {

        document.body.style.backgroundImage = "url('images/snow.jpg')";

    } else if (weather.weather[0].main == 'Thunderstorm') {

        document.body.style.backgroundImage = "url('images/thunderstorm.jpg')";

    }
}
let cel = document.getElementById('cel');
let far = document.getElementById('far');

function celsiusCall() {
    cel.style.left = '0';
    far.style.right = '-300px'
}
function fahrenheitCall() {
    cel.style.left = '-300px';
    far.style.right = '0';
}

// Date manage
function dateManage(dateArg) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}



