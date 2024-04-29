import { useLocation } from "react-router-dom";
import PageTab from "../../modules/PageTab";
import Layout from "../common/Layout";
import { useState } from "react";
import ProfileAvatar from "./ProfileAvatar";
import Table from "./Table";

const MyPage = () => {
  const location = useLocation();
  const [tabNum, setTabNum] = useState(location.pathname === "/profile" ? 0 : 1);

  return (
    <Layout>
      <ProfileAvatar />
      <PageTab
        tabNum={tabNum}
        setTabNum={setTabNum}
        tabItems={[
          {
            title: "Letsgo",
            url: "/profile",
            component: (
              <>
                <span>게시글</span>
              </>
            ),
          },
          {
            title: "Letsgo",
            url: "/school",
            component: (
              <>
                <span>학교</span>
              </>
            ),
          },
          {
            title: "Letsgo",
            url: "/guestbook",
            component: (
              <>
                <span>방명록</span>
              </>
            ),
          },
          {
            title: "Letsgo",
            url: "/tag",
            component: (
              <>
                <span>태그</span>
              </>
            ),
          },
          {
            title: "Letsgo",
            url: "/achieve",
            component: (
              <>
                <span>업적</span>
              </>
            ),
          },
        ]}
      />
      {tabNum === 0 && location.pathname === "/profile" && <Table/>}
    </Layout>
  );
};

export default MyPage;
