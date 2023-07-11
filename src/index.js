let apiKey = "36a2a52539d5ce4b6e400d39a182ca91";
let city = "New York";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
  city
)}&appid=${apiKey};`;

console.log(apiUrl);
