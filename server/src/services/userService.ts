import {db} from "../db";

class UserService {
  constructor() {}

  async login() {
    console.log("UserService login called.", db);
  }

  regisetr() {}

  logout() {}

  removeAccount() {}
}

export default UserService;
