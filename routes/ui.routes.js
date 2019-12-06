var router = require("express").Router();
const usersUiRouter = require("../modules/users/users.routes.ui");
const weatherUiRouter = require("../modules/weatherApi/weather.routes.ui");

router.get("/", function(req, res, next) {
  res.render("index", { title: "WeatherNow" });
});

router.use("/users", usersUiRouter);
router.use("/weather", weatherUiRouter);

module.exports = router;
