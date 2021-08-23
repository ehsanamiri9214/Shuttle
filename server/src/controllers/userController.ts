import { Request, Response } from "express";

const login = (req: Request, res: Response) => {
  res.send("resp from user controller");
};

const register = (req: Request, res: Response) => {};

const logout = (req: Request, res: Response) => {};

const removeAccount = (req: Request, res: Response) => {};

export default { login, register, logout, removeAccount };
