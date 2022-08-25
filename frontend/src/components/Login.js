import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Login() {
  const [user, setuser] = useState({ email: "", password: "" });

  const onChangeHandler = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  console.log(user);

  const LoginHandler = async (e) => {
    e.preventDefault();
    if (!user.email || !user.password) {
      alert("please fill all the field");
    } else {
      try {
        const res = await axios.post(" http://localhost:5006/user/login", {
          ...user,
        });
        alert(res.data.msg);
        console.log(res);

        window.sessionStorage.setItem("user", res.data.user._id);
        localStorage.setItem("firstLogin", true);

        window.location.href = "/";
      } catch (error) {
        console.log(error);
        alert(error.response.data);
      }
    }
  };

  return (
    <div>
      <form>
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Email
          </label>
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control"
              id="inputEmail3"
              name="email"
              defaultvalue={user.email}
              onChange={onChangeHandler}
              required
            />
          </div>
        </div>

        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label">
            Password
          </label>
          <div class="col-sm-10">
            <input
              type="password"
              class="form-control"
              id="inputPassword3"
              name="password"
              defaultvalue={user.password}
              onChange={onChangeHandler}
              required
            />
          </div>
        </div>

        <button type="submit" class="btn btn-primary" onClick={LoginHandler}>
          Sign in
        </button>
      </form>
      <Link to="/register">register</Link>
    </div>
  );
}
