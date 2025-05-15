"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const link = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/works",
    title: "Works",
  },
  {
    href: "/on-the-side",
    title: "On The Side",
  },
  {
    href: "/about",
    title: "About",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-[50px] left-1/2 -translate-x-1/2  bg-[#ffffff1a] backdrop-blur-xl border border-borderC rounded-2xl overflow-hidden z-30">
      <div className="px-6 py-2 flex flex-col justify-center items-center gap-2 relative">
        <div className="flex gap-[13px] items-center justify-center">
          <div className="bg-[#2bdb00] w-3 h-3 rounded-full animate-pulse"></div>

          <div className="relative whitespace-pre w-auto">
            <p className="font-robotomono text-[15px] uppercase text-secondary">
              Available for new opportunities
            </p>
          </div>
        </div>
        <div className="w-full border-t border-borderC mx-2"></div>
        <div className="flex justify-center items-center">
          <div className="flex gap-[21px] justify-center items-center relative">
            <Link href="/" className="rounded-[10px] py-3 h-min font-koulen">
              Axbhxs
            </Link>
            <div className="border-l border-borderC h-6"></div>

            {link.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    rounded-[10px] py-3 px-[18px] h-min font-koulen transition
                    ${
                      isActive
                        ? "bg-borderC text-secondary"
                        : "hover:bg-background/30"
                    }
                  `}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
