import "../assets/styles/bestSellers.css";
import Men from "./men";
function BestSellers() {
  return (
    <section>
      <div>
        <div className="bestSeller">
          <h3>OUR BEST SELLERS</h3>
          <div className="sectionHeader">
            <button>MEN</button>
            <button style={{ marginLeft: "45px" }}>WOMEN</button>
          </div>
        </div>
        <Men />
      </div>
    </section>
  );
}
export default BestSellers;
