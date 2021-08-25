import { User } from "../models";
import LogService from "./logService";

class UserService {
  private logService;

  constructor() {
    this.logService = new LogService();
  }

  async getAll() {}

  async get(username: string, password: string) {
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

  async create(username: string, password: string) {
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

  update() {}

  remove() {}
}

export default UserService;
