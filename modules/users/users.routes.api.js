const router = require("express").Router();
const UserController = require("./users.controller");
const validator = require("./users.validation");
const UserModel = require("./users.model");

router.post("/", async (req, res, next) => {
  let user = await UserModel.findOne({ email: req.body.email });
  if (user) {
    res.redirect("back");
  }
  await UserController.save(req.body)
    .then(d => res.json(d))
    .catch(e => next(e));
});

module.exports = router;
