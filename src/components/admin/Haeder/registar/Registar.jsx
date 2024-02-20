import { Box, TextField } from "@mui/material";
import React from "react";

const Registar = () => {
  return (
    <Box>
      <Box className="container">
        <Box>
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField id="outlined-basic" label="Password" variant="password" />

          <button
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
  );
};

export default Registar;
