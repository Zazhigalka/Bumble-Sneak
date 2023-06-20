import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div>
      <div>
        <img width={"250px"} src={item.image} alt="" />
        <h3>{item.title}</h3>
        <p>{item.descr}</p>
        <h2>€ {item.price}</h2>
      </div>
    </div>
  );
};

export default ProductCard;
