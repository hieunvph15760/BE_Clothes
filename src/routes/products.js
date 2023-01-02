import { Router } from "express";
import {
  createProduct,
  getProducts,
  getProductDetail,
  removeProduct,
  updateProduct,
} from "../controllers/products.js";

const router = Router();

const routerProducts = (app) => {
  router.post("/products", createProduct);
  router.put("/products/:id", updateProduct);
  router.get("/products", getProducts);
  router.delete("/products/:id", removeProduct);
  router.get("/productsDetail/:id", getProductDetail);
  return app.use("/api", router);
};

export default routerProducts;
