import jwt from "jsonwebtoken";
import config from "../configs/config.js"

export const verifyToken = (token) => {
  const decoded = jwt.verify(token, config.JWT_KEY, {
    maxAge: `${config.SESSION_DURATION}`,
  });
  return decoded;
};

export const generateToken = (payload) => {
  console.log("session duration", config.SESSION_DURATION);
  return jwt.sign(payload, config.JWT_KEY, { expiresIn: `${config.SESSION_DURATION}` });
};

export const getCookieOptions = () => {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 3600000,
  };
};

export const generateRefreshToken = (payload) => {
  console.log("session duration", config.EXTENDED_SESSION_DURATION);
  return jwt.sign(payload, config.JWT_KEY, {
    expiresIn: `${config.EXTENDED_SESSION_DURATION}`,
  });
};

export const verifyRefreshToken = (refreshToken) => {
  const decoded = jwt.verify(refreshToken, config.JWT_KEY, {
    maxAge: `${config.EXTENDED_SESSION_DURATION}`,
  });
  return decoded;
};
