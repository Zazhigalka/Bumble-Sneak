import React, { useState } from "react";
import { useProducts } from "../contexts/ProductContextProvider";
import "./AddProduct.css";
import "animate.css";

const AddProroduct = () => {
  const [product, setProduct] = useState({
    title: "",
    descr: "",
    image: "",
    price: 0,
    model: "",
    size: "",
    color: "",
  });

  const { addProduct } = useProducts();

  const scanInp = () => {
    if (
      !product.title.trim() ||
      !product.descr.trim() ||
      !product.image.trim() ||
      !product.model.trim() ||
      !product.size.trim() ||
      !product.color.trim()
    ) {
      alert("Заполните инпуты");
      return;
    }
    addProduct(product);
  };

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
      console.log(product);
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
      <h4 className="admin__title">Add Product</h4>
      <div className="admin__block animate__animated animate__bounce">
        <input
          className="admin__inputs animate__animated animate__backInLeft"
          name="title"
          onChange={handleInp}
          type="text"
          placeholder="Title"
        />
        <input
          className="admin__inputs animate__animated animate__backInRight"
          name="price"
          onChange={handleInp}
          type="text"
          placeholder="Price"
        />
        <input
          className="admin__inputs animate__animated animate__backInLeft"
          name="descr"
          onChange={handleInp}
          type="text"
          placeholder="Description"
        />
        <input
          className="admin__inputs animate__animated animate__backInRight"
          name="model"
          onChange={handleInp}
          type="text"
          placeholder="Model"
        />
        <input
          className="admin__inputs animate__animated animate__backInLeft"
          name="color"
          onChange={handleInp}
          type="text"
          placeholder="Color"
        />
        <input
          className="admin__inputs animate__animated animate__backInRight"
          name="size"
          onChange={handleInp}
          type="text"
          placeholder="Size"
        />
        <input
          className="admin__inputs animate__animated animate__backInLeft"
          name="image"
          onChange={handleInp}
          type="text"
          placeholder="Image"
        />

        <div className="button__div">
          <button
            className="admin__button animate__animated animate__zoomIn"
            onClick={scanInp}
          >
            PUSH
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProroduct;
