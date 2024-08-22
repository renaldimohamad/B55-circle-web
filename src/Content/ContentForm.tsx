import React, { useState } from "react";
import { Button, Input, Typography } from "@mui/material";
import CustomInput from "../components/common/Input";

function ContentForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const traceButton = () => {
    console.log(`FullName: ${fullname} Email: ${email} Password: ${password}`);
  };

  return (
    <form
      style={{
        width: "30rem",
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <Typography variant="h3" fontWeight={"bold"} color="green">
        Circle
      </Typography>
      <Typography variant="h4" fontWeight={"bold"} color="white">
        Create account Circle
      </Typography>
      <CustomInput
        placeholder="Fullname"
        value={fullname}
        onChange={(e) => setFullname(e.target.value)}
        sx={{ mb: 2 }}
      />
      <CustomInput
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <CustomInput
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        onClick={() => traceButton()}
        variant="contained"
        color="success"
        sx={{ borderRadius: 23 }}
      >
        Create
      </Button>
      <Typography variant="body2" color="white">
        Already have account? <span style={{ color: "green" }}>Login</span>
      </Typography>
    </form>
  );
}

export default ContentForm;
