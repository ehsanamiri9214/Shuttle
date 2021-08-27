import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { Service } from "typedi";
import { envs } from "../configs";
import { UserService } from "../services";
import { CustomError } from "../types";

@Service()
class UserController {
  constructor(private readonly userService: UserService) {}

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
}

export default UserController;
