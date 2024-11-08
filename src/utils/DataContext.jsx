import { createContext, useState } from "react";
import { MainApi, SpecificRestro } from "./AllApi";

export let MainDataContext = createContext();

function MainDataFunction({ children }) {
  let [Maindata, setMaindata] = useState("");
  let [WhatInMinddata, setWhatInMinddata] = useState("");
  let [RestroChaindata, setRestroChaindata] = useState("");
  let [RestrorantSectiondata, setRestrorantSectiondata] = useState("");
  let [RestrorantSectionHeadingdata, setRestrorantSectionHeadingdata] =
    useState("");
  let [RestrorantSectionFillterdata, setRestrorantSectionFillterdata] =
    useState("");

  let [SpecificRestroData, setSpecificRestroData] = useState("");

  async function MainApiFetch() {
    let Data = await fetch(MainApi);
    let Json = await Data.json();
    setMaindata(Json?.data?.cards);
    setWhatInMinddata(Json?.data?.cards[0]?.card?.card);
    setRestroChaindata(Json?.data?.cards[1]?.card?.card);
    setRestrorantSectiondata(Json?.data?.cards[4]?.card?.card);
    setRestrorantSectionHeadingdata(Json?.data?.cards[2]?.card?.card?.title);
    setRestrorantSectionFillterdata(Json?.data?.cards[3]?.card?.card);
  }

  async function SpecificRestroFetch(id) {
    let data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    let json = await data.json();
    setSpecificRestroData(json?.data?.cards);
  }

  let value = {
    MainApiFetch,
    Maindata,
    setMaindata,
    WhatInMinddata,
    setWhatInMinddata,
    RestroChaindata,
    setRestroChaindata,
    RestrorantSectiondata,
    RestrorantSectionHeadingdata,
    RestrorantSectionFillterdata,
    SpecificRestroData,
    SpecificRestroFetch,
  };

  return (
    <MainDataContext.Provider value={value}>
      {children}
    </MainDataContext.Provider>
  );
}
export default MainDataFunction;
