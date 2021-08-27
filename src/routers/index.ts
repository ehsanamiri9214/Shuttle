import express, { NextFunction, Request, Response } from "express";
import { CustomError } from "../types";
import authRouter from "./authRouter";
import userRouter from "./userRouter";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use((req: Request, res: Response, next: NextFunction) => {
  throw new CustomError(404, "Not found.");
});

export default router;
