import Men from "./men";
import Women from "./women";
import Header from "./Header";
import banner from "../assets/images/shop-collection_1400x.jpg";
function Shop(props) {
  const productList = props.state.productList;
  const setProductList = props.state.setProductList;
  return (
    <>
      <Header
        style={` url(${banner})  no-repeat center `}
        state={{ productList, setProductList }}
      />
      <div className="wrapper">
        <Men />
        <Women />
      </div>
    </>
  );
}
export default Shop;
