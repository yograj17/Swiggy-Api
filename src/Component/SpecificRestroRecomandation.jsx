import React, { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { BiFoodTag } from "react-icons/bi";
import { IoPricetag } from "react-icons/io5";
import { MdOutlineStar } from "react-icons/md";

const SpecificRestroRecomandation = ({ info }) => {
  let heading = info?.card?.card?.title;
  let [Info, setInfo] = useState(false);

  return (
    <div className="w-full m-auto ">
      <div className="shadow-lg font-bold flex justify-between text-base  h-12 items-center px-3">
        {`${heading} (${info?.card?.card?.itemCards.length})`}
        <IoIosArrowDropdown
          className=" cursor-pointer h-6 w-6"
          onClick={() => setInfo((pre) => !pre)}
        />
      </div>
      {Info == true ? (
        <div className="flex flex-col ">
          {info?.card?.card?.itemCards?.map((key) => {
            return (
              <div className="border-b border-gray-400 h-52 py-6 px-3 relative">
                {key?.card?.info?.itemAttribute?.vegClassifier === "NONVEG" ? (
                  <BiFoodTag className="text-red-700 h-6 w-6" />
                ) : (
                  <BiFoodTag className="text-green-700 h-6 w-6" />
                )}
                <div className="text-xl font-bold text-gray-600">
                  {key?.card?.info?.name}
                </div>
                <div className="flex  h-9 items-center">
                  <span className="font-bold">
                    {key?.card?.info?.defaultPrice >= 0 ? (
                      <>₹ {key?.card?.info?.defaultPrice / 100}</>
                    ) : (
                      <>₹ {key?.card?.info?.price / 100}</>
                    )}
                  </span>
                </div>
                {key?.card?.info?.ratings?.aggregatedRating?.rating >= 1 ? (
                  <div className=" flex items-center gap-1 font-semibold">
                    <MdOutlineStar className="text-green-700 h-4 w-4" />
                    <span>
                      {key?.card?.info?.ratings?.aggregatedRating?.rating}
                    </span>
                    {` (${key?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})`}
                  </div>
                ) : (
                  false
                )}
                <div className="w-2/3 text-gray-500 font-medium">
                  {key?.card?.info?.description}
                </div>

                <div
                  className=" h-44 w-44 absolute right-6 top-4  bg-cover bg-center rounded-xl"
                  style={{
                    backgroundImage: `url(https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${key?.card?.info?.imageId})`,
                  }}
                >
                  <div className="flex justify-center items-end pb-4 w-full h-full bg-gradient-to-b from-gray-400/0  via-gray-400/0 to-gray-900/100 rounded-xl">
                    <div className="bg-white  h-9 w-16 flex justify-center items-center font-semibold text-green-600 cursor-pointer rounded-xl">
                      ADD
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        false
      )}
    </div>
  );
};

export default SpecificRestroRecomandation;
