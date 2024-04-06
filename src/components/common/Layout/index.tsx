import Nav from "../../common/Nav";
import SchoolWidget from "../../common/SchoolWidget";
import banner from "../../../assets/banner.svg";
import * as h from "./style";
import ProfileBanner from "../../../assets/profileBanner.svg";
import TrendWidget from "../../common/TrendWidget";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const bannerSrc = ["profile", "school", "guestbook", "tag", "achieve"].some((path) =>
    window.location.pathname.includes(path)
  )
    ? ProfileBanner
    : banner;

  return (
    <h.HomeContainer>
      <Nav />
      <h.HomeTopWrap>
        <h.HomeBanner src={bannerSrc} alt="배너입니다." />
        <h.ChildrenWraper>{children}</h.ChildrenWraper>
      </h.HomeTopWrap>
      <h.WidgetWraper>
        <SchoolWidget></SchoolWidget>
        <TrendWidget />
      </h.WidgetWraper>
    </h.HomeContainer>
  );
};

export default Layout;
