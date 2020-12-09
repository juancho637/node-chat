const express = require("express");

const { notFound, errorHandler } = require("./middlewares/errors");

const app = express();

// App middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routers
app.use(require("./routes"));

// Error middlewares
app.use(notFound);
app.use(errorHandler);

module.exports = app;
