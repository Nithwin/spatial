import Footer from '@/components/Landing/Footer'
import Header from '@/components/Landing/Header'
import Features from '@/components/Pricing/Features'
import PricingHero from '@/components/Pricing/PricingHero'
import React from 'react'

const Pricing = () => {
  return (
    <main className=''>
        <Header heroRef={null} />
        <PricingHero />
        <Features />
        <Footer />
    </main>
  )
}

export default Pricing