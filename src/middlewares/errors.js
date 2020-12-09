const error = require("../helpers/error");
const helperResponse = require("../helpers/response");

const notFound = (req, res, next) => {
  throw error(`Not Found - ${req.originalUrl}`, 404);
};

const errorHandler = (err, req, res, next) => {
  console.error("[error]", err);

  const message = err.message || "Error interno";
  const status = err.statusCode || 500;

  helperResponse.error(res, message, status);
};

module.exports = {
  notFound,
  errorHandler,
};
