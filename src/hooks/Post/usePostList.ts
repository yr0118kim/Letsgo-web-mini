import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { getToken } from "../../utils/functions/TokenManagers";
import instance from "../../utils/axios";

export interface Post {
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
  createdAt: string;
  updatedAt: string;
}

interface PostListResponse {
  code: string;
  message: string;
  data: Post[];
}

export const usePostListQuery = (
  category?: number,
  user?: number,
  order?: string
) => {
  const { accessToken } = getToken();

  const queryKey = ["postList"];

  if (category !== undefined) queryKey.push(category.toString());
  if (user !== undefined) queryKey.push(user.toString());
  if (order !== undefined) queryKey.push(order);

  return useQuery<PostListResponse, AxiosError>(
    queryKey,
    async () => {
      const queryParams = new URLSearchParams();

      if (category !== undefined) queryParams.append("category", category.toString());
      if (user !== undefined) queryParams.append("user", user.toString());
      if (order !== undefined) queryParams.append("order", order);

      const response = await instance.get<PostListResponse>(
        `${import.meta.env.VITE_BASE_URL}/post?${queryParams.toString()}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        }
      );

      return response.data;
    }
  );
};
