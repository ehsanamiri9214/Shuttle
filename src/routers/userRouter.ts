import express, { Request, Response } from "express";
import { Container } from "typedi";
import { check } from "express-validator";
import { UserController } from "../controllers";
import { authMiddleware, validationMiddleware } from "../middlewares";

const router = express.Router();

const { validate } = validationMiddleware;
const { isGuest, isAuthenticated } = authMiddleware;

const userController = Container.get(UserController);
const { getMe, follow, unfollow } = userController;

router.get("/me", isAuthenticated, getMe.bind(userController));

router.post(
  "/follow",
  [isAuthenticated, check("targetId").notEmpty().escape(), validate],
  follow.bind(userController)
);

router.post(
  "/unfollow",
  [isAuthenticated, check("targetId").notEmpty().escape(), validate],
  unfollow.bind(userController)
);

export default router;
