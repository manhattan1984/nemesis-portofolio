"use client";
import "../styles/globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import { useState } from "react";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${
          showMenu ? "overflow-hidden" : ""
        } bg-orange-50 font-clash bg-cover bg-[url('https://woakwmdkqyfsikmmcwvu.supabase.co/storage/v1/object/public/portofolio/grid.svg')]`}
      >
        <div className="bg-[url('https://www.jobenetuk.dev/grain.5ba829e5.svg')]">
          <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
          <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />

          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
