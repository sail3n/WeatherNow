const axios = require("axios");

function epochConverter(payload) {
  var date = new Date(payload * 1000);
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds();
  var formattedTime = hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
  return formattedTime;
}

class Weather {
  constructor() {}

  async getData(payload) {
    var config = {
      method: "GET",
      url:
        "http://api.openweathermap.org/data/2.5/weather?q=" +
        payload +
        ",np&appId=257b6bb08cf331a786ca294ef699ebb4&units=metric"
    };
    return await axios(config)
      .then(response => {
        var x = response.data;
        const latitude = x.coord.lat;
        const longitude = x.coord.lon;
        const pressure = x.main.pressure;
        const humidity = x.main.humidity;
        const visibility = x.visibility;
        const cloudiness = x.clouds.all;
        const windSpeed = x.wind.speed;
        const windDegree = x.wind.deg;
        var sunrise = x.sys.sunrise;
        sunrise = epochConverter(sunrise);
        var sunset = x.sys.sunset;
        sunset = epochConverter(sunset);
        const timezone = x.timezone;
        const temp = x.main.temp;
        const icon = x.weather[0].icon;
        var description = x.weather[0].description;
        description = description.charAt(0).toUpperCase() + description.slice(1);
        const city = x.name;
        const country = x.sys.country;

        const weather = [
          latitude,
          longitude,
          pressure,
          humidity,
          visibility,
          cloudiness,
          windSpeed,
          windDegree,
          sunrise,
          sunset,
          timezone,
          temp,
          icon,
          description,
          city,
          country
        ];
        return weather;
      })
      .catch(error => {
        console.log(error);
        return error;
      });
  }
}

module.exports = new Weather();
