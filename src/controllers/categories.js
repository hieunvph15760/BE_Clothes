import categories from "../models/categories.js";
import products from "../models/Products.js";

export const createCategory = async (req, res) => {
  try {
    const category = await new categories(req.body).save();
    return res.json(category);
  } catch (error) {
    return res.status(400).json({
      message: "Không thêm được danh mục !",
    });
  }
};

export const getCategories = async (req, res) => {
  try {
    const category = await categories.find({}).exec();
    return res.json(category);
  } catch (error) {
    return res.status(400).json({
      message: "Không lấy được danh mục !",
    });
  }
};

export const getCategoryDetail = async (req, res) => {
  try {
    const category = await categories.findOne({ _id: req.params.id }).exec();
    return res.json(category);
  } catch (error) {
    return res.status(400).json({
      message: "Không lấy được chi tiết danh mục !",
    });
  }
};

export const removeCategory = async (req, res) => {
  try {
    const category = await categories
      .findByIdAndDelete({ _id: req.params.id })
      .exec();
    return res.json({
      result: category,
      message: "Xóa danh mục thành công !",
    });
  } catch (error) {
    return res.status(400).json({
      message: "Không xóa được danh mục !",
    });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const category = await categories
      .findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .exec();
    return res.json(category);
  } catch (error) {
    return res.status(400).json({
      message: "Không cập nhật được danh mục !",
    });
  }
};

export const getProductByCategories = async (req, res) => {
  try {
    const category = await categories.findOne({ _id: req.params.id }).exec();
    const product = await products
      .find({ category: category })
      .populate("category")
      .select("-category")
      .exec();
    res.json({
      category,
      product,
    });
  } catch (error) {
    res.status(400).json({
      error: "Không tìm thấy sản phẩm theo danh mục !",
    });
  }
};
