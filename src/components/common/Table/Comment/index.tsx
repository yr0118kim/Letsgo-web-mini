import * as C from "./style";
import chat from "../../../../assets/img/Chat.svg";
import send from "../../../../assets/img/Send.svg";
import Comment from "./Comment";

const data = [1, 2, 3, 4, 5];
const CommentFrame = () => {
  return (
    <C.CommentContainer>
      <C.CommentHeaderWraper>
        <C.CommentHeaderTitle>댓글</C.CommentHeaderTitle>
        <C.CommentNumber>{data.length}</C.CommentNumber>
        <C.CommentRestart>새로고침</C.CommentRestart>
      </C.CommentHeaderWraper>
      <C.CommentInputWraper>
        <C.CommentIcon src={chat} />
        <C.CommentInput placeholder="댓글을 달아주세요"></C.CommentInput>
        <C.CommentSendIcon src={send}></C.CommentSendIcon>
      </C.CommentInputWraper>
      {data.map(() => (
        <Comment></Comment>
      ))}
    </C.CommentContainer>
  );
};

export default CommentFrame;
