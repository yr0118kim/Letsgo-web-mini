import React from "react";
import * as S from "./style";
import Likes from "../../../assets/like.svg";
import Comment from "../../../assets/img/comment.svg";
import Viewer from "../../../assets/view.svg";
import Test from "../../../assets/test.svg";
import { useNavigate } from "react-router-dom";
import { usePostListQuery, PostType } from "../../../hooks/Post/getPostList";

const Table: React.FC = () => {
  const navigate = useNavigate();

  const { data: postListData, isLoading, isError } = usePostListQuery(0);

  return (
    <S.ConfirmListContainer onClick={() => navigate("/post/:id")}>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div> </div>
      ) : !postListData?.length ? (
        <div>No posts available.</div>
      ) : (
        postListData.map((post: PostType) => (
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
              <img src={Likes} alt="Likes" />
              <span>{post.liked}</span>
              <img src={Comment} alt="Comments" />
              <span>{post.commented}</span>
              <img src={Viewer} alt="Viewers" />
              <span>{post.viewed}</span>
            </S.RightBottomInfo>
          </S.ConfirmListItemContaienr>
        ))
      )}
    </S.ConfirmListContainer>
  );
};

export default Table;
