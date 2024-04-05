import { AxiosError } from "axios";
import { useMutation } from "react-query";
import instance from "../../../axios";
import { getToken } from "../../../functions/TokenManagers";

export const useLikeCommentMutation = () => {
  const { accessToken } = getToken();
  return useMutation<boolean, AxiosError, number>(async (postId: number) => {
    const response = await instance.post<boolean>(
      `${import.meta.env.VITE_BASE_URL}/post/${postId}/like`, // 수정된 부분
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  });
};

export const useCancelCommentLikeMutation = () => {
  const { accessToken } = getToken();
  return useMutation<boolean, AxiosError, number>(async (postId: number) => {
    const response = await instance.delete<boolean>(
      `${import.meta.env.VITE_BASE_URL}/post/${postId}/like`, // 수정된 부분
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  });
};
