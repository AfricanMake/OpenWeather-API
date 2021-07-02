import Config from "../util/config"

const kelvinToCelsius = require('kelvin-to-celsius');

export const getAverageLow = async () => {

    const response = await fetch(Config.apiKey)
    const result = await response.json()

    let dailyWeather = result.daily
    let minimumTemperature = new Array()
    let minimumLow = new Number()
    
    for (let i = 1; i < dailyWeather.length; i++) {
        minimumTemperature.push(dailyWeather[i].temp.max)
        minimumLow += dailyWeather[i].temp.min
    }

    let averageLowCalculationK = Number(minimumLow) / minimumTemperature.length
    console.log("Average Low in Kelvin: "+ averageLowCalculationK);

    let averageLowConvertedToCelsius = kelvinToCelsius(averageLowCalculationK)
    console.log("Average Low in Celsius: "+ averageLowConvertedToCelsius)

    return averageLowConvertedToCelsius
}