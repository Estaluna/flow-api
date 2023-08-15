import cors from "cors";
import express, { Application } from "express";
import helmet from "helmet";

import apiRoutes from "./routes/v1";

const app: Application = express();

// Enable Cross Origin Resource Sharing to all origins by default
app.use(cors());

// Use Helmet to secure the app by setting various HTTP headers
app.use(helmet());

// Middleware that transforms the raw string of req.body into json
app.use(express.json());

// TODO: Use logger with combined format

// Load API routes and versioning
app.use("/v1", apiRoutes);

// TODO API docs

// TODO Error handler has to be the last attached

export default app;
