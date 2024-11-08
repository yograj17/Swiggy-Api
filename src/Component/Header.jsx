import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoySharp } from "react-icons/io5";
import { MdOutlineAssignmentInd } from "react-icons/md";
import { GrCart } from "react-icons/gr";
import { SiSwiggy } from "react-icons/si";

const Header = () => {
  return (
    <div className="shadow-md  h-20">
      <div className="flex items-center justify-center h-full gap-3">
        <div className=" h-14 w-14 text-orange-600 hover:cursor-pointer">
          <SiSwiggy className="h-full w-full" />
        </div>
        <div className="h-6 w-60 mx-2 hover:cursor-pointer border border-black">
          Location
        </div>

        <div className="flex justify-center items-center h-10 w-44 font-bold text-gray-800 gap-2 hover:cursor-pointer hover:text-orange-600">
          <FiShoppingBag className="h-5 w-5" />
          Swiggy Corporate
        </div>
        
        <div className="flex justify-center items-center h-10 w-32 font-bold text-gray-800 gap-2  hover:text-orange-600">
          <IoMdSearch className="h-5 w-5" />
          Search
        </div>
        <div className="flex justify-center items-center h-10 w-32 font-bold text-gray-800 gap-2 hover:text-orange-600">
          <BiSolidOffer className="h-5 w-5" /> Offers
          <sup className="h-1 text-yellow-600">NEW</sup>
        </div>
        <div className="flex justify-center items-center h-10 w-32 font-bold text-gray-800 gap-2 hover:text-orange-600">
          <IoHelpBuoySharp className="h-5 w-5" />
          Help
        </div>
        <div className="flex justify-center items-center h-10 w-32 font-bold text-gray-800 gap-2 hover:text-orange-600">
          <MdOutlineAssignmentInd className="h-5 w-5" />
          Sign In
        </div>
        <div className="flex justify-center items-center h-10 w-32 font-bold text-gray-800 gap-2 hover:text-orange-600">
          <GrCart className="h-5 w-5" />
          Cart
        </div>
      </div>
    </div>
  );
};

export default Header;
