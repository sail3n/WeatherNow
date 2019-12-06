const router = require("express").Router();

router.get("/", function(req, res, next) {
  res.render("weather/weather", { title: "WeatherNow" });
});

module.exports = router;
