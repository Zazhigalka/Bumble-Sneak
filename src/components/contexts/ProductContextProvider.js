import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, API } from "../../helpers/consts";
import { useNavigate } from "react-router-dom";

export const productContext = createContext();

export const useProducts = () => {
  return useContext(productContext);
};

const INIT_STATE = {
  products: [],
  productDetails: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload };
    case ACTIONS.GET_PRODUCT_DETAILS:
      return { ...state, productDetails: action.payload };

    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const navigate = useNavigate();

  // ! post request (CREATE)
  const addProduct = async (newProduct) => {
    await axios.post(API, newProduct);
    navigate(`/products`);
  };

  // ! get request (READ)
  const getProducts = async () => {
    const { data } = await axios(`${API}`);
    dispatch({ type: ACTIONS.GET_PRODUCTS, payload: data });
  };

  const values = { addProduct, getProducts, products: state.products };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
