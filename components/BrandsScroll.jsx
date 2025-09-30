// BrandsScroll.jsx

import { Brands } from "@/utils/data";
import Image from "next/image";
import React from "react";

const BrandsScroll = () => {
  return (
    <section className="bg-black py-8 md:py-12">
      <div className="scroller grayscale-100">
        <div className="scroller__inner">
          {Brands.map((brand, index) => (
            <div
              key={`${brand}-${index}`}
              className="relative flex-shrink-0 w-40 h-16 md:w-60 md:h-24"
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
              className="relative flex-shrink-0 w-40 h-16 md:w-60 md:h-24"
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