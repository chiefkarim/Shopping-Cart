import React from "react";
import "../assets/styles/header.css";
import { Link } from "react-router-dom";
function overlay() {
  const overlay = document.querySelector(".overlay");
  const cart = document.querySelector(".cart");
  overlay.style.display = "block";
  cart.style.display = "block";
  overlay.style.cursor = "pointer";
  overlay.style.opacity = ".5";
}
function hide() {
  const overlay = document.querySelector(".overlay");
  const cart = document.querySelector(".cart");
  overlay.style.opacity = "0";
  cart.style.animation = "slide-out .3s";
  overlay.addEventListener("transitionend", () => {
    overlay.style.display = "none";
    cart.style.display = "none";
    cart.style.animation = "slide-in .3s";
  });
}

function Header(props) {
  const productList = props.state.productList;
  const setProductList = props.state.setProductList;
  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.querySelector(".headerWrapper").style =
        "background:#ffffff;color:#1c1b1b";
    } else {
      document.querySelector(".headerWrapper").style =
        "background:transparent;color:#ffffff";
    }
  }

  return (
    <>
      <div
        className="overlay"
        onClick={() => {
          hide();
        }}
      ></div>
      <div className="cart">
        <div className="cartHeader">
          <h1>Cart</h1>
          <button onClick={hide} className="x">
            <svg
              class="Icon Icon--close "
              role="presentation"
              viewBox="0 0 16 14"
            >
              <path
                d="M15 0L1 14m14 0L1 0"
                stroke="currentColor"
                fill="none"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <h1>
          {productList.map((item) => {
            return `${item.name} ${item.value}`;
          })}
        </h1>
      </div>
      <header style={{ background: props.style, backgroundSize: "cover" }}>
        <div className="headerWrapper">
          <div className="nav">
            <ul>
              <li>
                <h1>
                  <Link to={`/shop`}>Shop</Link>
                </h1>
              </li>

              <li>
                <h1>
                  <a href="#">About</a>
                </h1>
              </li>

              <li>
                <h1>
                  <a href="#">FAQ</a>
                </h1>
              </li>
            </ul>
          </div>
          <div className="logo">
            <h1>
              <Link to={`/`}>Prestige</Link>
            </h1>
          </div>

          <div className="cartIcon">
            <svg
              width="25px"
              height="25px"
              className="Icon Icon--cart "
              role="presentation"
              viewBox="0 0 17 20"
              cursor="pointer"
              onClick={overlay}
            >
              <path
                d="M0 20V4.995l1 .006v.015l4-.002V4c0-2.484 1.274-4 3.5-4C10.518 0 12 1.48 12 4v1.012l5-.003v.985H1V19h15V6.005h1V20H0zM11 4.49C11 2.267 10.507 1 8.5 1 6.5 1 6 2.27 6 4.49V5l5-.002V4.49z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
