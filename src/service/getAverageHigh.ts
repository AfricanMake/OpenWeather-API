import Config from "../util/config"

const kelvinToCelsius = require('kelvin-to-celsius');

export const getAverageHigh = async () => {
    
    const response = await fetch(Config.apiKey)
    const result = await response.json()
    
    let dailyWeather = result.daily
    let maximumTemperature = new Array()
    let maximumTotal = new Number();

    for (let i = 1; i < dailyWeather.length; i++) {
        maximumTemperature.push(dailyWeather[i].temp.max)
        maximumTotal += dailyWeather[i].temp.max
    }

    let averageMaximumCalculationK = Number(maximumTotal) / maximumTemperature.length
    console.log("Average Maximum in Kelvin: "+ averageMaximumCalculationK);

    let averageMaximumConvertedToCelsius = kelvinToCelsius(averageMaximumCalculationK)
    console.log("Average Maximum in Celsius: "+ averageMaximumConvertedToCelsius)

    return averageMaximumConvertedToCelsius
}
