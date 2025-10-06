"use client";
import DynamicHero from '@/components/Dynamic/DynamicHero'
import Footer from '@/components/Landing/Footer'
import Header from '@/components/Landing/Header'
import React, { useState } from 'react'
import { dynamicPageImages } from '@/constants/dynamicpage.js'

const Dynamic = () => {
  const [selectedUrl, setSelectedUrl] = useState(dynamicPageImages[0].url);

  return (
    <main className='bg-black'>
      <Header heroRef={null} />
      <DynamicHero
        videos={dynamicPageImages}
        selectedUrl={selectedUrl}
        onVideoSelect={setSelectedUrl}
      />
      <Footer />
    </main>
  )
}

export default Dynamic