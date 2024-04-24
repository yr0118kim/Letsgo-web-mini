import React from "react";
import * as S from "./style";
import Likes from "../../../assets/like.svg";
import Comment from "../../../assets/comment.svg";
import Viewer from "../../../assets/view.svg";
import Test from "../../../assets/test.svg";
import PostToggle from "../../../assets/toggle.svg";
import Modal from "../../../components/common/Modal";
import useModal from "../../../hooks/util/useModal";
import { usePostListQuery, PostType } from "../../../hooks/Post/MyPage/usePostList"; // 커스텀 훅 임포트

const Table: React.FC = () => {
  const { open } = useModal();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const { data: posts, isLoading, isError } = usePostListQuery();

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {isError}</div>;

  return (
    <S.ConfirmListContainer>
      {posts?.map((item: PostType) => ( 
        <S.ConfirmListItemContaienr key={item.id}>
          <S.ConfirmImageWrap>
            <img src={Test} alt="test" />
          </S.ConfirmImageWrap>
          <S.ConfirmListItem style={{ width: "30%", paddingLeft: "3%" }}>
            {item.title}
            <S.ConfirmSubTitle>
              <span>통합</span>
              <span> | </span>
              <span>1분전</span>
            </S.ConfirmSubTitle>
          </S.ConfirmListItem>
          <S.RightTopInfo onClick={handleModalOpen}>
            <img src={PostToggle} alt="err" />
          </S.RightTopInfo>
          <S.RightBottomInfo>
            <img src={Likes} alt="좋아요 수" />
              <span>{item.liked}</span>
            <img src={Comment} alt="댓글 수" />
              <span>{item.commented}</span>
            <img src={Viewer} alt="본사람" />
              <span>{item.viewed}</span>
          </S.RightBottomInfo>
        </S.ConfirmListItemContaienr>
      ))}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </S.ConfirmListContainer>
  );
};

export default Table;
