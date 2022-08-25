require("dotenv").config();
const mongoose = require("mongoose");

const connection = () => {
  const str = process.env.MDB_URL;

  mongoose.connect(str, () => {
    console.log("Database connection is successful!");
  });
};

module.exports = { connection };
