import React from "react";
import { RotatingTextCircle } from "./ui/RotatingCirlce";

const exp = [
  {
    title: "Freelancer",
    desc: "Helping Brands Grow",
    time: "2024-Now",
  },
  {
    title: "Frontend Developer",
    desc: "Helping Brands Grow",
    time: "2023-2024",
  },
  {
    title: "Internship",
    desc: "Helping Brands Grow",
    time: "2023-2023",
  },
];

const Experience = () => {
  return (
    <div>
      <div className="relative w-full items-start justify-start px-6 flex flex-col overflow-hidden bg-background lg:pt-[50px]">
        <div className="items-end flex gap-[10px] justify-start w-full relative bg-background">
          <div className=" flex flex-1 flex-col">
            <div className="pb-[22px]">
              <p className="text-sm text-secondary font-robotomono uppercase">
                [my second family]
              </p>
            </div>
            <div>
              <div>
                <h3 className="text-[65px] lg:text-[10.3vw] text-secondary font-koulen leading-[0.9em]">
                  My{" "}
                  <span className="text-accent font-pinyonscript italic">
                    work
                  </span>
                </h3>
              </div>
              <div>
                <h3 className="text-[65px] lg:text-[10.3vw] text-secondary font-koulen leading-[0.9em]">
                  Stories
                </h3>
              </div>
            </div>
          </div>
          <div className="w-[70px] h-[90px] md:w-[127px] md:h-[127px]">
            <RotatingTextCircle />
          </div>
        </div>
        <div className="py-2 md:py-[50px] flex flex-col gap-[10px] md:gap-5 w-full">
          {exp.map((item) => (
            <>
              <div className="relative overflow-visible flex-[1_0_0px] w-[1px] h-min aspect-[1189/1] bg-secondary"></div>
              <div className="flex justify-between items-center w-full">
                <div className="flex flex-col gap-[6px] max-w-[53%]">
                  <h4 className="text-[35px] lg:text-[85px] leading-[0.9em] font-koulen text-secondary line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-sm font-robotomono">{item.desc}</p>
                </div>
                <div className="flex flex-col justify-start">
                  <h4 className="text-[35px] lg:text-[85px] font-koulen text-secondary leading-[0.9em]">
                    {item.time}
                  </h4>
                  <div className="flex gap-[10px] items-start justify-start">
                    <div className="text-sm font-robotomono text-secondary uppercase text-start flex items-center justify-start gap-[10px]">
                      Nepal{" "}
                      <div className="w-[10px] relative z-30 h-[10px] bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
