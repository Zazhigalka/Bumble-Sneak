import React, { useEffect } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";
import ProductCard from "../ProductCard";
import "./ProductMen.css";
import { useNavigate } from "react-router-dom";
import SideBar from "../SideBar";
import { Divider } from "@mui/material";

const ProductMen = () => {
  const { getProducts, products } = useProducts();
  useEffect(() => {
    getProducts();
  }, []);
  const condition = "Men";

  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div className="products__men">
          <div
            style={{
              display: "flex",
              width: "180px",
              justifyContent: "space-between",
              fontFamily: "montserrat",
              fontSize: "24px",
              fontWeight: 500,
              marginBottom: "20px",
            }}
          >
            <span
              className="product__right_home"
              style={{ color: "rgba(61, 61, 61, 0.658)" }}
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </span>
            <span>/</span>
            <span>Men</span>
          </div>
          <Divider />
          <div className="products__men_shoes">
            {products.map((item) => {
              if (item.gender === condition) {
                return <ProductCard key={item.id} item={item} />;
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductMen;
