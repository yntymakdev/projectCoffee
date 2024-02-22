import { Avatar, Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useProductContext } from "../../context/ProductContext";
const EditProduct = () => {
  const { getOneProduct, onProduct, editProduct } = useProductContext();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [solid, setSolid] = useState("");
  const [sol, setSol] = useState("");
  const [mol, setMol] = useState("");
  const { id } = useParams();
  useEffect(() => {
    getOneProduct(id);
  }, [getOneProduct,id]);

  console.log(onProduct);
  useEffect(() => {
    if (onProduct) {
      setImage(onProduct.image || "");
      setName(onProduct.name || "");
      setPrice(onProduct.price || 0);
    }
  }, [onProduct]);

  const navigate = useNavigate();

  function createContext() {
    let newObj = {
      name: name,
      price: price,
      image: image,
    };

    editProduct(id, newObj);

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
          <Avatar src="" sx={{ width: "70px", height: "70px" }} />
        </Link>
        <Typography sx={{ fontWeight: "bold" }} variant="h5">
          KULTURA COFFEE
        </Typography>
        <Avatar src="" sx={{ width: "70px", height: "70px" }} />
      </Box>
      <Box className="container">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              width: "50%",
              textAlign: "center",
              overflow: "hidden",
            }}
          >
            <Typography sx={{ fontSize: "24px", fontWeight: "bold" }}>
              Add product
            </Typography>
            <div className="re">
              <img src="" alt="" />
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
              value={image}
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
              value={name}
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
              value={price}
            />
            {/* <TextField
              onChange={(e) => setPrice(e.target.value)}
              id="outlined-basic"
              label="Price"
              variant="outlined"
            /> */}
            <button
              onClick={() => {
                navigate("/");
                createContext();
              }}
              style={{
                width: "700px",
                height: "50px",
                border: "none",
                background: "black",
                color: "white",
                fontSize: "20px",
                borderRadius: "5px",
                marginBottom: "1px",
              }}
            >
              save
            </button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EditProduct;
