import { User } from "../models";
import LogService from "./logService";
import { encrypt } from "../utils";

class UserService {
  private logService;

  constructor() {
    this.logService = new LogService();
  }

  async getAll() {
    const users = await User.find({});
    return users;
  }

  async get({ username, password }: { username: string; password: string }) {
    const user = await User.findOne({ username, password });
    return user;
  }

  async create({ username, password }: { username: string; password: string }) {
    const hashedPass = await encrypt.hash(password);
    const userModel = new User({ username, password: hashedPass });
    const user = await userModel.save();
    return user;
  }

  update() {}

  remove() {}
}

export default UserService;
