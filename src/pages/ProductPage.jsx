import React from "react";
import ProductList from "../components/products/ProductList";
import SideBar from "../components/products/SideBar";
import upline from "../img/home__line.png";

const ProductPage = () => {
  return (
    <>
      <img
        style={{ width: "100%", marginBottom: "50px" }}
        className="upline"
        src={upline}
        alt=""
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <SideBar />
        <ProductList />
      </div>
    </>
  );
};

export default ProductPage;
