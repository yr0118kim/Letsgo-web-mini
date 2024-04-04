import { CommentOptionTitle } from "./style";
import { CommentitleProps } from "./types";

const CommentTitle = ({ children }: CommentitleProps) => {
    return <CommentOptionTitle>{children}</CommentOptionTitle>
}

export default CommentTitle;