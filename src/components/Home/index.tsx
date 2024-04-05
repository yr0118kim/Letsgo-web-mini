import Nav from "../common/Nav";
import SchoolWidget from "../common/SchoolWidget";
import banner from "../../assets/banner.svg";
import * as h from "./style";
import { Header } from "../common/Header";
import Table from "../common/Table";
import Layout from "../common/Layout";

const Home = () => {
  return (
    <Layout>
      <Header />
      <Table />
    </Layout>
  );
};

export default Home;
