import jwt from "jsonwebtoken";

export const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY, {
      maxAge: "1h",
    });
    return decoded;
  } catch (err) {
    return false;
  }
};

export const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_KEY, { expiresIn: "1h" });
};

export const getCookieOptions = (isExtendedSession) => {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: isExtendedSession ? 24 * 60 * 60 : 1 * 60 * 60,
  };
};

export const generateRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_REFRESH_KEY, {
    expiresIn: "1d",
  });
};
