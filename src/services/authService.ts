import { ObjectId } from "mongoose";
import { Service } from "typedi";
import jwt from "jsonwebtoken";
import { encrypt } from "../helpers";
import { envs } from "../configs";
import UserService from "./userService";
import { CustomError } from "../types";

@Service()
class AuthService {
  constructor(private readonly userService: UserService) {}

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
      } else {
        throw new CustomError(400, "Wrong credentials.");
      }
    } catch (err) {
      throw err;
    }
  }

  async register(username: string, password: string) {
    try {
      const user = await this.userService.create(username, password);
      const tokens = {
        accessToken: this.generateToken(user._id),
        refreshToken: this.generateToken(user._id, true),
      };
      return tokens;
    } catch (err) {
      throw err;
    }
  }

  generateToken(userId: ObjectId, isRefresh: boolean = false) {
    const { SECRET_KEY } = envs;
    const token = jwt.sign({ userId }, SECRET_KEY, {
      expiresIn: isRefresh ? "72h" : "24h",
    });
    return token;
  }
}

export default AuthService;
