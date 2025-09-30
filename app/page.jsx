'use client';
import BrandsScroll from "@/components/BrandsScroll"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Industry from "@/components/Industry"
import UseCases from "@/components/UseCases"
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
    </main>
  )
}

export default Home