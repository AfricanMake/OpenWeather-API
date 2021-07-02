import Config from "../util/config"

const kelvinToCelsius = require('kelvin-to-celsius');

export const getMaximumHigh = async () => {

    const response = await fetch(Config.apiKey)
    const data = await response.json()

    let dailyWeather = data.daily
    let maximumTemperature = new Number()

    for (let i = 1; i < dailyWeather.length; i++) {
        if (dailyWeather[i].temp.max > maximumTemperature) {
            maximumTemperature = dailyWeather[i].temp.max
        }
    }

    let maximumTempConvertedToCelsius = kelvinToCelsius(maximumTemperature)
    console.log("Maximum Temperature: "+ maximumTempConvertedToCelsius);

    return maximumTempConvertedToCelsius
}
