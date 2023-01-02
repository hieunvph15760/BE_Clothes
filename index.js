import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import routerCategories from "./src/routes/categories.js";
import routerProducts from "./src/routes/products.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

routerCategories(app);
routerProducts(app);
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGDB).then(() => {
  console.log("Kết nối db thành công !");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server đang chạy cổng ${PORT}`);
});
