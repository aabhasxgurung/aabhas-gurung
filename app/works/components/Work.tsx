import React from "react";
import "../work.css";
import Link from "next/link";
import Image from "next/image";
import { Projects } from "@/constnts/project";
const Work = () => {
  return (
    <div className="md:pt-[40px] w-full px-6 pb-[70px]">
      <div className="md:pt-12 pb-8">
        <p className="text-secondary font-koulen work-text leading-[80%]">
          Collection{" "}
          <span className="font-pinyonscript text-accent italic">of</span> Work
        </p>
      </div>
      <div className="pt-10 flex flex-wrap justify-center items-center gap-8">
        {Projects.map((item) => (
          <div key={item.name}>
            <Link
              href={`/works/${item.slug}`}
              className="flex flex-col gap-[10px] w-[calc(100vw_-_32px)] lg:w-[calc(48vw_-_32px)] max-w-[873px] h-[421px] lg:h-[521px] overflow-hidden relative cursor-pointer group rounded-md"
            >
              <p className="text-start font-robotomono text-secondary text-sm">
                {item.name}
              </p>

              <div className="w-[calc(100vw_-_32px)] lg:w-[calc(48vw_-_32px)] max-w-[873px] h-[421px] lg:h-[521px] relative overflow-hidden rounded-md">
                <Image
                  src={item.bg}
                  width={854}
                  height={900}
                  alt=""
                  className="object-cover w-[calc(100vw_-_32px)] lg:w-[calc(48vw_-_32px)] max-w-[873px] h-[421px] lg:h-[521px] transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="hidden md:block md:absolute inset-0 bg-black/75 bg-opacity-30"></div>
                <div className="hidden md:block md:absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[575px]">
                  <Image
                    src={item.image}
                    width={700}
                    height={700}
                    alt=""
                    className="w-[675px] h-[400px] object-cover object-top"
                  />
                </div>
              </div>
              <div className="flex w-full justify-between text-sm font-robotomono text-secondary">
                <span>{item.work}</span>
                <span>Website</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
