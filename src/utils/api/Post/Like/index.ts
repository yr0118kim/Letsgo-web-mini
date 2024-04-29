import { AxiosError } from "axios";
import { useMutation } from "react-query";
import instance from "../../../axios";
import { getToken } from "../../../functions/TokenManagers";

export const useLikeCommentMutation = () => {
  const { accessToken } = getToken();
  return useMutation<boolean, AxiosError, number>(async (id: number) => {
    try {
      const response = await instance.post<boolean>(
        `/post/${id}/like`,
        null,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  });
};

export const useCancelCommentLikeMutation = () => {
  const { accessToken } = getToken();
  return useMutation<boolean, AxiosError, number>(async (id: number) => {
    try {
      const response = await instance.delete<boolean>(
        `/post/${id}/like`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  });
};
