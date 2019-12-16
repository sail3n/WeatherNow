const Joi = require("joi");

const schemas = {
  userDetails: Joi.object().keys({
    name: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required()
      .error(errors => {
        errors.forEach(err => {
          switch (err.type) {
            case "any.empty":
              err.message = "Name should not be empty!";
              break;
            case "string.min":
              err.message = `Name should have at least ${err.context.limit} characters!`;
              break;
            case "string.max":
              err.message = `Name should have at most ${err.context.limit} characters!`;
              break;
          }
        });
        return errors;
      }),

    location: Joi.string()
      .required()
      .error(() => "Location is required"),
    email: Joi.string()
      .email()
      .required()
      .error(() => "Email format is incorrect"),
    password: Joi.string()
      .min(7)
      .required()
      .strict()
      .error(errors => {
        errors.forEach(err => {
          switch (err.type) {
            case "any.empty":
              err.message = "Password should not be empty!";
              break;
            case "string.min":
              err.message = `Password should have at least ${err.context.limit} characters!`;
              break;
          }
        });
        return errors;
      })
  })

  // define all the other schemas below
};

module.exports = schemas;
