import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;
const ProductsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    status: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: ObjectId,
      ref: "category",
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
ProductsSchema.index({ name: "text" });
const products = mongoose.model("products", ProductsSchema);
products.createIndexes({ name: "text" });
export default products;
