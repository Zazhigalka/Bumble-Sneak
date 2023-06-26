import React from "react";
import "./Cart.css";
import favourite from "./imgs/favourite.png";
import trash from "./imgs/cart-trash.svg";
import photo from "./imgs/Reebok-womens-club-c-double-chalk-core-black-4-1600 2.png";

const Cart = () => {
  return (
    <div className="cart">
      <span className="cart__titles">
        <p className="cart__title">Your shopping cart</p>
        <p className="cart__title-all">Select All</p>
      </span>

      <div className="cart__container">
        <div className="cart__product-container">
          <img src={photo} alt="" className="cart__product-img" />

          <span className="cart__product-span">
            <span className="cart__product-title-price">
              <p className="cart__product-title">Title</p>
              <p className="cart__product-price">Price</p>
            </span>
            <p className="cart__product-descr">
              description of the Product snkfdndlsncdskjdklm kjdndsdnlsdm;sdscl
              csdjknesdsdkl knscsbdjkc; sdncsd;nc
            </p>
          </span>

          <div className="cart__product-info">
            <span style={{ display: "flex" }}>
              <p className="cart__product-model-title">Model</p>
              <p className="cart__product-model-descr">Nike Waffle Trainer 2</p>
            </span>

            <span style={{ display: "flex", marginTop: "-1rem" }}>
              <p className="cart__product-color-tile">Color</p>
              <p className="cart__product-color-descr">White</p>
            </span>
            <span style={{ display: "flex", marginTop: "-1rem" }}>
              <p className="cart__product-size-title">Size</p>
              <p className="cart__product-size-num">38</p>
              <p className="cart__product-size-country">EUR</p>
            </span>
          </div>

          <div className="cart__icons-div">
            <img src={favourite} alt="" className="cart__icons cart__icon1" />
            <img src={trash} alt="" className="cart__icons cart__icon2" />
          </div>
        </div>
      </div>
      <hr className="cart__line"/>

    </div>
    
  );
};

export default Cart;
