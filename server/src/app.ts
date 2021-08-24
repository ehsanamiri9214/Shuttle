import express from "express";
import routers from "./routers";
import { envs } from "./configs";
import { LogService } from "./services";

const startServer = () => {
  const { PORT } = envs;
  const { log } = new LogService();

  const app = express();

  app
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(routers);

  app.listen(PORT, () => {
    log(`Server running on port: ${PORT}.`);
    return app;
  });
};

export default startServer;
