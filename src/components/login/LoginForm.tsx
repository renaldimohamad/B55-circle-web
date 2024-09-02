import { Button, FormHelperText, Input, Typography } from "@mui/material";
import CustomInput from "../common/Input";
import { ILoginForm } from "../../types/login";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Controller, SubmitHandler } from "react-hook-form";
import { useLoginFunction } from "./hook/userLoginFunction";
import { useLoginValidation } from "./hook/useLoginValidation";
import { toast } from "react-toastify";

function LoginForm() {
  // const navigate = useNavigate();
  const { handleLogin } = useLoginFunction();
  const { control, handleSubmit, reset } = useLoginValidation();

  const onSubmit = async (data: ILoginForm) => {
    try {
      await handleLogin(data);

      reset();
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Login failed. Please try again.");
    }
  };

  const onError = (errors: any) => {
    console.log(errors);
  };

  return (
    <form
      style={{
        width: "30rem",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <Typography variant="h3" fontWeight={"bold"} color={"green"}>
        Circle
      </Typography>
      <Typography variant="h4" fontWeight={"bold"} color={"white"}>
        Login To Circle
      </Typography>

      <Controller
        control={control}
        name="email"
        render={({ field, fieldState }) => (
          <>
            <CustomInput
              placeholder="Email/Username*"
              sx={{ mb: 2 }}
              {...field}
              error={!!fieldState.error}
            />
            <FormHelperText error>{fieldState.error?.message}</FormHelperText>
          </>
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field, fieldState }) => (
          <>
            <CustomInput placeholder="password*" type="password" {...field} />
            <FormHelperText error>{fieldState.error?.message}</FormHelperText>
          </>
        )}
      />

      <div style={{ alignSelf: "flex-end" }}>
        <Link
          to={"/Forgot"}
          style={{
            cursor: "pointer",
            color: "white",
            textDecoration: "none",
          }}
        >
          Forgot password?
        </Link>
      </div>
      <Button
        type="submit"
        variant="contained"
        color="success"
        sx={{ borderRadius: 23 }}
      >
        Login
      </Button>
      <Typography variant="body2" color="white">
        Don't have an account yet?{" "}
        <Link
          to={"/Register"}
          style={{ color: "green", cursor: "pointer", textDecoration: "none" }}
        >
          Create Account
        </Link>
      </Typography>
    </form>
  );
}

export default LoginForm;
