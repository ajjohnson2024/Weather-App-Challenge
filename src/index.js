function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let h2 = document.querySelector("h2");

  if (searchInput.value) {
    h2.innerHTML = `Searching for ${searchInput.value}...`;
    getWeatherData(searchInput.value);
  } else {
    h2.innerHTML = null;
    alert("Please type a city");
  }
}

function getWeatherData(city) {
  let apiKey = "66ab130597ee92574b418adad0be78d4";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  function showTemperature(response) {
    displayWeatherData(response);
  }

  axios.get(apiUrl).then(showTemperature).catch(displayError);
}

function displayWeatherData(response) {
  let h2 = document.querySelector("h2");
  let temperature = Math.round(response.data.main.temp);
  h2.innerHTML = `${response.data.name}, ${response.data.sys.country}: ${temperature}°C, ${response.data.weather[0].description}`;
}

function displayError(error) {
  let h2 = document.querySelector("h2");
  h2.innerHTML = `Error: ${error.message}`;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function displayDateTime() {
  const currentDate = new Date();
  const options = {
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    timeZone: "America/New_York",
  };
  const formattedDate = currentDate.toLocaleString("en-US", options);
  document.getElementById("current-time").textContent = formattedDate;
  console.log("Current date and time:", formattedDate);
}

displayDateTime();
