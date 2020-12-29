module.exports = {
  connections: {
    mongodb: {
      uri: process.env.MONGO_URI || "mongodb://localhost:27017/app",
    },
  },
};
