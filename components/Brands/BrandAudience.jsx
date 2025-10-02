import { BrandAudienceList } from '@/constants/brands-page'
import React from 'react'

const BrandAudience = () => {
  return (
    <section className='min-h-[20rem] bg-black py-[8rem] relative flex overflow-hidden'>
        <div className='text-white px-4 flex flex-col justify-center items-center w-full gap-16 relative z-50'>
            <div className='flex flex-col gap-5'>
                <h1 className='text-center text-3xl lg:text-5xl font-bold'>Your Audience Is Already Playing</h1>
                <p className='text-sm lg:text-lg text-center font-medium text-white/60'>Today's consumers don't just scroll - they play, explore, and expect brands to show up where they live online.</p>
            </div>
            <ul className='flex flex-col lg:flex-row items-center gap-10'>
                {
                    BrandAudienceList.map((brand, index) => (
                        <li className='px-[1rem] max-w-[30rem] lg:px-[2rem]'>
                            <h3 className='text-6xl lg:text-8xl font-bold text-center'>{brand.heading}</h3>
                            <p className='text-center text-sm lg:text-lg text-white/80 font-medium'>{brand.subheading}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
        <div>
            <img 
            src="images/brandpage/brandaudience/metrics-background.webp" 
            className='absolute inset-0 object-cover h-full w-full blur-2xl'
            alt="background-image" />
            <div 
            className='absolute inset-0 bg-black/70 '
            />
        </div>
    </section>
  )
}

export default BrandAudience