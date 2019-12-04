var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "WeatherNow" });
});

router.get("/user/register", function(req, res, next) {
  res.render("users/register", { title: "WeatherNow" });
});

module.exports = router;
