import { Projects } from "@/constnts/project";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SelecedWork = () => {
  return (
    <>
      <div className="w-[96%] mx-auto h-[100vh] relative">
        <div className="flex flex-col items-center gap-[138px] h-[91%] pt-4 w-full justify-center">
          <div className="pt-11 px-6 h-[30%] relative">
            <p className="selected-work-text text-[350px] font-koulen text-secondary leading-[90%] text-center">
              selected work
            </p>
            <div className="absolute left-1/2 -translate-x-1/2 top-[118%]">
              <p className="text-center font-pinyonscript leading-[10%] text-[120px] text-accent ">
                featured
              </p>
            </div>
          </div>
          <div className="h-[61%] gap-8 flex items-center justify-center px-8 pb-6 w-full">
            {Projects.slice(0, 2).map((item) => (
              <div key={item.id} className="flex-[1 0 0px] h-full">
                <Link
                  href={"#"}
                  className="group flex flex-col items-start gap-[10px] justify-center p-0 cursor-pointer"
                >
                  {/* Category Tag */}
                  <p className="text-start font-robotomono text-secondary text-sm">
                    [UI/UX , Development]
                  </p>

                  {/* Image Container */}
                  <div className="relative w-[873px] h-[421px] overflow-hidden rounded-lg transition-transform duration-500 ease-out group-hover:scale-[98%]">
                    {/* Static base image */}
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-30 transition-transform duration-500 ease-out opacity-0 group-hover:opacity-50 " />

                    {/* Slide-in hover image */}
                    <div className="absolute left-1/2 w-[655px] h-[295px] top-0 -translate-x-1/2 -translate-y-full transition-all duration-500 group-hover:top-1/2 group-hover:-translate-y-1/2 ease-out">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={873}
                        height={421}
                        className="object-cover rounded-lg w-[655px] h-[295px]"
                      />
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex w-full justify-between text-sm font-robotomono text-secondary">
                    <span>{item.title}</span>
                    <span>Website</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full gap-[65px] pt-[68px] px-6 pb-[177px] flex flex-col justify-start items-center">
        <div className="w-[46%] flex items-center justify-center relative">
          <p className="font-robotomono text-sm text-secondary text-center">
            IMMERSIVE EXPERIENCES UNIQUELY CREATED BASED ON USERS-INSIGHTS AND
            DESIGN THINKING METHODOLOGIES. ALWAYS SETTING YOU APART FROM THE
            INDUSTRY.
          </p>
        </div>
        <div>
          <Link
            href="/work"
            className="relative inline-block overflow-hidden group"
          >
            {/* Text */}
            <div className="pt-[4px]">
              <p
                className="z-20 relative font-koulen leading-[80%] text-[60px] text-secondary
                   transition-colors duration-300 ease-out
                   group-hover:text-background"
              >
                View all Work
              </p>
            </div>

            {/* Sliding background bar */}
            <div
              className="absolute inset-x-0 bottom-0 h-full
        bg-background z-10
        transform
        transition-all
        duration-500 ease-in-out
        translate-y-full
        group-hover:translate-y-0
        group-hover:bg-white"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default SelecedWork;
