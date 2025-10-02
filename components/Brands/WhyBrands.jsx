import { WhyBrandsList } from '@/constants/brands-page'
import React from 'react'

const WhyBrands = () => {
  return (
    <section className='bg-black lg:min-h-[40rem] relative flex py-[5rem]'>
        <div className='relative z-50 text-white flex gap-[5rem] flex-col lg:flex-row justify-between items-center px-4 w-full max-w-[85rem] mx-auto'>
            <div className='flex flex-col gap-4 '>
                <h1
                className='text-3xl lg:text-6xl font-bold'
                >Why Brands <br /> Choose Spatial</h1>
                <p
                className='text-white/70 text-sm lg:text-lg'
                >Built on Unity - the world's leading game engine</p>
            </div>
            <ul className='list-disc px-4 flex flex-col gap-2 lg:gap-5'>
                {
                    WhyBrandsList.map((list,index) =>(
                        <li
                        key={index}
                        className='list'
                        >
                            <p
                            className='font-semibold text-sm lg:text-xl'
                            >{list}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
        <div>
            <img 
            src='/images/brandpage/whybrands/why-spatial.webp'
            alt='Why US'
            className='absolute inset-0 z-0 object-cover h-full w-full'
            />
            <div
            className='absolute inset-0 bg-black/80 z-10'
            />
        </div>
    </section>
  )
}

export default WhyBrands