export interface IStoreStates {
  user: IUser;
  isLogin: boolean;
  posts: IPost[];
  like: boolean;
  users: IUsersList[];
}

export interface IStoreActions {
  setUser: (user: IUser) => void;
  clearUser: () => void;
  getPosts: () => Promise<void>;
  getUsers: (userId: number) => void;
  setLikeFunc: (postId: number, userId: number) => void;
  setUnLikeFunc: (postId: number, userId: number) => void;
}

export interface IUser {
  id: number;
  username: string;
  email: string;
  fullName: string;
  bio?: string;
  profile?: IProfile;
  profile_pic: string | undefined;
}

export interface IUserList {
  isfollow: any;
  id: number;
  email: string;
  username: string;
  fullName: string;
  bio: string;
  profile_pic: null;
  createdAt: Date;
  updatedAt: Date;
}

export interface IProfile {
  id: number;
  fullName?: string;
  username?: string;
  bio?: string;
}

type TTest = () => void;
type TTest2 = string;

interface ITest {
  test: TTest;
}

export type TStore = IStoreStates & IStoreActions;
