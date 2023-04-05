import { useParams } from "react-router-dom";
import images from "./images";
import Header from "./Header";
function Product(props) {
  const params = useParams().id;
  const first = images.men[params.replace("03", "01")].value;
  const second = images.men[params];
  const name = images.men[params.replace("03", "01")].name;
  const price = images.men[params.replace("03", "01")].price;
  return (
    <>
      <Header />
      <div className="product">
        <div className="box">
          <img className="back" src={second}></img>
          <img className="front" src={first}></img>
        </div>

        <h2>{name}</h2>
        <h3>{price}</h3>
      </div>
    </>
  );
}
export default Product;
