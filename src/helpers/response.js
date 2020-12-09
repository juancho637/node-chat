const success = (res, data = "", status = 200) => {
  res.status(status).send({
    data,
    status,
  });
};

const error = (res, message = "Error interno", status = 500) => {
  res.status(status).send({
    error: message,
    status,
  });
};

module.exports = {
  success,
  error,
};
