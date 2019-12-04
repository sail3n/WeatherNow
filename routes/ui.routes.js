var router = require("express").Router();
const usersUiRouter = require("../modules/users/users.routes.ui");

router.get("/", function(req, res, next) {
  res.render("index", { title: "WeatherNow" });
});

router.use("/users", usersUiRouter);

module.exports = router;
