import { Request, Response, NextFunction } from "express";
import { AuthService } from "../services";

class UserController {
  private authService;

  constructor() {
    this.authService = new AuthService();
  }

  async login(req: Request, res: Response) {
    try {
      const { username, password } = req.body;
      const tokens = this.authService.login(username, password);
      res.json(tokens);
    } catch (err) {
      res.sendStatus(500);
    }
  }

  async register(req: Request, res: Response, next: NextFunction) {
    try {
      // const err = new Error();
      // err.name = ERRORS.NOT_FOUND.name;
      // err.message = "User is not found.";
      // // next(err);
      // throw err;
      const { username, password } = req.body;
      const tokens = await this.authService.register(username, password);
      // res.json(tokens);
    } catch (err) {
      next(err);
      // res.sendStatus(500);
    }
  }

  refreshToken(req: Request, res: Response) {}

  logout(req: Request, res: Response) {}

  removeAccount(req: Request, res: Response) {}
}

export default UserController;
