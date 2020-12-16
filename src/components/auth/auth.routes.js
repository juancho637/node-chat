const router = require("express").Router();

const validations = require("./validations");
const {
  registerEmail,
  loginEmail,
  refreshToken,
} = require("./auth.controller");

/**
 * route: /api/auth/register/email
 */
router.post("/register/email", [validations.registerEmail], registerEmail);

/**
 * route: /api/auth/login
 */
router.post("/login", [validations.loginEmail], loginEmail);

/**
 * route: /api/auth/refresh
 */
router.post("/refresh", [validations.refreshToken], refreshToken);

module.exports = router;
