import { Request, Response } from "express";

const isGuest = (req: Request, res: Response, next: Function) => {
  next();
};

const isAuthenticated = (req: Request, res: Response, next: Function) => {
  next();
};

export default { isGuest, isAuthenticated };
