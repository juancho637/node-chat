const { check } = require("express-validator");

const { validationFields } = require("../../../middlewares/validationFields");

const validations = [
  check("email").isEmail(),
  check("password").not().isEmpty(),
  validationFields,
];

module.exports = validations;
