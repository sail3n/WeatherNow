const router = require("express").Router();
const UsersController = require("./users.controller");

router.post("/", async (req, res, next) => {
  UsersController.save(req.body)
    .then(d => res.json(d))
    .catch(e => next);
});

module.exports = router;
