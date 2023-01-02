import CategoriesSchema from "../modules/categories.js";
import BooksSchema from "../modules/products.js";

export const create = async (req, res) => {
  try {
    const category = await new CategoriesSchema(req.body).save();
    res.json(category);
  } catch (error) {
    return res.status(400).json({
      message: "Không thêm được danh mục !",
    });
  }
};

export const list = async (req, res) => {
  try {
    const category = await CategoriesSchema.find({}).exec();
    res.json(category);
  } catch (error) {
    return res.status(400).json({
      message: "Không lấy được danh mục !",
    });
  }
};

export const CategoriesDetails = async (req, res) => {
  try {
    const category = await CategoriesSchema.findOne({
      _id: req.params.id,
    }).exec();
    const books = await BooksSchema.find({ category: category })
      .populate("category")
      .select("-category")
      .exec();
    res.json(books);
  } catch (error) {
    return res.status(400).json({
      message: "Không tìm thấy !",
    });
  }
};

export const getCategory = async (req, res) => {
  try {
    const category = await CategoriesSchema.findOne({
      _id: req.params.id,
    }).exec();
    res.json(category);
  } catch (error) {
    return res.status(400).json({
      message: "Không lấy được danh mục !",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const category = await CategoriesSchema.findOneAndDelete({
      _id: req.params.id,
    }).exec();
    res.json(category);
  } catch (error) {
    return res.status(400).json({
      message: "Không xóa được danh mục !",
    });
  }
};

export const update = async (req, res) => {
  try {
    const category = await CategoriesSchema.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    ).exec();
    res.json(category);
  } catch (error) {
    return res.status(400).json({
      message: "Không sửa được danh mục !",
    });
  }
};
