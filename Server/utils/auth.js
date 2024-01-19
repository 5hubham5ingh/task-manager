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
