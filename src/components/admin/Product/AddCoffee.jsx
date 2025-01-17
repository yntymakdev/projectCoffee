import { Avatar, Box, Typography } from "@mui/material";
import React, { useState } from "react";
import logo from "..//..//../image/images_coffee.png";
import { useProductContext } from "../../../context/ProductContext";
import cofe from "../../../28e3efe5-b55e-4938-9091-c64ca816e01c.jpg";
import { Link, useNavigate } from "react-router-dom";
const AddCoffee = () => {
  const { addProduct } = useProductContext();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [solid, setSolid] = useState("");
  const [sol, setSol] = useState("");
  const [mol, setMol] = useState("");

  const navigate = useNavigate();

  function createContext() {
    let obj = {
      name: name,
      price: price,
      image: image,
    };

    addProduct(obj);

    navigate("/");
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
        <Link to="/">
          <Avatar src={logo} sx={{ width: "70px", height: "70px" }} />
        </Link>
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
            <div className="re">
              <img src={cofe} alt="" />
            </div>

            <input
              style={{
                border: solid === "" ? "solid 4px red" : "black",
                marginTop: "-1000px",
              }}
              className="inputone"
              onChange={(e) => {
                setSolid(e.target.value);
                setImage(e.target.value);
              }}
              type="text"
              placeholder="Image"
            />

            {/* <div style={{ border: solid ? "solid 2px red" : "black" }}>
              {solid === "" ? "solid 2px red" : ""}
            </div> */}
            {/* <TextField
              className="inputone"
              onChange={(e) => setImage(e.target.value)}
              id="outlined-basic"
              label="Image"
              variant="outlined"
            /> */}
            <input
              style={{ border: sol === "" ? "solid 4px red" : "black" }}
              className="inputone"
              onChange={(e) => {
                setSol(e.target.value);
                setName(e.target.value);
              }}
              type="text"
              placeholder="Image"
            />
            {/* <TextField
              onChange={(e) => setName(e.target.value)}
              id="outlined-basic"
              label="Name"
              variant="outlined"
            /> */}
            <input
              style={{ border: mol === "" ? "solid 4px red" : "" }}
              className="inputone"
              onChange={(e) => {
                setMol(e.target.value);
                setPrice(e.target.value);
              }}
              type="text"
              placeholder="Image"
            />
            {/* <TextField
              onChange={(e) => setPrice(e.target.value)}
              id="outlined-basic"
              label="Price"
              variant="outlined"
            /> */}
            <button
              onClick={createContext}
              style={{
                width: "700px",
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
