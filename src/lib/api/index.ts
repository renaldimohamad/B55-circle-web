import axios from "axios";
import { IProfileForm } from "../../types/editProfile";

// intence dari axios
export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL || "http://localhost:3000",
});

// HOOK SET AUTORIZATION
export const setAuthToken = (token?: string) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

// Update || Edit Profile
export const update = async (user_id: string, body: IProfileForm) => {
  const response = await api.put(`/auth/${user_id}`, body);

  console.log(response.data);
  return response.data;
};
