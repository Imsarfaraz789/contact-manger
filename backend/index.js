import express from "express";
import DB from "./db/db.connect.js";
import router from "./routes/router.js";
import cors from "cors";

const app = express();

app.use(express.json())
app.use(cors());
DB();

app.use(router);
app.listen(5000, () => {
  console.log(`server is running at 5000`);
});
