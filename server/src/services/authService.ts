import { ObjectId } from "mongoose";
import IAuthService from "./IAuthService";
import { Token } from "../models";

class AuthService implements IAuthService {
  constructor() {}

  authenticate(userId: ObjectId) {
    return {
      accessToken: "accessToken",
      refreshToken: "refreshToken",
    };
  }

  reAuthenticate(userId: ObjectId) {
    return {
      accessToken: "accessToken",
      refreshToken: "refreshToken",
    };
  }

  logout() {}
}

export default AuthService;
