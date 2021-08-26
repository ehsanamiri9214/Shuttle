import { ObjectId } from "mongoose";
import jwt from "jsonwebtoken";
import { encrypt } from "../utils";
import { envs } from "../configs";
import { UserService } from ".";

class AuthService {
  private userService;

  constructor() {
    this.userService = new UserService();
  }

  async login(username: string, password: string) {
    try {
      const user = await this.userService.getByUserName(username);
      const match = await encrypt.compare(password, user.password);
      if (user && match) {
        const tokens = {
          accessToken: this.generateToken(user._id),
          refreshToken: this.generateToken(user._id, true),
        };
        return tokens;
      }
      throw new Error("Unauthorized.");
    } catch (err) {
      throw err;
    }
  }

  async register(username: string, password: string) {
    try {
      const user = await this.userService.create(username, password);
      if (user) {
        const tokens = {
          accessToken: this.generateToken(user._id),
          refreshToken: this.generateToken(user._id, true),
        };
        return tokens;
      }
      throw new Error("Could not create user.");
    } catch (err) {
      throw err;
    }
  }

  generateToken(userId: ObjectId, isRefresh: boolean = false) {
    const { SECRET_KEY } = envs;
    const token = jwt.sign({ userId }, SECRET_KEY, {
      expiresIn: isRefresh ? "72h" : "2h",
    });
    return token;
  }
}

export default AuthService;
