import React, { useEffect, useState } from "react";
import { useProducts } from "../contexts/ProductContextProvider";
import ProductCard from "./ProductCard";
import "./ProductList.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Divider, Pagination } from "@mui/material";
const ProductList = () => {
  const { getProducts, products } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    getProducts();
  }, [searchParams]);

  const navigate = useNavigate();

  // pagination
  const [page, setPage] = useState(1);
  const itemsPerPage = 9;
  const count = Math.ceil(products.length / itemsPerPage);

  const handleChange = (e, p) => {
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return products.slice(begin, end);
  }

  // pagination
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
          {currentData().map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
        <Pagination count={count} page={page} onChange={handleChange} />
      </div>
    </>
  );
};

export default ProductList;
