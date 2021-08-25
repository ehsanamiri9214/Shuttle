import { Request, Response } from "express";
import { AuthService, UserService, LogService } from "../services";

class UserController {
  private logService;
  private authService;
  private userService;

  constructor() {
    this.logService = new LogService();
    this.authService = new AuthService();
    this.userService = new UserService();
  }

  async login(req: Request, res: Response) {
    try {
      const user = await this.userService.get(req.body);
      const tokens = this.authService.authenticate(user._id);
      res.send(tokens);
    } catch (err) {
      this.logService.error(err);
      res.sendStatus(500);
    }
  }

  async register(req: Request, res: Response) {
    try {
      const user = await this.userService.create(req.body);
      const tokens = this.authService.authenticate(user._id);
      res.send(tokens);
    } catch (err) {
      this.logService.error(err);
      res.sendStatus(500);
    }
  }

  refreshToken(req: Request, res: Response) {}

  logout(req: Request, res: Response) {}

  removeAccount(req: Request, res: Response) {}
}

export default UserController;
