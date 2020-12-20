const bcrypt = require("bcryptjs");

const User = require("./user.model");

const createUser = async (userData) => {
  try {
    const user = new User(userData);

    return await user.save();
  } catch (error) {
    throw new Error(error);
  }
};

const findUserByEmail = async (email) => {
  try {
    return await User.findOne({ email });
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  createUser,
  findUserByEmail,
};
