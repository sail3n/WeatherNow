const router = require("express").Router();
const WeatherController = require("./weather.controller");
const UserModel = require("../users/users.model");
const auth = require("../../utils/auth");

router.get("/", auth, async (req, res, next) => {
  var userId = req.cookies["user"];
  const user = await UserModel.findById(userId);
  const response = await WeatherController.getData(user.location);
  if (response === 404) {
    res.render("404", {
      title: "WeatherNow",
      message: "Weather data for your city is unavailable"
    });
  } else {
    res.render("weather/weather", { title: "WeatherNow", weatherData: response });
  }
});

module.exports = router;
