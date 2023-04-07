import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Shop from "./shop";
import Product from "./product";
import { useState } from "react";

function RouterSwitch() {
  const [productList, setProductList] = useState([]);
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={<App state={{ productList, setProductList }} />}
        />
        <Route
          path="/shop"
          element={<Shop state={{ productList, setProductList }} />}
        />
        <Route
          path="/shop/:id"
          element={<Product state={{ productList, setProductList }} />}
        />
      </Routes>
    </HashRouter>
  );
}
export default RouterSwitch;
