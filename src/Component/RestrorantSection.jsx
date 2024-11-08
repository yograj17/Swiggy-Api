import { useContext } from "react";
import { MainDataContext } from "../utils/DataContext";
import { FcRating } from "react-icons/fc";
import { Link } from "react-router-dom";

const RestrorantSection = () => {
  let { RestrorantSectiondata, RestrorantSectionHeadingdata } =
    useContext(MainDataContext);

  let Restaurants =
    RestrorantSectiondata?.gridElements?.infoWithStyle?.restaurants;

  return (
    <div className=" w-9/12 m-auto px-2 flex flex-col gap-3">
      <div className=" text-2xl font-sans font-bold  h-12">
        {RestrorantSectionHeadingdata}
      </div>
      <div className=" flex flex-wrap justify-center gap-8">
        {Restaurants?.map((key) => {
          return (
            <Link
              to={`/restaurants/${key?.info.id}`}
              key={key?.info.id}
              className=" h-72 w-64 hover:scale-95 transition-all cursor-pointer "
            >
              <div
                className=" h-3/5 bg-cover bg-center rounded-2xl"
                style={{
                  backgroundImage: `url(
                  https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${key?.info?.cloudinaryImageId}
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
                <div className="text-lg font-bold whitespace-nowrap overflow-hidden">
                  {key?.info?.name}
                </div>
                <div className="flex  text-base font-semibold justify-start items-center gap-2  text-black ">
                  <FcRating />
                  {`${key?.info?.avgRatingString} - ${key?.info?.sla?.slaString}`}
                </div>
                <div className="overflow-hidden font-semibold text-gray-500 whitespace-nowrap">
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
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RestrorantSection;
