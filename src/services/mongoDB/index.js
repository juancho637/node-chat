const mongoose = require("mongoose");

const config = require("../../config/database");

mongoose.Promise = global.Promise;

const connect = async () => {
  try {
    await mongoose.connect(config.connections.mongodb.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log("Successfully connected to the database");
  } catch (error) {
    console.error(error);

    throw new Error("Error en la DB");
  }

  return mongoose.Connection;
};

module.exports = {
  connect,
};
