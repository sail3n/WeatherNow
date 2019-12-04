var router = require("express").Router();
const apiRouter = require("./api.routes");
const uiRouter = require("./ui.routes");

router.use("/api", apiRouter);
router.use("/", uiRouter);

module.exports = router;
