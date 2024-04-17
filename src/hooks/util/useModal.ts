import { useRecoilState } from "recoil";
import { ModalOpenAtom } from "../../components/store/common/Model";

const useModal = () => {
  const [isOpen, setIsOpen] = useRecoilState(ModalOpenAtom);

  const open = () => {
    setIsOpen(true);
  };

  const handleDelete = () => {
    close();
  };

  const handleMove = () => {
    close();
  };

  const handleCopyLink = () => {
    close();
  };

  const close = () => {
    setIsOpen(false);
  };

  return { open, close, handleDelete, handleMove, handleCopyLink };
};

export default useModal;
