import { generateToken, getCookieOptions, verifyRefreshToken, verifyToken } from "../utils/auth.js";

const validateAuthCookie = (request, response, next) => {
  const token = request.cookies.access_token;
  const refreshToken = request.body.refreshToken;

  if(refreshToken){
    const refreshTokenDetails = verifyRefreshToken(refreshToken);
    if(refreshTokenDetails){
      const token = generateToken(refreshTokenDetails.user);
      const cookieOptions = getCookieOptions();
      response.cookie("access_token", token, cookieOptions);
      request.userId = refreshTokenDetails.userId;
      return next();
    }
    return response.status(403).json({ message: "Invalid Refresh Token" })
  }


  if (!token) {
    return response.status(403).json({ message: "Session Expired" });
  }
  try {
    const jwbTokenDetails = verifyToken(token);
    if (!jwbTokenDetails) {
      return response.status(403).json({ message: "Invalid Token" });
    }
    request.userId = jwbTokenDetails.userId;
    return next();
  } catch (err) {
    console.log(err);
    return response.status(403).json({ message: "Internal Server Error" });
  }
};


export default validateAuthCookie;