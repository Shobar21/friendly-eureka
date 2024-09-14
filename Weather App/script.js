const weatherData = {
  karachi: { temp: 30, humidity: 70, windSpeed: 10, icon: 'rain' },
  lahore: { temp: 28, humidity: 65, windSpeed: 12, icon: 'rain' },
  islamabad: { temp: 25, humidity: 60, windSpeed: 8, icon: 'rain' },
  faisalabad: { temp: 27, humidity: 68, windSpeed: 11, icon: 'rain' },
  multan: { temp: 32, humidity: 72, windSpeed: 9, icon: 'rain' },
  peshawar: { temp: 26, humidity: 63, windSpeed: 13, icon: 'rain' },
  quetta: { temp: 22, humidity: 58, windSpeed: 14, icon: 'rain' },
  sukkur: { temp: 41, humidity: 50, windSpeed: 15, icon: 'rain' },
}

document.getElementById('search-btn').addEventListener('click', function () {
  const cityName = document
    .getElementById('city-input')
    .value.trim()
    .toLowerCase()
  displayWeather(cityName)
})

function displayWeather(cityName) {
  const cityWeather = weatherData[cityName]
  if (cityWeather) {
    const { temp, humidity, windSpeed, icon } = cityWeather

    document.getElementById('temperature').textContent = `${temp}°c`
    document.getElementById('humidity').textContent = `${humidity}%`
    document.getElementById('wind-speed').textContent = `${windSpeed} km/h`
    document.getElementById('city-name').textContent =
      capitalizeFirstLetter(cityName)
    document.getElementById('weather-icon').src = `images/${icon}.png`
  } else {
    alert('City not found in the database.')
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
