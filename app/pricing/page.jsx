import Footer from '@/components/Landing/Footer'
import Header from '@/components/Landing/Header'
import PricingHero from '@/components/Pricing/PricingHero'
import React from 'react'

const Pricing = () => {
  return (
    <main className=''>
        <Header heroRef={null} />
        <PricingHero />
        <Footer />
    </main>
  )
}

export default Pricing