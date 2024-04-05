import React, { FC } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

interface PageTabProps {
  tabItems: { title?: string; url: string; component: React.ReactNode }[];
  tabNum: number;
  setTabNum: React.Dispatch<React.SetStateAction<number>>;
  tabWidth?: number;
}

const PageTab: FC<PageTabProps> = ({ tabNum, setTabNum, tabItems, tabWidth = 7 }) => {
  const tabButtonHandler = (idx: number) => {
    const newTabItem = tabItems[idx];
    setTabNum(idx);
    window.history.replaceState(null, newTabItem.title || "", newTabItem.url);
  };

  return (
    <nav style={{ marginTop: "2%" }}>
      <Helmet>
        <title>{tabItems[tabNum].title}</title>
      </Helmet>
      <FocusBar tabNum={tabNum} tabCount={tabItems.length} />
      <TabContainer tabCount={tabItems.length} tabWidth={tabWidth}>
        {tabItems.map((tab, idx) => (
          <TabButton
            key={idx}
            tabNum={tabNum}
            tabWidth={tabWidth}
            onClick={() => tabButtonHandler(idx)}
            isActive={idx === tabNum}
          >
            {tab.component}
          </TabButton>
        ))}
      </TabContainer>
    </nav>
  );
};

const TabContainer = styled.div<{ tabCount: number; tabWidth: number }>`
  width: ${({ tabCount, tabWidth }) => tabCount * tabWidth + `rem`};
  align-items: center;
  min-height: min-content;
  display: flex;
  flex-wrap: wrap;
`;

const TabButton = styled.div<{ tabWidth: number; isActive: boolean }>`
  width: ${({ tabWidth }) => tabWidth + `rem`};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Pretendard';
  font-weight: 100;
  font-size: 12px;
  height: 3rem;
  text-decoration: none;
  color: ${({ isActive }) => (isActive ? "rgb(52, 58, 64)" : "rgb(134, 142, 150)")};
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
  cursor: pointer;
`;

const FocusBar = styled.div<{ tabCount: number; tabNum: number }>`
  width: ${({ tabCount }) => (tabCount === 0 ? 0 : 100 / tabCount + `%`)};
  height: 2px;
  bottom: 0px;
  background: rgb(52, 58, 64);
  transition: transform 0.35s cubic-bezier(0, 0, 0.1, 1.5) 0s;
  position: relative;
  transform: ${({ tabNum }) => `translateX(${tabNum * 100}%);`};
`;

export default PageTab;
