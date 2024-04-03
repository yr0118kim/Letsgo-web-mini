import { AxiosError } from "axios";
import { useMutation } from "react-query";
import instance from "../../utils/axios";
import { getToken } from "../../utils/functions/TokenManagers";

export const useLikePostMutation = () => {
    const { accessToken } = getToken();
  return useMutation<boolean, AxiosError, number>(
    (postId: number) => {
      return instance.post<boolean>(
        `/post/${postId}/like`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      ).then(response => response.data);
    }
  );
};
