import Comment from "../../../assets/commentLogo.svg"
import SubmitComment from "../../../assets/writingComment.svg"
import { useState, useRef, useEffect } from "react";
import * as s from "./style";

const CommentInput = () => {
  const [isInputVisible, setInputVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickOutside = (e: any) => {
    if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
      setInputVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleContainerClick = () => {
    setInputVisible(true);
  };

  return (
    <s.CommentInputContainer onClick={handleContainerClick}>
      <s.CommentInputWrap>
        <s.CommentInputIcon src={Comment} alt="error" style={{ width: "20px", height: "20px" }} />
        {isInputVisible ? (
          <input
            type="text"
            ref={inputRef}
            autoFocus
          />
        ) : (
          <span>댓글을 달아주세요</span>
        )}
        <s.CommentSubmit src={SubmitComment} alt="error" style={{ width: "20px", height: "20px", marginRight: "2%" }} />
      </s.CommentInputWrap>
    </s.CommentInputContainer>
  );
};

export default CommentInput;