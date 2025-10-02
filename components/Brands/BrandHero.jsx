import Link from "next/link";
import React from "react";

const BrandHero = () => {
  return (
    <section className="bg-black min-h-dvh relative flex flex-col">
      <div className="flex flex-1 max-w-[100rem] mx-auto flex-col text-white px-4 py-[5rem] justify-center h-full w-full relative z-50 ">
        <div className="z-40 h-full  relative flex flex-col gap-8 lg:px-[8rem] max-w-[65rem]" >
          <h1 className="text-3xl lg:text-6xl font-black">
            Turn Stories Into Play. <br />
            Turn Play Into Sales.
          </h1>
          <p className="font-medium text-sm lg:text-lg">
            Bring your brand to life through immersive, shoppable games built on
            the Unity engine. Launch instantly across web, mobile, and VR — and
            engage your audience through interactive storytelling that converts.
          </p>
          <div className="flex flex-col lg:flex-row w-full gap-8 ">
            <Link 
            className="flex-1 w-full flex hover:scale-110 transition-transform ease-linear delay-150"
            href={''}>
              <span 
              className=" bg-white text-black w-full text-center rounded-full py-3 lg:py-4 font-semibold"
              >View Case Studies</span>
            </Link>
            <Link
            className="flex-1 w-full flex hover:scale-110 transition-transform ease-linear delay-150"
            href={''}
            >
              <span 
              className=" bg-black text-white border-white/30 border-1 w-full text-center rounded-full py-3 lg:py-4 font-semibold"
              >Contact Sales</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0 opacity-70">
        <video 
        autoPlay
        loop
        playsInline
        src="/videos/brandpage/header.webm"
        poster="/images/brandpage/hero/header-poster.webp"
        className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bottom-0 top-0 h-full w-full bg-gradient-to-b lg:bg-gradient-to-r from-black/90 lg:from-black from-40% to-black/5">

      </div>
    </section>
  );
};

export default BrandHero;
