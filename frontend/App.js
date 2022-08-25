import React, { useEffect, useState } from "react";
import Login from "./src/components/Login.js";
import { Route, Routes, Router } from "react-router-dom";
import { Home } from "./src/components/Home.js";
import Register from "./src/components/register.js";

const App = () => {
  const firstLogin = localStorage.getItem("firstLogin");
  const [isLogging, setIsLogging] = useState(false);

  useEffect(() => {
    if (firstLogin) {
      setIsLogging(true);
    } else {
      setIsLogging(false);
    }
  }, [firstLogin]);

  return (
    <div>
      <Routes>
        <Route path="/" element={isLogging ? <Home /> : <Login />}></Route>
        <Route path="/register" element={!isLogging && <Register />}></Route>
      </Routes>
    </div>
  );
};
export default App;
