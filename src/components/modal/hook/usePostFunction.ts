import useStore from "../../../stores/hook";
import { toast } from "react-toastify";
import { IProfileForm } from "../../../types/editProfile";
import { api } from "../../../lib/api";

export const usePostFunction = () => {
  const { setUser } = useStore();

  const update = async (user_id: string, body: IProfileForm) => {
    try {
      const response = await api.put(`/auth/${user_id}`, body);
      toast.success("Update Success");
      setUser(response.data);
      return response;
    } catch (error) {
      console.log(error);
      toast.error("Update Failed");
    }
  };

  return { update };
};
