import images from "./images";
function Men() {
  return (
    <div class="menWrapper">
      <div className="itemsList" style={{ height: "356.625px" }}>
        <div className="item">
          <a href="#">
            <div className="box">
              <img
                className="back"
                src={images["Sac-a-Dos-Camel-03_700x"]}
              ></img>
              <img
                className="front"
                src={images["Sac-a-Dos-Camel-01_700x"]}
              ></img>
            </div>
          </a>
          <h2>
            <a href="#">Leather Backpack Camel</a>
          </h2>
        </div>
        <div className="item">
          <div className="box">
            <img
              className="back"
              src={images["Nouveau-Cartable-marron-5_700x"]}
            ></img>
            <img
              className="front"
              src={images["Nouveau-Cartable-marron-1_700x"]}
            ></img>
          </div>

          <h2>
            <a>first itrem</a>
          </h2>
        </div>
        <div className="item">
          <div className="box">
            <img className="back" src={images["Sac-Voyage-Noir-3_700x"]}></img>
            <img
              className="front"
              src={images["Sac-Voyage-Noir-01_700x"]}
            ></img>
          </div>

          <h2>
            <a>first itrem</a>
          </h2>
        </div>
        <div className="item">
          <div className="box">
            <img
              className="back"
              src={images["Le-Nouveau-Cartable-Kaki-03_700x"]}
            ></img>
            <img
              className="front"
              src={images["Le-Nouveau-Cartable-Kaki-01_700x"]}
            ></img>
          </div>

          <h2>
            <a>first itrem</a>
          </h2>
        </div>
      </div>
    </div>
  );
}
export default Men;
