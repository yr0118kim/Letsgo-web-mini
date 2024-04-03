import { useNavigate } from "react-router-dom";
import * as w from "./style";

const Write = () => {
  const navigate = useNavigate();
  return (
    <w.WriteContainter onClick={() => navigate("/write")}>
      <w.WriteWrap>
        <span>글 작성</span>
      </w.WriteWrap>
    </w.WriteContainter>
  );
};

export default Write;
