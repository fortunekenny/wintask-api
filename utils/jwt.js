const jwt = require("jsonwebtoken");

const createJWT = ({ payload }) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
  return token;
};

const isTokenValid = ({ token }) => jwt.verify(token, process.env.JWT_SECRET);

const attachCookiesToResponse = ({ res, user }) => {
  const token = createJWT({ payload: user });

  const oneDay = 1000 * 60 * 60 * 24;

  // res
  //   .cookie("token", token, {
  //     sameSite: "lax",
  //     httpOnly: false,
  //     secure: false,
  //     maxAge: 60 * 60 * 24 * 7,
  //   })
  //   .status(200)
  //   .json({ success: true });

  res.cookie("token", token, {
    httpOnly: true,
    path: `/`,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === "production",
    signed: true,
  });
};

module.exports = {
  createJWT,
  isTokenValid,
  attachCookiesToResponse,
};
