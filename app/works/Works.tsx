import React from "react";
import Work from "../../components/Work";
import { Work as WorkType } from "../HomePage";

type WorksProps = {
  works: WorkType[];
};
const Works = ({ works }: WorksProps) => {
  return (
    <div className="h-screen w-[85%] mx-auto my-auto">
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
    </div>
  );
};

export default Works;
