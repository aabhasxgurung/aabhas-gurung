// components/RotatingTextCircle.tsx
"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  size?: number; // diameter in px
  speed?: number; // seconds per revolution
  initialDeg?: number; // starting rotation angle
}

export const RotatingTextCircle: React.FC<Props> = ({
  // size = 80,
  speed = 15,
  initialDeg = -260.431,
}) => {
  const [size, setSize] = useState(80);
  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if (width < 640) setSize(60); // mobile
      else if (width < 1024) setSize(80); // tablet
      else setSize(120); // desktop
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <motion.div
      className="relative flex justify-center items-center overflow-visible box-border"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        padding: `${size / 2}px`,
        perspective: 1200,
        willChange: "transform",
        transformOrigin: "center center",
      }}
      initial={{ rotate: initialDeg }}
      animate={{ rotate: initialDeg + 360 }}
      transition={{ repeat: Infinity, ease: "linear", duration: speed }}
    >
      <div
        className="aspect-square"
        style={{ width: `${size * 0.39}px` }} // ~78px if size=200
      >
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full overflow-visible"
          style={{ transformOrigin: "center center", willChange: "transform" }}
        >
          <defs>
            <path
              id="circlePath"
              d="
                M50,50 
                m-45,0 
                a45,45 0 1,1 90,0 
                a45,45 0 1,1 -90,0
              "
              fill="none"
            />
          </defs>

          {/* Top label sits at 0% offset */}
          <text
            fill="#F5EECB"
            fontFamily="Koulen, sans-serif"
            fontSize="32"
            letterSpacing="0.5"
          >
            <textPath href="#circlePath" startOffset="0%" textAnchor="start">
              AABHAS • FOLIO 2K25 •
            </textPath>
          </text>
        </svg>
      </div>
    </motion.div>
  );
};
