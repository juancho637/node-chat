module.exports = {
  name: process.env.APP_NAME || "App",
  env: process.env.APP_ENV || "production",
  port: process.env.PORT || 3000,
  debug: process.env.APP_DEBUG || false,
  url: process.env.APP_URL || "http://localhost",
};
