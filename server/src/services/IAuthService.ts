import { ObjectId } from "mongoose";

interface IAuthService {
  authenticate(userId: ObjectId): {
    accessToken: string;
    refreshToken: string;
  };

  reAuthenticate(userId: ObjectId): {
    accessToken: string;
    refreshToken: string;
  };

  logout(userId: ObjectId): void;
}

export default IAuthService;
