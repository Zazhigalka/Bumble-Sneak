import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="product__card">
      <img
        onClick={() => navigate(`/details/${item.id}`)}
        className="product__img"
        src={item?.image}
        alt=""
      />
      <h3 className="product__title">{item?.title}</h3>
      <p className="product__desc">{item?.descr}</p>
      <h2 className="product__price">€ {item?.price}</h2>
    </div>
  );
};

export default ProductCard;
