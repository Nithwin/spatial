import { footerLinks } from "@/constants/landing-data";
import Link from "next/link";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import MetaLogo from "../utils/MetaLogo";
import Image from "next/image";
import AppleStoreLogo from "../utils/AppleStoreLogo";
const Footer = () => {
  const icons = [FaXTwitter, FaInstagram, FaDiscord, FaYoutube];
  return (
    <footer className="h-full bg-black py-[2rem] border-white/30 border-t-1">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 text-white/60 px-4 max-w-[110rem] mx-auto">
        <div className="flex flex-col gap-5">
          <ul className="flex gap-5">
            {icons.map((Icon, index) => (
              <li key={index}>{<Icon className="size-9" />}</li>
            ))}
          </ul>
          <div className="grid grid-cols-3 gap-8">
            {footerLinks.map((column, colIndex) => (
              <ul key={colIndex}>
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="text-xs lg:text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-end gap-5 mt-auto">
          <p className="text-xs lg:text-end">
            © 2025 Spatial Systems, Inc. All Rights Reserved.
          </p>
          <ul className="flex gap-4 max-w-[20rem]">
            <li className="flex-1">
              <AppleStoreLogo className="text-[#000000] h-full w-full " />
            </li>
            <li className="flex-1">
              <Image
                src={"/images/footer/google-play.png"}
                alt="Google Play Logo"
                width={100}
                height={100}
                className="h-full w-full"
              />
            </li>
            <li className="flex-1">
              <MetaLogo className="h-full w-full" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
