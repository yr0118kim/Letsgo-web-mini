import { useQuery } from "react-query";
import instance from "../../utils/axios";
import { getToken } from "../../utils/functions/TokenManagers";

interface UserInfo {
  id: number;
  username: string;
  nickname: string;
  image: string;
  created_at: string;
  updated_at: string;
}

interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
}

export const useMyUserInfo = () => {
  const { accessToken } = getToken();
  return useQuery<UserInfo, Error>(
    "myUserInfo",
    async () => {
      const response = await instance.get<ApiResponse<UserInfo>>(
        "/user/my-info",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return response.data.data;
    },
    {
      enabled: !!accessToken,
      cacheTime: 60000,
      staleTime: 30000,
    }
  );
};
