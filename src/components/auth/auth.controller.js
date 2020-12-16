const { response } = require("express");

const { registerEmailDto, loginEmailDto, refreshTokenDto } = require("./dtos");
const {
  createUserEmail,
  loginUserEmail,
  refreshUserToken,
} = require("./auth.service");
const helperResponse = require("../../helpers/response");

const registerEmail = async (req, res = response) => {
  try {
    const data = registerEmailDto.data(req.body);
    const userLogin = await createUserEmail(data);

    helperResponse.success(res, userLogin, 201);
  } catch (error) {
    next(error);
  }
};

const loginEmail = async (req, res = response, next) => {
  try {
    const data = loginEmailDto.data(req.body);
    const userLogin = await loginUserEmail(data);

    helperResponse.success(res, userLogin, 200);
  } catch (error) {
    next(error);
  }
};

const refreshToken = async (req, res = response, next) => {
  try {
    const data = refreshTokenDto.data(req.body);
    const userLogin = await refreshUserToken(data);

    helperResponse.success(res, userLogin, 200);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerEmail,
  loginEmail,
  refreshToken,
};
