const Joi = require("@hapi/joi");

const schemas = {
  userDetails: Joi.object().keys({
    name: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required()
      .error(new Error("Give your proper full name")),
    location: Joi.string().required(),
    email: Joi.string()
      .email()
      .lowercase()
      .required()
      .error(new Error("Give proper email")),
    password: Joi.string()
      .min(7)
      .required()
      .strict()
      .error(new Error("Give proper password"))
  })

  // define all the other schemas below
};

module.exports = schemas;
