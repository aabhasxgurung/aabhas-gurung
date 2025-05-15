// components/RotatingTextCircle.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  size?: number; // diameter in px
  speed?: number; // seconds per revolution
  initialDeg?: number; // starting rotation angle
}

export const RotatingTextCircle: React.FC<Props> = ({
  size = 80,
  speed = 15,
  initialDeg = -260.431,
}) => {
  return (
    <motion.div
      className="relative flex justify-center items-center overflow-visible box-border"
      style={{
        width: size,
        height: size,
        padding: size / 2, // replicate your 100px padding
        perspective: 1200,
        willChange: "transform",
        opacity: 1,
        transformOrigin: "center center",
      }}
      initial={{ rotate: initialDeg }}
      animate={{ rotate: initialDeg + 360 }}
      transition={{ repeat: Infinity, ease: "linear", duration: speed }}
    >
      <div
        className="aspect-square"
        style={{ width: size * 0.39 }} // ~78px if size=200
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
