import bcrypt from "bcrypt";
import { envs } from "../configs";

const hash = async (password: string) => {
  const { SECRET_KEY } = envs;
  const saltRounds = 10;

  const hashedPassword = await new Promise((resolve, reject) => {
    bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(password, saltRounds, function (err, hash) {
        if (err) reject(err);
        resolve(hash);
      });
    });
  });

  return hashedPassword;
};

const compare = () => {};

export default { hash, compare };
