import { AxiosError } from "axios";
import { useQuery } from "react-query";
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

export const usePostListQuery = (category: number) => {
  return useQuery<PostType[], AxiosError>(
    ["postList", category],
    async () => {
      const { accessToken } = getToken();
      const params = { category };
      const response = await instance.get("/post", {
        params,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data.data;
    },
    {
      cacheTime: 300000,
    }
  );
};
