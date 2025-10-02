import { BrandsToLifeList } from '@/constants/brands-page'
import React from 'react'

const BrandToLife = () => {
  return (
    <section
    className='min-h-dvh bg-black py-[4rem] lg:px-[6rem]'
    >
        <div className='text-white flex flex-col gap-14 max-w-[85rem] mx-auto'>
            <h1 className='text-2xl font-bold text-center'>Bring Your Brand to Life</h1>
            <ul className='flex flex-col lg:grid lg:grid-cols-6 gap-8 lg:gap-0 lg:gap-y-16'>
                {
                  BrandsToLifeList.map((brand, index) => (
                    <li 
                    key={index}
                    className={`${index < 2 ? 'col-span-3' :'col-span-2'} flex flex-col p-4 gap-5 `}>
                      <div className='flex flex-col'>
                        <img src={"/images/brandpage/brandtolife/"+brand.img} 
                        className='h-full w-full object-cover aspect-[37/24] rounded-3xl'
                        alt={brand.heading || 'Brand'} />
                      </div>
                      <div className='h-full flex flex-col'>
                        <h3
                        className='text-xl font-semibold'
                        >{brand.heading}</h3>
                        <p
                        className='text-white/60 text-sm lg:text-[15px] font-semibold pe-1'
                        >{brand.subheading}</p>
                      </div>
                    </li>
                  ))
                }
            </ul>
        </div>
    </section>
  )
}

export default BrandToLife