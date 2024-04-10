import express from "express";
import mongoose from "mongoose";
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
import { xss } from "express-xss-sanitizer";
import mongoSanitize from "express-mongo-sanitize";
import compression from "compression";
import server_config from "./configs/config.js"

const app = express();

// set security HTTP headers
app.use(helmet());

// enable cors
app.use(cors(corsOptions));

// parse cookies
app.use(cookieParser());

// parse json request body
app.use(express.json({ limit: "1kb" }));

// sanitize request data
app.use(xss());
app.use(mongoSanitize());

// gzip compression
app.use(compression());


// limit repeated failed requests to auth endpoints
app.use('/auth', authLimiter)

app.use('/auth', authRoutes);

app.use(validateUserSession)

app.use('/user', workspacesRoutes);

app.use('/workspace', workspaceRoutes);


app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to Workspace server.");
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);


// connect to DB

const mongoDbUri = server_config.MONGO_URI;
const PORT = server_config.PORT;
mongoose
  .connect(mongoDbUri)
  .then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
      console.log(`App is listening to ${PORT}`);
    });
  })
  .catch((error) => { console.log("Error in DB connection: ", error) });
