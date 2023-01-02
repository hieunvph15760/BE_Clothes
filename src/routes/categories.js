import { Router } from "express";
import {
  createCategory,
  getCategories,
  getCategoryDetail,
  removeCategory,
  updateCategory,
  getProductByCategories,
} from "../controllers/categories.js";

const router = Router();

const routerCategories = (app) => {
  router.post("/categories", createCategory);
  router.put("/categories/:id", updateCategory);
  router.get("/categories", getCategories);
  router.delete("/categories/:id", removeCategory);
  router.get("/categoriesDetail/:id", getCategoryDetail);
  router.get("/getProductByCategories/:id", getProductByCategories);
  return app.use("/api", router);
};

export default routerCategories;
