const route = require("koa-router");
const {
  addProduct,
  getAllProduct,
  getOneProduct,
  DeleteProduct,
  UpdateProduct,
} = require("../api/productApi");

const ProductRoute = new route({ prefix: "/product" });

ProductRoute.post("/addProduct", addProduct);
ProductRoute.get("/AllProduct", getAllProduct);
ProductRoute.get("/getOneProduct/:id", getOneProduct);
ProductRoute.delete("/deleteProduct/:id", DeleteProduct);
ProductRoute.put("/updateProduct/:id", UpdateProduct);

module.exports = ProductRoute;
