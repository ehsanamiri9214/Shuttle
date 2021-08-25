import mongoose, { Connection } from "mongoose";
import { envs } from "./configs";

const { DB_URL } = envs;
let connection: Connection, db: object;

const connectToDB = async () => {
  await mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("DB connection: Successful.");
  connection = mongoose.connection;
  db = connection.db;
};

export { connectToDB, connection, db };
