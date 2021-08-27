import dotenv from "dotenv";

dotenv.config();

const envs: {
  ENV: string;
  PORT: string | number;
  DB_URL: string;
  SECRET_KEY: string;
} = {
  ENV: process.env.ENV!,
  PORT: process.env.PORT!,
  DB_URL: process.env.DB_URL!,
  SECRET_KEY: process.env.SECRET_KEY!,
};

export default envs;
