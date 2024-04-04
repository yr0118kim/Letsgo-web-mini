import React, { useState, useEffect } from "react";
import * as S from "./style";
import Likes from "../../../assets/like.svg";
import Comment from "../../../assets/comment.svg";
import Viewer from "../../../assets/view.svg";
import Test from "../../../assets/test.svg";
import { useNavigate } from "react-router-dom";
import { getPostList, PostType } from "../../../hooks/Post/getPostList";

const Table: React.FC = () => {
  const navigate = useNavigate();
  const [postListData, setPostListData] = useState<PostType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPostList(0);
        setPostListData(data);
        setIsLoading(false);
      } catch (error) {
        setError("데이터를 가져오는 중 오류가 발생했습니다.");
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <S.ConfirmListContainer onClick={() => navigate("/community")}>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : !postListData.length ? (
        <div>게시물이 없습니다.</div>
      ) : (
        postListData.map((post) => (
          <S.ConfirmListItemContaienr key={post.id}>
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
    </S.ConfirmListContainer>
  );
};

export default Table;
