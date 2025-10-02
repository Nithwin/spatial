"use client";
import {
  AvatarIconList,
  AvatarImageList,
  AvatarItemList,
} from "@/constants/landing-data";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AvatarBackground from "../utils/AvatarBackground";

const floatingItemStyles = [
  "bottom-0 -left-25 rotate-[30deg] lg:left-1/5 lg:-bottom-[10%]",
  "top-[18%] left-[10%] rotate-[30deg] lg:left-1/2 lg:top-[15rem] ",
  "bottom-[18%] -right-[20%] lg:right-[10%] lg:bottom-[25%]",
  "top-[28%] right-[5%] lg:-right-[5%]",
  "bottom-[30%] -left-5 rotate-12 lg:left-1/3 lg:bottom-[20%]",
  "bottom-[12%] left-[10%] rotate-12 lg:left-1/2 lg:bottom-[7%]",
  "bottom-1/3 right-20 rotate-12 lg:-right-[5%] lg:bottom-[5%]",
];

const AvatarCustomization = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [animate, setAnimate] = useState(false);
  // useEffect(() => {
  //   setAnimate(true);
  //   const timer = setTimeout(() => {
  //     setAnimate(false);
  //   }, 3000);

  //   return ()=> clearTimeout(timer);
  // }, [currentImage]);
  return (
    <section className="min-h-dvh bg-black py-[5rem] lg:py-0 relative overflow-hidden lg:px-[5rem]">
      <div className="text-white bg-gradient-to-t relative max-w-[110rem] flex flex-col lg:flex-row justify-between lg:items-center px-[1.5rem] mx-auto overflow-hidden lg:px-[8rem] lg:w-full">
        
        <div className="flex-1 z-50 w-full">
          <div className="flex flex-col gap-3 w-full">
            <p className="text-blue-600 font-semibold text-start text-sm lg:text-xl">
              Avatar Customization
            </p>
            <h2 className="text-2xl font-bold text-start lg:text-6xl">
              Infinite Characters, <br /> Endless Connections
            </h2>
            <p className="text-start text-white/60 font-medium text-sm lg:text-lg">
              Choose from thousands of Ready Player Me customizations or bring
              your characters and AI chatbots to life with our Unity SDK and
              APIs. Connect instantly via voice, text, or video chat.
            </p>
            <div className="flex gap-5">
              {AvatarIconList.map((avatar, index) => (
                <div key={index} 
                onClick={() => {setCurrentImage(index)}}
                className="group cursor-pointer flex flex-col items-center gap-2">
                  <div className={`${index === currentImage ? 'border-blue-600 shadow-sm shadow-blue-600' : ''} group-hover:border-blue-600 group-hover:shadow group-hover:blue-cyan-600 transition-all delay-150 ease-linear  rounded-full aspect-square overflow-hidden w-20 lg:w-28 border-1 border-gray-500/30`}>
                    <Image
                      src={"/images/avatarcustomization/" + avatar.img}
                      alt={avatar.name}
                      width={100}
                      height={100}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform ease-linear delay-150"
                    />
                  </div>
                  <p className="text-xs font-medium">{avatar.name}</p>
                </div>
              ))}
            </div>
            <Link className="w-full flex lg:w-fit me-auto pt-4" href={"/"}>
              <span className="bg-gray-700/50 w-full text-center py-3 rounded-full font-semibold lg:px-[6rem]">
                Create my avatar
              </span>
            </Link>
          </div>
        </div>

        <div className="flex-1 relative lg:static py-[4rem] lg:py-0">
          <div className="relative z-50 p-6  lg:aspect-[9/16] lg:w-[30rem] mx-auto">
            <Image
            key={AvatarImageList[currentImage]}
              src={"/images/avatarcustomization/" + AvatarImageList[currentImage]}
              alt="Image"
              height={500}
              width={500}
              className={`avataranimate h-full w-full object-contain relative z-50`}
            />
          </div>
          
          <AvatarBackground
            className={
              "absolute inset-0 top-[4rem] bottom-[4rem] z-0 scale-110 mask-t-from-1 mask-b-from-1 opacity-80"
            }
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-black/50 via-transparent to-black/50 z-10"></div>

          {floatingItemStyles.map((style, index) => (
            <div
              key={index}
              className={`absolute p-2 lg:p-4 z-0 rounded-full border border-white/40 bg-black flex items-center justify-center ${style} overflow-hidden`}
            >
              <Image
                src={AvatarItemList[index]}
                alt="Icon"
                height={100}
                width={100}
                className="opacity-50 lg:size-54"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvatarCustomization;
