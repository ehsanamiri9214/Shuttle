import { connectToDB } from "./db";
import startServer from "./app";

connectToDB()
  .then(startServer)
  .catch((err) => console.log(err));
