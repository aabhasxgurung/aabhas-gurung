import React from "react";

interface HeadlineProps {
  title: string;
}

const Headline: React.FC<HeadlineProps> = ({ title }) => {
  return (
    <div className="flex gap-5 p-5 relative w-full justify-center items-center z-20">
      <div>
        <p className="text-xs font-koulen text-secondary">{title}</p>
      </div>
      <div className="relative overflow-visible flex-[1_0_0px] w-[1px] h-min aspect-[1189/1] bg-secondary"></div>
      <div>
        <p className="text-xs font-koulen text-secondary">© 2025</p>
      </div>
    </div>
  );
};

export default Headline;
