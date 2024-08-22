import { Input, InputBaseProps } from "@mui/material";
import React from "react";

interface InputProps extends InputBaseProps {}

const CustomInput: React.FC<InputProps> = ({ ...rest }) => {
  return (
    <Input
      {...rest}
      disableUnderline
      sx={{
        width: "100%",
        border: "1px solid gray",
        color: "white",
        borderRadius: "10px",
        padding: "5px",
      }}
    ></Input>
  );
};

export default CustomInput;
