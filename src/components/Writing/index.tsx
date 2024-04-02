import { Header } from "../common/Header";
import { Toggle } from "../common/Header/Toggle";
import Layout from "../common/Layout";
import WritingHeader from "./Header";
import * as W from "./style";

import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

const Writing = () => {
  return (
    <Layout>
      <W.WritingContainer>
        <WritingHeader></WritingHeader>
        <W.WritingTitleInput placeholder="제목"></W.WritingTitleInput>
        <W.WritingContentInput placeholder="내용을 입력하세요"></W.WritingContentInput>
        <W.ImageButton></W.ImageButton>
      </W.WritingContainer>
    </Layout>
  );
};

export default Writing;
