const temp = 26; // temperature in Celsius
const speed = 15; // wind speed in km/h

function calculateWindChill(tempC, speedKmh) {
    const speedMph = speedKmh / 1.609;
    const tempF = (tempC * 9 / 5) + 32;
    const windChillF = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speedMph, 0.16) + 0.4275 * tempF * Math.pow(speedMph, 0.16);
    const windChillC = (windChillF - 32) * 5 / 9;
    return Math.round(windChillC * 10) / 10;
}

document.getElementById("windChill").textContent = calculateWindChill(temp, speed) + " °C";
