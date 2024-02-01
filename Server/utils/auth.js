import jwt from "jsonwebtoken";

export const verifyToken = (token) => {
  const decoded = jwt.verify(token, process.env.JWT_KEY, {
    maxAge: '1m',
  });
  return decoded;
};

export const generateToken = (payload) => {console.log('session duration',typeof '1m')
  return jwt.sign(payload, process.env.JWT_KEY, { expiresIn: '1m' });
};

export const getCookieOptions = () => {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 3600000,
  };
};

export const generateRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_KEY, {
    expiresIn: '5m',
  });
};

export const verifyRefreshToken = (refreshToken) => {
  const decoded = jwt.verify(refreshToken, process.env.JWT_KEY, {
    maxAge: '5m',
  });
  return decoded;
};
