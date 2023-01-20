"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { FaMoon, FaSun } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useTheme } from "next-themes";

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
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  return (
    <header className="fixed w-full top-0 z-50">
      <nav
        className={`flex justify-between ${
          showMenu ? "" : "bg-slate-50 dark:bg-neutral-900"
        } bg-opacity-25 dark:bg-opacity-25 text-3xl z-10 p-4`}
      >
        <Link href="/" className="font-clashBold">
          JM
        </Link>
        {showMenu ? (
          <AiOutlineClose onClick={handleMenu} />
        ) : (
          <HiMenuAlt4 onClick={handleMenu} />
        )}
        <div className="cursor-pointer">
          {theme === "light" ? (
            <FaMoon onClick={toggleTheme} />
          ) : (
            <FaSun onClick={toggleTheme} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
