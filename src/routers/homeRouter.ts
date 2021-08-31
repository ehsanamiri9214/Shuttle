import express from "express";
import { Container } from "typedi";
import HomeController from "../controllers/homeController";

const router = express.Router();

const homeController = Container.get(HomeController);
const { getHome } = homeController;

router.get("/", getHome);

export default router;
