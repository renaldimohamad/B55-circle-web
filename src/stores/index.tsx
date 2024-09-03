import { createContext, useState } from "react";
import { IUser, TStore } from "../types/store";
import { api } from "../lib/api";

interface StoreProps {
  children: React.ReactNode;
}

export const Store = createContext<TStore | null>(null);

export const StoreProvider: React.FC<StoreProps> = ({ children }) => {
  const [user, setUserState] = useState<IUser>({
    id: 0,
    email: "",
    fullName: "",
    username: "",
    bio: "",
    profile_pic: "",
  });

  const [isLogin, setIsLogin] = useState(false);
  const [posts, setPosts] = useState([]);

  const setUser = (user: IUser) => {
    setUserState(user);
    setIsLogin(true);
  };

  const clearUser = () => {
    setUserState({
      id: 0,
      email: "",
      fullName: "",
      username: "",
      bio: "",
      profile_pic: "",
    });
    localStorage.removeItem("token");
    localStorage.clear();
    setIsLogin(false);
  };

  // const [users, setUsers] = useState([]);
  // const getUsers = async (userId: number) => {
  //   try {
  //     const response = await api.get(`/users/userLogin${userId}`);

  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const [like, setLike] = useState(false);

  const setLikeFunc = async (postId: number, userId: number) => {
    try {
      const res = await api.post(`/like/${postId}`, { userId });
      if (res) {
        setLike(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const setUnLikeFunc = async (postId: number, userId: number) => {
    try {
      const res = await api.post("/like/unlike", { postId, userId });
      if (res) {
        setLike(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const [users, setUsers] = useState([]);

  const getPosts = async () => {
    try {
      const res = await api.get("/posts");

      console.log(res.data);

      setPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // const getPostById = async (id: number) => {
  //   const res = await api.get(`/posts/${id}`);
  //   return res;
  // };

  console.log(user, isLogin);

  // getUsers,
  // users,

  return (
    <Store.Provider
      value={{
        user,
        isLogin,
        like,
        posts,
        setUser,
        clearUser,
        getPosts,
        setLikeFunc,
        setUnLikeFunc,
      }}
    >
      {children}
    </Store.Provider>
  );
};
