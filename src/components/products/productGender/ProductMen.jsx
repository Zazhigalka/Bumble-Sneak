import React, { useEffect, useState } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";
import ProductCard from "../ProductCard";
import "./ProductMen.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import SideBar from "../SideBar";
import {
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

const ProductMen = () => {
  const { getProducts, products, fetchByParams } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    setSearchParams({ q: search });
  }, [search]);
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
          <div
            className="woman__down"
            style={{
              width: "100%",
              display: "flex",
            }}
          >
            <div
              style={{
                width: "20%",
                marginRight: "50px",
              }}
            >
              <TextField
                value={search}
                // sx={{ width: "20%", marginRight: "50px" }}
                onChange={(e) => setSearch(e.target.value)}
                fullWidth
                label="search..."
                variant="standard"
              />
              <FormControl>
                <FormLabel
                  sx={{
                    fontFamily: "montserrat",
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#3d3d3d",
                    margin: "auto",
                    marginTop: "20px",
                    marginBottom: "20px",
                  }}
                  id="demo-radio-buttons-group-label"
                >
                  Brands
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="All"
                  name="radio-buttons-group"
                  onChange={(e) => fetchByParams("category", e.target.value)}
                  sx={{
                    "& .MuiButtonBase-root": {
                      color: "#ED910F ",
                    },
                    "& .MuiSvgIcon-root": {
                      fontSize: 30,
                      padding: 0,
                    },
                    fontFamily: "montserrat",
                    paddingBottom: "50px",
                  }}
                >
                  <div className="radio__group">
                    <FormControlLabel
                      sx={{
                        fontFamily: "montserrat",
                      }}
                      value="All"
                      control={<Radio />}
                      className="radio"
                    />
                    <h3>All</h3>
                  </div>
                  <div className="radio__group">
                    <FormControlLabel value="Nike" control={<Radio />} />{" "}
                    <h3>Nike</h3>
                  </div>
                  <div className="radio__group">
                    <FormControlLabel value="Vans" control={<Radio />} />{" "}
                    <h3>Vans</h3>
                  </div>{" "}
                  <div className="radio__group">
                    <FormControlLabel value="Puma" control={<Radio />} />{" "}
                    <h3>Puma</h3>
                  </div>
                  <div className="radio__group">
                    <FormControlLabel value="Adidas" control={<Radio />} />{" "}
                    <h3>Adidas</h3>
                  </div>
                  <div className="radio__group">
                    <FormControlLabel value="Reebok" control={<Radio />} />{" "}
                    <h3>Reebok</h3>
                  </div>
                  <div className="radio__group">
                    <FormControlLabel value="New Balance" control={<Radio />} />{" "}
                    <h3>New Balance</h3>
                  </div>
                  <div className="radio__group">
                    <FormControlLabel value="Shoes" control={<Radio />} />{" "}
                    <h3>Shoes</h3>
                  </div>
                </RadioGroup>
              </FormControl>
              <Divider />
              <FormControl>
                <FormLabel
                  sx={{
                    fontFamily: "montserrat",
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#3d3d3d",
                    margin: "auto",
                    marginTop: "20px",
                    marginBottom: "20px",
                  }}
                  id="demo-radio-buttons-group-label"
                >
                  Price
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="All"
                  name="radio-buttons-group"
                  onChange={(e) => fetchByParams("_sort", e.target.value)}
                  sx={{
                    "& .MuiButtonBase-root": {
                      color: "#ED910F ",
                    },
                    "& .MuiSvgIcon-root": {
                      fontSize: 30,
                      padding: 0,
                    },
                    fontFamily: "montserrat",
                    paddingBottom: "50px",
                  }}
                >
                  <div className="radio__group">
                    <FormControlLabel value="All" control={<Radio />} />{" "}
                    <h3>All</h3>
                  </div>
                  <div className="radio__group">
                    <FormControlLabel value="asc" control={<Radio />} />{" "}
                    <h3>Low to High</h3>
                  </div>
                  <div className="radio__group">
                    <FormControlLabel value="desc" control={<Radio />} />{" "}
                    <h3>High to Low</h3>
                  </div>
                </RadioGroup>
              </FormControl>
            </div>
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
      </div>
    </>
  );
};

export default ProductMen;
