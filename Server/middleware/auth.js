import httpStatus from "http-status";
import {
  generateToken,
  getCookieOptions,
  verifyRefreshToken,
  verifyToken,
} from "../utils/auth.js";

const validateAuthCookie = (request, response, next) => {
  const token = request.cookies.access_token;
  const refreshToken = request.headers.autherisation;

  if (refreshToken) {
    try {
      const refreshTokenDetails = verifyRefreshToken(refreshToken);

      const token = generateToken({ userId: refreshTokenDetails.userId});
      const cookieOptions = getCookieOptions();
      response.cookie("access_token", token, cookieOptions);
      request.userId = refreshTokenDetails.userId;
      return next();
    } catch(e){
      console.log(e);
      return response
        .status(httpStatus.UNAUTHORIZED)
        .json({ message: "Session Expired" });
    }
  }

  if (!token) {
    return response.status(httpStatus.UNAUTHORIZED).send();
  }
  try {
    const jwbTokenDetails = verifyToken(token);

    request.userId = jwbTokenDetails.userId;
    return next();
  } catch (err) {
    return response.status(httpStatus.UNAUTHORIZED).send();
  }
};

export default validateAuthCookie;
