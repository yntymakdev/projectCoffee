import React, { useEffect } from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { readProduct, product } = useProductContext();

  useEffect(() => {
    readProduct();
  }, []);

  return (
    <div>
      {product ? (
        product.map((el, index) => <ProductCard key={index} el={el} />)
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default ProductList;
