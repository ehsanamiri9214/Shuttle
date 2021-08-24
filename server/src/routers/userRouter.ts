import express, { Request, Response } from "express";
import { check } from "express-validator";
import { userController } from "../controllers";
import { validationMiddleware } from "../middlewares";

const router = express.Router();
const { login, register, logout, removeAccount } = userController;
const { validate } = validationMiddleware;

router.post(
  "/login",
  [
    check("username").isLength({ min: 3 }).escape(),
    check("password").isLength({ min: 8 }),
    validate,
  ],
  login
);

router.post(
  "/register",
  [
    check("firstName").isLength({ min: 3 }).escape(),
    check("lastName").isLength({ min: 3 }).escape(),
    check("username").isLength({ min: 3 }).escape(),
    check("password").isLength({ min: 8 }),
    check("phone").isMobilePhone("fa-IR"),
    check("email").isEmail().normalizeEmail(),
    validate,
  ],
  register
);

router.post("/logout", logout);

router.post("/removeAccount", removeAccount);

export default router;
