import { Request, Response } from "express";
import { db } from "../db";
import { User } from "../models";
import LogService from "./logService";

class UserService {
  private logService;

  constructor() {
    this.logService = new LogService();
  }

  async login(username: string, password: string) {
    try {
      const user = await User.find({
        username,
        password,
      });
      return user;
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
      return user;
    } catch (err) {
      this.logService.error(err);
      throw err;
    }
  }

  logout() {}

  removeAccount() {}
}

export default UserService;
