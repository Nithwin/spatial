import DynamicHero from '@/components/Dynamic/DynamicHero'
import Header from '@/components/Landing/Header'
import React from 'react'

const Dynamic = () => {
  return (
    <main className='bg-black'>
      <Header heroRef={null} />
      <DynamicHero />
    </main>
  )
}

export default Dynamic