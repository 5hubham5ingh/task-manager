import express, { request, response } from "express";
import mongoose from "mongoose";
import { config } from "dotenv";

import cors from "cors";
import {booksRouter }from "./routes/booksRoutes.js";
import { logInRouter } from "./routes/login.js";
import { signUpRouter } from "./routes/signUp.js";
config();
const app = express();
app.use(cors());
app.use(express.json());


app.use('/books',booksRouter)

app.use('/logIn',logInRouter)

app.use('/',signUpRouter)



app.get("/", (request, response) => {
    console.log(request);
    return response.status(234).send("Welcome to mern stack tutorial");
  });

const mongoDBURL = process.env.MONGO_URI;
const PORT = process.env.PORT;
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
        console.log(`App is listening to ${PORT}`);
      });
  })
  .catch((error) => {console.log("Error in DB connection: ",error)});
