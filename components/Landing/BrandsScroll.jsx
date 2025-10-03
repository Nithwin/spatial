// BrandsScroll.jsx

import { Brands } from "@/constants/landing-data";
import Image from "next/image";
import React from "react";

const BrandsScroll = () => {
  return (
    <section className="bg-black">
      <div className="scroller grayscale-100">
        <div className="scroller__inner">
          {Brands.map((brand, index) => (
            <div
              key={`${brand}-${index}`}
              className="relative flex-shrink-0 w-40 h-16 md:w-52 md:h-20"
            >
              <Image
                fill 
                className="object-contain" 
                src={`/images/brands/${brand}`}
                alt={brand.split('.')[0]}
              />
            </div>
          ))}
          {Brands.map((brand, index) => (
            <div
              key={`duplicate-${brand}-${index}`}
              className="relative flex-shrink-0 w-40 h-16 md:w-52 md:h-20"
            >
              <Image
                fill
                className="object-contain"
                src={`/images/brands/${brand}`}
                alt={brand.split('.')[0]}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="lg:hidden scroller grayscale-100">
        <div className="scroller__outer">
          {Brands.map((brand, index) => (
            <div
              key={`${brand}-${index}`}
              className="relative flex-shrink-0 w-40 h-16 md:w-52 md:h-20"
            >
              <Image
                fill 
                className="object-contain" 
                src={`/images/brands/${brand}`}
                alt={brand.split('.')[0]}
              />
            </div>
          ))}
          {Brands.map((brand, index) => (
            <div
              key={`duplicate-${brand}-${index}`}
              className="relative flex-shrink-0 w-40 h-16 md:w-52 md:h-20"
            >
              <Image
                fill
                className="object-contain"
                src={`/images/brands/${brand}`}
                alt={brand.split('.')[0]}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsScroll;