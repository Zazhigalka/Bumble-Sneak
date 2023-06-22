import React from "react";
import "./Navbar.css";
import logo from "./imgs/logo.png";
import search from "./imgs/search.png";
import account from "./imgs/account.png";
import favourite from "./imgs/favourite.png";
import cart from "./imgs/cart.png";
import "typeface-montserrat";

const Navbar = () => {
  const pagesLeft = [
    { name: "NEW", link: "/admin", id: 1 },
    { name: "SNEAKERS", link: "/products", id: 2 },
    { name: "WOMEN", link: "/", id: 3 },
    { name: "MEN", link: "/", id: 4 },
  ];

  return (
    <div className="navbar">
      <div className="container">
        <ul className="navbar__left_ul">
          {pagesLeft.map((page) => (
            <a key={page.id} className="navbar__link" href={page.link}>
              <li className="navbar__li">{page.name}</li>
            </a>
          ))}
        </ul>
        <img src={logo} alt="" className="navbar__logo" />

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
