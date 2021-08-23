import express, { Request, Response } from "express";
import { userController } from "../controllers";

const router = express.Router();
const { login, register, logout, removeAccount } = userController;

router.post("/login", login);

router.post("/register", register);

router.post("/logout", logout);

router.post("/removeAccount", removeAccount);

export default router;
