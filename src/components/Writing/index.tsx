import { Header } from "../common/Header";
import { Toggle } from "../common/Header/Toggle";
import Layout from "../common/Layout";
import WritingHeader from "./Header";
import * as W from "./style";

import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import { useNavigate } from "react-router-dom";
import { useCreatePost } from "../../hooks/Writing/usePost";

const Writing = () => {
  const navigate = useNavigate();
  const { postData, setPostData, handleChange, handleSubmit } = useCreatePost();
  return (
    <Layout>
      <W.WritingContainer onSubmit={handleSubmit}>
        <WritingHeader></WritingHeader>
        <W.WritingTitleInput
          type="text"
          name="title"
          value={postData.title}
          placeholder="제목"
          onChange={handleChange}
        ></W.WritingTitleInput>
        <W.WritingContentInput
          name="content"
          value={postData.content}
          placeholder="내용을 입력하세요"
          onChange={handleChange}
        ></W.WritingContentInput>
        <W.ImageButton type="submit"></W.ImageButton>
      </W.WritingContainer>
    </Layout>
  );
};

export default Writing;
