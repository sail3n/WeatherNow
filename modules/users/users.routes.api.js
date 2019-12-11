const router = require("express").Router();
const UserController = require("./users.controller");
let schema = require("../validation/validation.schema");
let validate = require("../validation/validateMiddleware.js");

router.post("/", async (req, res, next) => {
  try {
    var user = await UserController.save(req.body);
    res.cookie("user", user._id);
    res.json(user);
  } catch (e) {
    next(e);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    var user = await UserController.login(req.body);
    res.cookie("user", user._id);
    res.json(user);
  } catch (e) {
    next(e);
  }
});

// router.post("/",validate(schema.userDetails), async (req, res, next) => {
//   UserController.save(req.body)
//     .then(d => res.json(d))
//     .catch(e => console.log(e));
// });

module.exports = router;
