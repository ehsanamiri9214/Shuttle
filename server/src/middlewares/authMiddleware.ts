import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { envs } from "../configs";

const isGuest = (req: Request, res: Response, next: NextFunction) => {
  const { SECRET_KEY } = envs;
  const accessToken = req.headers.authorization;
  if (accessToken) {
    try {
      const decoded = jwt.verify(accessToken, SECRET_KEY);
      res.sendStatus(401);
    } catch (err) {
      next();
    }
  }
  next();
};

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  const { SECRET_KEY } = envs;
  const accessToken = req.headers.authorization;
  if (accessToken) {
    try {
      const decoded = jwt.verify(accessToken, SECRET_KEY);
      next();
    } catch (err) {
      res.sendStatus(401);
    }
  } else {
    res.sendStatus(401);
  }
};

export default { isGuest, isAuthenticated };
