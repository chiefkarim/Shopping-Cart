import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Shop from "./shop";
import Product from "./product";


function RouterSwitch() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<Product />} />
      </Routes>
    </HashRouter>
  );
}
export default RouterSwitch;
