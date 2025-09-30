"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import { Ellipsis, Plus, UserRound } from "lucide-react";
import { NavList } from "@/utils/data";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav id="header" className={`bg-black lg:bg-black/10 w-full p-4 z-50`}>
      <div className="lg:flex-center lg:justify-between lg:px-[5rem]">
        <div
          className={`flex-center justify-between lg:justify-center lg:gap-10`}
        >
          <div className="flex-center">
            <Logo className={`h-12 lg:h-9 text-white`} />
            <p className="hidden lg:block text-white font-semibold">Spatial</p>
          </div>
          <div className="flex items-center gap-2 lg:hidden">
            <button className="lg:hidden bg-white px-4 py-2 rounded-full font-bold cursor-pointer">
              Use App
            </button>
            <Ellipsis
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white cursor-pointer"
            />
          </div>
          <ul
            className={`${
              menuOpen ? "translate-y-0" : "-translate-y-130"
            } lg:translate-0 lg:items-center lg:p-0 lg:gap-7`}
          >
            {NavList.map((nav, index) => (
              <li key={index}>
                <span>{nav.name}</span>
              </li>
            ))}
            <li className="lg:hidden">
              <Link href={"/"}>
                <span className="bg-white text-black flex w-fit px-4 py-2 rounded-full text-lg items-center">
                  <UserRound className="text-black h-4" />
                  Log In
                </span>
              </Link>
            </li>
            <li className="lg:hidden">
              <Link href={"/"}>
                <span className="bg-gradient-to-r from-cyan-300 to-blue-700 text-white flex w-fit px-4 py-2 rounded-full text-lg items-center">
                  <Plus className="text-white h-5 font-black" />
                  Create for Free
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex lg:items-center gap-5">
          <Link href={"/"}>
            <span className="bg-transparent text-white font-semibold border-1 border-white flex w-fit px-4 py-2 rounded-full text-lg items-center">
              <UserRound className="text-white h-4" />
              Log In
            </span>
          </Link>
          <Link href={"/"}>
            <span className="bg-gradient-to-r from-cyan-300 to-blue-700 text-white flex w-fit px-4 py-2 rounded-full text-lg items-center">
              <Plus className="text-white h-5 font-black" />
              Create for Free
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
