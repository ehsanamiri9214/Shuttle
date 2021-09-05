import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { Service } from "typedi";
import { envs } from "../configs";
import { Follow } from "../models";
import { UserService } from "../services";
import { CustomError } from "../types";

@Service()
class UserController {
  constructor(private readonly userService: UserService) {}

  async getMe(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = this.getUserIdFromHeader(req);
      const user = await this.userService.getById(userId);
      res.json(user);
    } catch (err) {
      next(err);
    }
  }

  async follow(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = this.getUserIdFromHeader(req);
      await this.userService.follow(userId, req.body.targetId);
      res.json();
    } catch (err) {
      next(err);
    }
  }

  async unfollow(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = this.getUserIdFromHeader(req);
      const result = await this.userService.unfollow(userId, req.body.targetId);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async getNumOfFollowers(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = this.getUserIdFromHeader(req);
      const numOfFollowers = await this.userService.getNumOfFollowers(userId);
      res.json(numOfFollowers);
    } catch (err) {
      next(err);
    }
  }

  async getFollowers(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = this.getUserIdFromHeader(req);
      const followers = await this.userService.getFollowers(userId);
      res.json(followers);
    } catch (err) {
      next(err);
    }
  }

  getUserIdFromHeader(req: Request) {
    const accessToken = req.headers.authorization!;
    const { SECRET_KEY } = envs;
    const { userId } = jwt.verify(accessToken, SECRET_KEY) as {
      userId: string;
    };
    if (!userId) throw new CustomError(400, "UserId not found.");
    return userId;
  }
}

export default UserController;
