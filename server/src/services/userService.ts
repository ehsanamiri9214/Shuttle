import { Request, Response } from "express";
import { db } from "../db";
import { User } from "../models";
import AuthService from "./authService";
import LogService from "./logService";

class UserService {
  private authService;
  private logService;

  constructor() {
    this.authService = new AuthService();
    this.logService = new LogService();
  }

  async login(username: string, password: string) {
    try {
      const user = await User.find({
        username,
        password,
      });
      const tokens = this.authService.authenticate();
      return tokens;
    } catch (err) {
      throw err;
    }
  }

  async register(username: string, password: string) {
    try {
      let userModel = new User({
        username,
        password,
      });
      const user = await userModel.save();
      const tokens = this.authService.authenticate();
      return tokens;
    } catch (err) {
      this.logService.error(err);
      throw err;
    }
  }

  logout() {}

  removeAccount() {}
}

export default UserService;
