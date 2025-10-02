import BrandAudience from '@/components/Brands/BrandAudience'
import BrandHero from '@/components/Brands/BrandHero'
import BrandToLife from '@/components/Brands/BrandToLife'
import BuildGame from '@/components/Brands/BuildGame'
import WhyBrands from '@/components/Brands/WhyBrands'
import Header from '@/components/Landing/Header'
import React from 'react'

const Brands = () => {
  return (
    <main>
        <Header heroRef={null} />
        <BrandHero />
        <BuildGame />
        <BrandToLife />
        <BrandAudience />
        <WhyBrands />
    </main>
  )
}

export default Brands