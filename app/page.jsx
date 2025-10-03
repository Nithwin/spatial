'use client';
import AudienceCount from "@/components/Landing/AudienceCount";
import AvatarCustomization from "@/components/Landing/AvatarCustomization";
import Begin from "@/components/Landing/Begin";
import BrandsScroll from "@/components/Landing/BrandsScroll"
import CrossPlatform from "@/components/Landing/CrossPlatform";
import Explore from "@/components/Landing/Explore";
import Footer from "@/components/Landing/Footer";
import Header from "@/components/Landing/Header"
import Hero from "@/components/Landing/Hero"
import Industry from "@/components/Landing/Industry"
import Press from "@/components/Landing/Press";
import UseCases from "@/components/Landing/UseCases"
import YourWorld from "@/components/Landing/YourWorld";
import { useRef } from "react"

const Home = () => {
  const heroRef = useRef(null);
  return (
    <main className="relative bg-black">
      <Header heroRef={heroRef} />
      <Hero ref={heroRef} />
      <div className="py-10 lg:py-12 ">
        <BrandsScroll />
      </div>
      <div className="py-10 lg:py-12 ">
        <Industry />
      </div>
      <div className="py-10 lg:py-12 ">
        <UseCases />
      </div>
      <div className="py-10 lg:py-12 ">
        <YourWorld />
      </div>
      <div className="py-10 lg:py-12 ">
        <CrossPlatform />
      </div>
      <div className="py-10 lg:py-12 ">
        <AvatarCustomization />
      </div>
      <div className="py-10 lg:py-12 ">
        <Explore />
      </div>
      <div className="py-10 lg:py-12 ">
        <AudienceCount />
      </div>
      <div className="py-10 lg:py-12 ">
        <Press />
      </div>
      <div className="pt-6">
        <Begin />
      </div>
      <Footer />
    </main>
  )
}

export default Home