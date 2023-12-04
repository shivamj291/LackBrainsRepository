function searchWeather() {
    const apiKey = "840de593b7028de6e424162454790fe5";
    const cityInput = document.getElementById("searchInput").value;
  
    // Check if the city name is provided
    if (cityInput.trim() === "") {
      alert("Please enter a city name");
      return;
    }
  
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${apiKey}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        displayWeather(data)
      })
      .catch(error => {
        console.error("Error fetching weather data:", error);
        alert("Error fetching weather data. Please try again.");
      });
  }
  
  function displayWeather(weatherData) {
    const overlay = document.getElementById("overlay");
    const overlayContent = document.getElementById("overlayContent");
  
    // Display the relevant information in the overlay
    overlayContent.innerHTML = `
      <h2>${weatherData.name}</h2>
      <p>Temperature: ${weatherData.main.temp}°C</p>
      <p>Weather: ${weatherData.weather[0].main} - ${weatherData.weather[0].description}</p>
    `;
  
    // Show the overlay
    overlay.style.display = "block";
  }
  
  function closeOverlay() {
    const overlay = document.getElementById("overlay");
    // Close the overlay
    overlay.style.display = "none";
  }
  