import styled from "styled-components";

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 1% 5%;
`

export const ProfileWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  justify-content: flex-start; 

  margin: 3% 10%;
  white-space: nowrap;
`;

export const ProfileName = styled.h2`
  color: black;
  font-family: "pretendard";
  font-weight: 400;
  font-size: 18px;

  white-space: nowrap;
`;

export const ProfileIntroduction = styled.h5`
  color: #7f7f7f;
  font-family: "pretendard";
  font-size: 14px;
  font-weight: 300;
  margin: 2% 0;

  white-space: nowrap;
`;

export const NavAvatarImg = styled.img`
  width: 140px;
  height: 140px;

  border-radius: 100%;
`;
export const NavAvatarWraper = styled.div`

  border-radius: 100%;
  padding: 2px;
  width: 140px;
  height: 140px;
`;

export const NavAvatarTag = styled.div`
  position: relative;
  margin: 2% 0;
  border: 2px solid transparent;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(
      to right,
      rgba(219, 0, 255, 1) 0%,
      rgba(121, 69, 236, 1) 100%
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
  text-align: center;

  border-style: solid;
  border-radius: 50px;
`;


export const NavAvatarTagText = styled.div`
  color: black;
  font-family: "pretendard";
  font-weight: 500;
  font-size: 0.9em;
  margin: 5px 10px;
`;
