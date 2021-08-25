import jwt from "jsonwebtoken";
import { envs } from "../configs";
import { ErrorService, UserService } from ".";

class AuthService {
  private errorService;
  private userService;

  constructor() {
    this.errorService = new ErrorService();
    this.userService = new UserService();
  }

  async login(username: string, password: string) {}

  async register(username: string, password: string) {
    this.errorService.throw(400, "User could not be found.");
  }

  logout() {}
}

export default AuthService;
