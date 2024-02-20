import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

const ProductCard = ({ el }) => {
  return (
    <Box>
      <Box className="container">
        <Box>
          <Box>
            <img src={el.image} alt = "img" />
            <h1>{el.name}</h1>
            <Typography>{el.price}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;
