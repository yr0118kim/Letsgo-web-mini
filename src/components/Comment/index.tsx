import * as c from "./style";
import CommentInput from "./CommentInput";

const Comment = () => {
  const commentCount: string = String(10);

  return (
    <c.CommentContainer>
      <c.CommentFlex>
        <c.CommentTitle>
          댓글 <c.CommentCount>{commentCount}</c.CommentCount>
        </c.CommentTitle>
        <c.RefreshButton onClick={() => window.location.reload()}>
          새로고침
        </c.RefreshButton>
      </c.CommentFlex>
      <c.CommentInputWrap>
        <CommentInput />
      </c.CommentInputWrap>
    </c.CommentContainer>
  );
};

export default Comment;
