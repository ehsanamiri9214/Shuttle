import { Request, Response } from "express";
import { UserService } from "../services";

const login = (req: Request, res: Response) => {
  const userService = new UserService();
  userService.login();
  res.send("Done.");
};

const register = (req: Request, res: Response) => {};

const logout = (req: Request, res: Response) => {};

const removeAccount = (req: Request, res: Response) => {};

export default { login, register, logout, removeAccount };
