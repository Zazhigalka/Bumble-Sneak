import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import CategorySelect from "./CategorySelect";
import AddProroduct from "./AddProroduct";
import GenderSelect from "./GenderSelect";
import { useProducts } from "../contexts/ProductContextProvider";

const EditProduct = () => {
  //   const scanInp = () => {
  //     if (
  //       !product.title.trim() ||
  //       !product.descr.trim() ||
  //       !product.image.trim() ||
  //       !product.model.trim() ||
  //       !product.size.trim() ||
  //       !product.color.trim() ||
  //       !product.category.trim() ||
  //       !product.gender.trim()
  //     ) {
  //       alert("Заполните инпуты");
  //       return;
  //     }
  //     addProroduct(product);
  //   };

  const [product, setProduct] = useState({
    title: "",
    descr: "",
    image: "",
    price: 0,
    model: "",
    size: "",
    color: "",
    category: "",
    gender: "",
  });

  const { saveEditedProduct, getProductDetails, productDetails } =
    useProducts();

  const { id } = useParams();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  useEffect(() => {
    if (productDetails) {
      setProduct(productDetails);
    }
  }, [productDetails]);

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        [e.target.name]: +e.target.value,
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  return (
    <div className="admin">
      <h4 className="admin__title animate__animated animate__rubberBand">
        ADD PRODUCT
      </h4>
      <div className="admin__block animate__animated animate__bounce">
        <input
          className="admin__inputs animate__animated animate__backInLeft"
          name="title"
          onChange={handleInp}
          type="text"
          placeholder="Title"
          value={product?.title}
        />
        <input
          className="admin__inputs animate__animated animate__backInRight"
          name="price"
          onChange={handleInp}
          type="text"
          placeholder="Price"
          value={product?.price}
        />
        <input
          className="admin__inputs animate__animated animate__backInLeft"
          name="descr"
          onChange={handleInp}
          type="text"
          placeholder="Description"
          value={product?.descr}
        />
        <input
          className="admin__inputs animate__animated animate__backInRight"
          name="model"
          onChange={handleInp}
          type="text"
          placeholder="Model"
          value={product?.model}
        />
        <input
          className="admin__inputs animate__animated animate__backInLeft"
          name="color"
          onChange={handleInp}
          type="text"
          placeholder="Color"
          value={product?.color}
        />
        <input
          className="admin__inputs animate__animated animate__backInRight"
          name="size"
          onChange={handleInp}
          type="text"
          placeholder="Size"
          value={product?.size}
        />
        <input
          className="admin__inputs animate__animated animate__backInLeft"
          name="image"
          onChange={handleInp}
          type="text"
          placeholder="Image"
          value={product?.image}
        />

        <CategorySelect product={product} setProduct={setProduct} />
        <GenderSelect product={product} setProduct={setProduct} />

        <div className="button__div">
          <button
            className="admin__button animate__animated animate__zoomIn"
            onClick={() => {
              saveEditedProduct(product);
            }}
          >
            PUSH
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
