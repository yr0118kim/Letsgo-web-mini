import { useState } from "react";
import * as S from "./style";
import Likes from "../../../assets/like.svg";
import Comment from "../../../assets/comment.svg";
import Viewer from "../../../assets/view.svg";
import Test from "../../../assets/test.svg";
import PostToggle from "../../../assets/toggle.svg";
import Modal from "../../../components/common/Modal";
import {
  usePostListQuery,
  PostType,
} from "../../../hooks/Post/MyPage/usePostList";

const Table = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postId, setPostId] = useState<number | null>(null);
  const { data: posts, isLoading, isError } = usePostListQuery();

  const handleModalOpen = (postId: number) => {
    setIsModalOpen(true);
    setPostId(postId);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setPostId(null);
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
              <span>{new Date(item.createdAt).toLocaleDateString()}</span>
            </S.ConfirmSubTitle>
          </S.ConfirmListItem>
          <S.RightTopInfo onClick={() => handleModalOpen(item.id)}>
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
