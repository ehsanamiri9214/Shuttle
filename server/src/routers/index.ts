import express, { Request, Response } from "express";
import userRouter from "./userRouter";

const router = express.Router();

router.use("/user", userRouter);
router.use((req: Request, res: Response, next: Function) => {
  const err: { statusMessage: string; statusCode: number } = {
    statusMessage: "Not Found!",
    statusCode: 404,
  };
  next(err);
});

export default router;
