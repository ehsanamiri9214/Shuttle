import { connectToDB } from "./db";
import { LogService } from "./services";
import startServer from "./app";

const { error } = new LogService();

connectToDB()
  .then(startServer)
  .catch((err) => error(err));
