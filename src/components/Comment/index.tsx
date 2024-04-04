import * as c from "./style";
import CommentTitle from "../common/Comment/CommentTitle";
import CommentInput from "./CommentInput";

const Comment = () => {
  return (
    <c.CommentContainer>
      <CommentTitle>댓글</CommentTitle>
      <c.CommentInputWrap>
        <CommentInput />
      </c.CommentInputWrap>
    </c.CommentContainer>
  );
};

export default Comment;
