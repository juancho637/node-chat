require("dotenv").config();

const config = require("./src/config/app");

const app = require("./src/main");

// Connect to db
require("./src/services/mongoDB").connect();

// Node Server
const server = require("http").createServer(app);

server.listen(config.port, (err) => {
  if (err) throw new Error(err);

  console.log("Server running on port:", config.port);
});
