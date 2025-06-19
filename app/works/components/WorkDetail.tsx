"use client";
import { FramerMagnetic } from "@/components/MagneticButton";
import { Projects } from "@/constnts/project";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type WorkDetailProps = {
  project: (typeof Projects)[number];
};

const WorkDetail = ({ project }: WorkDetailProps) => {
  const currentIndex = Projects.findIndex((p) => p.slug === project.slug);
  const nextProject = Projects[(currentIndex + 1) % Projects.length];
  return (
    <main className="">
      <div className="flex flex-col gap-[10px] w-full justify-center items-center">
        <div className="w-full pt-[31px] pb-[61px] md:py-[100px] md:px-[40px]">
          <div className="w-full">
            <h3 className="text-primary font-koulen text-[12vw] text-center leading-[0.9em] -tracking-[1.5px]">
              {project.projTitle}
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 md:flex items-start justify-between w-full pb-6 relative">
          {project.projDets.map((detail) => (
            <div
              key={detail.det}
              className="flex flex-col gap-2 text-primary uppercase"
            >
              <p className="text-sm font-robotomono">[{detail.det}]</p>
              <h5 className="text-2xl md:text-[37px] font-koulen leading-[0.9em] -tracking-[0.2px] md:-tracking-[1.5px]">
                {detail.detName}
              </h5>
            </div>
          ))}
        </div>
        <div className="lg:h-[100vh] rounded-lg w-full overflow-hidden">
          <Image
            src={project.image}
            width={1901}
            height={1080}
            alt=""
            className="object-cover object-bottom"
          />
        </div>
      </div>
      <div className="py-[50px] md:py-[100px] w-full">
        <div>
          {project.overview.map((o) => (
            <div
              key={o.title}
              className="md:items-end justify-end flex flex-col gap-[30px]"
            >
              <div className="w-full md:w-1/2 gap-4 flex flex-col items-center md:items-start justify-center">
                <p className="text-sm text-primary font-robotomono">
                  [OVERVIEW]
                </p>
                <h5 className="text-[32px] md:text-[57px] text-primary font-koulen leading-[0.9em] text-center md:text-start w-full md:w-10/12">
                  {o.title}
                </h5>
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-primary text-sm font-robotomono text-center md:text-start w-full md:w-[70%]">
                  {o.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {project.challenges.map((items) => (
        <div
          className="py-[100px] md:h-[110vh] w-full overflow-hidden relative px-6"
          key={items.title}
        >
          <Image
            src={items.img}
            width={1900}
            height={1000}
            alt=""
            className=" md:size-[(100vw-48px)] h-full object-cover absolute inset-0 z-0"
          />
          <div className="absolute inset-0 w-full h-full bg-black bg-opacity-30 opacity-35" />
          <div className="relative w-full items-center justify-center flex flex-col">
            <div className="w-full md:w-[70%] mx-auto flex flex-col gap-4 items-center justify-center">
              <div>
                <p className="text-[16px] text-secondary font-robotomono">
                  [THE CHALLENGES]
                </p>
              </div>
              <div>
                <h1 className="text-[32px] md:text-[5vw] font-koulen text-secondary leading-[0.9em] -tracking-[1.5px] text-center">
                  {items.title}
                </h1>
              </div>
              <div className="w-full md:w-[58%] text-sm text-secondary font-robotomono text-center">
                <p>{items.desc}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="pt-[100px] md:h-[85vh] w-full flex items-center justify-center">
        {project.solution.map((sol) => (
          <div
            className="w-full md:w-[40%] flex flex-col items-center justify-center gap-4"
            key={sol.desc}
          >
            <p className="text-[16px] font-robotomono text-primary uppercase">
              [The solution]
            </p>
            <p className="text-[14px] font-robotomono text-primary text-center">
              {sol.desc}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-6 w-full items-center py-[150px] overflow-hidden">
        <div>
          <h5 className="text-2xl uppercase font-koulen leading-[0.9em] text-highlight">
            Next Project
          </h5>
        </div>
        <div>
          <h5 className="text-[10vw] text-primary font-koulen leading-[0.9em] uppercase">
            {nextProject.projTitle}
          </h5>
        </div>
        <div>
          <Link href={`/works/${nextProject.slug}`}>
            <FramerMagnetic>
              <div>
                <Image
                  src={nextProject.image}
                  width={700}
                  height={600}
                  alt="next project"
                  className="w-[349px] h-[200px] rounded-lg object-cover object-center"
                />
              </div>
            </FramerMagnetic>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default WorkDetail;
