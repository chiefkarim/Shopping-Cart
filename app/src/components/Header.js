import React from "react";
import "../assets/styles/header.css";
function Header() {
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.querySelector(".headerWrapper").style =
        "background:#efefef;color:#1c1b1b";
    } else {
      document.querySelector(".headerWrapper").style =
        "background:transparent;color:#efefef";
    }
  }
  return (
    <header>
      <div className="headerWrapper">
        <div className="nav">
          <ul>
            <li>
              <h1>
                <a href="#">Shop</a>
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
            <a href="#">Prestige</a>
          </h1>
        </div>
        <div className="cart">
          <svg
            width="25px"
            height="25px"
            class="Icon Icon--cart "
            role="presentation"
            viewBox="0 0 17 20"
          >
            <path
              d="M0 20V4.995l1 .006v.015l4-.002V4c0-2.484 1.274-4 3.5-4C10.518 0 12 1.48 12 4v1.012l5-.003v.985H1V19h15V6.005h1V20H0zM11 4.49C11 2.267 10.507 1 8.5 1 6.5 1 6 2.27 6 4.49V5l5-.002V4.49z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
    </header>
  );
}

export default Header;
