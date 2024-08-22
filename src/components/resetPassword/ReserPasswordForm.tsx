import { Button, Input, Typography } from "@mui/material";
import CustomInput from "../common/Input";

function ResetPasswordForm() {
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
        Reset Password
      </Typography>
      <CustomInput placeholder="New Password*" sx={{ mb: 2 }}></CustomInput>
      <CustomInput placeholder="Confirm New Password*"></CustomInput>

      <Button variant="contained" color="success" sx={{ borderRadius: 23 }}>
        Create New Password
      </Button>
    </form>
  );
}

export default ResetPasswordForm;
