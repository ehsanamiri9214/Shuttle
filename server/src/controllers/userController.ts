import { Request, Response, NextFunction } from "express";
import { AuthService } from "../services";

class UserController {
  private authService;

  constructor() {
    this.authService = new AuthService();
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, password } = req.body;
      const tokens = await this.authService.login(username, password);
      res.json(tokens);
    } catch (err) {
      next(err);
    }
  }

  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, password } = req.body;
      const tokens = await this.authService.register(username, password);
      res.json(tokens);
    } catch (err) {
      next(err);
    }
  }

  refreshToken(req: Request, res: Response) {}

  removeAccount(req: Request, res: Response) {}
}

export default UserController;
