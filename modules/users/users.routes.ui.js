const router = require("express").Router();
const auth = require("../../utils/auth");

router.get("/register", function(req, res, next) {
  var userCookie = req.cookies["user"];
  if (userCookie) {
    res.redirect("/weather");
  } else {
    res.render("users/register", { title: "WeatherNow" });
  }
});

router.get("/login", function(req, res, next) {
  var userCookie = req.cookies["user"];
  if (userCookie) {
    res.redirect("/weather");
  } else {
    res.render("users/login", { title: "WeatherNow" });
  }
});

router.get("/logout", function(req, res, next) {
  res.clearCookie("user");
  res.clearCookie("auth");
  res.redirect("/users/login");
});

router.get("/update", auth, function(req, res, next) {
  var userCookie = req.cookies["user"];
  if (userCookie) {
    res.render("users/updatelocation", { title: "WeatherNow" });
  } else {
    res.redirect("/users/login");
  }
});

module.exports = router;
