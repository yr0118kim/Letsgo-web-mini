import { useState } from "react";
import * as W from "./style";
import { CHANNAL_GROUP_ITEM, POST_GROUP_ITEM } from "./constant";

const WritingHeader = () => {
  const [postSelected, setPostSelected] = useState<number>(0);
  const [channalSelected, setChannalSelected] = useState<number>(0);

  const handlePostClick = (index: number) => {
    console.log(index);
    setPostSelected(index);
  };

  const handleChannalClick = (index: number) => {
    console.log(index);
    setChannalSelected(index);
  };

  return (
    <W.WritingHeaderWraper>
      {POST_GROUP_ITEM.map((item, index) => (
        <W.WritingSortButton
          key={index}
          onClick={() => handlePostClick(index)}
          selected={postSelected === index}
        >
          {item.title}
        </W.WritingSortButton>
      ))}
      {CHANNAL_GROUP_ITEM.map((item, index) => (
        <W.WritingChannelButton
          key={index}
          onClick={() => handleChannalClick(index)}
          selected={channalSelected === index}
        >
          <W.ButtonImg src={item.icon} />
        </W.WritingChannelButton>
      ))}
    </W.WritingHeaderWraper>
  );
};
export default WritingHeader;
