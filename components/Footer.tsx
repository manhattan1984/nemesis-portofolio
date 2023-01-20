import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="my-8 mx-8 relative top-0 left-0">
      <p className="text-xl">Want to Start a Project?</p>
      <Link href="https://wa.me/+2348125365368" passHref={true}>
        <p className="font-clashBold text-7xl mt-4 mb-8 underline">Let's Talk</p>
      </Link>
      <div className="flex justify-between">
        <p>Contact me on whatsapp</p>
        <Link href="https://github.com/manhattan1984" passHref={true}>
        <p>github</p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
