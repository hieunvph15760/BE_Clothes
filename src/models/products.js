import mongoose from "mongoose";
const { ObjectId } = mongoose.Type;

const Products = mongoose.Schema({
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
    ref: "Category",
  },
  quantity: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("products", Products);
