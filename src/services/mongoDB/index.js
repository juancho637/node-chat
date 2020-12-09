const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const connect = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN, {
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
