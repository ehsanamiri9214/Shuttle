import express from "express";
import { envs } from "./configs";
import { connectToDB } from "./db";
import routers from "./routers";
import { LogService } from "./services";

const { PORT } = envs;
const { log, error } = LogService;

connectToDB()
  .then(() => startServer())
  .catch((err) => {
    error(err);
  });

const startServer = () => {
  const app = express();
  app.use(routers);

  app.listen(PORT, () => {
    log(`Server running on port: ${PORT} ...`);
    return app;
  });
};
