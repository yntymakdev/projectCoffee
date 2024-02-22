import React from "react";
import drink from "../../drink-156144_640.webp";
import "./Block.css";
import { Link } from "react-router-dom";
const Block = () => {
  return (
    <>
    <div>
      <div className="qwerty" style={{ display: "flex" }}>
        <div className="block">
          <div className="blockImg">
            <img src={drink} alt="" />
            <h1
              style={{
                color: "white",
                textAlign: "center  ",
              }}
            >
              Coffee
            </h1>
            <br />
            <h3 style={{ color: "white", textAlign: "center  " }}>Coffee</h3>
            <p style={{ color: "white", textAlign: "center  " }}>Coffe</p>

            <div data-tooltip="Price:-$50" class="button">
              <div class="button-wrapper">
                <div class="text">Buy Now</div>
                <span class="icon">
                  <Link to="/menu">
                    <svg
                      style={{ color: "white" }}
                      viewBox="0 0 16 16"
                      class="bi bi-cart2"
                      fill="currentColor"
                      height="16"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                    </svg>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="block">
          <div className="blockImg">
            <img src={drink} alt="" />
            <h1
              style={{
                color: "white",
                textAlign: "center  ",
              }}
            >
              Coffee
            </h1>
            <br />
            <h3 style={{ color: "white", textAlign: "center  " }}>Coffee</h3>
            <p style={{ color: "white", textAlign: "center  " }}>Coffe</p>

            <div data-tooltip="Price:-$50" class="button">
              <div class="button-wrapper">
                <div class="text">Buy Now</div>
                <span class="icon">
                  <Link to="/menu">
                    <svg
                      style={{ color: "white" }}
                      viewBox="0 0 16 16"
                      class="bi bi-cart2"
                      fill="currentColor"
                      height="16"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                    </svg>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
    </>

  );
};

export default Block;
