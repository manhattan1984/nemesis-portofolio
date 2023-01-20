"use client";
import "../styles/globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import ColorModeProvider from "../context/ColorMode";
import {ThemeProvider} from "next-themes"

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <html lang="en" className="dark">
      <ThemeProvider attribute="class">
        <body
          className={`
        overflow-x-hidden 
        bg-orange-50 dark:bg-neutral-900
        ${
          showMenu ? "overflow-hidden" : ""
        }  font-clash bg-cover bg-[url('https://woakwmdkqyfsikmmcwvu.supabase.co/storage/v1/object/public/portofolio/grid.svg')]`}
        >
          <div className="bg-[url('https://woakwmdkqyfsikmmcwvu.supabase.co/storage/v1/object/public/portofolio/grain.svg')]">
            <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
            <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />

            <AnimatePresence mode="wait">{children}</AnimatePresence>
          </div>
        </body>
      </ThemeProvider>
    </html>
  );
}
