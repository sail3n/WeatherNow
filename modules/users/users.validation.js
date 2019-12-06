const Joi = require("@hapi/joi");

const validators = {
  users: async (req, res, next) => {
    const schema = Joi.object({
      name: Joi.string()
        .min(3)
        .required(),
      location: Joi.string()
        .min(3)
        .required(),
      email: Joi.string()
        .email({ minDomainSegments: 2 })
        .required(),
      password: Joi.string()
        .pattern(/^[a-zA-Z0-9@$#-]{8,20}$/)
        .required()
    });
    try {
      req.body = await schema.validateAsync(req.body);
      next();
    } catch (e) {
      next(e);
    }
  }
};

module.exports = validators;
