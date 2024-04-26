import { useMutation } from "react-query";
import { getToken } from "../../../functions/TokenManagers";
import { AxiosError } from "axios";
import instance from "../../../axios";

export const useDeletePostMutation = () => {
  return useMutation<boolean, AxiosError, number>(async (postId: number) => {
    const { accessToken } = await getToken();
    try {
      const response = await instance.delete(`/post/${postId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      console.log("res", response.data);
      
      return response.data;
    } catch (error) {
      throw error;
    }
  });
};
