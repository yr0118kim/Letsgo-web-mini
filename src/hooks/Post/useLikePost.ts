import { AxiosError } from "axios";
import { useMutation } from "react-query";
import instance from "../../utils/axios";

export const useLikePostMutation = () => {
  return useMutation<boolean, AxiosError, number>(
    (postId: number) => {
      return instance.post<boolean>(
        `/post/${postId}/like`,
        {},
      ).then(response => response.data);
    }
  );
};
