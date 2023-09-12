const { createJWT, isTokenValid, attachCookiesToResponse } = require("./jwt");
// process.env.TZ = "Africa/Lagos";
const createTokenUser = require("./createTokenUser");
const checkPermissions = require("./checkPermissions");
module.exports = {
  createJWT,
  isTokenValid,
  attachCookiesToResponse,
  createTokenUser,
  checkPermissions,
};
