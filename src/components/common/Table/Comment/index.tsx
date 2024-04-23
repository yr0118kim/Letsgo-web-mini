import * as C from "./style";
import chat from "../../../../assets/img/Chat.svg";
import send from "../../../../assets/img/Send.svg";
import Comment from "./Comment";
import CommentContainer from "../../../Comment";
import CommentInput from "./CommentInput";
import { useCommentListQuery } from "../../../../hooks/Comment/getCommentList";

interface propsType {
  postId: number;
}


const CommentFrame = (props: propsType) => {
  const {
    data: commentListData,
    isLoading,
    isError,
  } = useCommentListQuery(props.postId);
  return (
    <>
      <C.CommentContainer>
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div> </div>
        ) : !commentListData?.length ? (
          <div>No comment available.</div>
        ) : (
          <>
            <C.CommentHeaderWraper>
              <C.CommentHeaderTitle>댓글</C.CommentHeaderTitle>
              <C.CommentNumber>{commentListData.length}</C.CommentNumber>
              <C.CommentRestart onClick={() => window.location.reload()}>
                새로고침
              </C.CommentRestart>
            </C.CommentHeaderWraper>
            <CommentInput />
            {commentListData.map((data) => (
              <Comment data={data}></Comment>
            ))}
          </>
        )}
      </C.CommentContainer>
    </>
  );
};

export default CommentFrame;
