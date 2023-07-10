function displayTemperture(response) {
  let apiKey = "9f8of3b322tfa70f5cff8a4aa4a3ab35";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=New York&key=9f8of3b322tfa70f5cff8a4aa4a3ab35&units=metric`;
}

console.log(apiUrl);
axios.get(url).then(displayTemperture);
