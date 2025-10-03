'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedNumber = ({ heading, className }) => {
  const numberRef = useRef(null);

  useEffect(() => {
    const element = numberRef.current;
    const rawValue = heading.replace(/[M%x+]/g, '');
    const number = parseFloat(rawValue);
    const suffix = (heading.match(/[M%x+]/g) || []).join('');

    let start = { val: 0 };

    gsap.to(start, {
      duration: 2,
      val: number,
      onUpdate: () => {
        if (element) {
          let displayText;
          if (Number.isInteger(number)) {
            displayText = Math.floor(start.val);
          } else {
            displayText = start.val.toFixed(1);
          }
          element.innerText = displayText + suffix;
        }
      },
      ease: 'power2.out',
    });
  }, [heading]);

  return <h1 ref={numberRef} className={className}></h1>;
};

export default AnimatedNumber;
