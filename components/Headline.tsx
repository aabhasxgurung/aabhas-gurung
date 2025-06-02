"use client";
import React from "react";

import { usePathname } from "next/navigation";
import clsx from "clsx";

interface HeadlineProps {
  title: string;
}

const Headline: React.FC<HeadlineProps> = ({ title }) => {
  const pathname = usePathname();
  const isWorkSlugPage =
    pathname.startsWith("/works/") && pathname.split("/").length === 3;

  return (
    <div className="flex gap-5 p-5 relative w-full justify-center items-center z-20">
      <div>
        <p
          className={clsx(
            "text-xs font-koulen",
            isWorkSlugPage ? "text-primary" : "text-secondary"
          )}
        >
          {title}
        </p>
      </div>
      <div
        className={clsx(
          "relative overflow-visible flex-[1_0_0px] w-[1px] h-min aspect-[1189/1]",
          isWorkSlugPage ? "bg-primary" : "bg-secondary"
        )}
      ></div>

      <div>
        <p
          className={clsx(
            "text-xs font-koulen",
            isWorkSlugPage ? "text-primary" : "text-secondary"
          )}
        >
          © 2025
        </p>
      </div>
    </div>
  );
};

export default Headline;
