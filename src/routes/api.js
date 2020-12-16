const app = require("express")();

app.use("/auth", require("../components/auth/auth.routes"));

module.exports = app;
