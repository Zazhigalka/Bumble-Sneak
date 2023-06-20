import React from "react";
import "./Footer.css";
import inst_logo from "./imgs/inst_logo.png";
import facebook_logo from "./imgs/facebook_logo.png";
import WA_logo from "./imgs/WA_Logo.png";
import "typeface-montserrat";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <ul className="footer__ul">
          <li className="footer__li">Customer Service</li>
          <li className="footer__li">Live Chat</li>
          <li className="footer__li">Whats App</li>
          <li className="footer__li">FAQ</li>
          <li className="footer__li">Shipping</li>
          <li className="footer__li">Returns</li>
          <li className="footer__li">Contacts</li>
        </ul>
      </div>
      <div className="footer_center">
        <ul className="footer__ul">
          <li className="footer__li">Information</li>
          <li className="footer__li">Reviews</li>
          <li className="footer__li">Stores</li>
          <li className="footer__li">Blog</li>
        </ul>
      </div>
      <div className="footer_right">
        <ul className="footer__ul">
          <li className="footer__li">Categories</li>
          <li className="footer__li">Giftcard</li>
          <li className="footer__li">Sneakers</li>
        </ul>
      </div>
      <div className="footer_socials">
        <ul className="footer__ul">
          <li className="footer__li">Community</li>
          <li className="footer__li">
            <img src={inst_logo} className="socials footer__inst-logo"></img>
          </li>
          <li className="footer__li">
            <img
              src={facebook_logo}
              className="socials footer__facebook-logo"
            ></img>
          </li>
          <li className="footer__li">
            <img src={WA_logo} className="socials footer__wa-logo"></img>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
