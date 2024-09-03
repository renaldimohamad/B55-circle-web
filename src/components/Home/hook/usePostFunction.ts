import { api } from "../../../lib/api";
import useStore from "../../../stores/hook";
import { toast } from "react-toastify";

export const usePostFunction = () => {
  const { getPosts, user } = useStore();
  const handlePost = async (content: string) => {
    try {
      const res = await api.post("/posts", {
        content,
      });

      console.log(res);

      const username = user?.username || "Unknown User";
      await getPosts();
      toast.success(`Post Success @${username}`);
    } catch (error) {
      console.log(error);
      toast.error("Post Failed");
    }
  };

  return { handlePost };
};
