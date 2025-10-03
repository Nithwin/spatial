import { useCasesListDown, useCasesListUp } from "@/constants/landing-data";
import Image from "next/image";
import React from "react";

const UseCases = () => {
  return (
    <section className="bg-black py-20 text-white">
      <div className="flex flex-col gap-8">
        <div className="px-2 flex flex-col gap-1">
          <p className="text-blue-600 font-semibold text-center text-lg lg:text-xl">
            Use Cases
          </p>
          <h2 className="text-xl font-bold text-center lg:text-4xl">
            Virtual Worlds, Real Solutions
          </h2>
          <p className="text-sm lg:text-sm text-center text-white/60 font-medium font-inter">
            With over 3 million immersive experiences, Spatial is trusted by
            global enterprises, top educators, and leading brands to deliver
            scalable training solutions and create unforgettable marketing
            moments.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <div className="overflow-hidden scroller">
            <div className="py-2 usecase_scroller">
              {useCasesListUp.map((item, index) => (
                <div
                  className="group rounded-2xl relative aspect-video w-56 lg:w-96 flex-shrink-0 overflow-hidden cursor-pointer"
                  key={index}
                >
                  <Image
                    src={"/images/usecases/" + item.img}
                    alt={item.heading}
                    width={1000}
                    height={1000}
                    className="object-contain mask-b-from-3.5 group-hover:scale-110 transition-transform delay-150 ease-linear"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end px-4 pb-2">
                    <h2 className="text-sm lg:text-lg font-semibold">
                      {item.heading}
                    </h2>
                    <p className="text-xs lg:text-sm text-white/60">
                      {item.subheading}
                    </p>
                  </div>
                </div>
              ))}

              {useCasesListUp.map((item, index) => (
                <div
                  className="group rounded-2xl relative aspect-video w-56 lg:w-96 flex-shrink-0 overflow-hidden cursor-pointer"
                  key={item.heading}
                >
                  <Image
                    src={"/images/usecases/" + item.img}
                    alt={item.heading}
                    width={1000}
                    height={1000}
                    className="object-contain mask-b-from-3.5 group-hover:scale-110 transition-transform delay-150 ease-linear"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end px-4 pb-2">
                    <h2 className="text-sm lg:text-lg font-semibold">
                      {item.heading}
                    </h2>
                    <p className="text-xs lg:text-sm text-white/60">
                      {item.subheading}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden scroller">
            <div className="py-2 usecase_scroller_back">
              {useCasesListDown.map((item, index) => (
                <div
                  className="group rounded-2xl relative aspect-video w-56 lg:w-96 flex-shrink-0 overflow-hidden cursor-pointer"
                  key={index}
                >
                  <Image
                    src={"/images/usecases/" + item.img}
                    alt={item.heading}
                    width={1000}
                    height={1000}
                    className="object-contain mask-b-from-3.5 group-hover:scale-110 transition-transform delay-150 ease-linear"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end px-4 pb-2">
                    <h2 className="text-sm lg:text-lg font-semibold">
                      {item.heading}
                    </h2>
                    <p className="text-xs lg:text-sm text-white/60">
                      {item.subheading}
                    </p>
                  </div>
                </div>
              ))}

              {useCasesListDown.map((item, index) => (
                <div
                  className="group rounded-2xl relative aspect-video w-56 lg:w-96 flex-shrink-0 overflow-hidden cursor-pointer"
                  key={item.heading}
                >
                  <Image
                    src={"/images/usecases/" + item.img}
                    alt={item.heading}
                    width={1000}
                    height={1000}
                    className="object-contain mask-b-from-3.5 group-hover:scale-110 transition-transform delay-150 ease-linear"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end px-4 pb-2">
                    <h2 className="text-sm lg:text-lg font-semibold">
                      {item.heading}
                    </h2>
                    <p className="text-xs lg:text-sm text-white/60">
                      {item.subheading}
                    </p>
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

export default UseCases;
