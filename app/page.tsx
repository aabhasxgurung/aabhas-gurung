"use client";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Headline from "@/components/Headline";
import Intro from "@/components/Intro";
import PreLoader from "@/components/preloader/Preloader";
import SelecedWork from "@/components/SelecedWork";
import Skills from "@/components/Skills";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);

        document.body.style.cursor = "default";

        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);
  return (
    <div className="min-h-[100vh] w-auto">
      <AnimatePresence mode="wait">
        {isLoading && <PreLoader />}
      </AnimatePresence>
      <Header />
      <Intro />
      <Experience />
      {/* <Skills /> */}
      <Headline title="Hello" />
      <SelecedWork />
    </div>
  );
}
