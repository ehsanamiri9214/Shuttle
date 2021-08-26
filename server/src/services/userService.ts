import { Types } from "mongoose";
import { User } from "../models";
import { encrypt } from "../utils";

class UserService {
  constructor() {}

  async getAll() {
    const users = await User.find({});
    return users;
  }

  async getById(userId: string) {
    const user = await User.findById(userId);
    return user;
  }

  async getByUserName(username: string) {
    const user = await User.findOne({ username });
    return user;
  }

  async create(username: string, password: string) {
    try {
      const hashedPass = await encrypt.hash(password);
      const userModel = new User({ username, password: hashedPass });
      const user = await userModel.save();
      return user;
    } catch (err) {
      throw err;
    }
  }

  update() {}

  remove() {}
}

export default UserService;
