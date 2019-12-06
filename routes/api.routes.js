var router = require("express").Router();

const usersRouter = require("../modules/users/users.routes.api");
const weatherRouter = require("../modules/weatherApi/weather.routes.api");

router.use("/users", usersRouter);
router.use("/weather", weatherRouter);

module.exports = router;
