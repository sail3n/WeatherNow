const router = require("express").Router();
const UserController = require("./users.controller");
let validate = require("../validation/validateMiddleware.js");
const schema = require("../validation/validation.schema");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../../utils/auth");

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
    res.cookie("user", user._id);
    res.cookie("auth", token);
    res.json(user);
  } catch (e) {
    next(e);
  }
});

router.post("/update", auth, async (req, res, next) => {
  try {
    var userId = req.cookies["user"];
    await UserController.update(userId, req.body);
    next();
  } catch (e) {
    next(e);
  }
});

module.exports = router;
