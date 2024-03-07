import styled from "styled-components";

export const NavContainer = styled.div`
  position: relative;
  position: fixed;
  top: 0;
  left: 0;

  width: 250px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  row-gap: 90px;

  background-color: #fff;
  color: #f6f6f6;
`;

export const NavTopWrap = styled.div`
  width: 100%;
  height: 50px;

  margin-top: 56px;
  text-align: center;
`;

export const NavTitle = styled.img`
  cursor: pointer;
`;

export const NavMidWrap = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  row-gap: 25px;
  padding-left: 46px;
  font-size: 16px;
  font-weight: 600;
  font-family: 'Pretendard';
  color: #BDBDC8;
`;

export const NavCategoryBox = styled.div`
  display: flex;
  align-items: center;

  font-size: 14px;
  column-gap: 14px;
  cursor: pointer;
`;

