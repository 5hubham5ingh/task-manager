import { verifyToken } from "../utils/auth.js";

const validateAuthCookie = (request, response, next) => {
  const token = request.cookies.access_token;
  if (!token) {
    return response.status(403).json({ message: "Session Expired" });
  }
  try {
    const jwbTokenDetails = verifyToken(token);
    if (!jwbTokenDetails) {
      return response.status(403).json({ message: "Invalid Token" });
    }
    request.user = jwbTokenDetails;
    return next();
  } catch (err) {
    console.log(err);
    return response.status(403).json({ message: "Internal Server Error" });
  }
};


export default validateAuthCookie;