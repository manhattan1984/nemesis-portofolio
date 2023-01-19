"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { FaMoon } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = ({
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
    <header className="sticky top-0 z-50">
      <nav
        className={`flex justify-between ${
          showMenu ? "" : "bg-slate-50"
        } bg-opacity-25 text-3xl z-10 p-4`}
      >
        <Link href="/" className="font-clashBold">
          JM
        </Link>
        {showMenu ? (
          <AiOutlineClose onClick={handleMenu} />
        ) : (
          <HiMenuAlt4 onClick={handleMenu} />
        )}
        <FaMoon />
      </nav>
    </header>
  );
};

export default Navbar;
