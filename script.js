async function getWeather() {
    const apiKey = '05250996e171487bb1a65255242807'; 
    const city = document.getElementById('city-input').value;
    const city_name = document.getElementById('city-input').value;
    const apiUrl = "https://api.weatherapi.com/v1/current.json?key=05250996e171487bb1a65255242807&q=" + city_name;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert(error.message);
    }
}

function displayWeather(data) {
    const weatherResult = document.getElementById('weather-result');
    weatherResult.innerHTML = `
        <h2>${data.location.name}</h2>
        <p>Temperature: ${data.current.temp_c}°C</p>
        <p>Weather: ${data.current.condition.text}</p>
        <p>Humidity: ${data.current.humidity}%</p>
        <p>Wind Speed: ${data.current.wind_kph} m/s</p>
    `;
}