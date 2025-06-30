async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "a50d41abb55e34623bdbec1190b9acd5";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.cod === 200) {
      document.getElementById("cityName").textContent = `${data.name}, ${data.sys.country}`;
      document.getElementById("weatherInfo").textContent =
        `🌡️ ${data.main.temp}°C | ${data.weather[0].description}`;
      document.getElementById("result").classList.remove("d-none");
      
    } else {
      alert("City not found. Try again.");
    }
  } catch (err) {
    console.error(err);
    alert("Error fetching weather data.");
  }
}
