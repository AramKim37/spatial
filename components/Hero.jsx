import React from "react";
import BottomBar from "./BottomBar";
import Header from "./Header";

const Hero = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <div className="w-[500px] h-[500px] bg-gray-500 spatial">
        <Header />
      </div>
      <BottomBar />
    </div>
  );
};

export default Hero;
