"use client";

import { PressList } from "@/constants/landing-data";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Press = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [
      Autoplay({
        delay: 3500,
        stopOnInteraction: false,
      }),
    ]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = emblaApi.plugins().autoplay;
    if (!autoplay) return;
    const handleMouseDown = () => autoplay.stop();
    const handleMouseUp = () => autoplay.play();
    const rootNode = emblaApi.rootNode();
    rootNode.addEventListener("mousedown", handleMouseDown);
    rootNode.addEventListener("mouseup", handleMouseUp);
    return () => {
      rootNode.removeEventListener("mousedown", handleMouseDown);
      rootNode.removeEventListener("mouseup", handleMouseUp);
    };
  }, [emblaApi]);

  return (
    <section className="bg-black">
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
          <div className="relative">
            <div className="embla" ref={emblaRef}>
              <div className="embla__container -ml-4">
                {PressList.map((item, index) => (
                  <div className="embla__slide pl-4" key={index}>
                    <div className="radial-blur max-w-[20rem] lg:max-w-none flex flex-col justify-between h-full rounded-2xl p-5 bg-white/5">
                      <div className="flex flex-col gap-5">
                        <div className="max-h-[3rem] mx-auto lg:me-auto">
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

            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent pointer-events-none" />
            
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent pointer-events-none" />

          </div>
        </div>
      </div>
    </section>
  );
};

export default Press;