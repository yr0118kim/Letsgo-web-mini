import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  height: 100vh;
  margin-top: 2%;
  background-color: #f6f6f6;
`;

export const PostWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

export const PostTopWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 3%;
  border-bottom: 1px solid #f1f1f3;
`;

export const PostTitle = styled.span`
  color: #000;
  font-size: 24px;
  font-family: "Pretendard";
  font-weight: 400;
`;

export const PostSubTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3%;
`;

export const PostLeftSubTitle = styled.span`
  color: #706f88;
  font-size: 14px;
  font-family: "Pretendard";
  font-weight: 400;
`;

export const PostRightSubTitle = styled.span`
  color: #706f88;
  font-size: 14px;
  font-family: "Pretendard";
  font-weight: 400;
`;

export const PostMidContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 3%;
  border-bottom: 1px solid #f1f1f3;
`;

export const PostMidWrap = styled.div`
  display: flex;
  align-items: center;
  margin-left: 3%;

  img {
    width: 70%;
  }
`;

export const PostHeading = styled.span`
  font-size: 16px;
  font-family: "Pretendard";
  font-weight: 300;
  color: #000;

  margin-left: 3%;
`;

export const PostTagContainer = styled.div`
  display: flex;
  margin-left: 3%;
  margin-top: 2%;
`;

export const PostTagHeading = styled.span`
  font-size: 16px;
  font-family: "Pretendard";
  font-weight: 400;
  color: #2e97f5;
  margin-right: 10px;
`;

export const PostBottomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5% 0;
`;

export const PostLike = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 84px;
  height: 38px;
  border-radius: 20px;
  background-color: #f1f1f3;
  cursor: pointer;
`;

export const PostLikeImg = styled.img`
  width: 20px;
  height: 20px;
`;

export const PostLikeCount = styled.span`
  margin-left: 5px;
  font-size: 14px;
  font-weight: 300;
  font-family: "Pretendard";
  color: #000;
`;

export const PostMore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  background-color: #f1f1f3;

  margin-left: 5%;
  border-radius: 100%;

  cursor: pointer;
`;
export const PostMoreLikeImg = styled.img``;
