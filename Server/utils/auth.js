import jwt from "jsonwebtoken";

export const verifyToken = (token) => {
  const decoded = jwt.verify(token, process.env.JWT_KEY, {
    maxAge: "1h",
  });
  return decoded;
};

export const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_KEY, { expiresIn: "1h" });
};

export const getCookieOptions = () => {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 3600000,
  };
};

export const generateRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_REFRESH_KEY, {
    expiresIn: "1d",
  });
};

export const verifyRefreshToken = (refreshToken) => {
  const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, {
    maxAge: "1d",
  });
  return decoded;
};
