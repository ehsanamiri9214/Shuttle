import { Service } from "typedi";
import { User } from "../models";
import { encrypt } from "../helpers";
import { CustomError } from "../types";

@Service()
class UserService {
  constructor() {}

  async getById(userId: string) {
    try {
      const user = await User.findById(userId);
      if (!user) throw new CustomError(404, "User doesn't exist.");
      return user;
    } catch (err) {
      throw err;
    }
  }

  async getByUserName(username: string) {
    try {
      const user = await User.findOne({ username });
      if (!user) throw new CustomError(404, "User doesn't exist.");
      return user;
    } catch (err) {
      throw err;
    }
  }

  async create(username: string, password: string) {
    try {
      const duplicate = await User.findOne({ username });
      if (duplicate) throw new CustomError(400, "User already exists.");
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

  async updatePost() {
    try {
    } catch (err) {
      throw err;
    }
  }

  async removePost() {
    try {
    } catch (err) {
      throw err;
    }
  }
}

export default UserService;
