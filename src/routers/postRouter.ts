import express from "express";
import { Container } from "typedi";
import { check } from "express-validator";
import { PostController } from "../controllers";
import { authMiddleware, validationMiddleware } from "../middlewares";

const router = express.Router();

const { isAuthenticated } = authMiddleware;
const { validate } = validationMiddleware;

const postController = Container.get(PostController);
const { get, create, update, remove } = postController;

router.get("/:postId", isAuthenticated, get.bind(postController));

router.post(
  "",
  [
    isAuthenticated,
    check("body").isLength({ min: 3, max: 150 }).escape(),
    validate,
  ],
  create.bind(postController)
);

router.put(
  "",
  [
    isAuthenticated,
    check("body").isLength({ min: 3, max: 150 }).escape(),
    validate,
  ],
  update.bind(postController)
);

router.delete("", isAuthenticated, remove.bind(postController));

export default router;
