import React from "react";
import "./Home.css";
import button from "../../img/home_btn.png";
import upLine from "../../img/home__line.png";
import downLine from "../../img/home_balckline.png";
// import homeBackGround from "../../img/admin_bg.png";
import black from "../../img/BLACK.png";
import "typeface-bebas-neue";

const Home = () => {
  return (
    <>
      <div className="home__up">
        <img className="home__up_line" src={upLine} alt="" />
        <img className="home__down_line" src={downLine} alt="" />

        <div className="home__main">
          <div className="home__main_title">
            <h2 className="home__main_black">BLACK</h2>
            <h2 className="home__main_friday">FRIDAY</h2>
            <h2 className="home__main_sale">SALE</h2>
          </div>
          <h3 className="home__main_btn_title">Shop now</h3>
          <img className="home__main_btn" src={button} alt="" />
        </div>
      </div>
      
    </>
  );
};

export default Home;
