import BooksSchema from "../modules/products.js";

export const create = async (req, res) => {
  try {
    const book = await new BooksSchema(req.body).save();
    res.json(book);
  } catch (error) {
    return res.status(400).json({
      message: "Không thêm được sách !",
    });
  }
};

export const list = async (req, res) => {
  try {
    const book = await BooksSchema.find({}).exec();
    res.json(book);
  } catch (error) {
    return res.status(400).json({
      message: "Không lấy được sách !",
    });
  }
};

export const getBook = async (req, res) => {
  try {
    const book = await BooksSchema.findOne({ _id: req.params.id }).exec();
    res.json(book);
  } catch (error) {
    return res.status(400).json({
      message: "Không lấy được sách !",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const book = await BooksSchema.findOneAndDelete({
      _id: req.params.id,
    }).exec();
    res.json(book);
  } catch (error) {
    return res.status(400).json({
      message: "Không xóa được sách !",
    });
  }
};

export const update = async (req, res) => {
  try {
    const book = await BooksSchema.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    ).exec();
    res.json(book);
  } catch (error) {
    return res.status(400).json({
      message: "Không sửa được sách !",
    });
  }
};

export const litmitBooks = async (req, res) => {
  const limit = req.query.limit;
  const sort = req.query.sort;
  // const search = {$text:{$search:search}}
  try {
    const book = await BooksSchema.find({}).sort(sort).limit(limit).exec();
    res.json(book);
  } catch (error) {
    return res.status(400).json({
      message: "Không lấy được sách !",
    });
  }
};

export const searchBooks = async (req, res) => {
  const search = req.query.search;
  try {
    const book = await BooksSchema.find({ $text: { $search: search } }).exec();
    res.json(book);
  } catch (error) {
    return res.status(400).json({
      message: "Không lấy được sách !",
    });
  }
};

export const pagination = async (req, res) => {
  const perPage = 4;
  const page = req.params.page || 1;
  try {
    const book = await BooksSchema.find()
      .skip(perPage * page - perPage)
      .limit(perPage)
      .exec();
    res.json(book);
  } catch (error) {
    return res.status(400).json({
      message: "Không lấy được sách !",
    });
  }
};
