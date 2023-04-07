import images from "./images";
import uniqid from "uniqid";
import { Link } from "react-router-dom";

function women(props) {
  let first = "";
  let second = "";
  let name = "";
  let price = "";
  const content = [];
  for (let item in images.women) {
    if (item.includes("01")) {
      first = images.women[item].value;
      name = images.women[item].name;
      price = images.women[item].price;
    } else if (item.includes("03")) {
      second = images.women[item];
      content.push(
        <div className="item" key={uniqid()}>
          <a href="#">
            <div className="box">
              <img className="back" src={second}></img>
              <img className="front" src={first}></img>
            </div>
          </a>
          <h2>
            <Link to={`/shop/${item.replace("03", "01")}`} state="women">
              {" "}
              {name}
            </Link>
          </h2>
          <h3>{price}</h3>
        </div>
      );
    }
  }
  return (
    <div
      className="menWrapper"
      style={{
        animation: "slidein 2000ms",
        display: props.style,
      }}
    >
      <div className="itemsList" style={{ height: "356.625px" }}>
        {content.map((item) => {
          return item;
        })}
      </div>
    </div>
  );
}
export default women;
