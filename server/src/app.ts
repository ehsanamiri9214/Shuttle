import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import routers from "./routers";
import { envs } from "./configs";

const startServer = () => {
  const { PORT } = envs;

  const app = express();

  app
    .use(morgan("tiny"))
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(routers)
    .use((err: Error, req: Request, res: Response, next: NextFunction) => {
      res.status(!isNaN(+err.name) ? +err.name : 500).json({
        error: {
          message: !!err.message ? err.message : "Something went wrong!",
        },
      });
    });

  app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}.`);
    return app;
  });
};

export default startServer;
