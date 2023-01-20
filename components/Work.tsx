import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion as m } from "framer-motion";

type WorkProps = {
  name: string;
  date: string;
  imageUrl: string;
  websiteUrl: string;
};

const Work = ({ name, date, imageUrl, websiteUrl }: WorkProps) => {
  return (
    <Link href={websiteUrl} passHref={true}>
      <m.div
        whileInView={{ y: 0, opacity: 1 }}
        animate={{ y: "100%", opacity: 0 }}
        transition={{delay: 0.5, duration: 1}}
        className="relative h-[40vh] w-[60vh] -z-10"
      >
        <Image
          src={imageUrl}
          fill={true}
          alt={name}
          className="filter grayscale brightness-90"
        />
      </m.div>
      <div className="relative bottom-1/2 text-right mx-4 text-2xl text-white mix-blend-difference z-10">
        <m.p
          animate={{ y: 0, opacity: 0 }}
          whileInView={{ y: "100%", opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {name}
        </m.p>
        <m.p
          animate={{ y: 0, opacity: 0 }}
          whileInView={{ y: "100%", opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {date}
        </m.p>
      </div>
    </Link>
  );
};

export default Work;

{
  /* <m.p
animate={{ y: "100%" }}
whileInView={{ y: 0 }}
transition={{ delay: 0.5, duration: 0.5 }}
className=" "
>
{name}
</m.p>
<m.p
animate={{ y: "100%" }}
whileInView={{ y: 0 }}
transition={{ delay: 0.75, duration: 0.5 }}
className="text-lg"
>
{date}
</m.p> */
}
