import jwt from "jsonwebtoken";
import { envs } from "../configs";
import UserService from "./userService";

class AuthService {
  private userService;

  constructor() {
    this.userService = new UserService();
  }

  async login(username: string, password: string) {}

  async register(username: string, password: string) {
    const err = new Error();
    err.name = "400";
    err.message = "User is not found.";
    throw err;
  }

  logout() {}
}

export default AuthService;
