"use client";

import Image from "next/image";
import Link from "next/link";
import Work from "../components/Work";
import { BsArrowDown } from "react-icons/bs";
import { motion as m } from "framer-motion";
import Footer from "../components/Footer";
import { useTheme } from "next-themes";

export type Work = {
  id: number;
  name: string;
  imageUrl: string;
  date: string;
  featured: boolean;
  websiteUrl: string;
};

type HomePageProps = {
  works: Work[];
};

export default function HomePage({ works }: HomePageProps) {
  const { theme, setTheme } = useTheme();
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="absolute top-0 left-0 w-full h-full"
    >
      <main className="h-screen flex flex-col justify-center">
        <div className="h-1/2 mx-4">
          <div className="text-center font-clashBold">
            <p className="font-clash font-bold text-red-700 text-xl text-left">
              Jackson Michael
            </p>
            <p className="text-7xl font-extrabold">Fullstack</p>
            <p className="text-7xl font-extrabold">Priest</p>
          </div>
          <div className="flex justify-between w-4/5 mx-auto mt-8">
            <div className="flex h-4/5 items-center">
              <BsArrowDown className="animate-bounce text-gray-700 -z-10" />

              <p className="text-gray-500">
                Keep <br />
                scrolling
              </p>
            </div>
            <div className="text-right">
              <p>Available for freelance work</p>
              <Link
                href="https://wa.me/+2348125365368"
                passHref={true}
                className="uppercase underline font-bold"
              >
                Let's Talk.
              </Link>
            </div>
          </div>
        </div>
      </main>
      <section className="h-screen flex flex-col w-3/5 mx-auto">
        <m.p
          animate={{ y: "100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0, duration: 0.5 }}
          className="text-2xl tracking-wide"
        >
          Hi, Michael here. <br /> <br /> I am a web developer and an artist and
          I constantly provide beautiful solutions to everyday problems.
          <br /> <br /> So you're welcome
        </m.p>
        <m.p
          animate={{ y: "100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="font-clashBold mt-4 text-2xl"
        >
          About me
        </m.p>
      </section>
      <section className="">
        <p className="font-clashBold text-7xl text-center mb-10">
          Featured Works
        </p>
        <div className="mx-8">
          {works.map((work, index) => (
            <div
              key={index}
              className={`flex gap-4 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <p className="font-clashBold">
                0{index + 1}/0{works.length}
              </p>
              <Work {...work} />
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link href="works" className="font-clashBold text-xl">
            View more
          </Link>
        </div>
      </section>
      <Footer />
    </m.div>
  );
}
