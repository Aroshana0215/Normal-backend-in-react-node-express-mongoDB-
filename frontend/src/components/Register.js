import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  console.log(user);

  const RegisterHandler = async (e) => {
    e.preventDefault();

    e.preventDefault();
    if (!user.name || !user.email || !user.password) {
      alert("please fill all the field");
    } else {
      try {
        const res = await axios.post(" http://localhost:5006/user/register", {
          ...user,
        });
        alert(res.data.msg);
        console.log(res);

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
            name
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="inputEmail3"
              name="name"
              defaultvalue={user.name}
              onChange={onChangeHandler}
              required
            />
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label">
            email
          </label>
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control"
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
              name="password"
              defaultvalue={user.password}
              onChange={onChangeHandler}
              required
            />
          </div>
        </div>
        <button type="submit" class="btn btn-primary" onClick={RegisterHandler}>
          Sign in
        </button>
      </form>
      <Link to="/">Login</Link>
    </div>
  );
}
