import React from "react";
import * as S from "./style";
import Likes from "../../../assets/like.svg";
import Comment from "../../../assets/comment.svg";
import Viewer from "../../../assets/view.svg";
import Test from "../../../assets/test.svg";
import { useNavigate } from "react-router-dom";
import { usePostListQuery } from "../../../hooks/Post/usePostList";
import Comments from "./Comment";
import CommentFrame from "./Comment";

const Table: React.FC = () => {
  const navigate = useNavigate();

  const {
    data: postListData,
    error,
    isLoading,
    isError,
  } = usePostListQuery(undefined, undefined, "recent");

  console.log("postListData:", postListData);
  console.log("Error : ", error);

  return (
    <S.ConfirmListContainer>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>데이터를 가져오는 중 오류가 발생했습니다.</div>
      ) : !postListData ? (
        <div>게시물이 없습니다.</div>
      ) : (
        postListData.map((post) => (
          <S.ConfirmListItemContaienr
            onClick={() => navigate("/community")}
            key={post.id}
          >
            <S.ConfirmImageWrap>
              <img src={Test} alt="test" />
            </S.ConfirmImageWrap>
            <S.ConfirmListItem style={{ width: "30%", paddingLeft: "1%" }}>
              {post.title}
              <S.ConfirmSubTitle>
                <span>통합</span>
                <span> | </span>
                <span>선화예술고등학교 3학년</span>
              </S.ConfirmSubTitle>
            </S.ConfirmListItem>
            <S.RightTopInfo>{post.createdAt}</S.RightTopInfo>
            <S.RightBottomInfo>
              <img src={Likes} alt="좋아요 수" />
              <span>{post.liked}</span>
              <img src={Comment} alt="댓글 수" />
              <span>{post.commented}</span>
              <img src={Viewer} alt="본사람" />
              <span>{post.viewed}</span>
            </S.RightBottomInfo>
          </S.ConfirmListItemContaienr>
        ))
      )}
      <CommentFrame />
    </S.ConfirmListContainer>
  );
};

export default Table;
