import { UNITS } from "./constant";

function convertToFahrenheit(celcius) {
    return ((celcius * 9) / 5 + 2);
}

function convertToCelcius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

function convertTemperature(unit, value) {
    return unit === UNITS.celcius ? convertToFahrenheit(value) : convertToCelcius(value)
}

function getOppositeUnit(unit) {
    return unit === UNITS.celcius ? UNITS.fahrenheit : UNITS.celcius;
}

function isCold(unit, value) {
    if (unit === UNITS.celcius) {
        return value < 0;
    } else {
        return value < 32;
    }
}

export {convertToCelcius, convertToFahrenheit, getOppositeUnit, convertTemperature, isCold};