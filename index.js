// 
const textBox = document.getElementById("textBox");
const Fahrenheit = document.getElementById("Fahrenheit");
const Fahrenheit2 = document.getElementById("Fahrenheit2");
const Celsius = document.getElementById("Celsius");
const Celsius2 = document.getElementById("Celsius2");
const Kelvin = document.getElementById("Kelvin");
const Kelvin2 = document.getElementById("Kelvin2");
const Result = document.getElementById("Result");

let temperature; 

function convert()
{

    if (Fahrenheit.checked)
    {
        temperature = Number(textBox.value);
        temperature = temperature * 9/5 + 32;

        Result.textContent=  temperature + "F";
    }
    else if (Fahrenheit2.checked) 
    {

        temperature = Number(textBox.value);
        temperature = (temperature - 273.15) * 9/5  + 32;
        Result.textContent=  temperature + "K";
    }  
    else if (Celsius.checked)
    {
        temperature = Number(textBox.value);
        temperature = (temperature - 32) * 9/5;
        Result.textContent=  temperature + "C";
    }
    else if (Celsius2.checked)
    {
        temperature = Number(textBox.value);
        temperature = temperature  -  273.15;
        Result.textContent=  temperature + "C";
    }
    else if (Kelvin.checked)
    {
        temperature = Number(textBox.value);
        temperature = temperature  + 273.15;
        Result.textContent=  temperature + "K";
    }
    else if (Kelvin2.checked)
    {   
        temperature = Number(textBox.value);
        temperature = (temperature - 32) * 9/5  + 273.15;
        Result.textContent=  temperature + "K";

    }
    else 
    {
        Result.textContent= " Please pick a unit";
    }
}