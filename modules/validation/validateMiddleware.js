let createValidator = require("./createValidator");

let validateMiddleware = schema => (req, res, next) => {
  let payload = req.body;
  let validate = createValidator(schema);

  // proceed next if validated otherwise catch error and pass onto express error handler

  validate(payload)
    .then(validated => {
      req.body = validated;
      next();
    })
    .catch(e => next(e.details[0].message));
};

module.exports = validateMiddleware;
