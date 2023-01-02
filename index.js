import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import routerCategories from "./src/routes/categories.js";
import routerProducts from "./src/routes/products.js";
import cors from "cors";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGDB).then(() => {
  console.log("Kết nối db thành công !");
});

routerCategories(app);
routerProducts(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server đang chạy cổng ${PORT}`);
});
