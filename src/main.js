const express = require("express");

const { notFound, errorHandler } = require("./middlewares/errors");

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routers
app.use(require("./routes"));

app.use(notFound);
app.use(errorHandler);

module.exports = app;
