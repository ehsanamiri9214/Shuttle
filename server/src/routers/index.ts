import express from "express";
import userRouter from "./userRouter";
import notFoundRouter from "./notFoundRouter";

const router = express.Router();

router.use("/user", userRouter);
router.use(notFoundRouter);

export default router;
