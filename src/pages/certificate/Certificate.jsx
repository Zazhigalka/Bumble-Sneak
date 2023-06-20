import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "typeface-bebas-neue";
import "./Certificate.css";
import "typeface-montserrat";


const Certificate = () => {
  return (
    <div className="certificate">
      <div className="container">
        <div className="certificate__title">
          <p
            className="certificate__text"
            style={{ fontFamily: "Bebas Neue", fontSize: "50px" }}
          >
            Giftcard from{" "}
          </p>
          <p
            className="certificate__name"
            style={{ fontFamily: "Bebas Neue", fontSize: "80px" }}
          >
            BUMBLE SNEAK
          </p>
        </div>
        <br />

      </div>
      <div className="certificate__design">
            <p style={{fontFamily:"Montserrat"}}>Choose the design</p>
        </div>
    </div>
  );
};

export default Certificate;
