import logo from "./assets/images/2.png";
import "./App.css";
import "./components/Header";
import Header from "./components/Header";
import BestSellers from "./components/bestSellers";
import "./assets/font/static/Montserrat-Regular.ttf";
import { useEffect } from "react";
function App(props) {
  const productList = props.state.productList;
  const setProductList = props.state.setProductList;

  return (
    <>
      <Header state={{ productList, setProductList }} />
      <BestSellers />
    </>
  );
}

export default App;
