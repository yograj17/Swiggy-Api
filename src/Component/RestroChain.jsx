import { useContext, useRef } from "react";
import { MainDataContext } from "../utils/DataContext";
import { FaCaretLeft } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
import { FcRating } from "react-icons/fc";

const RestroChain = () => {
  let { RestroChaindata } = useContext(MainDataContext);
  let heading = RestroChaindata?.header?.title;
  let Restarant = RestroChaindata?.gridElements?.infoWithStyle?.restaurants;

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
    <div className=" w-9/12 m-auto px-3 h-96  flex flex-col justify-center">
      <div className=" h-14 flex justify-between">
        <div className="  text-2xl font-sans font-bold ">{heading}</div>
        <div className="  flex w-36 justify-center items-center gap-4">
          <FaCaretLeft
            className=" h-8 w-8 cursor-pointer"
            onClick={scrollLeft}
          />
          <FaCaretRight
            className=" h-8 w-8 cursor-pointer"
            onClick={scrollRight}
          />
        </div>
      </div>
      <div
        className="  overflow-x-auto overflow-y-hidden h-80 snap-x whitespace-nowrap"
        ref={scrollRef}
        style={{
          overflowX: "auto",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {Restarant?.map((key) => {
          return (
            <span
              key={key?.info?.id}
              className=" inline-block  w-72 h-80  snap-center mr-10 transition-all cursor-pointer"
            >
              <div
                className=" h-3/5 bg-cover bg-center rounded-2xl"
                style={{
                  backgroundImage: `url(
                    https:media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${key?.info?.cloudinaryImageId}
                  )`,
                }}
              >
                <div className="h-full w-full bg-gradient-to-b from-gray-400/0  via-gray-400/0 to-gray-900/100 relative">
                  <h1 className="absolute text-white bottom-2 font-extrabold text-2xl left-2">
                    {`${key?.info?.aggregatedDiscountInfoV3?.header} ${key?.info?.aggregatedDiscountInfoV3?.subHeader}`}
                  </h1>
                </div>
              </div>
              <div className="  h-2/5 mx-2">
                <div className="text-lg font-bold">{key?.info?.name}</div>
                <div className="flex  text-base font-semibold justify-start items-center gap-2  text-black ">
                  <FcRating />
                  {`${key?.info?.avgRatingString} - ${key?.info?.sla?.slaString}`}
                </div>
                <div className="overflow-hidden font-semibold text-gray-500">
                  {key?.info?.cuisines?.map((key1, index) => {
                    return (
                      <span className="" key={index}>
                        {key1},
                      </span>
                    );
                  })}
                </div>
                <div className="font-semibold text-gray-500">
                  {key?.info?.areaName}
                </div>
              </div>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default RestroChain;
