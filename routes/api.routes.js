var router = require("express").Router();

const usersRouter = require("../modules/users/users.routes.api");

router.use("/users", usersRouter);

module.exports = router;
