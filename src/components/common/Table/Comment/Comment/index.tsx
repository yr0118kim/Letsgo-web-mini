import * as C from "./style";
import Chat from "../../../../../assets//comment.svg";
import profile from "../../../../../assets/img/ProfileImage.svg";
import Like from "../../../../../assets/like.svg";
import { CommentType } from "../../../../../hooks/Comment/getCommentList";

const Comment = (props: { data: CommentType }) => {
  return (
    <C.CommentContainer>
      <C.CommentProfile src={profile}></C.CommentProfile>
      <C.CommentContentWraper>
        <C.CommentContentHeader>
          <C.CommentTitle>{props.data.user}</C.CommentTitle>
          <C.CommentPostTime>{props.data.createdAt}분 전</C.CommentPostTime>
        </C.CommentContentHeader>
        <C.CommentContent>{props.data.comment}</C.CommentContent>
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
