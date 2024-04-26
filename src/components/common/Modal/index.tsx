import React from "react";
import * as m from "./style";
import useModal from "../../../hooks/util/useModal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  postId?: number; 
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, postId }) => { 
  const { handleDelete, handleMove, handleCopyLink } = useModal(postId as number); 

  return (
    <>
      {isOpen && (
        <m.ModalBackground>
          <m.ModalContent>
            <div style={{ color: "#F45656", fontWeight: "600" }} onClick={handleDelete}>삭제</div>
            <div style={{ color: "#504F61", fontWeight: "600" }} onClick={handleMove}>게시글로 이동</div>
            <div style={{ color: "#504F61", fontWeight: "600" }} onClick={handleCopyLink}>링크 복사</div>
            <m.ModalButtonWrapper>
              <m.ModalButton onClick={onClose}>취소</m.ModalButton>
            </m.ModalButtonWrapper>
          </m.ModalContent>
        </m.ModalBackground>
      )}
    </>
  );
};

export default Modal;
