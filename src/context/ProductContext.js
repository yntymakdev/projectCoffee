import axios from "axios";
import React, { createContext, useContext, useState } from "react";
const productContext = createContext();

export const useProductContext = () => useContext(productContext);

const ProductContext = ({ children }) => {
  const API_PRODUCT = "http://localhost:3001/product";

  const { product, setProduct } = useState([]);

  async function addProduct(newProduct) {
    await axios.post(API_PRODUCT, newProduct);
  }

  
  async function readProduct() {
    const { product } = await axios(API_PRODUCT);
    setProduct(product);
  }

  const values = {
    addProduct,
    readProduct,
    product,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
