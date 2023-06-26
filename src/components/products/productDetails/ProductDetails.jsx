import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../productDetails/ProductDetails.css";
import delete_icon from "../../../img/delete_icon.png";
import edit_icon from "../../../img/edit_button.png";
import addToCart from "../../../img/add_to_cart.png";
import buyToNow from "../../../img/buy_to_now.png";
import { useProducts } from "../../contexts/ProductContextProvider";

const ProductDetails = () => {
  const { getProductDetails, productDetails, deleteProduct } = useProducts();
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getProductDetails(id);
  }, []);
  return (
    <div className="container">
      <div className="one__product">
        <img
          width={"400px"}
          style={{
            marginRight: "6%",
            marginBottom: "300px",
            border: "2px solid #00000020",
          }}
          src={productDetails?.image}
          alt=""
        />
        <img
          onClick={() => deleteProduct(productDetails?.id)}
          className="one__product_delete"
          src={delete_icon}
          alt=""
        />
        <img
          onClick={() => navigate(`/edit/${productDetails?.id}`)}
          className="one__product_edit"
          src={edit_icon}
          alt=""
        />

        <div className="one__product_info">
          <div className="one__product_title">
            <h3>{productDetails?.title}</h3>
            <h3>€ {productDetails?.price}</h3>
          </div>
          <p className="one__product_descr">{productDetails?.descr}</p>
          <div className="one__product_model">
            <h4
              style={{ margin: "0px", marginRight: "30px", color: "#3d3d3d" }}
            >
              Model
            </h4>
            <h4 style={{ margin: "0px" }}>{productDetails?.model}</h4>
          </div>
          <div className="one__product_color">
            <h4
              style={{ margin: "0px", marginRight: "41px", color: "#3d3d3d" }}
            >
              Color
            </h4>
            <h4 style={{ margin: "0px" }}>{productDetails?.color}</h4>
          </div>
          <div style={{ fontSize: "24px" }} className="one__product_size">
            <h2
              style={{
                fontWeight: "500",
                color: "#3d3d3d",
                marginRight: "50px",
              }}
            >
              Size
            </h2>
            <h2
              style={{
                fontWeight: "500",
                color: "#3d3d3d",
              }}
            >
              <span style={{ textDecoration: "underline" }}>
                {productDetails?.size}
              </span>

              <span
                style={{
                  color: "#3d3d3daf",
                  fontSize: "22px",
                }}
              >
                EUR
              </span>
            </h2>
          </div>
        </div>

        <img className="add__to_cart" src={addToCart} alt="  " />
        <img className="buy__to_now" src={buyToNow} alt="  " />
      </div>
    </div>
  );
};

export default ProductDetails;
