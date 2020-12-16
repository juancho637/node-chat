const { check } = require("express-validator");

const { validationFields } = require("../../../middlewares/validationFields");

const validations = [check("refresh_token").not().isEmpty(), validationFields];

module.exports = validations;
