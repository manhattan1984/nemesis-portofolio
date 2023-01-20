"use client";
import React from "react";
import { motion as m } from "framer-motion";
import Footer from "../../components/Footer";

const About = () => {
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="absolute top-0 left-0 h-full w-full"
    >
      <div className="font-clashBold text-center h-screen flex flex-col justify-center">
        <div className="h-1/2 my-auto">
          <p className="text-7xl text-center">Jackson Michael</p>
          <p className="text-3xl text-center text-red-500 mt-4">Top G</p>
        </div>
      </div>
      <div className="h-[50vh] flex flex-col text-lg gap-2 mx-8 max-w-md">
        <m.p animate={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.5, duration: 0.5}}>
          I am a Web Developer and Artist working on beautiful projects all the
          time, and I am constantly looking for ways to make a million dollars.
        </m.p>
        <m.p animate={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.5, duration: 0.5}}>
          I've been a part of this industry for over two years and within those
          years, I've worked on many projects and each new project is an
          improvement on the last.
        </m.p>
        <m.p animate={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.5, duration: 0.5}}>
          My confusion came from I could be great at any thing, so the hard part
          was picking what to be great at. The great man is "All To Each, not Each To
          All".
        </m.p>
      </div>
      <Footer />
    </m.div>
  );
};

export default About;
