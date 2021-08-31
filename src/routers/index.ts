import express, { NextFunction, Request, Response } from "express";
import { CustomError } from "../types";
import authRouter from "./authRouter";
import homeRouter from "./homeRouter";
import userRouter from "./userRouter";

const router = express.Router();

router
  .use("/auth", authRouter)
  .use("/user", userRouter)
  .use(homeRouter)
  .use((req: Request, res: Response, next: NextFunction) => {
    throw new CustomError(404, "Not found.");
  });

export default router;
