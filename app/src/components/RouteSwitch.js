import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Shop from "./shop";
import { useMatch } from "react-router-dom";

import Product from "./product";
function RouterSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}
export default RouterSwitch;
