let Joi = require('@hapi/joi')

const createValidator = (schema) => 
  (payload) => {
    return Joi.validate(payload, schema, {
      // shows all error messages instead of first error message
      abortEarly: false
    })
  }

module.exports = createValidator