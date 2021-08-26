import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AuthService, UserService } from "../services";
import { envs } from "../configs";

class UserController {
  private authService;
  private userService;

  constructor() {
    this.authService = new AuthService();
    this.userService = new UserService();
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, password } = req.body;
      const tokens = await this.authService.login(username, password);
      res.json(tokens);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, password } = req.body;
      const tokens = await this.authService.register(username, password);
      res.json(tokens);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  refreshToken(req: Request, res: Response) {}

  async getMe(req: Request, res: Response) {
    const accessToken = req.headers.authorization!;
    const { SECRET_KEY } = envs;
    try {
      const { userId } = jwt.verify(accessToken, SECRET_KEY) as {
        userId: string;
      };
      const user = await this.userService.getById(userId);
      res.json(user);
    } catch (err) {
      res.sendStatus(500);
    }
  }

  removeAccount(req: Request, res: Response) {}
}

export default UserController;
