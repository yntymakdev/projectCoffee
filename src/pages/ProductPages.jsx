import React from "react";
import HeaderUp from "../components/admin/Haeder/HeaderUp";
import { Box } from "@mui/material";
import Header from "../components/admin/Haeder/Header";
import HeaderNavigate from "../components/admin/Haeder/HeaderNavigate";
import ProductList from "../components/admin/Product/ProductList";
import ProductSort from "../components/admin/Product/ProductSort";
import Block from "../components/box/Block";
import BoxOne from "../components/box/BoxOne";

const ProductPages = () => {
  return (
    <>
      <div>
        <Box>
          <HeaderUp />
          <Box className="boxw">
            <Header />
            <HeaderNavigate />
          </Box>
          <Box className="boxq">
            <Block />
            <BoxOne />
          </Box>
          <Box>
            <Box />
            <Box sx={{ textAlign: "center", p: "40px 0" }}></Box>
            <ProductSort />
            <ProductList />
          </Box>
        </Box>
      </div>
    </>
  );
};

export default ProductPages;
