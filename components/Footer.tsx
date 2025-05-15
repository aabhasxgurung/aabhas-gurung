import React from "react";
import "./style.css";

import FooterContent from "./ui/FooterContent";

const Footer = () => {
  return (
    <div
      className="relative h-[100vh]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-[100vh] w-full">
        <FooterContent />
      </div>
    </div>
  );
};

export default Footer;
