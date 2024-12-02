function convertTemperature() {
    const temp = parseFloat(document.getElementById('temperature').value);
    const fromUnit = document.getElementById('unit').value;
    const toUnit = document.getElementById('convertTo').value;
    const resultElement = document.getElementById('result');
    
    if (isNaN(temp)) {
        resultElement.innerText = "Please enter a valid number!";
        return;
    }

    let result;

    // Conversion Logic
    if (fromUnit === toUnit) {
        result = temp; // No conversion needed
    } else if (fromUnit === "Celsius" && toUnit === "Fahrenheit") {
        result = (temp * 9/5) + 32;
    } else if (fromUnit === "Celsius" && toUnit === "Kelvin") {
        result = temp + 273.15;
    } else if (fromUnit === "Fahrenheit" && toUnit === "Celsius") {
        result = (temp - 32) * 5/9;
    } else if (fromUnit === "Fahrenheit" && toUnit === "Kelvin") {
        result = (temp - 32) * 5/9 + 273.15;
    } else if (fromUnit === "Kelvin" && toUnit === "Celsius") {
        result = temp - 273.15;
    } else if (fromUnit === "Kelvin" && toUnit === "Fahrenheit") {
        result = (temp - 273.15) * 9/5 + 32;
    } else {
        result = "Invalid conversion!";
    }

    // Display result
    resultElement.innerText = `Converted Temperature: ${result.toFixed(2)} ${toUnit}`;
}
