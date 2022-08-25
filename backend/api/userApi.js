const User = require("../models/usermodel");
const bcrypt = require("bcrypt");

let message, status;

const register = async (ctx) => {
  const user = ctx.request.body;
  const { name, email, password, role } = user;

  try {
    if (!name || !email || !password) {
      message = "Fill all the fields";
      status = 400;
    } else {
      const existUser = await User.findOne({ email });

      if (existUser) {
        message = "account already exist";
        status = 400;
      } else {
        const salt = await bcrypt.genSalt();
        const encryptPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
          name,
          email,
          password: encryptPassword,
          role,
        });
        await newUser.save();
        message = { msg: "user register successfully", user: newUser };
        status = 200;
      }
    }
  } catch (error) {
    message = error.message;
    status = 500;
  }

  ctx.body = message;
  ctx.status = status;
};

const login = async (ctx) => {
  const { password, email } = ctx.request.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      message = "user not found";
      status = 400;
    } else {
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        message = "incorrect password";
        status = 400;
      } else {
        message = { msg: "login success", user: user };
        status = 200;
      }
    }
  } catch (error) {
    message = error.message;
    status = 500;
  }

  ctx.body = message;
  ctx.status = status;
};

module.exports = { register, login };
