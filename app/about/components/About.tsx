import { RotatingTextCircle } from "@/components/ui/RotatingCirlce";
import Image from "next/image";
import React from "react";
import "./about.css";

const services = [
  {
    number: "i.",
    title: "UI / VISUAL DESIGN",
  },
  {
    number: "ii.",
    title: "Building high-converting, sales-focused webistes",
  },
  {
    number: "iii.",
    title: "Designing captivating animations",
  },
  {
    number: "iv.",
    title: "Optimizing interfaces for enhanced user interaction.",
  },
];

const clients = [
  {
    name: "DrinkIt",
    img: "",
  },
  {
    name: "Orama Studios",
    img: "",
  },
  {
    name: "Hearing Solutions",
    img: "",
  },
  {
    name: "Aplha Pictures Nepal",
    img: "",
  },
  {
    name: "Lamor.Np",
    img: "",
  },
];

const exp = [
  {
    title: "Freelancer",
    desc: "Helping Brands Grow",
    time: "2024-Now",
  },
  {
    title: "Frontend Developer",
    desc: "Helping Brands Grow",
    time: "2023-2024",
  },
  {
    title: "Internship",
    desc: "Helping Brands Grow",
    time: "2023-2023",
  },
];

const About = () => {
  return (
    <div>
      <div className="pt-[31px] md:pt-[53px] px-4 md:px-[40px] w-full text-[137px] text-about-heading">
        <div className="pt-[7px] pb-[3px] md:pl-20">
          <h3 className="font-koulen text-secondary leading-[0.9em] ">
            Interactive front-end developer
          </h3>
        </div>
        <div className="pt-[7px]">
          <h3 className="font-koulen text-secondary leading-[0.9em]">
            <span className="text-accent font-pinyonscript italic">born</span>{" "}
            and{" "}
            <span className="text-accent font-pinyonscript italic">based</span>{" "}
            in nepal
          </h3>
        </div>
        <div></div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row w-full pt-[35px] md:pt-[50px] px-4 md:px-[40px] pb-[50px] gap-[41px] justify-end items-end">
        {/* 1st column (empty placeholder) */}
        <div className="flex-1"></div>

        {/* 2nd column (text content) */}
        <div className="flex-1 flex flex-col gap-[30px] pt-5">
          <div className="whitespace-pre">
            <p className="text-sm text-secondary font-robotomono capitalize">
              [background]
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-5">
            <h3 className="text-[32px] md:text-[52px] text-secondary font-koulen leading-[0.9em]">
              2k25 • Folio of Aabhas
            </h3>
            <p className="text-secondary font-robotomono text-sm">
              Born and raised in Kathmandu, I discovered my love for code by
              tinkering with HTML and CSS in high school. Over the last two
              years, I’ve specialized in building dynamic, responsive web
              applications, with experience collaborating with designers and
              backend developers
            </p>
            <p className="text-secondary font-robotomono text-sm">
              When I’m not coding, you’ll find me exploring new animation
              libraries, capturing moments with my camera, or playing football
              with my friends.
            </p>
          </div>
        </div>

        {/* 3rd column (image) */}
        <div className="flex-1 rounded-lg overflow-hidden">
          <Image
            src="/profile.jpg"
            width={1300}
            height={1774}
            alt=""
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
      <section className="pt-10 md:pt-[70px] sticky top-0 h-[90vh] md:h-[115vh] w-full z-0">
        <div className="relative">
          <div className="flex flex-col px-4 md:px-10 lg:px-20 gap-1 justify-center items-center text-center md:text-start">
            <div className="w-[80px] h-[130px] md:w-[200px] md:h-[200px]">
              <RotatingTextCircle speed={12} initialDeg={-260.431} />
            </div>

            <div>
              <h3 className="text-about-intro text-secondary font-koulen leading-[0.9em]">
                INTERACTIVE INTERFACES
              </h3>
            </div>
            <div>
              <h3 className="text-about-intro text-secondary font-koulen leading-[0.9em]">
                POWERED BY
              </h3>
            </div>
            <div>
              <h3 className="text-about-intro text-accent font-pinyonscript italic leading-[0.9em]">
                user-insights, modern technology{" "}
                <span className="font-koulen text-secondary">and</span>
              </h3>
            </div>
            <div>
              <h3 className="text-about-intro text-accent font-pinyonscript italic leading-[0.9em]">
                <span className="font-koulen text-secondary">
                  and best practices
                </span>
              </h3>
            </div>
          </div>
        </div>
      </section>
      <div className="relative bg-background px-4 md:px-6 pb-4">
        <div className="flex flex-col gap-[10px] bg-accent rounded-xl">
          <div className="pt-[30px] px-6 flex flex-col gap-[10px]">
            <div>
              <h3 className="text-[10vw] text-background font-koulen leading-[80%]">
                Expertiese <span className="font-pinyonscript italic">and</span>
              </h3>
            </div>
            <div>
              <h3 className="text-[10vw] font-koulen leading-[80%] text-background">
                Services
              </h3>
            </div>
          </div>
          <div className="pt-[15px] pb-[45px] md:py-[79px] px-6 flex flex-col lg:flex-row gap-[17px] lg::gap-[219px] justify-start items-start w-full">
            <div className="w-full lg:w-1/4 pt-5 text-background text-[14px] font-robotomono">
              <div>
                <p className="font-koulen text-2xl">
                  Always designed with intention.
                </p>
                <br />
                <p>
                  As a Frontend Engineer with an eye for detail, my work
                  revolves around 3 primary objectives:
                </p>
                <ul className="pl-[3ch] relative font-medium">
                  <li className="list-none before:absolute before:left-0 before:content-['•']">
                    Architecting responsive UIs with Next.js, React & Tailwind
                    CSS for seamless cross-device experiences.
                  </li>
                  <li className="list-none before:absolute before:left-0 before:content-['•']">
                    Implementing smooth animations & optimizations (GSAP, Framer
                    Motion, ScrollTrigger) to keep users engaged without
                    sacrificing performance.
                  </li>
                  <li className="list-none before:absolute before:left-0 before:content-['•']">
                    To help businesses foster empathy for their users and grasp
                    their needs through the implementation of Enterprise Design
                    Thinking.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start">
              {services.map((item) => (
                <div
                  className="pt-5 flex gap-[10px] md:gap-[30px]"
                  key={item.number}
                >
                  <div>
                    <h5 className="font-koulen w-[47px] text-[27px] md:text-[1.9vw] leading-[1.3em] text-listC">
                      {item.number}
                    </h5>
                  </div>
                  <div>
                    <h5 className="text-background font-koulen leading-[0.9em] text-[35px] md:text-[4vw]">
                      {item.title}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <section className="pt-[83px] lg:pt-0 px-6 flex flex-col lg:flex-row gap-[10px] items-start justify-start w-full relative bg-background">
        <div className="relative lg:sticky lg:top-0 w-full lg:w-[60%] lg:h-[100vh] items-center flex ">
          <div className="flex flex-col gap-[10px] items-start justify-start">
            <div className="pb-[22px]">
              <p className="text-sm text-secondary leading-[1.4em] font-robotomono ">
                [SELECTED CLIENTS]
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="">
                <h3 className="text-[65px] lg:text-[9vw] leading-[0.9em] text-left font-koulen">
                  Some of{" "}
                  <span className="font-pinyonscript italic text-accent">
                    my
                  </span>
                </h3>
              </div>
              <div className="">
                <h3 className="text-[65px] lg:text-[9vw] leading-[0.9em] text-left font-koulen">
                  Good friends
                </h3>
              </div>
            </div>
            <div className="pt-5 w-full lg:w-[44%]">
              <p className="text-sm font-robotomono">
                Partnering with world leading organisations across 8 industries,
                creating best in class experiences.
              </p>
            </div>
          </div>
        </div>
        <div className="items-center grid grid-cols-2 lg:flex flex-col gap-[30px] lg:gap-[150px] justify-center pt-4 lg:pt-[385px] lg:pr-[10px] lg:pb-[410px] lg:w-[40%] relative">
          {clients.map((item) => (
            <div
              className="w-[92%] relative flex justify-center items-center"
              key={item.name}
            >
              <div className="flex rounded-2xl">
                <div className="lg:h-[206px]">
                  <p className="font-koulen text-[35px] lg:text-[70px] text-secondary text-center line-clamp-1">
                    {item.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="relative w-full items-start justify-start px-6 flex flex-col overflow-hidden bg-background pt-[122px] lg:pt-[50px]">
        <div className="items-end flex gap-[10px] justify-start w-full relative bg-background">
          <div className=" flex flex-1 flex-col">
            <div className="pb-[22px]">
              <p className="text-sm text-secondary font-robotomono uppercase">
                [my second family]
              </p>
            </div>
            <div>
              <div>
                <h3 className="text-[65px] lg:text-[10.3vw] text-secondary font-koulen leading-[0.9em]">
                  My{" "}
                  <span className="text-accent font-pinyonscript italic">
                    love
                  </span>
                </h3>
              </div>
              <div>
                <h3 className="text-[65px] lg:text-[10.3vw] text-secondary font-koulen leading-[0.9em]">
                  Stories
                </h3>
              </div>
            </div>
          </div>
          <div className="w-[70px] h-[90px] md:w-[127px] md:h-[127px]">
            <RotatingTextCircle />
          </div>
        </div>
        <div className="py-2 md:py-[50px] flex flex-col gap-[10px] md:gap-5 w-full">
          {exp.map((item) => (
            <>
              <div className="relative overflow-visible flex-[1_0_0px] w-[1px] h-min aspect-[1189/1] bg-secondary"></div>
              <div className="flex justify-between items-center w-full">
                <div className="flex flex-col gap-[6px] max-w-[53%]">
                  <h4 className="text-[35px] lg:text-[85px] leading-[0.9em] font-koulen text-secondary line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-sm font-robotomono">{item.desc}</p>
                </div>
                <div className="flex flex-col justify-start">
                  <h4 className="text-[35px] lg:text-[85px] font-koulen text-secondary leading-[0.9em]">
                    {item.time}
                  </h4>
                  <div className="flex gap-[10px] items-start justify-start">
                    <div className="text-sm font-robotomono text-secondary uppercase text-start flex items-center justify-start gap-[10px]">
                      Nepal{" "}
                      <div className="w-[10px] relative z-30 h-[10px] bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
