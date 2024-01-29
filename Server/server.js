import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import cors from "cors";
import { authRoutes } from "./routes/auth.js";
import { workspaceRoutes } from "./routes/workspace.js";
import { workspacesRoutes } from "./routes/workspaces.js";
import validateUserSession from "./middleware/auth.js";
import { corsOptions } from "./configs/cors.js";
import cookieParser from "cookie-parser";
import { errorConverter, errorHandler } from "./middleware/error.js";
import authLimiter from "./middleware/rateLimiter.js";
import helmet from "helmet";
import {xss} from "express-xss-sanitizer";
config();
const app = express();

// set security HTTP headers
app.use(helmet());

// enable cors
app.use(cors(corsOptions));

// parse cookies
app.use(cookieParser());

// parse json request body
app.use(express.json());

// sanitize request data
app.use(xss());

// limit repeated failed requests to auth endpoints
app.use('/auth',authLimiter)

app.use('/auth',authRoutes);

app.use(validateUserSession)

app.use('/user',workspacesRoutes);

app.use('/workspace',workspaceRoutes);


app.get("/", (request, response) => {
    console.log(request);
    return response.status(234).send("Welcome to Workspace server.");
  });

  // convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);


// connect to DB

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
