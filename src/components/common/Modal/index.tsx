import React from "react";
import * as m from "./style"
import useModal from "../../../hooks/util/useModal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const { close, handleDelete, handleMove, handleCopyLink } = useModal();

  return (
    <>
      {isOpen && (
        <m.ModalBackground>
          <m.ModalContent>
            <div onClick={handleDelete}>삭제</div>
            <div onClick={handleMove}>게시글로 이동</div>
            <div onClick={handleCopyLink}>링크 복사</div>
            <m.ModalButtonWrapper>
              <m.ModalButton onClick={close}>취소</m.ModalButton>
            </m.ModalButtonWrapper>
          </m.ModalContent>
        </m.ModalBackground>
      )}
    </>
  );
};

export default Modal;
