const router = require("express").Router();
const UserController = require("./users.controller");

router.post("/", async (req, res, next) => {
  UserController.save(req.body)
    .then(d => res.json(d))
    .catch(e => next);
});

module.exports = router;
