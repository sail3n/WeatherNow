const router = require("express").Router();

router.get("/register", function(req, res, next) {
  res.render("users/register", { title: "WeatherNow" });
});

router.get("/login", function(req, res, next) {
  res.render("users/login", { title: "WeatherNow" });
});




module.exports = router;
