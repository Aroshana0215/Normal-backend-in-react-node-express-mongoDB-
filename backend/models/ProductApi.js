const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productModel = new Schema({
  name: { type: String, require: true },
  code: { type: String, require: true },
  urgent: [{ type: String }],
});
const product = mongoose.model("product", productModel);
module.exports = product;
