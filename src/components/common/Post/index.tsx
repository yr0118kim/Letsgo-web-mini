import React, { useState } from "react";
import * as d from "./style";
import Like from "../../../assets/postLike.svg";
import More from "../../../assets/more.svg";
import { useLikePost } from "../../../hooks/Post/useLikePost";
import { useRecoilState } from "recoil";
import { likeCountState } from "../../store/common/likeCount";
import { useReadPost } from "../../../hooks/Post/useReadPost";
import { useParams } from "react-router-dom";
import CommentFrame from "../Table/Comment";

const Post: React.FC = () => {
  const { id = "1" } = useParams<{ id?: string }>();
  const postId = Number(id);

  if (isNaN(postId) || postId <= 0) {
    return <div>존재하지 않는 게시물 입니다.</div>;
  }

  const { handleLikePost, handleCancelLikePost } = useLikePost();
  const [likeCount, setLikeCount] = useRecoilState(likeCountState);
  const [isLiked, setIsLiked] = useState(false);
  const { post, isLoading, error } = useReadPost(postId);

  const handleLikeClick = () => {
    if (!isLiked) {
      handleLikePost(postId);
    } else {
      handleCancelLikePost(postId);
    }
    setIsLiked((prevIsLiked) => !prevIsLiked);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <d.PostContainer>
      <d.PostWrap>
        <d.PostTopWrap>
          <d.PostTitle>{post?.title}</d.PostTitle>
          <d.PostSubTitleWrap>
            <div
              style={{
                display: "flex",
                marginTop: "1%",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div>
                <d.PostLeftSubTitle>게임</d.PostLeftSubTitle>
                <d.PostLeftSubTitle>1일전</d.PostLeftSubTitle>
                <d.PostLeftSubTitle>
                  대구소프트웨어마이스터고 3학년 여학생
                </d.PostLeftSubTitle>
              </div>
              <div>
                <d.PostRightSubTitle>조회수</d.PostRightSubTitle>
                <span>{post?.viewed}</span>
                <d.PostRightSubTitle>댓글</d.PostRightSubTitle>
                <span>{post?.commented}</span>
                <d.PostRightSubTitle onClick={handleLikeClick}>
                  좋아요
                </d.PostRightSubTitle>
                <span>{post?.liked}</span>
              </div>
            </div>
          </d.PostSubTitleWrap>
        </d.PostTopWrap>
        <d.PostMidContainer>
          <d.PostMidWrap>
            {post?.picture && <img src={post.picture} alt="post" />}
          </d.PostMidWrap>
          <d.PostHeading>{post?.content}</d.PostHeading>
          <d.PostTagContainer style={{ marginBottom: "2%" }}>
            <d.PostTagHeading>#태그</d.PostTagHeading>
            <d.PostTagHeading>#태그</d.PostTagHeading>
            <d.PostTagHeading>#태그</d.PostTagHeading>
            <d.PostTagHeading>#태그</d.PostTagHeading>
          </d.PostTagContainer>
        </d.PostMidContainer>
        <d.PostBottomContainer>
          <d.PostLike onClick={handleLikeClick}>
            <d.PostLikeImg src={Like} alt="좋아요" />
            <d.PostLikeCount>{likeCount}</d.PostLikeCount>
          </d.PostLike>
          <d.PostMore>
            <d.PostMoreLikeImg src={More} alt="더보기" />
          </d.PostMore>
        </d.PostBottomContainer>
      </d.PostWrap>
      <CommentFrame />
    </d.PostContainer>
  );
};

export default Post;
