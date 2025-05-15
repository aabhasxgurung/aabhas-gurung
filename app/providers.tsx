"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { TransitionRouter } from "next-transition-router";

export function Providers({ children }: { children: React.ReactNode }) {
  const firstLayer = useRef<HTMLDivElement | null>(null);
  const secondLayer = useRef<HTMLDivElement | null>(null);
  const textLayer = useRef<HTMLDivElement>(null);

  return (
    <TransitionRouter
      auto={true}
      leave={(next, from, to) => {
        console.log({ from, to });
        const route = typeof to === "string" ? to : "/";
        const raw = route.replace(/^\//, "") || "home";
        const name = raw[0].toUpperCase() + raw.slice(1);
        textLayer.current!.textContent = `• ${name}`;
        const tl = gsap
          .timeline({
            onComplete: next,
          })
          .fromTo(
            firstLayer.current,
            { y: "100%" },
            {
              y: 0,
              duration: 0.5,
              ease: "circ.inOut",
            }
          )
          .fromTo(
            secondLayer.current,
            {
              y: "100%",
            },
            {
              y: 0,
              duration: 0.5,
              ease: "circ.inOut",
            },
            "<50%"
          )
          .fromTo(
            textLayer.current,
            { y: "100%", opacity: 0 },
            {
              y: "0%",
              opacity: 1,
              duration: 0.5,
              ease: "circ.inOut",
            },
            "<50%"
          );

        return () => {
          tl.kill();
        };
      }}
      enter={(next) => {
        const tl = gsap
          .timeline()
          .to(
            textLayer.current,
            { y: "-100%", opacity: 0, duration: 0.5, ease: "circ.inOut" },
            0
          )
          .fromTo(
            secondLayer.current,
            { y: 0 },
            {
              y: "-100%",
              duration: 0.5,
              ease: "circ.inOut",
            }
          )
          .fromTo(
            firstLayer.current,
            { y: 0 },
            {
              y: "-100%",
              duration: 0.5,
              ease: "circ.inOut",
            },
            "<50%"
          )
          .call(next, undefined, "<50%");

        return () => {
          tl.kill();
        };
      }}
    >
      <main>{children}</main>

      <div
        ref={firstLayer}
        className="fixed inset-0 z-50 translate-y-full bg-background"
      />
      <div
        ref={secondLayer}
        className="fixed inset-0 z-50 translate-y-full bg-background"
      />
      <div
        ref={textLayer}
        className="
          fixed inset-0 z-[60] 
          flex items-center justify-center
          pointer-events-none
          text-6xl lg:text-7xl font-bold
        font-koulen text-secondary
        "
      />
    </TransitionRouter>
  );
}
