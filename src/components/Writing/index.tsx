import Layout from "../common/Layout";
import WritingHeader from "./Header";
import * as W from "./style";
import { useCreatePost } from "../../hooks/Writing/usePost";

const Writing = () => {
  const { postData, handleChange, handleSubmit } = useCreatePost();
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
        />
        <W.WritingContentInput
          name="content"
          value={postData.content}
          placeholder="내용을 입력하세요"
          onChange={handleChange}
        />
        <W.ImageButton type="submit"></W.ImageButton>
      </W.WritingContainer>
    </Layout>
  );
};

export default Writing;
