import express, { Request, Response } from "express";
import { Container } from "typedi";
import { check } from "express-validator";
import { UserController } from "../controllers";
import { authMiddleware, validationMiddleware } from "../middlewares";

const router = express.Router();

const { validate } = validationMiddleware;
const { isGuest, isAuthenticated } = authMiddleware;

const userController = Container.get(UserController);
const { getMe } = userController;

router.get("/me", isAuthenticated, getMe.bind(userController));

export default router;
