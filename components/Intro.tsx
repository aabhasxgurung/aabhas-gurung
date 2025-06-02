"use client";

import React from "react";

import Paragraph from "./ui/Word";
import Link from "next/link";

const paragraph =
  "I enable Brands, Businesses and entrepreneurs to transform visisons into captivating experiences, all designed with the users at the helm";

const Intro = () => {
  return (
    <div className="flex items-end flex-col gap-[130px] justify-end pt-[233px] px-4 lg:pt-[260px] lg:pr-[60px] pb-[130px] lg:pl-0 w-full">
      <div className="flex flex-col justify-end items-center overflow-hidden">
        <div className="flex flex-col flex-wrap gap-3 items-start  justify-start relative">
          <div className="max-w-[1053px] relative p-0">
            <h6 className="font-robotomono text-[16px] text-secondary">
              [Quick Intro]
            </h6>{" "}
            <Paragraph paragraph={paragraph} />
          </div>
          <div className="pt-20 gap-[30px] flex flex-col justify-center items-start">
            <div className="w-[299px] break-words">
              <p className="font-robotomono text-sm text-secondary">
                I’m Aabhas Gurung a frontend developer who turns complex ideas
                into pixel-perfect UIs with Next.js, TypeScript, and Tailwind
                CSS. I jump into design when it counts, crafting thoughtful
                visuals that bring code to life.
              </p>
            </div>
            <div className="w-[255px] ">
              <Link href="/about">
                <p className="font-robotomono text-sm text-secondary uppercase">
                  <strong>Read my story and services</strong>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
