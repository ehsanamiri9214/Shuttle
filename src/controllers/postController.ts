import { Request, Response, NextFunction } from "express";
import { Service } from "typedi";
import jwt from "jsonwebtoken";
import { envs } from "../configs";
import { PostService } from "../services";

@Service()
class PostController {
  constructor(private readonly postService: PostService) {}

  async get(req: Request, res: Response, next: NextFunction) {
    try {
      const post = await this.postService.get(req.params.postId);
      res.json(post);
    } catch (err) {
      next(err);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const accessToken = req.headers.authorization!;
      const { SECRET_KEY } = envs;
      const { userId } = jwt.verify(accessToken, SECRET_KEY) as {
        userId: string;
      };
      const post = await this.postService.create(userId, req.body.body);
      res.json(post);
    } catch (err) {
      next(err);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const post = await this.postService.update(
        req.params.postId,
        req.body.body
      );
      res.json(post);
    } catch (err) {
      next(err);
    }
  }

  async remove(req: Request, res: Response, next: NextFunction) {
    try {
      const accessToken = req.headers.authorization!;
      const { SECRET_KEY } = envs;
      const { userId } = jwt.verify(accessToken, SECRET_KEY) as {
        userId: string;
      };
      const removed = await this.postService.remove(req.params.postId, userId);
      if (removed) res.json("Post removed successfully.");
    } catch (err) {
      next(err);
    }
  }
}

export default PostController;
