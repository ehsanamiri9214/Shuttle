import { Request, Response } from "express";
import { AuthService, UserService } from "../services";

const login = async (req: Request, res: Response) => {
  try {
    const authService = new AuthService();
    const userService = new UserService();
    const user = await userService.get(req.body.username, req.body.password);
    const tokens = authService.authenticate();
    res.send(tokens);
  } catch (err) {
    res.sendStatus(500);
  }
};

const register = async (req: Request, res: Response) => {
  try {
    const authService = new AuthService();
    const userService = new UserService();
    const user = await userService.create(
      req.body.username,
      req.body.password
    );
    const tokens = authService.authenticate();
    res.send(tokens);
  } catch (err) {
    res.sendStatus(500);
  }
};

const logout = (req: Request, res: Response) => {};

const removeAccount = (req: Request, res: Response) => {};

export default { login, register, logout, removeAccount };
