import React from "react";
import "./Cart.css";
const Cart = () => {
  return (
    <div className="cart">
      <span className="cart__titles">
        <p className="cart__title">Your shopping cart</p>
        <p className="cart__title-all">Select All</p>
      </span>

      <div className="cart__container">
        <div className="cart__product-container">
          <img src="" alt="" className="cart__product-img" />

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
          <span style={{display: "flex"}} >
            <p className="cart__product-model-title">Model</p>
            <p className="cart__product-model-descr">Nike Waffle Trainer 2</p>
          </span>

          <span style={{display: "flex"}}>
            <p className="cart__product-color-tile">Color</p>
            <p className="cart__product-color-descr">White</p>
          </span> 
          <p className="cart__product-size-title">Size</p>
          <p className="cart__product-size-num">38</p>
          <p className="cart__product-size-country">EUR</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
