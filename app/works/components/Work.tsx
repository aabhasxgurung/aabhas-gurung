import React from "react";
import "../work.css";
import Link from "next/link";
import Image from "next/image";
import { Projects } from "@/constnts/project";
const Work = () => {
  return (
    <div className="pt-[40px] w-full px-6 pb-[70px]">
      <div className="pt-12 pb-8">
        <p className="text-secondary font-koulen work-text">
          Collection <span className="font-pinyonscript text-accent ">of</span>{" "}
          Work
        </p>
      </div>
      <div className="pt-10 flex flex-wrap justify-center items-center gap-5">
        {Projects.map((item) => (
          <div key={item.name}>
            <Link
              href=""
              className="md:w-[854px] md:h-[700px] overflow-hidden relative cursor-pointer group rounded-md"
            >
              <div className="md:w-[854px] md:h-[700px] relative overflow-hidden rounded-md">
                <Image
                  src={item.bg}
                  width={854}
                  height={900}
                  alt=""
                  className="object-cover w-[854px] h-[700px] transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[575px]">
                  <Image
                    src={item.image}
                    width={200}
                    height={200}
                    alt=""
                    className="w-[675px] h-[400px]"
                  />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
