const router = require("express").Router();
const WeatherController = require("./weather.controller");

router.get("/", async (req, res, next) => {
  var weatherData = await WeatherController.getData("jumla");
  res.render("weather/weather", { title: "WeatherNow", weatherData: weatherData });
});

module.exports = router;
