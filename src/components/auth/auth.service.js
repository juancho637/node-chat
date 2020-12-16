const bcrypt = require("bcryptjs");

const userRepository = require("../user/user.repository");
const { userDto } = require("../user/dtos");
const {
  generateJwt,
  generateRefreshJwt,
  verifyRefreshJwt,
} = require("../../helpers/jwt");
const error = require("../../helpers/error");

const createUserEmail = async (userEmailData) => {
  const user = await userRepository.createUser(userEmailData);
  const accessToken = await generateJwt(userDto.single(user).id);
  const refreshToken = await generateRefreshJwt(userDto.single(user).id);

  return {
    user: userDto.single(user),
    access_token: accessToken,
    refresh_token: refreshToken,
  };
};

const loginUserEmail = async ({ email, password }) => {
  try {
    const user = await userRepository.findUserByEmail(email);
    if (!user) {
      throw error("Credenciales invalidas", 404);
    }

    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      throw error("Credenciales invalidas", 404);
    }

    const accessToken = await generateJwt(userDto.single(user).id);
    const refreshToken = await generateRefreshJwt(userDto.single(user).id);

    return {
      user: userDto.single(user),
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  } catch (err) {
    throw error(err);
  }
};

const refreshUserToken = async ({ token }) => {
  try {
    const { uid } = await verifyRefreshJwt(token);
    const accessToken = await generateJwt(uid);
    const refreshToken = await generateRefreshJwt(uid);

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  } catch (err) {
    throw error(err);
  }
};

module.exports = {
  createUserEmail,
  loginUserEmail,
  refreshUserToken,
};
