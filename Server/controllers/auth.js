import { User } from "../Models/user.js";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import { generateToken } from "../utils/auth.js";

export const logIn = async (request, response) => {
  try {
    const { userName, password } = request.body;

    if (!userName || !password) {
      response.status(400).json({ message: "Username or password missing" });
      console.log(request.body);
      return;
    }

    const user = await User.findOne({ userName }).lean();

    if (!user) {
      response.status(404).json({ message: "User not found" });
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      response.status(400).json({ message: "Invalid password" });
      return;
    }

    // const token = Jwt.sign({ id: user._id }, process.env.JWT_KEY);

    const token = generateToken({ id: user._id });

    delete user.password;

    response
      .cookie("access_token", token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24,
      })
      .status(200)
      .json({ token, user });
  } catch (error) {
    console.log("Error while logging in.", error);
    response.status(500).json({ message: "Internal Server Error" });
  }
};

export const register = async (request, response) => {
  try {
    const { userName, password } = request.body;

    if (!userName || !password) {
      response.status(400).json({ message: "User name or password missing" });

      return;
    }

    const salt = await bcrypt.genSalt();

    const passwordHash = bcrypt.hashSync(password, salt);

    const newUser = { userName, password: passwordHash };

    const savedUser = await User.create(newUser);

    const responseObject = savedUser.toObject();
    delete responseObject.password;

    // const token = Jwt.sign({ id: savedUser._id }, process.env.JWT_KEY);
    const token = generateToken({ id: savedUser._id });
    response
      .cookie("access_token", token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24,
      })
      .status(201)
      .json({ token, user: responseObject });
  } catch (error) {
    if (error.code === 11000) {
      response.status(409).json({ message: "User name already exists." });
    } else {
      response.status(500).json({ message: "Internal Server Error" });
    }

    console.log("Error while user registration / signup.", error);
  }
};
