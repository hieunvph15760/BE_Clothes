import mongoose from "mongoose";

const Categories = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    status: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("categories", Categories);
