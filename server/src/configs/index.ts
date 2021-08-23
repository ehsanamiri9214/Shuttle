import dotenv from "dotenv";

dotenv.config();

const configs = {
  ENV: process.env.ENV,
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
};

export default configs;