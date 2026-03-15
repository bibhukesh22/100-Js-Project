const cel = document.getElementById("celsius");
const fah = document.getElementById("fahrenheit");
const kel = document.getElementById("kelvin");

function computeTemp(event){
    const currentValue = +event.target.value;

    if(event.target.name === "celsius"){
        kelvin.value = (currentValue + 273.32).toFixed(2);
        fahrenheit.value = (currentValue * 1.8 + 32).toFixed(2);
    }
    else if(event.target.name === "fahrenheit"){
        kelvin.value = (currentValue - 32 / 1.8 + 273.32).toFixed(2);
        celsius.value = (currentValue -32/1.8).toFixed(2);
    }
    else if (event.target.name === "kelvin") {
    celsiusEl.value = (currentValue - 273.32).toFixed(2);
    fahrenheitEl.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
    }
}