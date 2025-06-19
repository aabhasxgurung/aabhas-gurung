import React from "react";
import "./style.css";

const skills = [
  {
    title: "Language & Tools",
    language: [
      "TypeScript",
      "JavaScript",
      "CSS",
      "Git",
      "python",
      "SQL",
      "Java",
    ],
  },
  {
    title: "Frameworks & Libraries",
    language: [
      "Next Js",
      "React",
      "Node.js",
      "TailwindCSS",
      "Bootstrap",
      "Framer Motion",
      "GSAP",
    ],
  },
];

const Skills = () => {
  return (
    <section className="section-padding sm:pb-[10em] pb-[5em] rounded-b-3xl md:pt-[15vh] px-2 lg:px-10">
      <div className="custom-grid text-secondary">
        <h2 className="text-[7vw] font-koulen relative z-30 flex w-full flex-col col-span-full leading-none mix-blend-exclusion lg:col-span-8 lg:col-end-7 mt-[1em] mb-[1em] order-2 md:order-1">
          <span>DEVELOPER</span>
          <span className="font-pinyonscript italic text-accent">designer</span>
          <span>CREATOR</span>
        </h2>
        <div className="relative z-0 lg:col-span-6 col-span-full flex  w-full items-center overflow-clip rounded-md  md:items-end order-1 md:order-2">
          <section className="self-start md:px-6 py-5 c370:px-3 px-0 w-full">
            <div className="max-w-6xl mx-auto">
              <h2 className="mb-8 text-[7vw] font-koulen text-center">
                Skills
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-2 sm:gap-1 gap-0 md:gap-5 md:p-5 sm:p-1 p-0">
                {skills.map((item) => (
                  <div className="lg:p-2 p-0 transition self-start font-koulen">
                    <h3 className="hidden md:flex text-2xl font-semibold mb-4">
                      {item.title}
                    </h3>
                    <ul className="space-y-3 text-[16px] font-robotomono">
                      {item.language.map((items) => (
                        <li>{items}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Skills;
