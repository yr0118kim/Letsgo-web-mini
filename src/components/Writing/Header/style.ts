import styled from "styled-components";

type ToggleItemProps = {
  selected: boolean;
};

export const WritingHeaderWraper = styled.div`
  display: flex;
  flex-direction: row;

  margin-bottom: 2%;
`;

export const WritingSortButton = styled.div<ToggleItemProps>`
  height: 4vh;
  width: 4vw;
  min-width: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "pretendard";
  font-weight: 500;
  font-size: 0.9em;

  cursor: pointer;
  background-image: ${(props) =>
    props.selected
      ? "linear-gradient(to right, #db00ff, #455cec)"
      : "linear-gradient(to right, #D3D2DA, #D3D2DA)"};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  border-radius: 25px;
  border: 1.8px solid ${(props) => (props.selected ? "#7945ec" : "#d3d2da")};

  margin-right: 8px;
`;

export const WritingChannelButton = styled.div<ToggleItemProps>`
  height: 35px;
  width: 35px;
  min-width: 35px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "pretendard";
  font-weight: 400;
  font-size: 1em;

  cursor: pointer;
  /* color: ${(props) => (props.selected ? "#db00ff" : "#D3D2DA")}; */
  background-image: ${(props) =>
    props.selected ? "linear-gradient(to right, #db00ff, #7945ec)" : "none"};
  -webkit-background-clip: text;
  background-clip: text;
  border-radius: 100%;
  border: 1.9px solid ${(props) => (props.selected ? "#7945ec" : "#d3d2da")};

  margin-right: 5px;
  padding: 0px;
`;




export const ButtonImg = styled.img`
  width: 25px;
  height: 25px;
`;
