import { Service } from "typedi";
import { Follow, User } from "../models";
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

  // *******************************************************************************

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

  // *******************************************************************************

  async follow(sourceId: string, targetId: string) {
    try {
      const sourceUser = await User.findById(sourceId);
      const targetUser = await User.findById(targetId);
      if (!sourceUser || !targetUser) {
        throw new CustomError(404, "User doesn't exist.");
      }
      const alreadyFollowing = await Follow.findOne({ sourceId, targetId });
      if (alreadyFollowing) {
        return;
      }
      const followModel = new Follow({ sourceId, targetId });
      const result = await followModel.save();
      return;
    } catch (err) {
      throw err;
    }
  }

  async unfollow(sourceId: string, targetId: string) {
    try {
      const sourceUser = await User.findById(sourceId);
      const targetUser = await User.findById(targetId);
      if (!sourceUser || !targetUser) {
        throw new CustomError(404, "User doesn't exist.");
      }
      await Follow.findOneAndDelete({ sourceId, targetId });
      return;
    } catch (err) {
      throw err;
    }
  }

  async getNumOfFollowers(userId: string) {
    try {
      const numOfFollowers = await Follow.countDocuments({
        targetId: userId,
      });
      return numOfFollowers;
    } catch (err) {
      throw err;
    }
  }

  async getFollowers(userId: string) {
    try {
      const followers = await Follow.find({ targetId: userId }).populate(
        "sourceId"
      );
      return followers;
    } catch (err) {
      throw err;
    }
  }
}

export default UserService;
