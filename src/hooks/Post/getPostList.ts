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
  const { accessToken } = getToken();
  try {
    const params = {
      category: category,
    };

    const response = await instance.get(`${import.meta.env.VITE_BASE_URL}/post`, {
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
