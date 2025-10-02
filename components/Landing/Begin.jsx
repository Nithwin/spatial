import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Begin = () => {
  return (
    <section className=" bg-black px-4">
      <div className="text-white flex flex-col lg:flex-row items-center gap-10 max-w-[110rem] mx-auto lg:px-[2rem]">
        <div 
        className="flex flex-col gap-8 lg:w-1/3">
          <p className="text-blue-600 font-semibold text-start text-sm lg:text-xl">
            Let's Begin
          </p>
          <h2 className="text-2xl font-bold text-start lg:text-5xl">
            Create Your <br /> Virtual Experience
          </h2>
          <div className="flex items-center gap-2 ">
            <Link href={"/"}>
              <span className="bg-gradient-to-l to-cyan-500 hover:to-blue-700 transition-colors delay-200 ease-linear from-blue-700 text-white flex w-fit px-6 lg:px-18 font-bold py-3 rounded-full text-sm lg:text-lg items-center">
                Get Started
              </span>
            </Link>
            <Link href={"/"}>
              <span className="bg-transparent font-bold text-white flex w-fit px-2 py-2 text-sm lg:text-lg items-center gap-2">
                <Mail className="h-5" />
                Contact Sales
              </span>
            </Link>
          </div>
        </div>
        <div
        className="flex items-center lg:w-2/3 overflow-hidden"
        >
          <Image
          src={"/images/begin/virtual-experience.webp"}
          alt="Virtual"
          width={1000}
          height={1000}
          className="h-full w-full object-cover mx-auto begin_animate"
          />
        </div>
      </div>
    </section>
  );
};

export default Begin;
