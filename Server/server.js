import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import cors from "cors";
import { authRoutes } from "./routes/auth.js";
import { workspaceRoutes } from "./routes/workspace.js";
import { workspacesRoutes } from "./routes/workspaces.js";
import { verifyToken } from "./middleware/auth.js";
import { corsOptions } from "./configs/cors.js";
config();
const app = express();
app.use(cors(corsOptions));
app.use(express.json());


app.use('/auth',authRoutes);

app.use('/user',workspacesRoutes);

app.use('/workspace',workspaceRoutes);


app.get("/", (request, response) => {
    console.log(request);
    return response.status(234).send("Welcome to mern stack tutorial");
  });

const mongoDbUri = process.env.MONGO_URI;
const PORT = process.env.PORT;
mongoose
  .connect(mongoDbUri)
  .then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
        console.log(`App is listening to ${PORT}`);
      });
  })
  .catch((error) => {console.log("Error in DB connection: ",error)});
