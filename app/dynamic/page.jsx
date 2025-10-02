import DynamicHero from '@/components/Dynamic/DynamicHero'
import Footer from '@/components/Landing/Footer'
import Header from '@/components/Landing/Header'
import React from 'react'

const Dynamic = () => {
  return (
    <main className='bg-black'>
      <Header heroRef={null} />
      <DynamicHero />
      <Footer />
    </main>
  )
}

export default Dynamic