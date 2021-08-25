import mongoose, { Connection } from "mongoose";
import { envs } from "./configs";
import { LogService } from "./services";

const { DB_URL } = envs;
const { log } = new LogService();
let connection: Connection, db: object;

const connectToDB = async () => {
  await mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  log("DB connection: Successful.");
  connection = mongoose.connection;
  db = connection.db;
};

export { connectToDB, connection, db };
