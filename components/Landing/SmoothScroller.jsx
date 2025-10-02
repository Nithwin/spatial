"use client"; // This component runs on the client-side

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const SmoothScroller = () => {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2, // Speed of the scroll
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      smoothTouch: true, // Enable smooth scrolling for touch devices
    });

    // This function is called on every animation frame
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    // Start the animation frame loop
    requestAnimationFrame(raf);
    
    // Cleanup function to destroy Lenis instance when component unmounts
    return () => {
      lenis.destroy();
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return null; // This component doesn't render anything itself
};

export default SmoothScroller;