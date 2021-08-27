import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { Service } from "typedi";
import { envs } from "../configs";
import { AuthService, UserService } from "../services";
import { CustomError } from "../types";

@Service()
class UserController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService
  ) {}

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, password } = req.body;
      if (!username || !password)
        throw new CustomError(400, "Credentials required.");
      const tokens = await this.authService.login(username, password);
      res.json(tokens);
    } catch (err) {
      next(err);
    }
  }

  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, password } = req.body;
      if (!username || !password)
        throw new CustomError(400, "Credentials required.");
      const tokens = await this.authService.register(username, password);
      res.json(tokens);
    } catch (err) {
      next(err);
    }
  }

  refreshToken(req: Request, res: Response, next: NextFunction) {}

  async getMe(req: Request, res: Response, next: NextFunction) {
    const accessToken = req.headers.authorization!;
    const { SECRET_KEY } = envs;
    try {
      const { userId } = jwt.verify(accessToken, SECRET_KEY) as {
        userId: string;
      };
      if (!userId) throw new CustomError(400, "UserId not found.");
      const user = await this.userService.getById(userId);
      res.json(user);
    } catch (err) {
      next(err);
    }
  }

  removeAccount(req: Request, res: Response, next: NextFunction) {}
}

export default UserController;
