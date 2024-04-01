import Nav from "../common/Nav";
import SchoolWidget from "../common/SchoolWidget";
import banner from "../../assets/banner.svg";
import * as h from "./style";
import { Header } from "../common/Header";
import Table from "../common/Table";
import TrendWidget from "../common/TrendWidget";
import Layout from "../common/Layout";

const Home = () => {
  return (
    <Layout>
      <h.HomeBanner src={banner} alt="배너입니다." />
      <Header />
      <Table />
    </Layout>
  );
};

export default Home;
