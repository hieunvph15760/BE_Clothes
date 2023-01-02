import { Router } from "express";
import {
  create,
  getBook,
  list,
  litmitBooks,
  pagination,
  remove,
  searchBooks,
  update,
} from "../controllers/products.js";

const router = Router();

router.get("/products", list);
router.post("/products", create);
router.get("/productsPagination/:page", pagination);
router.get("/products/:id", getBook);
router.delete("/products/:id", remove);
router.put("/products/:id", update);
router.get("/litmitProducts", litmitBooks);
router.get("/searchProducts", searchBooks);

export default router;
