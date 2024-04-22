import httpStatus from "http-status";
import {
  logInUserWithUsernameAndPassword,
  registerUserWithUsernameAndPassword
} from "../services/auth.js";
import { getAuthTokens } from "../services/token.js";
import { generateToken, getCookieOptions } from "../utils/auth.js";
import catchAsync from "../utils/catchAsync.js";
import ApiError from "../utils/apiError.js";

export const logIn = catchAsync(async (request, response) => {
  const { userName, password, extendedSession } = request.body;

  if (!userName || !password) throw new ApiError(httpStatus.BAD_REQUEST, "Username or password missing");

  const user = await logInUserWithUsernameAndPassword(userName, password);

  const cookieOptions = getCookieOptions();
  const token = generateToken({userId: user._id});

  return response
    .cookie("access_token", token, cookieOptions)
    .status(httpStatus.OK)
    .json({ ...(extendedSession ? {token : refreshToken} : {} ), user });
});

export const register = catchAsync(async (request, response) => {
  const { userName, password, extendedSession } = request.body;

  if (!userName || !password) throw new ApiError(httpStatus.BAD_REQUEST, "Username or password missing");

  const newUser = await registerUserWithUsernameAndPassword(userName, password);

  const { token, refreshToken } = await getAuthTokens({ userId: newUser._id });

  return response
    .cookie("access_token", token, getCookieOptions(extendedSession))
    .status(httpStatus.CREATED)
    .json({ token: refreshToken, user: newUser });
});
