import dotenv from "dotenv";

dotenv.config();

const envs: {
  ENV: string;
  PORT: string | number;
  DB_URL: string;
  SECRET_KEY: string;
} = {
  ENV: process.env.ENV || "development",
  PORT: process.env.PORT || 3000,
  DB_URL: process.env.DB_URL || "mongodb://localhost/test-db",
  SECRET_KEY: process.env.SECRET_KEY || "secret",
};

export default envs;
