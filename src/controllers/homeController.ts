import { NextFunction, Request, Response } from "express";
import { Service } from "typedi";

@Service()
class HomeController {
  constructor() {}

  getHome(req: Request, res: Response, next: NextFunction) {
    try {
      res.send("Welcome home.");
    } catch (err) {
      next(err);
    }
  }
}

export default HomeController;
