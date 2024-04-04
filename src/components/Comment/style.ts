import styled from "styled-components";

export const CommentContainer = styled.div`
  display: flex;
  width: 40%;
  height: 50vh;
  flex-direction: column;
  background-color: #fff;
`;

export const CommentInputWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CommentFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

export const RefreshButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  background-image: linear-gradient(to right, #db00ff, #7945ec);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 14px;
  font-weight: 400;
  font-family: "Pretendard";
  text-decoration: underline;
`;

export const CommentTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  font-family: "Pretendard";
  margin: 2% 1%;
  color: #000; 
`;

export const CommentCount = styled.span`
  color: transparent;
  background-image: linear-gradient(to right, #db00ff, #7945ec); /* 그라디언트 설정 */
  -webkit-background-clip: text;
  background-clip: text;
`;
