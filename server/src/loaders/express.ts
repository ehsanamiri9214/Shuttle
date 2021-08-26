import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import routers from "../routers";
import { errorHandlerMiddleware } from "../middlewares";
import { envs } from "../configs";

const startServer = () => {
  const { PORT } = envs;

  const app = express();

  app
    .use(morgan("tiny"))
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(routers)
    .use(errorHandlerMiddleware);

  app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}.`);
    return app;
  });
};

export default startServer;
