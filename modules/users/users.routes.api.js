const router = require("express").Router();
const UserController = require("./users.controller");
let schema = require('../validation/validation.schema')
let validate = require('../validation/validateMiddleware.js')

router.post("/",validate(schema.userDetails), async (req, res, next) => {
  UserController.save(req.body)
    .then(d => res.json(d))
    .catch(e => console.log(e));
});

module.exports = router;
