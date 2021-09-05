import express, { Request, Response } from "express";
import { Container } from "typedi";
import { check } from "express-validator";
import { AuthController } from "../controllers";
import {
  authMiddleware,
  refreshTokenMiddleware,
  validationMiddleware,
} from "../middlewares";

const router = express.Router({ caseSensitive: true });

const { isGuest, isAuthenticated } = authMiddleware;
const { hasRefreshToken } = refreshTokenMiddleware;
const { validate } = validationMiddleware;

const authController = Container.get(AuthController);
const { login, register, refreshToken, removeAccount } = authController;

router.post(
  "/login",
  [
    isGuest,
    check("username").isLength({ min: 3 }).escape(),
    check("password").isLength({ min: 8 }),
    validate,
  ],
  login.bind(authController)
);

router.post(
  "/register",
  [
    isGuest,
    // check("firstName").isLength({ min: 3 }).escape(),
    // check("lastName").isLength({ min: 3 }).escape(),
    check("username").isLength({ min: 3 }).escape(),
    check("password").isLength({ min: 8 }),
    // check("phone").isMobilePhone("fa-IR"),
    // check("email").isEmail().normalizeEmail(),
    validate,
  ],
  register.bind(authController)
);

router.post(
  "/refreshToken",
  hasRefreshToken,
  refreshToken.bind(authController)
);

router.post(
  "/removeAccount",
  isAuthenticated,
  removeAccount.bind(authController)
);

export default router;
