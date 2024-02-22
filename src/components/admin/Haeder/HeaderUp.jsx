import { Box, Typography } from "@mui/material";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/Person";
const HeaderUp = () => {
  return (
    <Box className="HeaderUp"
      sx={{
        width: "100%",
        height: "25px",
        background: "black",
        padding: "5px 0",
        color: "white",
      }}
    >
      <Box className="container">
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "white",
            }}
          >
            <Typography variant="">О нас</Typography>
            <Box
              sx={{
                width: "150px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                color:"white",
              }}
            >
              <Box
                sx={{ width: "50px", display: "flex", alignItems: "flex-end" }}
              >
                <FavoriteBorderIcon
                  sx={{ fontSize: "20px", cursor: "pointer" }}
                />
                <Typography sx={{ fontSize: "13px", cursor: "pointer" }}>
                  Желания
                </Typography>
              </Box>
              <PersonIcon sx={{ fontSize: "20px" }} />
              {/* <input className="input-one" type="text" /> */}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderUp;
