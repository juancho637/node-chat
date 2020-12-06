const express = require("express");

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routers
app.use(require("./routes"));

module.exports = app;
