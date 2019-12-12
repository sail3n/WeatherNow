const router = require("express").Router();
const UserController = require("./users.controller");
let schema = require("../validation/validation.schema");
let validate = require("../validation/validateMiddleware.js");
const jwt = require("jsonwebtoken");
const config = require("config");

router.post("/register", validate(schema.userDetails), async (req, res, next) => {
  try {
    var user = await UserController.save(req.body);
    const token = jwt.sign(
      {
        id: user._id,
        name: user.name
      },
      config.get("jwt.jwtPrivateKey"),
      { expiresIn: "5m" }
    );

    res.cookie("user", user._id);
    res.cookie("auth", token);
    res.json(user);
  } catch (e) {
    next(e);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    var user = await UserController.login(req.body);
    const token = jwt.sign(
      {
        id: user._id,
        name: user.name
      },
      config.get("jwt.jwtPrivateKey"),
      { expiresIn: "5m" }
    );
    res.cookie("user", user);
    res.cookie("auth", token);
    res.json(user);
  } catch (e) {
    next(e);
  }
});

// router.post("/register",validate(schema.userDetails), async (req, res, next) => {
//   UserController.save(req.body)
//     .then(d => res.json(d))
//     .catch(e => console.log(e));
// });

module.exports = router;
