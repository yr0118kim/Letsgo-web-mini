import Home from "../../../assets/img/home.svg";
import Search from "../../../assets/img/search.svg";
import Around from "../../../assets/img/around.svg";
import Community from "../../../assets/img/commu.svg";
import Event from "../../../assets/img/event.svg";
import Notification from "../../../assets/img/noti.svg";
import Profile from "../../../assets/img/profile.svg";

export const NAV_ITEM = [
  {
    title: "홈",
    link: "/",
    icon: Home,
  },
  {
    title: "검색",
    link: "/search",
    icon: Search,
  },
  {
    title: "탐색",
    link: "/around",
    icon: Around,
  },
  {
    title: "커뮤니티",
    link: "/community",
    icon: Community,
    subItems: [
      {
        title: "통합",
        link: "/community/integration",
      },
      {
        title: "학교",
        link: "/community/school",
      },

      {
        title: "테마",
        link: "/community",
      },
    ],
  },
  {
    title: "이벤트",
    link: "/event",
    icon: Event,
  },
  {
    title: "알림",
    link: "/notification",
    icon: Notification,
  },
  {
    title: "프로필",
    link: "/profile",
    icon: Profile,
  },
];
