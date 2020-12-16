const { check } = require("express-validator");

const { validationFields } = require("../../../middlewares/validationFields");
const userRepository = require("../../user/user.repository");

const validations = [
  check("name").not().isEmpty(),
  check("email")
    .isEmail()
    .normalizeEmail()
    .custom((email) => {
      return userRepository.findUserByEmail(email).then((user) => {
        if (user) {
          return Promise.reject("E-mail already in use");
        }
      });
    }),
  check("password").not().isEmpty(),
  validationFields,
];

module.exports = validations;
