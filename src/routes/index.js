const app = require("express")();

app.use("/api", require("./api"));

app.all("*", (req, res) => {
  res.status(404).send({
    msg: "not found",
  });
});

module.exports = app;
