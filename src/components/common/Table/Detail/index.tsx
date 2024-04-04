import Nav from "../../Nav";
import Banner from "../../../../assets/banner.svg";
import * as d from "./style";
import { Header } from "../../Header";
import Post from "../../Post";
import Comment from "../../../Comment";

const PostDetail = () => {
  return (
    <d.DetailContainer>
      <Nav />
      <d.DetailTopWrap>
        <img src={Banner} alt="배너입니다." />
        <Header />
      </d.DetailTopWrap>
      <Post />
      <Comment />
    </d.DetailContainer>
  );
};

export default PostDetail;
