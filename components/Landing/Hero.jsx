import { Mail } from "lucide-react";
import Link from "next/link";

const Hero = ({ref}) => {
  return (
    <section ref={ref} className="relative z-20 min-h-dvh h-full w-full ">
      <div className="bg-black/40 absolute z-10 inset-0" />
      <video
        muted
        loop
        autoPlay
        playsInline
        poster="./images/header-video-poster.webp"
        className="h-full w-full object-cover z-0 inset-0 absolute top-0 left-0 right-0"
        src="./videos/header-video.webm"
      ></video>

      <div className="flex flex-col gap-5 justify-center items-center w-full min-h-dvh z-50 relative text-white max-w-[69rem] lg:mx-auto">
        <h1 className="text-start text-4xl lg:text-8xl font-poppins font-black lg:text-center max-w-[10rem] lg:max-w-none me-auto px-5">
          Interactive Media, Limitless Possibilities
        </h1>
        <p className="text-sm lg:text-lg font-medium px-5">
          Harness Spatial Computing and AI to unlock the next generation of
          interactive virtual worlds
        </p>
        <div className="flex items-center gap-2 px-2">
          <Link href={"/"}>
            <span className="bg-gradient-to-l to-cyan-500 hover:to-blue-700 transition-colors delay-200 ease-linear from-blue-700 text-white flex w-fit px-6 lg:px-18 font-bold py-3 rounded-full text-lg items-center">
              Get Started
            </span>
          </Link>
           <Link href={"/"}>
            <span className="bg-transparent font-bold text-white flex w-fit px-2 py-2 text-lg items-center gap-2">
              <Mail className="h-5" />
             Contact Sales
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
