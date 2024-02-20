import { Avatar, Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import logo from "..//..//../image/images_coffee.png";
import { useProductContext } from "../../../context/ProductContext";

const AddCoffee = () => {
  const { addProduct } = useProductContext();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  function createContext() {
    let obj = {
      name: name,
      price: price,
      image: image,
    };
    addProduct(obj);
  }

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: "20px 40px ",
          borderBottom: "1px solid black",
        }}
      >
        <Avatar src={logo} sx={{ width: "70px", height: "70px" }} />
        <Typography sx={{ fontWeight: "bold" }} variant="h5">
          KULTURA COFFEE
        </Typography>
        <Avatar src={logo} sx={{ width: "70px", height: "70px" }} />
      </Box>
      <Box className="container">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "70vh",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              width: "50%",
              textAlign: "center",
            }}
          >
            <Typography sx={{ fontSize: "24px", fontWeight: "bold" }}>
              Add product
            </Typography>
            <TextField
              onChange={(e) => setImage(e.target.value)}
              id="outlined-basic"
              label="Image"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setName(e.target.value)}
              id="outlined-basic"
              label="Name"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setPrice(e.target.value)}
              id="outlined-basic"
              label="Price"
              variant="outlined"
            />
            <button
              onClick={createContext}
              style={{
                height: "50px",
                border: "none",
                background: "black",
                color: "white",
                fontSize: "20px",
                borderRadius: "5px",
              }}
            >
              Add product
            </button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AddCoffee;
