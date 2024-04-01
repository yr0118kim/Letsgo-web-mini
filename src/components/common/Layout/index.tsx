import Nav from "../../common/Nav";
import SchoolWidget from "../../common/SchoolWidget";
import banner from "../../assets/banner.svg";
import * as h from "./style";
import { Header } from "../../common/Header";
import Table from "../../common/Table";
import TrendWidget from "../../common/TrendWidget";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <h.HomeContainer>
      <Nav />
      <h.HomeTopWrap>{children}</h.HomeTopWrap>
      <h.WidgetWraper>
        <SchoolWidget></SchoolWidget>
        <TrendWidget />
      </h.WidgetWraper>
    </h.HomeContainer>
  );
};

export default Layout;
