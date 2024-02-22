import { Box } from "@mui/material";
import React, { useState } from "react";
import { useAuthContext } from "../../../../context/AuthContext";

const Registar = () => {
  const { register } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit() {
    try {
      await register(email, password);
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <>
    {error && <div>{error}</div>}
    <Box>
      <Box className="container">
        <Box>
          <input onChange={(e) => setEmail(e.target.value)} type="text" />
          {/* <TextField
            onChange={(e) => setEmail(e.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          /> */}
          <input onChange={(e) => setPassword(e.target.value)} type="text" />
          {/* <TextField
            onChange={(e) => setPassword(e.target.value)}
            id="outlined-basic"
            label="Password"
            variant="password"
          /> */}
          <button
            onClick={handleSubmit}
            style={{
              height: "50px",
              border: "none",
              background: "black",
              color: "white",
              fontSize: "20px",
              borderRadius: "5px",
            }}
          >
            sign in
          </button>
        </Box>
      </Box>
    </Box>
    </>
  );
};

export default Registar;
