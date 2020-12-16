const jwt = require("jsonwebtoken");

const generateJwt = (uid) => {
  return new Promise((resolve, reject) => {
    const payload = {
      uid,
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      {
        expiresIn: "24h",
      },
      (error, token) => {
        if (error) {
          reject("No se pudo generar el JWT");
        } else {
          resolve(token);
        }
      }
    );
  });
};

const generateRefreshJwt = (uid) => {
  return new Promise((resolve, reject) => {
    const payload = {
      uid,
    };

    jwt.sign(
      payload,
      process.env.JWT_REFRESH_SECRET,
      {
        expiresIn: "30d",
      },
      (error, token) => {
        if (error) {
          reject("No se pudo generar el JWT");
        } else {
          resolve(token);
        }
      }
    );
  });
};

const verifyRefreshJwt = (refreshToken) => {
  return new Promise((resolve, reject) => {
    jwt.verify(
      refreshToken,
      process.env.JWT_REFRESH_SECRET,
      (error, payload) => {
        if (error) {
          reject("No se pudo generar el JWT");
        } else {
          resolve(payload);
        }
      }
    );
  });
};

module.exports = {
  generateJwt,
  generateRefreshJwt,
  verifyRefreshJwt,
};
