import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as t from "./style";
import { TOGGLE_ITEM } from "./constant";

export const Toggle: React.FC = () => {
  const [selected, setSelected] = useState<number>(0);
  const navigate = useNavigate();

  const handleToggleClick = (index: number | string, link: string) => {
    setSelected(typeof index === "number" ? index : parseInt(index));
    navigate(link);
  };

  return (
    <t.ToggleContainer>
      {TOGGLE_ITEM.map((item, index) => (
        <t.ToggleItem
          key={index}
          onClick={() => handleToggleClick(index, item.link)}
          selected={selected === index}
        >
          {item.title}
        </t.ToggleItem>
      ))}
    </t.ToggleContainer>
  );
};
