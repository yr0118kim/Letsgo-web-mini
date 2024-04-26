import { useRecoilState } from "recoil";
import { ModalOpenAtom } from "../../components/store/common/Model";
import { useDeletePost } from "../../hooks/Post/MyPage/useDeletePost";

const useModal = (postId?: number) => {
  const [isOpen, setIsOpen] = useRecoilState(ModalOpenAtom);
  const { handleDeletePost } = useDeletePost();

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const handleDelete: React.MouseEventHandler<HTMLDivElement> = async () => {
    try {
      if (postId !== undefined) {
        await handleDeletePost(postId);
        console.log("postid", postId);
        close();
      } else {
        console.error("게시물 삭제 실패: postId가 유효하지 않습니다.", postId);
      }
    } catch (error) {
      console.error("게시물 삭제 실패:", error);
    }
  };

  const handleMove = () => {
    close();
  };

  const handleCopyLink = () => {
    close();
  };

  return { open, close, handleDelete, handleMove, handleCopyLink };
};

export default useModal;
