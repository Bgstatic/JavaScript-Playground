// Convert Kelvin to Fahrenheit

function KelvinToFahrenheit(kelvinTemp) {

var celsiusTemp = kelvinTemp - 273;

// Calculating Fahrenheit Temperature
var fahrenheitTemp = celsiusTemp * (9 / 5) + 32;
fahrenheitTemp = Math.floor(fahrenheitTemp);

console.log("Fahrenheit = " + fahrenheitTemp);
}

KelvinToFahrenheit(301);