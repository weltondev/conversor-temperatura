let celsius = document.querySelector('#celsius');
let fahrenheit = document.querySelector('#fahrenheit');

function convertCelsius() {
    let result = (celsius.value * 1.8 + 32).toFixed(1);
    fahrenheit.value = result;
}

function convertFahrenheit() {
    let result = ((fahrenheit.value - 32) * (5 / 9.)).toFixed(1);
    celsius.value = result;
}