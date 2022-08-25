const product = require("../models/ProductApi");
const Product = require("../models/ProductApi");

let message, status;

const addProduct = async (ctx) => {
  const product = ctx.request.body;
  const { name, code } = product;

  try {
    const existProduct = await Product.findOne({ code });

    if (existProduct) {
      message = "product already exist";
      status = 400;
    } else {
      const newProduct = Product({
        name,
        code,
      });

      await newProduct.save();
      message = { msg: "new product added", product: newProduct };
      status = 200;
    }
  } catch (error) {
    message = error.message;
    status = 500;
  }

  ctx.body = message;
  ctx.status = status;
};

const getAllProduct = async (ctx) => {
  try {
    const allProduct = await Product.find();

    message = allProduct;
    status = 200;
  } catch (error) {
    message = error.message;
    status = 500;
  }

  ctx.body = message;
  ctx.status = status;
};

const getOneProduct = async (ctx) => {
  try {
    const uid = ctx.request.params.id;
    const product = await Product.findById(uid);

    if (!product) {
      message = "product not found";
      status = 400;
    } else {
      message = product;
      status = 200;
    }
  } catch (error) {
    message = error.message;
    status = 500;
  }

  ctx.body = message;
  ctx.status = status;
};

const DeleteProduct = async (ctx) => {
  try {
    const uid = ctx.request.params.id;
    const product = await Product.findByIdAndDelete(uid);

    if (!product) {
      message = "product not found";
      status = 400;
    } else {
      message = { msg: "product deleted", product: product };
      status = 200;
    }
  } catch (error) {
    message = error.message;
    status = 500;
    console.log(error.message);
  }

  ctx.body = message;
  ctx.status = status;
};

const UpdateProduct = async (ctx) => {
  try {
    const uid = ctx.request.params.id;

    const product = await Product.findById(uid);
    if (!product) {
      message = "product not found";
      status = 200;
    } else {
      const { name, code } = ctx.request.body;
      await Product.findByIdAndUpdate(uid, { name: name, code: code });
      message = "update succefully";
      status = 200;
    }
  } catch (error) {
    message = error.message;
    status = 500;
  }

  ctx.body = message;
  ctx.status = status;
};

module.exports = {
  addProduct,
  getAllProduct,
  getOneProduct,
  DeleteProduct,
  UpdateProduct,
};
