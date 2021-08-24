import { db } from "../db";
import { User } from "../models";

class UserService {
  constructor() {}

  async login() {
    console.log("UserService login called.");
  }

  async register() {
    // let userModel = new User({
    //   firstName: "Esi",
    //   lastName: "Sth",
    // });

    // try {
    //   await userModel.save();
    // } catch (err) {
    //   console.log(err);
    // }
    console.log("UserService register called.");
  }

  logout() {}

  removeAccount() {}
}

export default UserService;
