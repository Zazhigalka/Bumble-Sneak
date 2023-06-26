import React from "react";
import "./Footer.css";
import inst_logo from "./imgs/inst_logo.png";
import facebook_logo from "./imgs/facebook_logo.png";
import WA_logo from "./imgs/WA_Logo.png";
import "typeface-montserrat";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <ul className="footer__ul">
          <li className="footer__li">Customer Service</li>
          <li className="footer__li">Live Chat</li>
          <li className="footer__li">Whats App</li>
          <li className="footer__li">
            <a className="footer__li_links" href="./Faq">
              FAQ
            </a>
          </li>
          <li className="footer__li">
            <a className="footer__li_links" href="./Faq">
              Shipping
            </a>
          </li>

          <li className="footer__li">Returns</li>
          <li className="footer__li">Contacts</li>
        </ul>

        <ul className="footer__ul">
          <li className="footer__li">Information</li>
          <li className="footer__li">Reviews</li>
          <li className="footer__li">Stores</li>
          <li className="footer__li">
            <a className="footer__li_links" href="./Blog">
              Blog
            </a>
          </li>
        </ul>

        <ul className="footer__ul">
          <li className="footer__li">Categories</li>
          <li className="footer__li">
            <a className="footer__li_links" href="./Certificate">
              Giftcard
            </a>
          </li>
          <li className="footer__li">
            <a className="footer__li_links" href="/products">
              Sneakers
            </a>
          </li>
        </ul>

        <ul className="footer__ul">
          <li className="footer__li">Community</li>
          <li className="footer__li">
            <img alt="" src={inst_logo} className="socials footer__inst-logo" />
          </li>
          <li className="footer__li">
            <img
              alt=""
              src={facebook_logo}
              className="socials footer__facebook-logo"
            />
          </li>
          <li className="footer__li">
            <img alt="" src={WA_logo} className="socials footer__wa-logo" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
