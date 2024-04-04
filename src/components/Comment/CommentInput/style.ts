import styled from "styled-components";

export const CommentInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  background-color: #f8f8f8;
  border-radius: 10px;
`;

export const CommentInputWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #f1f1f3;
  padding-left: 10px;
  

  cursor: text;

  span {
    font-size: 14px;
    font-weight: 400;
    font-family: "Pretendard";
    color: #9f9faf;
    margin-left: 7%;
  }

  input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    font-family: "Pretendard";
    color: #9f9faf;
    margin-left: 7%;
  }
`;

export const CommentInputIcon = styled.img`
  width: 17px;
  margin-left: 1%;

  cursor: pointer;
`;

export const CommentSubmit = styled.img`
  width: 17px;
  margin-left: auto;
  cursor: pointer;
`;
