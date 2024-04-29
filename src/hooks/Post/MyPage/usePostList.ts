import { AxiosError } from "axios";
import { useQuery } from "react-query";
import instance from "../../../utils/axios";
import { useMyUserInfo } from "../../User/userInfo";
import { getToken } from "../../../utils/functions/TokenManagers";

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

interface PostListQueryParams {
  user?: number;
}

export const usePostListQuery = (params?: PostListQueryParams) => {
  const {
    data: userInfo,
    isLoading: userInfoLoading,
    isError: userInfoError,
  } = useMyUserInfo();

  return useQuery<PostType[], AxiosError>(
    ["postList", params, userInfo?.id],
    async () => {
      if (!userInfo) return [];

      const { accessToken } = getToken();
      const response = await instance.get("/post", {
        params: { ...params, user: userInfo.id },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const sortedData = response.data.data.sort(
        (a: any, b: any) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      return sortedData;
    },
    {
      cacheTime: 300000,
      enabled: !userInfoLoading && !userInfoError,
    }
  );
};
