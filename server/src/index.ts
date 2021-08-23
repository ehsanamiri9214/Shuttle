import express from "express";
import routers from "./routers";

const app = express();
const port = 3000;

app.use(routers);

app.listen(port, () => {
  console.log(`Server running on port: ${port} ...`);
});
