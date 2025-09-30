import BrandsScroll from "@/components/BrandsScroll"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Industry from "@/components/Industry"

const Home = () => {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <BrandsScroll />
      <Industry />
    </main>
  )
}

export default Home