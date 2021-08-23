import express from "express";
import configs from "./configs";
import routers from "./routers";

const app = express();
const { PORT } = configs;

app.use(routers);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT} ...`);
});
