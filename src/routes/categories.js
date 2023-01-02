import { Router } from "express";
import { CategoriesDetails, create, getCategory, list, remove, update } from "../controllers/categories.js";

const router = Router();

router.post("/categories",create)
router.get("/categories",list)
router.get("/categories/:id",getCategory)
router.delete("/categories/:id",remove)
router.put("/categories/:id",update)
router.get("/categoriesDetails/:id",CategoriesDetails);

export default router;