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
  createdAt: string;
  updatedAt: string;
}

export const usePostListQuery = () => {
  return useQuery<PostType[], AxiosError>(
    "postList",
    async () => {
      const { accessToken } = getToken();
      const response = await instance.get(
        `${import.meta.env.VITE_BASE_URL}/post`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const sortedData = response.data.data.sort(
        (a: any, b: any) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

      return sortedData;
    },
    {
      cacheTime: 300000,
    }
  );
};
