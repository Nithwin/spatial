import { CrossPlatFormList } from "@/constants/landing-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CrossPlatform = () => {
  return (
    <section className="bg-black lg:px-[8rem] py-10  lg:py-14">
      <div className="text-white px-[2rem]  mx-auto max-w-[95rem]">
        <div className="flex flex-col gap-3 px-[3rem]">
          <p className="text-blue-600 font-semibold text-center text-lg lg:text-xl">
            Cross-Platform
          </p>
          <h2 className="text-xl font-bold text-center lg:text-4xl mx-auto">
            Publish Your Experience to Web, Mobile & XR
          </h2>
          <p className="text-center text-white/60 font-medium text-sm lg:text-lg">
            Access Spatial worlds from any device, anywhere.
          </p>
          <Link className="w-full flex lg:w-fit mx-auto pt-4" href={"/"}>
            <span className="bg-white/10 w-full text-center py-3 rounded-full font-semibold lg:px-[10rem]">
              Get Started
            </span>
          </Link>
        </div>
        <div className="flex flex-col gap-10 lg:flex-row">
            {
                CrossPlatFormList.map((device, index) => (
                    <div
                    key={device.heading}
                    className="flex-1"
                    >   
                    <div className="aspect-square lg:p-5">
                        <Image
                        src={"/images/crossplatform/" + device.img}
                        alt={device.heading}
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                        />
                    </div>
                    <h2 
                    className="text-lg lg:text-2xl font-bold"
                    >{device.heading}</h2>
                    <p
                    className="text-xs lg:text-lg text-white/60 font-medium"
                    >{device.subheading}</p>
                    </div>
                ))
            }
        </div>
      </div>
    </section>
  );
};

export default CrossPlatform;
