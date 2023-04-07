import { useParams } from "react-router-dom";
import images from "./images";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
function Product(props) {
  const productList = props.state.productList;
  const setProductList = props.state.setProductList;
  const location = useLocation();
  const params = useParams().id;
  const first = images[location.state][params].value;
  const second = images[location.state][params.replace("01", "03")];
  const name = images[location.state][params].name;
  const price = images[location.state][params].price;

  function add(name) {
    setProductList((products) => {
      for (let i = 0; i < products.length; i++) {
        if (products[i].name === name) {
          console.log([products]);
          return [...products];
        }
      }
      return [...products, { name: name, value: 1, img: first, price: price }];
    });
  }
  return (
    <>
      <Header state={{ productList, setProductList }} />
      <div className="product">
        <div className="box">
          <img className="back" src={second}></img>
          <img className="front" src={first}></img>
        </div>
        <h2>{name}</h2>
        <h3>{price}</h3>
        <button
          style={{ backgroundColor: "black", color: "white" }}
          onClick={() => {
            add(name);
          }}
        >
          Add to Cart
        </button>
      </div>
    </>
  );
}
export default Product;
