import React, { useEffect, useState } from "react";
import "./Home.css";
import button from "../../img/home_btn.png";
import upLine from "../../img/home__line.png";
import downLine from "../../img/home_balckline.png";
// import homeBackGround from "../../img/admin_bg.png";
import black from "../../img/BLACK.png";
import "typeface-bebas-neue";
import allsneakers from "../../img/all_sneakers.png";
import men from "../../img/men.png";
import women from "../../img/women.png";
import kids from "../../img/kids.png";
import arrow from "../../img/arrow-right.png";
import "typeface-montserrat";
import brands from "../..//img/brands.png";
import new__button from "../../img/new__button.png";
import legend from "../../img/Legend Ink.png";
import eur90 from "../../img/€ 90.png";
import newbalance1 from "../../img/newbalance1.png";
import adidas from "../../img/adidas.png";
import newbalance2 from "../../img/newbalance2.png";
import reebok from "../../img/reebok.png";
import asics from "../../img/asics.png";
import genetic from "../../img/zic_genetic.png";
import nb327 from "../../img/nb372.png";
import asics_btn from "../../img/asics__button.png";
import kids_force from "../../img/kids_force_crater.png";
import kids_lv from "../../img/kids_force_lv.png";
import kids_airmax from "../../img/kids_air_max.png";
import kids_jordan from "../../img/kids_sky_jordan.png";
import circle from "../../img/circle.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const popular = [
    { name: "ALL SNEAKERS", link: "/", img: allsneakers, id: 1 },
    { name: "MEN", link: "/men", img: men, id: 2 },
    { name: "WOMEN", link: "/women", img: women, id: 3 },
    { name: "KIDS", link: "/", img: kids, id: 4 },
  ];

  const latest = [
    {
      name: "NEW BALANCE ",
      descr: "CM997HTW Dark Camo / Workwear",
      price: "110",
      img: newbalance1,
      id: 1,
    },

    {
      name: "ADIDAS",
      descr: " NY 90 Footwear White / Legend Ink",
      price: "90",
      img: adidas,
      id: 2,
    },
    {
      name: "NEW BALANCE",
      descr: "CM997HTW Dark Camo / Workwear",
      price: "110",
      img: newbalance2,
      id: 3,
    },
    {
      name: "REBOOK",
      descr:
        "Club C Double Revenge Cloud White / Bright Ochre / Reebok Rubber Gum-06",
      price: "90",
      img: reebok,
      id: 4,
    },
  ];

  const navigate = useNavigate();

  return (
    <>
      <div className="home__up">
        <img className="home__up_line" src={upLine} alt="" />
        {/* <img className="home__down_line" src={downLine} alt="" /> */}
        <div className="home__down_line">
          <div className="home__down_line_up"></div>
          <div className="home__down_line_down"></div>
        </div>
        <h3 className="slide">
          Up to 60% off Black Friday Sale! + 20% off with discount code SD20
          <span className="slide__bfs">BLACK FRIDAY SALE</span>
        </h3>

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
      <div className="container">
        <div className="home__popular">
          <h3 className="home__popular_title">Most Popular</h3>
          <div className="home__popular_card">
            {popular.map((card) => (
              <div
                className="card"
                key={card.id}
                style={{
                  width: "312px",
                  height: "312px",
                }}
              >
                <h4 className="card__title">{card.name}</h4>

                <a href={card.link}>
                  <h5 style={{ opacity: 0.7 }} className="card__linked_buy">
                    <span>Shop now </span>
                    <img className="card__arrow" src={arrow} alt="" />
                  </h5>
                </a>

                <img className="card__img" src={card.img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="brands">
          <h5 className="brands__title">Brands</h5>
          <img className="brands__img" src={brands} alt="" />
        </div>
      </div>

      <div className="container">
        <div className="newIn">
          <div className="newIn__left">
            <div className="newIn__left_up">
              <img className="newIn__left_up_btn" src={new__button} alt="" />
            </div>
            <div className="newIn__left_down">
              <img className="legend" src={legend} alt="" />
              <img className="eur90" src={eur90} alt="" />
            </div>
          </div>
          <div className="newIn__right">
            <div className="newIn__right_up">
              <img className="legend" src={legend} alt="" />
              <img className="eur90" src={eur90} alt="" />
            </div>
            <div className="newIn__right_down">
              <img className="legend" src={legend} alt="" />
              <img className="eur90" src={eur90} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="home__popular">
          <h3 className="home__popular_title">Latest Sneakers</h3>
          <div className="home__popular_card">
            {latest.map((card) => (
              <div
                className="card__latest"
                key={card.id}
                style={{
                  width: "312px",
                  height: "307px",
                }}
              >
                <div className="card__img_div">
                  <img className="card__img latest" src={card.img} alt="" />
                  <h5 style={{ opacity: 0.7 }} className="card__linked_buy">
                    <span>Shop now </span>
                    <img className="card__arrow" src={arrow} alt="" />
                  </h5>
                </div>
                <div className="card__name_div">
                  <h4 className="card__name">{card.name}</h4>
                  <p className="card__descr">{card.descr}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="asics">
          <div className="asics__left">
            <h3 className="asics__left_descr">New Collection</h3>
            <h3 className="asics__left_title">ASICS</h3>
            <img className="asics__left__btn" src={asics_btn} alt="" />
            <img className="asics__left__bg" src={asics} alt="" />
          </div>
          <div className="asics__right">
            <div className="asics__right_up">
              <h3 className="asics__right_up_descr">Discover</h3>
              <h3 className="asics__right_up_title">
                New Balance <br /> 327
              </h3>
              <img className="asics__right_up__btn" src={asics_btn} alt="" />

              <img className="asics__right__bg" src={nb327} alt="" />
            </div>
            <div className="asics__right_down">
              <h3 className="asics__right_down_descr">REBOOK</h3>
              <h3 className="asics__right_down_title">Zig Kinetic</h3>
              <img className="asics__right_down_btn" src={asics_btn} alt="" />
              <img className="asics__right__bg" src={genetic} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="kids">
          <h2 className="kids__title">Kids</h2>
          <ul className="kids__list">
            <li className="kids__list_item">
              <img src={kids_force} alt="" className="kids__list_img" />
              <h5 className="kids__list_title">NIKE</h5>
              <div className="kids__list_down">
                <h5 className="kids__list_descr">
                  Force 1 Crater White / <br /> Light Bone / Volt Black
                </h5>
                <h5 className="kids__list_price">€ 60</h5>
              </div>
            </li>
            <li className="kids__list_item">
              <img src={kids_lv} alt="" className="kids__list_img" />
              <h5 className="kids__list_title">NIKE</h5>
              <div className="kids__list_down">
                <h5 className="kids__list_descr">
                  Air Force 1 LV8 White / <br /> Black / Dark Sulfur
                </h5>
                <h5 className="kids__list_price">€ 70</h5>
              </div>
            </li>
            <li className="kids__list_item">
              <img src={kids_airmax} alt="" className="kids__list_img" />
              <h5 className="kids__list_title">NIKE</h5>
              <div className="kids__list_down">
                <h5 className="kids__list_descr">
                  Air Max 90 LTR Black / <br /> White
                </h5>
                <h5 className="kids__list_price">€ 110</h5>
              </div>
            </li>
            <li className="kids__list_item">
              <img src={kids_jordan} alt="" className="kids__list_img" />
              <h5 className="kids__list_title">NIKE</h5>
              <div className="kids__list_down">
                <h5 className="kids__list_descr">
                  Sky Jordan 1 Black / <br /> University Gold / White
                </h5>
                <h5 className="kids__list_price">€ 55</h5>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="company">
          <div className="company__left">
            <h2 className="company__left_title">BUMBLE SNEAK</h2>
            <p className="company__left_p">
              Rooted in Amsterdam street culture we’ve <br />
              always supported local initiatives, creatives and <br />
              athletes from day one. Working on unique <br />
              collaborations with both local and international <br />
              brands and hosting regular events and parties in <br />
              our shops for our community. Something we’ll <br />
              continue doing wherever we go. <br />
              <br />
              <br />
              With an expanding assortment of fashion and <br />
              apparel brands, SD has become your service- <br />
              first home for contemporary style.
            </p>
          </div>
          <div className="company__right">
            <p className="company__right_p">
              "A service-first home for contemporary style." <br />
              <br />
              <br />
              At Bumble Sneak you can expect an unrivalled <br />
              level of service and an ever evolving range of <br />
              sneakers and apparel. From the classic Nike, <br />
              adidas, Puma and New Balance drops to the <br />
              more exclusive brands and releases to surprise <br />
              even the most curious among us.
            </p>
            <img className="company__right_img" src={circle} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
