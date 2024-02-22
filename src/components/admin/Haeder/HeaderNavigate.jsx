import { Box, Typography } from "@mui/material";
import React from "react";
const HeaderNavigate = () => {
  return (
    <>
      <div className="containerUp">
        <div className="copychino">
          <div className="buttonAll">
            <button>Все</button>
          </div>
          <div className="buttonAll">
            <button>Категории</button>
          </div>
          <div className="buttonAll">
            <button>Capuchino</button>
          </div>
          <div className="buttonAll">
            <button>Рецепты</button>
          </div>
          <div className="buttonAll">
            <button>О нас</button>
          </div>
        </div>
        <div className="container2">
          <div className="search-container">
            <input className="input" type="text" placeholder="Введите текст" />
            <svg viewBox="0 0 24 24" className="search__icon">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* <Box sx={{ p: "5px 0px", borderBottom: "1px solid black" }}> */}
      <Box className="container">
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontWeight: "bold", color: "white" }}>
              кофе
            </Typography>
            <Typography sx={{ fontWeight: "bold", color: "white" }}>
              чай
            </Typography>
            <Typography sx={{ fontWeight: "bold", color: "white" }}>
              шоколад
            </Typography>
            <Typography sx={{ fontWeight: "bold", color: "white" }}>
              сиропы
            </Typography>
            <Typography sx={{ fontWeight: "bold", color: "white" }}>
              как приготовить?
            </Typography>
            <Typography sx={{ fontWeight: "bold", color: "white" }}>
              как выбрать кофе?
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* </Box> */}
    </>
  );
};

export default HeaderNavigate;
