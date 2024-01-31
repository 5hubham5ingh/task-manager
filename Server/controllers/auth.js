import httpStatus from "http-status";
import {
  logInUserWithUsernameAndPassword,
  loginUserWithRefreshToken,
  registerUserWithUsernameAndPassword,
} from "../services/auth.js";
import { getAuthTokens } from "../services/token.js";
import { getCookieOptions, verifyRefreshToken } from "../utils/auth.js";
import catchAsync from "../utils/catchAsync.js";

export const logIn = catchAsync(async (request, response) => {
  const { userName, password, extendedSession } = request.body;

  if (!userName || !password)
    return response
      .status(httpStatus.BAD_REQUEST)
      .json({ message: "Username or password missing" });

  const user = await logInUserWithUsernameAndPassword(userName, password);

  const { token, refreshToken } = await getAuthTokens({ userId: user._id });

  const cookieOptions = getCookieOptions();

  return response
    .cookie("access_token", token, cookieOptions)
    .status(httpStatus.OK)
    .json({ token: extendedSession ? refreshToken : null, user });
});

export const register = catchAsync(async (request, response) => {
  const { userName, password, extendedSession } = request.body;

  if (!userName || !password)
    return response
      .status(httpStatus.BAD_REQUEST)
      .json({ message: "User name or password missing" });

  const newUser = await registerUserWithUsernameAndPassword(userName, password);

  const { token, refreshToken } = await getAuthTokens({ userId: user._id });

  return response
    .cookie("access_token", token, getCookieOptions(extendedSession))
    .status(httpStatus.CREATED)
    .json({ token: refreshToken, user: newUser });
});
