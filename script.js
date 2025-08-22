const apiKey = 'd78062995f614fef80c73259252108';
const apiUrl = 'https://api.weatherapi.com/v1/current.json';

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")


async function checkWeather(city) {
    try {
        const response = await fetch(`${apiUrl}?key=${apiKey}&q=${city}&aqi=yes`);
        const data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.location.name;
        document.querySelector(".temp").innerHTML = `${data.current.temp_c}°C`;
        document.querySelector(".humidity").innerHTML = `${data.current.humidity}%`;
        document.querySelector(".wind").innerHTML = `${data.current.wind_kph} Km/h`;
        document.querySelector(".weather-icon").src = "https:" + data.current.condition.icon
      document.querySelector(".weather").style.display = "block"

    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.querySelector(".weather").style.display = "none"
        alert("Error fetching weather data")
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    checkWeather(searchBox.value);
  }
});



