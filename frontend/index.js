import App from "./App.js";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
const conatiner = document.getElementById("root");
const root = createRoot(conatiner);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
