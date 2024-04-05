import styled from "styled-components";

export const CommentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 2%;
  box-sizing: border-box;
  column-gap: 2%;
`;

export const CommentProfile = styled.img`
  width: 30px;
`;

export const CommentContentWraper = styled.div`
  display: flex;
  row-gap: 5px;
  flex-direction: column;
`;

export const CommentTitle = styled.h2`
  font-family: "pretendard";
  color: #8d8ca0;
  font-size: 0.9em;
  font-weight: 500;
`;
export const CommentPostTime = styled.h2`
  font-family: "pretendard";
  color: #4d4d53;
  font-weight: 300;
  font-size: 0.7em;
`;

export const CommentContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 2%;
  align-items: center;
`;
export const CommentContent = styled.h2`
  font-family: "pretendard";
  color: #4d4d53;
  font-size: 0.8em;
  font-weight: 500;
`;

export const CommentBottomWraper = styled.div``;

export const CommentBottomIcon = styled.img`
  width: 40px;
`;
