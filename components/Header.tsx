import React from "react";
import "./style.css";

const Header = () => {
  return (
    <header className="flex flex-col justify-center items-center h-min pt-[2px] px-10 relative overflow-hidden w-full z-20">
      <div className="flex flex-col h-min items-center justify-end overflow-visible w-[107%] relative">
        <div className="w-[99%] pt-[13px] flex flex-col items-center justify-center whitespace-pre z-10">
          <div className="w-[98%] h-auto">
            <p className="text-headline-fluid text-[350px] font-koulen text-secondary leading-[90%] text-center">
              hunting <span className="font-pinyonscript text-accent">for</span>{" "}
              My
            </p>
          </div>
        </div>
        <div className="w-[99%] pt-[13px] flex flex-col items-center  justify-center whitespace-pre">
          <p className="text-headline-fluid-sub text-[328px] font-koulen text-secondary text-center leading-[70%]">
            Dream Porsche
          </p>
        </div>
      </div>
      <div className="flex gap-[10px] pt-6 overflow-hidden w-[102%] items-center justify-start">
        <div className="bg-[#2bdb00] w-3 h-3 rounded-full animate-pulse"></div>
        <div className="flex flex-col justify-start z-10 w-full">
          <h6 className="font-robotomono text-secondary text-[16px] uppercase">
            Currently a frontend developer supporting designers and agenices
            with creative development{" "}
          </h6>
        </div>
      </div>
    </header>
    // <header className="relative w-screen h-screen overflow-hidden">
    //   <div
    //     className="
    //       absolute inset-0 w-full
    //       flex flex-col overflow-hidden
    //       [will-change:transform] [transform:perspective(1200px)]
    //       opacity-100 z-10
    //     "
    //   >
    //     <p className="text-headline-fluid font-koulen text-secondary leading-[90%] text-center">
    //       HUNTING <span className="font-pinyonscript text-accent">for</span> My
    //     </p>
    //     <p className="text-headline-fluid font-koulen text-secondary text-center leading-[70%]">
    //       Dream Porsche
    //     </p>
    //   </div>
    // </header>
  );
};

export default Header;
