import { Avatar, Box, Typography } from "@mui/material";
import logo from "..//..//../image/images_coffee.png";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
// import click from "./Error.mp3";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

const Header = () => {
  // const [arsen, setArsen] = useState(false);
  // const [alim, setAlim] = useState(false);
  // const navigate = useNavigate();

  // function Click() {
  //   new Audio(click).play();
  // }
  return (
    <Box sx={{ padding: "15px 0", borderBottom: "1px solid black" }}>
      <Box className="container">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Avatar src={logo} sx={{ width: "70px", height: "70px" }} />
          <Typography
            // onClick={() => {
            //   Click();
            //   navigate("/addCoffee");
            //   setArsen(true);
            //   setTimeout(() => {
            //     setArsen(false);
            //     navigate("/");
            //   }, 1000);
            // }}
            sx={{ fontWeight: "bold" ,color: "white" }}
            variant="h5"
          >
            KULTURA COFFEE
          </Typography>
          {/* <div
            aria-label="Orange and tan hamster running in a metal wheel"
            role="img"
            class="wheel-and-hamster"
          >
            <div
              style={{
                display: arsen ? "flex" : "none",
              }}
            >
              <div class="wheel"></div>
              <div class="hamster">
                <div class="hamster__body">
                  <div class="hamster__head">
                    <div class="hamster__ear"></div>
                    <div class="hamster__eye"></div>
                    <div class="hamster__nose"></div>
                  </div>
                  <div class="hamster__limb hamster__limb--fr"></div>
                  <div class="hamster__limb hamster__limb--fl"></div>
                  <div class="hamster__limb hamster__limb--br"></div>
                  <div class="hamster__limb hamster__limb--bl"></div>
                  <div class="hamster__tail"></div>
                </div>
              </div>
              <div class="spoke"></div>
            </div>
            <h1
              style={{
                display: alim ? "flex" : "none",
              }}
            >
              sadfdafsdaf
            </h1>
          </div> */}
          <Box
            sx={{
              width: "130px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Link to="/registar">
            <ShoppingBasketIcon  sx={{ fontSize: "35px" }} />
            </Link>

            <Typography sx={{ fontWeight: "bold" }}>Мой заказ</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
