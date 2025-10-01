"use client";

import { PressList } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Press = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [
      Autoplay({
        delay: 2500,
        stopOnInteraction: true,
        resumeOnInteraction: true, 
      }),
    ]
  );

  return (
    <section className="bg-black py-[5rem]">
      <div className="text-white flex flex-col gap-10">
        <div className="flex flex-col gap-3 px-[0.5rem]">
          <p className="text-blue-600 font-semibold text-center text-lg lg:text-xl">
            In The Press
          </p>
          <h2 className="text-lg font-bold text-center lg:text-4xl mx-auto">
            Learn More About Spatial
          </h2>
        </div>

        <div className="px-4">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {PressList.map((item, index) => (
                <div className="embla__slide" key={index}>
                  <div className="radial-blur flex flex-col justify-between h-full rounded-2xl p-5 bg-white/5">
                    <div className="flex flex-col gap-5">
                      <div className="max-h-[3rem] me-auto">
                        <Image
                          src={"/images/press/" + item.img}
                          alt="content"
                          width={100}
                          height={100}
                          className="h-full w-full object-contain pointer-events-none"
                          draggable={false}
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-[16px] font-inter">
                          <q>{item.content}</q>
                        </p>
                      </div>
                    </div>
                    <div>
                      <Link href={"/"}>
                        <span className="text-lg underline">View</span>
                      </Link>
                    </div>
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

export default Press;