import { Request, Response, NextFunction } from "express";
import { Schema } from "mongoose";
import { Service } from "typedi";
import jwt from "jsonwebtoken";
import { envs } from "../configs";
import { AuthService } from "../services";
import { CustomError } from "../types";

@Service()
class UserController {
  constructor(private readonly authService: AuthService) {}

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

  refreshToken(req: Request, res: Response, next: NextFunction) {
    try {
      const { SECRET_KEY } = envs;
      const refreshToken = req.headers.refreshtoken as string;
      const { userId } = jwt.verify(refreshToken, SECRET_KEY) as {
        userId: string;
      };
      const token = this.authService.generateToken(
        new Schema.Types.ObjectId(userId)
      );
      res.json({ accessToken: token });
    } catch (err) {
      next(err);
    }
  }

  removeAccount(req: Request, res: Response, next: NextFunction) {}
}

export default UserController;
