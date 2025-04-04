document.getElementById('getWeather').addEventListener('click', () => {
    const cityEl = document.getElementById('city');
    const tempEl = document.getElementById('temp');
    const humiEl = document.getElementById('humi');
    const descEl = document.getElementById('desc');

    const apiKey = "3a245a419b7f01433f0dfb885d1c8e9e";

    const lat = document.getElementById('latitude').value;
    const lon = document.getElementById('longitude').value;

    if (!lat || !lon) {
        alert("Please enter valid latitude and longitude.");
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
        .then(res => res.json())
        .then(data => {
            if (data.cod !== 200) {
                alert("Invalid coordinates. Please enter correct latitude and longitude.");
                return;
            }
            
            cityEl.textContent = `City: ${data.name}`;
            tempEl.textContent = `Temperature: ${data.main.temp} °C`;
            humiEl.textContent = `Humidity: ${data.main.humidity}%`;
            descEl.textContent = `Weather: ${data.weather[0].description}`;
        })
        .catch(error => {
            cityEl.textContent = "Failed to load weather data";
            console.error("API error:", error);
        });
});