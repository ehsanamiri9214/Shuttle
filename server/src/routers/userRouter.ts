import express, { Request, Response } from "express";
import { check } from "express-validator";
import { UserController } from "../controllers";
import { authMiddleware, validationMiddleware } from "../middlewares";

const router = express.Router();

const { validate } = validationMiddleware;
const { isGuest, isAuthenticated } = authMiddleware;

const userController = new UserController();
const { login, register, refreshToken, logout, removeAccount } = userController;

router.post(
  "/login",
  [
    isGuest,
    check("username").isLength({ min: 3 }).escape(),
    check("password").isLength({ min: 8 }),
    validate,
  ],
  login.bind(userController)
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
  register.bind(userController)
);

router.post("/refreshToken", refreshToken.bind(userController));

router.post("/logout", isAuthenticated, logout.bind(userController));

router.post(
  "/removeAccount",
  isAuthenticated,
  removeAccount.bind(userController)
);

export default router;
