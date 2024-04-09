import React, { useState } from "react";
import * as S from "./style";
import Likes from "../../../assets/like.svg";
import Comment from "../../../assets/comment.svg";
import Viewer from "../../../assets/view.svg";
import Test from "../../../assets/test.svg";
import PostToggle from "../../../assets/toggle.svg";
import { useNavigate } from "react-router-dom";

const Table: React.FC = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const items = [
    { id: 1, title: "안녕하세요", subTitle: "통합 | 선화예술고등학교 3학년" },
    { id: 2, title: "안녕하세요", subTitle: "통합 | 선화예술고등학교 3학년" },
    { id: 3, title: "안녕하세요", subTitle: "통합 | 선화예술고등학교 3학년" },
    { id: 4, title: "안녕하세요", subTitle: "통합 | 선화예술고등학교 3학년" },
    { id: 5, title: "안녕하세요", subTitle: "통합 | 선화예술고등학교 3학년" },
    { id: 6, title: "안녕하세요", subTitle: "통합 | 선화예술고등학교 3학년" },
    { id: 7, title: "안녕하세요", subTitle: "통합 | 선화예술고등학교 3학년" },
  ];

  return (
    <S.ConfirmListContainer>
      {items.map((item) => (
        <S.ConfirmListItemContaienr key={item.id}>
          <S.ConfirmImageWrap>
            <img src={Test} alt="test" />
          </S.ConfirmImageWrap>
          <S.ConfirmListItem style={{ width: "30%", paddingLeft: "3%" }}>
            {item.title}
            <S.ConfirmSubTitle>
              <span>통합</span>
              <span> | </span>
              <span>1분전</span>
            </S.ConfirmSubTitle>
          </S.ConfirmListItem>
          <S.RightTopInfo>
            <img src={PostToggle} alt="err" />
          </S.RightTopInfo>
          <S.RightBottomInfo>
            <img src={Likes} alt="좋아요 수" />
              <span>16</span>
            <img src={Comment} alt="댓글 수" />
              <span>2</span>
            <img src={Viewer} alt="본사람" />
              <span>50</span>
          </S.RightBottomInfo>
        </S.ConfirmListItemContaienr>
      ))}
    </S.ConfirmListContainer>
  );
};

export default Table;