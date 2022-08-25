require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("koa-cors");
const json = require("koa-json");
const bodyparser = require("koa-bodyparser");
const koa = require("koa");
const { connection } = require("./dal");
const userRouter = require("./routes/userRout");
const ProductRoute = require("./routes/ProductRoute");

const app = new koa();
const PORT = process.env.PORT || 5006;

app.use(cors());
app.use(json());
app.use(bodyparser());

app.listen(PORT, () => {
  console.log(`server is up running with port :` + PORT);
  connection();
});

app.use(userRouter.routes()).use(userRouter.allowedMethods());

app.use(ProductRoute.routes()).use(ProductRoute.allowedMethods());
