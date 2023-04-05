import "../assets/styles/bestSellers.css";
import Men from "./men";
import Women from "./women";
import { useState } from "react";
function BestSellers() {
  const [style, setStyle] = useState({ men: "block", women: "none" });
  return (
    <section>
      <div>
        <div className="bestSeller">
          <h3>OUR BEST SELLERS</h3>
          <div className="sectionHeader">
            <button
              onClick={() => {
                setStyle({ men: "block", women: "none" });
              }}
            >
              MEN
            </button>
            <button
              onClick={() => {
                setStyle({ men: "none", women: "block" });
              }}
              style={{ marginLeft: "45px" }}
            >
              WOMEN
            </button>
          </div>
        </div>
        <Men style={style.men} /> <Women style={style.women} />
        <div className="showProducts">
          <a href="/shop">Shop all</a>
        </div>
      </div>
    </section>
  );
}
export default BestSellers;
