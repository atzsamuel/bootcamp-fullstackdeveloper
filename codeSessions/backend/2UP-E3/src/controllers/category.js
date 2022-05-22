const Category = require("../models/category");

module.exports.createCategory = async (req, res, next) => {
  const args = { description: req.body.description };
  try {
    await Category.create(args);
    res.status(200).json({ messsage: "Category created" });
  } catch (error) {
    res.status(400).json({ messsage: error });
  }
};

module.exports.getCategory = async (req, res, next) => {
  const args = { category: Number(req.params.id) };
  try {
    const rows = await Category.findById(args);
    res.status(200).json({ data: rows });
  } catch (error) {
    res.status(400).json({ messsage: error });
  }
};

module.exports.getCategories = async (req, res, next) => {
  try {
    const rows = await Category.fetchAll();
    res.status(200).json({ data: rows });
  } catch (error) {
    res.status(400).json({ messsage: error });
  }
};
