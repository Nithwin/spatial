import {
  ExploreImageListDown,
  ExploreImageListUp,
  useCasesListDown,
  useCasesListUp,
} from "@/constants/landing-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Explore = () => {
  return (
    <section className=" bg-black pt-14 py-10 lg:py-14 lg:pt-18">
      <div className="text-white flex flex-col gap-16">
        <div className="flex flex-col gap-3 px-[0.5rem]">
          <p className="text-blue-600 font-semibold text-center text-lg lg:text-xl">
            Explore
          </p>
          <h2 className="text-lg font-bold text-center lg:text-4xl mx-auto">
            Explore Limitless Experiences Today
          </h2>
          <p className="text-center text-white/60 font-medium text-sm lg:text-lg px-2">
            Dive into millions of virtual worlds, connect with others, and
            explore creations from the Spatial community and the brands you
            love.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <div className="overflow-hidden scroller">
            <div className="py-2 usecase_scroller">
              {ExploreImageListUp.map((item, index) => (
                <div
                key={index}
                  className="group rounded-2xl relative aspect-video w-56 lg:w-96 flex-shrink-0 overflow-hidden cursor-pointer"
                >
                  <Image
                    src={"/images/explore/" + item.img}
                    alt={item.heading  || 'Explore'}
                    width={1000}
                    height={1000}
                    className="object-contain mask-b-from-3.5 group-hover:scale-110 transition-transform delay-150 ease-linear"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end px-4 pb-2">
                    <h2 className="text-sm font-semibold">
                      <span>{item.view} views</span>{" ● "}
                      <span>{item.loves} loves</span>
                    </h2>
                  </div>
                </div>
              ))}

              {ExploreImageListUp.map((item, index) => (
                <div
                  key={index+6}
                  className="group rounded-2xl relative aspect-video w-56 lg:w-96 flex-shrink-0 overflow-hidden cursor-pointer"
                >
                  <Image
                    src={"/images/explore/" + item.img}
                    alt={item.heading  || 'Explore'}
                    width={1000}
                    height={1000}
                    className="object-contain mask-b-from-3.5 group-hover:scale-110 transition-transform delay-150 ease-linear"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end px-4 pb-2">
                    <h2 className="text-sm font-semibold">
                      <span>{item.view} views</span>{" ● "}
                      <span>{item.loves} loves</span>
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden scroller">
            <div className="py-2 usecase_scroller_back">
              {ExploreImageListDown.map((item, index) => (
                <div
                  className="group rounded-2xl relative aspect-video w-56 lg:w-96 flex-shrink-0 overflow-hidden cursor-pointer"
                  key={index}
                >
                  <Image
                    src={"/images/explore/" + item.img}
                    alt={item.heading  || 'Explore'}
                    width={1000}
                    height={1000}
                    className="object-contain mask-b-from-3.5 group-hover:scale-110 transition-transform delay-150 ease-linear"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end px-4 pb-2">
                    <h2 className="text-sm font-semibold">
                      <span>{item.view} views</span>{" ● "}
                      <span>{item.loves} loves</span>
                    </h2>
                  </div>
                </div>
              ))}

              {ExploreImageListDown.map((item, index) => (
                <div
                key={index+"duplicate"}
                  className="group rounded-2xl relative aspect-video w-56 lg:w-96 flex-shrink-0 overflow-hidden cursor-pointer"
                >
                  <Image
                    src={"/images/explore/" + item.img}
                    alt={item.heading || 'Explore'}
                    width={1000}
                    height={1000}
                    className="object-contain mask-b-from-3.5 group-hover:scale-110 transition-transform delay-150 ease-linear"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end px-4 pb-2">
                    <h2 className="text-sm font-semibold">
                      <span>{item.view} views</span>{" ● "}
                      <span>{item.loves} loves</span>
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
