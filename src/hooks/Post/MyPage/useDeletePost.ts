import toast from "react-hot-toast";
import { useDeletePostMutation } from "../../../utils/api/Post/Mypage/useDeletePostMutation";
import axios, { AxiosError } from "axios";

export function useDeletePost() {
  const deletePostMutation = useDeletePostMutation();

  const handleDeletePost = (postId: number) => {
    deletePostMutation.mutate(postId, {
      onSuccess: () => {
        toast.success("게시물을 삭제했습니다.");
      },
      onError: (err: AxiosError) => {
        if (axios.isAxiosError(err)) {
          const { status } = err.response?.data as AxiosError;
          switch (status) {
            case 403:
              toast.error("자신의 게시물만 수정 및 삭제할 수 있습니다.");
              break;
            default:
              toast.error("게시물 삭제에 실패했습니다.");
          }
        } else {
          toast.error("네트워크 연결 상태를 확인해주세요.");
        }
      },
    });
  };

  return { handleDeletePost };
}
