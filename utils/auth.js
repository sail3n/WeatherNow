const jwt = require("jsonwebtoken");
const config = require("config");
const { ERR } = require("../utils/error");

var auth = async (req, res, next) => {
  if (!req.cookies["auth"]) {
    res.render("error", { title: "WeatherNow", message: "You are not authorized" });
  }
  jwt.verify(req.cookies["auth"], config.get("jwt.jwtPrivateKey"), function(err, decoded) {
    if (err) {
      console.log("Session TimedOut");
      res.clearCookie("user");
      res.clearCookie("auth");
      res.redirect("/users/login");
    } else {
      next();
    }
  });
};

module.exports = auth;
