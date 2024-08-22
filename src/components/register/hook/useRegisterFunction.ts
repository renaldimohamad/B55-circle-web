import { IRegisterForm } from "../../../types/Register";
import * as authAsync from "../../../lib/api/call/auth";

export const useRegisterFunction = () => {
  const register = async (body: IRegisterForm) => {
    try {
      const res = await authAsync.register(body);
      console.log(res);

      return res;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    register,
  };
};
