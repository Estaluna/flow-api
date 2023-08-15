import { Server } from "http";

import app from "./app";
import config from "./config";

const { port } = config;

const server: Server = app.listen(port, (): void => {
  console.info(`⚡️ Application listening on PORT: ${port}`);
});

// TODO account for uncaught exceptions
