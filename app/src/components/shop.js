import Men from "./men";
import Women from "./women";
import Header from "./Header";
import banner from "../assets/images/shop-collection_1400x.jpg";
function Shop() {
  return (
    <>
      <Header style={` url(${banner})  no-repeat center `} />
      <div className="wrapper">
        <Men />
        <Women />
      </div>
    </>
  );
}
export default Shop;
