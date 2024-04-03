import styled from "styled-components";

export const HomeContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #f6f6f6; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  @media screen and (max-width: 1280px) {
    padding-left: 300px;
    box-sizing: border-box;
  }
`;

export const HomeTopWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ChildrenWraper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 1400px;
`;

export const WidgetWraper = styled.div`
  width: 300px;
  height: 800px;
  position: absolute;
  flex-direction: column;
  display: flex;

  row-gap: 20px;

  top: 190px;
  right: 50px;

  @media screen and (max-width: 1280px) {
    display: none;
  }
`;

export const HomeBanner = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;
