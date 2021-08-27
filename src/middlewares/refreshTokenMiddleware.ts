import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { envs } from "../configs";

const hasRefreshToken = (req: Request, res: Response, next: NextFunction) => {
  const { SECRET_KEY } = envs;
  const refreshToken = req.headers.refreshtoken as string;
  if (refreshToken) {
    try {
      const decoded = jwt.verify(refreshToken, SECRET_KEY);
      next();
    } catch (err) {
      res.sendStatus(401);
    }
  } else {
    res.sendStatus(401);
  }
};

export default { hasRefreshToken };
