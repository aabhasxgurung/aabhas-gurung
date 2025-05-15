import Link from "next/link";
import React from "react";
import { FaArrowUp } from "react-icons/fa";

const links = [
  {
    name: "email",
    link: "/",
  },
  {
    name: "linkedin",
    link: "/",
  },
  {
    name: "Instagram",
    link: "/",
  },
];

const FooterContent = () => {
  return (
    <div className="items-center flex flex-col h-[100vh] justify-start pt-10 px-[26px] pb-4 relative w-full">
      <div className="flex bg-accent rounded-2xl gap-[10px] flex-1 flex-col overflow-hidden w-full will-change-transform">
        <div className="pt-[30px] px-6 flex flex-col items-center justify-center">
          <p className="font-koulen leading-[80%] text-background text-[121px] selected-work-text">
            Come <span className="font-pinyonscript">say</span> hello
          </p>
        </div>
        <div className="items-end flex justify-between flex-1 pt-[30px] px-6 pb-6 w-full relative">
          <div className="items-start flex flex-col justify-start gap-[10px] ">
            {links.map((item) => (
              <div className="group relative overflow-hidden" key={item.name}>
                <Link href={item.link}>
                  <div className="z-20 relative">
                    <p
                      className="font-koulen text-background text-[60px] leading-[80%] transition-colors duration-300 ease-out
                    group-hover:text-accent"
                    >
                      {item.name}
                    </p>
                  </div>
                  <div
                    className="absolute inset-x-0 bottom-0 h-full
        bg-background z-10
        transform
        transition-all
        duration-500 ease-in-out
        translate-y-full
        group-hover:translate-y-0
        group-hover:bg-background"
                  />
                </Link>
              </div>
            ))}
          </div>
          <div className="w-[60px] h-[60px] relative cursor-pointer rounded-full">
            <div className="bg-background h-full w-full rounded-full flex justify-center items-center">
              <FaArrowUp size={28} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContent;
