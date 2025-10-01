'use client';
import AvatarCustomization from "@/components/AvatarCustomization";
import BrandsScroll from "@/components/BrandsScroll"
import CrossPlatform from "@/components/CrossPlatform";
import Explore from "@/components/Explore";
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Industry from "@/components/Industry"
import UseCases from "@/components/UseCases"
import YourWorld from "@/components/YourWorld";
import { useRef } from "react"

const Home = () => {
  const heroRef = useRef(null);
  return (
    <main className="relative">
      <Header heroRef={heroRef} />
      <Hero ref={heroRef} />
      <BrandsScroll />
      <Industry />
      <UseCases />
      <YourWorld />
      <CrossPlatform />
      <AvatarCustomization />
      <Explore />
    </main>
  )
}

export default Home