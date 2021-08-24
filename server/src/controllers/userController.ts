import { Request, Response } from "express";
import { UserService } from "../services";

const login = (req: Request, res: Response) => {
  try {
    // @TODO: Check user exists.
    // @TODO: Return token.
    const userService = new UserService();
    userService.login();
    res.send("Done.");
  } catch (err) {
    res.sendStatus(500);
  }
};

const register = (req: Request, res: Response) => {
  try {
    // @TODO: Create user.
    // @TODO: Return token.
    const userService = new UserService();
    userService.register();
    res.send("Done.");
  } catch (err) {
    res.sendStatus(500);
  }
};

const logout = (req: Request, res: Response) => {};

const removeAccount = (req: Request, res: Response) => {};

export default { login, register, logout, removeAccount };
