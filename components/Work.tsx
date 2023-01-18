import Image from "next/image";
import React from "react";

type WorkProps = {
  name: string;
  date: string;
  imageUrl: string;
};

const Work = ({ name, date, imageUrl }: WorkProps) => {
  return (
    <div className="w-full">
      <div className="relative h-[45vh] w-full">
        <Image src={imageUrl} fill={true} alt={name} />
      </div>
    </div>
  );
};

export default Work;
