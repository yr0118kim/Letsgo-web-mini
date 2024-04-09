import * as C from "./style";
import Chat from "../../../../../assets//comment.svg";
import profile from "../../../../../assets/img/ProfileImage.svg";
import Like from "../../../../../assets/like.svg";
const Comment = () => {
  return (
    <C.CommentContainer>
      <C.CommentProfile src={profile}></C.CommentProfile>
      <C.CommentContentWraper>
        <C.CommentContentHeader>
          <C.CommentTitle>대구소프트웨어마이스터고 3학년 남학생</C.CommentTitle>
          <C.CommentPostTime>1분 전</C.CommentPostTime>
        </C.CommentContentHeader>
        <C.CommentContent>
          안녕하세요 대구소프트웨어마이스터고 김예림입니다
        </C.CommentContent>
        <C.CommentBottomWraper>
          <C.CommentIconWraper>
            <C.CommentBottomIcon src={Like}></C.CommentBottomIcon>
            <C.CommentBottomText>6</C.CommentBottomText>
          </C.CommentIconWraper>
          <C.CommentIconWraper>
            <C.CommentBottomIcon src={Chat}></C.CommentBottomIcon>
            <C.CommentBottomText>6</C.CommentBottomText>
          </C.CommentIconWraper>
        </C.CommentBottomWraper>
      </C.CommentContentWraper>
    </C.CommentContainer>
  );
};

export default Comment;
