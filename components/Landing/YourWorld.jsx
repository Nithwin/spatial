import Image from "next/image";
import Link from "next/link";
import Unity from "../utils/Unity";

const YourWorld = () => {
  return (
    <section className="bg-black">
      <div className="text-white flex flex-col max-w-[110rem] lg:px-[5rem] mx-auto">
        <div className="flex flex-col gap-3">
          <p className="text-blue-600 font-semibold text-center text-lg lg:text-xl">
            Your World, Your Way
          </p>
          <h2 className="text-xl font-bold text-center lg:text-4xl mx-auto">
            No Limits to Your Creativity <br />
            from 3D Templates to Full Customizatio
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row w-full px-[2rem] gap-5 lg:gap-2">
          <div className="flex-1 flex flex-col gap-15 p-[1rem] lg:p-[5rem]">
            <div className="">
              <Image
                src={"/images/yourworld/build-without-code.webp"}
                alt="Builder"
                height={500}
                width={500}
                className="h-full w-full object-contain mask-b-from-30%"
              />
            </div>
            <div className="flex flex-col gap-5 w-full">
              <h2 className="text-lg font-bold">Next-Gen Creators</h2>
              <p className="font-semibold text-white/60">
                Create stunning interactive spaces effortlessly using
                <span className="text-white ">
                  {" "}
                  Spatial's premium no-code multi-player templates.
                </span>{" "}
                Upload 2D, 3D, and video content, and publish directly to Web,
                VR/AR, and Mobile.
              </p>
              <Link href={"/"} className="w-full flex lg:w-fit">
                <span className="bg-white/10 lg:px-[6rem] font-semibold w-full text-center px-5 rounded-full py-3 text-sm">
                  Create for free
                </span>
              </Link>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-15 p-[1rem] lg:p-[5rem]">
            <div className="relative">
              <Image
                src={"/images/yourworld/unity-compatibility.webp"}
                alt="Builder"
                height={500}
                width={500}
                className="h-full w-full object-contain mask-b-from-black"
              />
              <div className="flex items-center gap-2 absolute bottom-[3rem] right-[1rem]  lg:bottom-[5rem] lg:right-[4rem] bg-white/20 px-3 py-1 lg:px-5 lg:py-2 rounded-2xl">
                <h3 className="text-sm lg:text-lg  font-medium">Powered by </h3>
                <Unity className={"h-8 text-white"} />
              </div>
            </div>
            <div className="flex flex-col gap-5 w-full">
              <h2 className="text-lg font-bold">Advanced Developers</h2>
              <p className="font-semibold text-white/60">
                Build custom interactive worlds with
                <span className="text-white"> Spatial's Unity SDK.</span> Create
                immersive experiences with advanced interactivity and physics,
                and publish seamlessly to Web, VR/AR, and Mobile.
              </p>
              <Link href={"/"} className="w-full flex lg:w-fit">
                <span className="bg-white/10 font-semibold w-full text-center px-5 rounded-full py-3 text-sm lg:px-[6rem]">
                  See documentation
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourWorld;
