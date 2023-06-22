import React from "react";
import "./Navbar.css";
import logo from "./imgs/logo.png";
import search from "./imgs/search.png";
import account from "./imgs/account.png";
import favourite from "./imgs/favourite.png";
import cart from "./imgs/cart.png";
import "typeface-montserrat";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <ul className="navbar__left_ul">
          <li className="navbar__li">NEW</li>
          <li className="navbar__li">SNEAKERS</li>
          <li className="navbar__li">WOMEN</li>
          <li className="navbar__li">MEN</li>
        </ul>
        <span className="navbar__logo">
        <img src={logo} alt="" className="navbar__logo" />
        </span>

        <ul className="navbar__right_ul">
          <li className="navbar__li navbar__li-texts">
            SEARCH <img src={search} alt="" className="icons navbar__search" />
          </li>
          <li className="navbar__li navbar__li-texts">
            ACCOUNT{" "}
            <img src={account} alt="" className="icons navbar__account" />
          </li>
          <li className="navbar__li">
            <img src={favourite} alt="" className="icons navbar__favourite" />
          </li>
          <li className="navbar__li">
            <img src={cart} alt="" className="icons navbar__cart" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
