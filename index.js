require("dotenv").config();

const app = require("./src/main");

// Connect to db
require("./src/services/mongoDB").connect();

// Node Server
const server = require("http").createServer(app);

server.listen(process.env.PORT, (err) => {
  if (err) throw new Error(err);

  console.log("Server running on port: ", process.env.PORT);
});
