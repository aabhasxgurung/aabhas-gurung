import { Projects } from "@/constnts/project";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SelecedWork = () => {
  return (
    <>
      <div className="w-[96%] mx-auto h-min lg:h-[100vh] relative">
        <div className="flex flex-col items-center gap-[138px] h-[91%] lg:pt-4 w-full justify-center">
          <div className="lg:pt-11 px-2 lg:px-6 h-[30%] relative">
            <p className="selected-work-text text-[350px] font-koulen text-secondary leading-[90%] text-center">
              selected work
            </p>
            <div className="absolute left-1/2 -translate-x-1/2 top-[118%]">
              <p className="text-center font-pinyonscript italic leading-[10%] text-[32px] md:text-[69px] lg:text-[120px] text-accent ">
                featured
              </p>
            </div>
          </div>
          <div className="h-[61%] gap-8 flex flex-col lg:flex-row items-center justify-center px-8 pb-6 w-full">
            {Projects.slice(0, 2).map((item) => (
              <div key={item.id} className="">
                <Link
                  href={`/works/${item.slug}`}
                  className="group flex flex-col items-start gap-[10px] justify-center p-0 cursor-pointer"
                >
                  {/* Category Tag */}
                  <p className="text-start font-robotomono text-secondary text-sm">
                    {item.name}
                  </p>

                  {/* Image Container */}
                  <div className="relative w-[calc(100vw_-_32px)] lg:w-[calc(50vw_-_32px)] max-w-[873px]  h-[421px] overflow-hidden rounded-lg transition-transform duration-500 ease-out group-hover:scale-[98%]">
                    {/* Static base image */}
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover w-full h-full"
                    />

                    {/* Dark overlay */}
                    <div className="hidden md:block absolute inset-0 bg-black bg-opacity-30 transition-transform duration-500 ease-out opacity-0 group-hover:opacity-50 " />

                    {/* Slide-in hover image */}
                    <div className="hidden md:block absolute left-1/2 w-[655px] h-[295px] top-0 -translate-x-1/2 -translate-y-full transition-all duration-500 group-hover:top-1/2 group-hover:-translate-y-1/2 ease-out">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={873}
                        height={421}
                        className="object-cover rounded-lg w-[655px] h-[295px]"
                      />
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex w-full justify-between text-sm font-robotomono text-secondary">
                    <span>{item.work}</span>
                    <span>Website</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full gap-[39px] md:gap-[65px] pt-[68px] px-4 lg:px-6 pb-[177px] flex flex-col justify-start items-center">
        <div className="w-[80%] lg:w-[46%] flex items-center justify-center relative">
          <p className="font-robotomono text-sm text-secondary text-center">
            IMMERSIVE EXPERIENCES UNIQUELY CREATED BASED ON USERS-INSIGHTS AND
            DESIGN THINKING METHODOLOGIES. ALWAYS SETTING YOU APART FROM THE
            INDUSTRY.
          </p>
        </div>
        <div>
          <Link
            href="/works"
            className="relative inline-block overflow-hidden group"
          >
            {/* Text */}
            <div className="pt-[4px]">
              <p
                className="z-20 relative font-koulen leading-[80%] text-[35px] md:text-[60px] text-secondary
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
