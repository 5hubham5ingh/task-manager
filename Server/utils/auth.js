import jwt from "jsonwebtoken";

export const verifyToken = (token) => {
  const decoded = jwt.verify(token, process.env.JWT_KEY, {
    maxAge: `${process.env.SESSION_DURATION}`,
  });
  return decoded;
};

export const generateToken = (payload) => {
  console.log("session duration", process.env.SESSION_DURATION);
  return jwt.sign(payload, process.env.JWT_KEY, { expiresIn: `${process.env.SESSION_DURATION}` });
};

export const getCookieOptions = () => {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 3600000,
  };
};

export const generateRefreshToken = (payload) => {
  console.log("session duration", process.env.EXTENDED_SESSION_DURATION);
  return jwt.sign(payload, process.env.JWT_KEY, {
    expiresIn: `${process.env.EXTENDED_SESSION_DURATION}`,
  });
};

export const verifyRefreshToken = (refreshToken) => {
  const decoded = jwt.verify(refreshToken, process.env.JWT_KEY, {
    maxAge: `${process.env.EXTENDED_SESSION_DURATION}`,
  });
  return decoded;
};
