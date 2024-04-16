import instance from "../../utils/axios";
import { getToken } from "../../utils/functions/TokenManagers";

export interface PostType {
  id: number;
  user: number;
  category: number;
  title: string;
  content: string;
  picture: string;
  viewed: number;
  liked: number;
  commented: number;
  isLike: boolean;
  userImg: string;
  createdAt: string;
  updatedAt: string;
}

export const getPostList = async (category: number): Promise<PostType[]> => {
  try {
    const { accessToken } = getToken();
    const params = { category };
    const response = await instance.get("/post", {
      params,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};