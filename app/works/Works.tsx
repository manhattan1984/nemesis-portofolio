"use client";
import React from "react";
import Work from "../../components/Work";
import { Work as WorkType } from "../HomePage";
import { motion as m } from "framer-motion";
import Footer from "../../components/Footer";

type WorksProps = {
  works: WorkType[];
};
const Works = ({ works }: WorksProps) => {
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="mx-auto my-auto absolute top-0 left-0 h-full w-full"
    >
      <p className="text-center font-clashBold text-6xl my-16">Works</p>
      {works.map((work, index) => (
        <div
          key={index}
          className={`flex mt-10 gap-4 ${
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <p>
            0{index + 1}/0{works.length}
          </p>
          <Work {...work} key={index} />
        </div>
      ))}
      <Footer />
    </m.div>
  );
};

export default Works;
