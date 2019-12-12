const router = require("express").Router();
const WeatherController = require("./weather.controller");
const UserModel = require("../users/users.model");
const auth = require("../../utils/auth");

router.get("/", auth, async (req, res, next) => {
  var userId = req.cookies["user"];
  const user = await UserModel.findById(userId);
  var weatherData = await WeatherController.getData(user.location);
  res.render("weather/weather", { title: "WeatherNow", weatherData: weatherData });
});

module.exports = router;
