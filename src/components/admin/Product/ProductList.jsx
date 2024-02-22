import React, { useEffect } from "react";
import { useProductContext } from "../../../context/ProductContext";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { readProduct, product } = useProductContext();

  useEffect(() => {
    readProduct();
  }, [readProduct]);

  return (
    <div>
      {product ? (
        product.map((el, index) => <ProductCard key={index} el={el} />)
      ) : (
        <h1>No products found.</h1>
      )}
    </div>
  );
};

export default ProductList;
