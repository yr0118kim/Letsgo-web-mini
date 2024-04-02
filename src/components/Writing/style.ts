import styled from "styled-components";

type ToggleItemProps = {
  selected: boolean;
};

export const WritingContainer = styled.div`
  display: flex;
  width: 40%;
  height: 60vh;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: #fff;
  margin-top: -1.5%;
  padding: 1%;
  box-sizing: border-box;
  flex-direction: column;
`;

export const WritingTitleInput = styled.input`
  height: 6%;
  outline: none;
  border: none;
  border: 1px solid #bdbdc8;
  padding-left: 13px;
  font-family: "pretendard";
  font-size: 0.8em;
  margin-bottom: 2%;

  &::placeholder {
    font-size: 1em;
    font-family: "Pretendard";
    color: #a6a6a6;
    font-weight: 200;
  }
`;

export const WritingContentInput = styled.textarea`
  height: 60%;
  outline: none;
  border: none;
  border: 1px solid #bdbdc8;
  padding-left: 13px;
  font-family: "pretendard";
  font-size: 0.8em;
  padding: 2%;

  &::placeholder {
    font-size: 1em;
    font-family: "Pretendard";
    color: #a6a6a6;
    font-weight: 200;
  }
`;

export const ImageButton = styled.button`
  height: 10%;
`;
