window.onload = function() {
    const temperatureInput = document.getElementById("temperature-input");
    const unitSelect = document.getElementById("unit-select");
    const convertButton = document.getElementById("convert-button");
    const resultDisplay = document.getElementById("result-display");
    convertButton.addEventListener("click", function() {
        const inputValue = temperatureInput.value;
        const selectedUnit = unitSelect.value;
        if (!inputValue) {
            alert("Please enter a temperature.");
            return;
        }

        if (isNaN(inputValue)) {
            alert("Please enter a valid number.");
            return;
        }

        let result;

        if (selectedUnit === "celsius") {
            result = `${((inputValue - 32) * 5) / 9}°C`;
        } else if (selectedUnit === "fahrenheit") {
            result = `${(inputValue * 9) / 5 + 32}°F`;
        }
        resultDisplay.innerHTML = result;
    });
};