const router = require("express").Router();

router.get("/register", function(req, res, next) {
  res.render("users/register", { title: "WeatherNow" });
});

module.exports = router;
