import { Box } from "@mui/material";
import CustomInput from "../components/common/Input";
import ResetPasswordForm from "../components/resetPassword/ReserPasswordForm";

function ResetPassword() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#1D1D1D",
        padding: "20px",
      }}
    >
      <ResetPasswordForm />
    </Box>
  );
}

export default ResetPassword;
