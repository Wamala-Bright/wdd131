<<<<<<< HEAD
// Footer info
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#modified").textContent = document.lastModified;

// Weather data
const temperature = 10; // °C
const windSpeed = 10; // km/h
const windChillSpan = document.querySelector("#windchill");

function calculateWindChill(temp, speed) {
  // One-line formula for °C
  return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
}

// Only calculate if conditions met
if (temperature <= 10 && windSpeed > 4.8) {
  windChillSpan.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
  windChillSpan.textContent = "N/A";
}
=======
// Footer info
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#modified").textContent = document.lastModified;

// Weather data
const temperature = 10; // °C
const windSpeed = 10; // km/h
const windChillSpan = document.querySelector("#windchill");

function calculateWindChill(temp, speed) {
  // One-line formula for °C
  return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
}

// Only calculate if conditions met
if (temperature <= 10 && windSpeed > 4.8) {
  windChillSpan.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
  windChillSpan.textContent = "N/A";
}
>>>>>>> c064025da7dc2f22b5b5e4b498ef571746c153d6
