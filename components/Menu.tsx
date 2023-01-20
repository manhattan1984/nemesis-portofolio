"use client";
import Link from "next/link";
import React, { MouseEventHandler, useContext, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const MenuLink = ({
  link,
  handleMenu,
}: {
  link: string;
  handleMenu: MouseEventHandler;
}) => {
  return (
    <Link
      onClick={handleMenu}
      className="text-4xl font-clashBold capitalize mt-4"
      href={link === "home" ? "/" : link}
    >
      {link}
    </Link>
  );
};

const links = ["home", "about", "works"];

const Menu = ({
  showMenu,
  setShowMenu,
}: {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div
      className={`${
        showMenu ? "block" : "hidden"
      } fixed h-screen w-full bg-white dark:bg-neutral-900 z-50`}
    >
      <div className="flex flex-col items-center justify-around text-center h-5/6 dark:bg-neutral-800 bg-orange-100">
        <div className="flex flex-col justify-center h-4/5">
          {links.map((link) => (
            <MenuLink
              handleMenu={() => {
                setShowMenu(!showMenu);
              }}
              link={link}
              key={link}
            />
          ))}
        </div>
        <div className="h-[1px] w-full dark:bg-white bg-black"></div>

        <div className="">
          <p>Want to Start a Project?</p>
          <p>Let's talk</p>
        </div>

        <div className="">
          <p>Contact me on whatsapp</p>
          <p>Github</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
