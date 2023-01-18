"use client";

import Image from "next/image";
import Link from "next/link";
import Work from "../components/Work";

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
  return (
    <div className="">
      <main className="h-screen flex flex-col justify-center">
        <div className="text-center font-clashBold">
          <p className="font-clash font-bold text-red-800 text-lg text-left">
            Jackson Michael
          </p>
          <p className="text-6xl font-extrabold">Fullstack</p>
          <p className="text-6xl font-extrabold">Priest</p>
        </div>
        <div className="flex justify-between">
          <p>
            Keep <br />
            scrolling
          </p>
          <div className="text-right">
            <p>Available for freelance work</p>
            <Link href="#" className="uppercase underline font-bold">
              Let's Talk.
            </Link>
          </div>
        </div>
      </main>
      <section className="h-screen flex flex-col w-3/5 mx-auto">
        <p className="text-xl">
          Hi, Michael here. <br /> <br /> I am a web developer and an artist and
          I constantly provide beautiful solutions to everyday problems.
          <br /> <br /> So you're welcome
        </p>
        <p className="font-clashBold mt-4 text-2xl">About me</p>
      </section>
      <section>
        <p className="font-clashBold text-7xl text-center">Featured Works</p>
        <div className="">
          {works.map((work, index) => (
            <div className="flex mt-10 gap-4">
              <p>
                0{index + 1}/0{works.length}
              </p>
              <Work {...work} key={index} />
            </div>
          ))}
        </div>
        <div className="flex justify-center my-6">
          <Link href="works" className="font-clashBold text-xl">
            View more
          </Link>
        </div>
      </section>
    </div>
  );
}
