import { api } from "..";

export const getPosts = async () => {
  const res = await api.get("/posts");
  return res;
};

export const getPostById = async (id: number) => {
  const res = await api.get(`/posts/${id}`);
  return res;
};

export const createPost = async (data: any) => {
  const res = await api.post("/posts", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res;
};

export const getAllPostByUserId = async (user_id?: string) => {
  const res = await api.get(`/posts/byUser/${user_id}`);
  return res;
};
