import React from "react";
import RestroChain from "../RestroChain";
import WhatInMind from "../WhatInMind";
import RestrorantSection from "../RestrorantSection";

function Home() {
  return (
    <div className="flex flex-col gap-10">
      <WhatInMind />
      <RestroChain />
      <RestrorantSection />
    </div>
  );
}

export default Home;
