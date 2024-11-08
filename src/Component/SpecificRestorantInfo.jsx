import React, { useContext, useEffect } from "react";
import { MainDataContext } from "../utils/DataContext";
import { FcRating } from "react-icons/fc";
import { IoBicycle } from "react-icons/io5";
import SpecificRestroRecomandation from "./SpecificRestroRecomandation";
import { useParams } from "react-router-dom";

const SpecificRestorantInfo = () => {
  const { id } = useParams();
  console.log(id);

  const { SpecificRestroFetch } = useContext(MainDataContext);

  useEffect(() => {
    SpecificRestroFetch(id);
  }, []);

  let { SpecificRestroData } = useContext(MainDataContext);

  let Heading = SpecificRestroData[0]?.card?.card?.text;
  let Discription = SpecificRestroData[2]?.card?.card?.info;
  let Offers =
    SpecificRestroData[3]?.card?.card?.gridElements?.infoWithStyle?.offers;
  let TopPicks =
    SpecificRestroData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.carousel;

  let RecomendatoinSection =
    SpecificRestroData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  let Type =
    SpecificRestroData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.["@type"];

  let ItemCategory = RecomendatoinSection?.filter((key) => {
    if (key?.card?.card?.["@type"] === Type) {
      return key;
    }
  });

  return (
    <div className=" w-1/2 m-auto flex flex-col gap-10 mt-7">
      <div className=" h-11 text-2xl flex items-center font-bold">
        {Heading}
      </div>
      <div className=" mx-4 rounded-2xl shadow-2xl h-48 flex flex-col justify-center gap-2 px-4 border border-gray-300">
        <div className=" flex font-bold text-lg items-center gap-2">
          <FcRating />
          {`${Discription?.avgRatingString} (${Discription?.totalRatingsString}) - ${Discription?.costForTwoMessage}`}
        </div>
        <div className="">
          {Discription?.cuisines?.map((key2, index) => {
            return (
              <span
                className="text-orange-600 font-bold"
                key={index}
              >{`${key2}, `}</span>
            );
          })}
        </div>
        <div className=" mt-2 text-sm font-medium">{`Outlet ${Discription?.areaName}`}</div>
        <div className="  text-sm font-medium">
          {Discription?.sla?.slaString}
        </div>
        <div className=" flex mt-3 items-center font-medium text-gray-500 gap-2">
          <IoBicycle />
          {`${Discription?.feeDetails?.message?.replace(/<\/?b>/g, "")}`}
        </div>
      </div>
      <div className=" flex flex-col gap-3">
        <div className="text-2xl font-bold">Deals for you</div>
        <div
          className="border border-emerald-50  whitespace-nowrap overflow-scroll "
          style={{
            overflowX: "auto",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {Offers?.map((key, index) => {
            return (
              <span
                className="border border-gray-300  inline-block w-80 mr-4 rounded-2xl"
                key={index}
              >
                <div className="flex justify-start items-center gap-3">
                  <img
                    className="h-16"
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/${key?.info?.offerLogo}`}
                  />
                  <span className="text-2xl font-extrabold">
                    {key?.info?.header}
                  </span>
                </div>
              </span>
            );
          })}
        </div>
      </div>
      <div className=" mt-5 flex flex-col gap-3">
        <div className=" text-2xl font-bold">Top Picks</div>
        <div
          className=" whitespace-nowrap overflow-scroll"
          style={{
            overflowX: "auto",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {TopPicks?.map((key1) => {
            return (
              <span
                className=" rounded-lg cursor-pointer inline-block h-48 w-48 mr-5 bg-center bg-cover z-0 relative"
                style={{
                  backgroundImage: `url(https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/${key1?.creativeId})`,
                }}
                key={key1.bannerId}
              >
                <span className="z-10 bg-white h-8 w-20 inline-block absolute bottom-2 left-14 text-center pt-1 font-bold text-green-800">
                  Add
                </span>
              </span>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-7">
        {ItemCategory?.map((key, index) => {
          return <SpecificRestroRecomandation key={index} info={key} />;
        })}
      </div>
    </div>
  );
};

export default SpecificRestorantInfo;
