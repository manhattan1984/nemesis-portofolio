import Image from "next/image";
import Link from "next/link";
import React from "react";

type WorkProps = {
  name: string;
  date: string;
  imageUrl: string;
  websiteUrl: string;
};

const Work = ({ name, date, imageUrl, websiteUrl }: WorkProps) => {
  return (
    <Link href={websiteUrl} passHref={true}>
      <div className="w-full">
        <div className={`relative h-[30vh] w-full -z-10`}>
          <div className="w-1/2 relative top-1/3 left-[40%] h-full text-3xl text-white font-bold">
            <p className=" ">{name}</p>
            <p className="text-lg">{date}</p>
          </div>
          <Image
            src={imageUrl}
            fill={true}
            alt={name}
            className="object-center -z-10 filter brightness-50 w-full"
          />
        </div>
      </div>
    </Link>
  );
};

export default Work;
