"use client";
import React, { useEffect, useRef, useState } from "react";
import Logo from "./utils/Logo";
import { Ellipsis, Plus, UserRound } from "lucide-react";
import { NavList } from "@/constants/data";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const Header = ({heroRef}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);
  useEffect(() => {
    const header = headerRef.current;
    const hero = heroRef.current || null;
    if(!header || !hero) return;
    const st = ScrollTrigger.create({
      trigger:hero,
      start:'bottom top',
      end:"+=150",
      scrub:1,
      animation:gsap.to(header, {
        backgroundColor: 'rgba(0,0,0,0.2)',
        backdropFilter:"blur(16px)",
        ease:"power2.inOut",
      })
    });

    return () => {
      st.kill();
    }
  }, []);
  return (
    <nav ref={headerRef} id="header" className={`bg-black/30 lg:bg-transparent w-full p-4 z-[9999] fixed top-0`}>
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
            } lg:translate-0 lg:items-center lg:p-0 lg:gap-7 lg:font-bold`}
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
            <span className="bg-transparent text-white hover:text-black hover:bg-white transition-all delay-150 ease-out font-semibold border-1 border-white/50 flex w-fit px-4 py-2 rounded-full text-lg items-center">
              <UserRound className="h-4" />
              Log In
            </span>
          </Link>
          <Link href={"/"}>
            <span className="bg-gradient-to-l to-cyan-500 hover:to-blue-700 transition-colors delay-200 ease-linear from-blue-700 text-white flex w-fit px-4 py-2 rounded-full text-lg items-center">
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
