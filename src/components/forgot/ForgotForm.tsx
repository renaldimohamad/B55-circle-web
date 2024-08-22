import { Button, Input, Typography } from "@mui/material";
import CustomInput from "../common/Input";
import React from "react";
import { Link } from "react-router-dom";

function ForgotForm() {
  return (
    <form
      style={{
        width: "30rem",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Typography variant="h3" fontWeight={"bold"} color={"green"}>
        Circle
      </Typography>
      <Typography variant="h4" fontWeight={"bold"} color={"white"}>
        Login To Circle
      </Typography>
      <CustomInput placeholder="Email *" sx={{ mb: 2 }}></CustomInput>

      <Button variant="contained" color="success" sx={{ borderRadius: 23 }}>
        Send Intruction
      </Button>
      <Typography variant="body2" color="white">
        All ready have account?{" "}
        <Link
          to={"/Login"}
          style={{ color: "green", cursor: "pointer", textDecoration: "none" }}
        >
          Login
        </Link>
      </Typography>
    </form>
  );
}

export default ForgotForm;
