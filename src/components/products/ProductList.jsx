import React, { useEffect } from "react";
import { useProducts } from "../contexts/ProductContextProvider";
import ProductCard from "./ProductCard";
import "./ProductList.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Divider } from "@mui/material";
const ProductList = () => {
  const { getProducts, products } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    getProducts();
  }, [searchParams]);

  const navigate = useNavigate();
  return (
    <>
      <div className="product__right">
        <div className="products__list">
          <div style={{ marginBottom: "50px", width: "95%" }}>
            <div
              style={{
                display: "flex",
                width: "230px",
                justifyContent: "space-between",
                fontFamily: "montserrat",
                fontSize: "24px",
                fontWeight: 500,
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
              <span>Sneakers</span>
            </div>
            <Divider sx={{ marginTop: "20px", height: "2px" }} />
          </div>
          {products.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
