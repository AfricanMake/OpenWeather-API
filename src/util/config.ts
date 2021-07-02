const latitude = -33.9249
const longitude = 18.4241
const API_KEY = '183f00bf03c8af4e77d897613aecf1cf'
const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&appid=${API_KEY}`


class Config {

    static get apiKey(): string {
      return api
    }
}

export default Config