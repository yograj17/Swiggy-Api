import { useContext, useRef } from "react";
import { MainDataContext } from "../utils/DataContext";
import { FaCaretLeft } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";

const WhatInMind = () => {
  let { WhatInMinddata } = useContext(MainDataContext);
  let heading = WhatInMinddata?.header?.title;
  let AllCards = WhatInMinddata?.gridElements?.infoWithStyle?.info;

  const scrollRef = useRef(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 500, behavior: "smooth" });
    }
  };
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -500,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className=" w-9/12 m-auto px-3 h-64 flex flex-col justify-center">
      <div className=" h-14 flex justify-between">
        <div className=" text-2xl font-sans font-bold ">{heading}</div>
        <div className=" flex w-36 justify-center items-center gap-4">
          <FaCaretLeft
            className="h-8 w-8 cursor-pointer"
            onClick={scrollLeft}
          />
          <FaCaretRight
            className="h-8 w-8 cursor-pointer"
            onClick={scrollRight}
          />
        </div>
      </div>
      <div
        className=" overflow-x-auto overflow-y-hidden h-48 snap-x whitespace-nowrap"
        ref={scrollRef}
        style={{
          overflowX: "auto",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {AllCards?.map((key) => {
          return (
            <span key={key.id} className="inline-block  w-48 h-48  snap-center">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${key?.imageId}`}
                className="h-full w-full "
              />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default WhatInMind;
