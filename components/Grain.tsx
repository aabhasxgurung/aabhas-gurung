// components/Grain.tsx
import React from "react";

export function Grain() {
  return (
    // covers the entire viewport, non-interactive, very low opacity
    <div
      className="
        fixed inset-0
        pointer-events-none
        z-[1]
        bg-[url('/grain.png')]
        bg-repeat
        opacity-5
      "
    />
  );
}
