import { IRegisterForm } from "../../../types/Register";
import { api } from "../index";

// LOGIN
export const login = async (email: string, password: string) => {
  const response = await api.post("/auth/login", { email, password });
  const { token, user } = response.data;

  localStorage.setItem("token", token);
  localStorage.setItem("user", user.username);

  return user;
};

// REGISTER
export const register = async (body: IRegisterForm) => {
  const response = await api.post("/auth/register", body);

  return response.data;
};

export const checkAuth = async (token: string) => {
  const response = await api.get("/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
