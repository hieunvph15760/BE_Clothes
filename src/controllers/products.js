import products from "../models/Products.js";

export const createProduct = async (req, res) => {
  try {
    const product = await new products(req.body).save();
    return res.json(product);
  } catch (error) {
    return res.status(400).json({
      message: "Không thêm được sản phẩm !",
    });
  }
};

export const getProducts = async (req, res) => {
  try {
    const product = await products.find({}).exec();
    return res.json(product);
  } catch (error) {
    return res.status(400).json({
      message: "Không lấy được sản phẩm !",
    });
  }
};

export const getProductDetail = async (req, res) => {
  try {
    const product = await products.findOne({ _id: req.params.id }).exec();
    return res.json(product);
  } catch (error) {
    return res.status(400).json({
      message: "Không lấy được chi tiết sản phẩm !",
    });
  }
};

export const removeProduct = async (req, res) => {
  try {
    const product = await products
      .findByIdAndDelete({
        _id: req.params.id,
      })
      .exec();
    return res.json({
      result: product,
      message: "Xóa sản phẩm thành công !",
    });
  } catch (error) {
    return res.status(400).json({
      message: "Không xóa được sản phẩm !",
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await products
      .findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .exec();
    return res.json(product);
  } catch (error) {
    return res.status(400).json({
      message: "Không cập nhật được sản phẩm !",
    });
  }
};
