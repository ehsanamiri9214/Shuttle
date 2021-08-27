import "reflect-metadata";
import { connectToDB, startServer } from "./loaders";

connectToDB()
  .then(startServer)
  .catch((err) => console.log(err));
