import { useLocation } from "react-router-dom";
import PageTab from "../../modules/PageTab";
import Layout from "../common/Layout";
import { useState } from "react";

const MyPage = () => {
  const location = useLocation();
  const [tabNum, setTabNum] = useState(location.pathname === "/recent" ? 1 : 0);
  return (
    <Layout>
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
    </Layout>
  );
};

export default MyPage;
