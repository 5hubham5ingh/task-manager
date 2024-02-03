import { User } from "../Models/user.js";
import ApiError from "../utils/apiError.js";
import httpStatus from "http-status";
import bcrypt from "bcrypt";

export const logInUserWithUsernameAndPassword = async (userName, password) => {
  const user = await User.findOne({ userName }).lean();

  if (!user) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "User not found");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Incorrect password");
  }

  delete user.password;

  return user;
};

export const registerUserWithUsernameAndPassword = async (
  userName,
  password
) => {
  const existingUser = await User.findOne({ userName }).lean();

  if (existingUser) {
    throw new ApiError(httpStatus.BAD_REQUEST, "User already exists");
  }
  const salt = await bcrypt.genSalt();

  const hashedPassword = bcrypt.hashSync(password, salt);

  const newUser = await User.create({
    userName,
    password: hashedPassword,
  });

  const user = newUser.toObject();
  delete user.password;

  return user;
};

export const logOutUser = () => {};
