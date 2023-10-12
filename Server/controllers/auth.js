import { User } from "../Models/user.js";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";


// Define a function to handle user login
export const logIn = async (request, response) => {
    try {
      // Extract user input (username and password) from the request body
      const { userName, password } = request.body;
  
      // Check if the user name and password both exist in the request body
      if (!userName || !password) {
        // If either is missing, send a 400 Bad Request response
        response.status(400).json({ message: "Username or password missing" });
        console.log(request.body);
        return; 
      }
  
      // Find the user in the database by their username and retrieve as a plain JavaScript object
      const user = await User.findOne({ userName }).lean();
  
      // If the user does not exist, send a 404 Not Found response
      if (!user) {
        response.status(404).json({ message: "User not found" });
        return; 
      }
  
      // Compare the provided password with the hashed password in the database
      const isMatch = await bcrypt.compare(password, user.password);
  
      // If the passwords do not match, send a 400 Bad Request response
      if (!isMatch) {
        response.status(400).json({ message: "Invalid password" });
        return; 
      }
  
      // If the password is correct, create a session token using JWT
      const token = Jwt.sign({ id: user._id }, process.env.JWT_KEY);
  
      // Remove the 'password' property from the user object for security reasons
      delete user.password;
  
      // Send a 200 OK response with the session token and user object
      response.status(200).json({ token, user });
    } catch (error) {
      // Handle any errors that occur during the login process
      console.log("Error while logging in.", error);
      response.status(500).json({ message: "Internal Server Error" });
    }
  };
  

// Sign up
export const register = async (request, response) => {
    try {
      // Extract user input (username and password) from the request body
      const { userName, password } = request.body;
  
      // Check if the user name and password both exist in the request body
      if (!userName || !password) {
        // If either is missing, send a 400 Bad Request response
        response.status(400).json({ message: "User name or password missing" });
        
        return; 
      }
  
      // Generate a salt for password hashing
      const salt = await bcrypt.genSalt();
  
      // Hash the user's password using bcrypt
      const passwordHash = bcrypt.hashSync(password, salt);
  
      // Create a new user object with the hashed password
      const newUser = { userName, password: passwordHash };
  
      // Save the new user document to the database
      const savedUser = await User.create(newUser);
  
      //Remove password from the response object for security
      const responseObject = savedUser.toObject();
      delete responseObject.password;
      // Send a 201 Created response with the saved user document
      response.status(201).json(responseObject);
    } catch (error) {
      // Check if the error is a duplicate key error (MongoDB error code 11000)
      if (error.code === 11000) {
        // Respond with a 409 Conflict status code and an error message
        response.status(409).json({ message: 'Conflict: Duplicate key error' });
      } else {
        // Handle other errors as needed
        response.status(500).json({ message: 'Internal Server Error' });
      }
    }
  };
  
