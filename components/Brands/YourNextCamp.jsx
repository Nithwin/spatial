import Link from "next/link";
import React from "react";

const YourNextCamp = () => {
  return (
    <section className="bg-black min-h-[40rem] relative flex py-[5rem]">
      <div className="relative text-white flex gap-[6rem] flex-col justify-center items-center px-4 w-full max-w-[75rem] mx-auto">
        <div className="flex flex-col gap-5 z-40">
          <h1 className="text-3xl text-center lg:text-6xl font-black">
            Your Next Campaign Isn't Just an Ad. It's a World.
          </h1>
          <p className="text-white/70 font-medium text-lg text-center">
            Let's build something they'll never scroll past.
          </p>
        </div>
        <div className="z-40">
          <Link href={"/"}>
            <span className="inline-block bg-white rounded-full px-[4rem] py-4 text-black text-lg font-semibold hover:scale-105 transition-transform ease-linear delay-150 z-50">
              Schedule a Call
            </span>
          </Link>
        </div>
      </div>
      <div>
        <img
          src="/images/brandpage/yournext/header-poster.webp"
          alt="Why US"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black/80 z-10" />
      </div>
    </section>
  );
};

export default YourNextCamp;
