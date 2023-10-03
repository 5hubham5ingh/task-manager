import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import cors from "cors";
import {booksRouter }from "./routes/booksRoutes.js";
import { authRoutes } from "./routes/auth.js";
import { workSpaceRoutes } from "./routes/workSpace.js";
import { userRoutes } from "./routes/user.js";
config();
const app = express();
app.use(cors());
app.use(express.json());


app.use('/books',booksRouter);

app.use('/auth',authRoutes);

app.use('/user',userRoutes);

app.use('/workspace', workSpaceRoutes);


app.get("/", (request, response) => {
    console.log(request);
    return response.status(234).send("Welcome to mern stack tutorial");
  });

const mongoDbUri = process.env.MONGO_URI;
const PORT = process.env.PORT;
mongoose
  .connect(mongoDbUri,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
        console.log(`App is listening to ${PORT}`);
      });
  })
  .catch((error) => {console.log("Error in DB connection: ",error)});
