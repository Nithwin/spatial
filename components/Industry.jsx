import React from 'react'
import Unity from './utils/Unity'
import { IndustryList } from '@/utils/data'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const Industry = () => {
  return (
    <section id="industry-verticals" className=''>
        <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-3'>
                <div className='flex items-center gap-2'>
                    <h3 className='text-xl  font-semibold'>Powered by </h3>
                    <Unity className={'h-8 text-white'} />
                </div>
                <h1 className='text-2xl lg:text-4xl font-bold'>Spatial Creator Toolkit.<br/>Create. Customize. Expand.</h1>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    IndustryList.map((item, index) => (
                        <div 
                        className='relative aspect-[9/16] rounded-xl overflow-hidden'
                        key={index}>
                            <Image 
                            src={"/images/industry/"+item.img}
                            alt={item.heading}
                            height={1000}
                            width={1000}
                            className='h-full w-full object-cover'
                            />
                            <div className='absolute bottom-0 h-full w-full flex flex-col gap-2 justify-end pb-6 lg:px-7'>
                                <h2 className='font-bold text-xl p-2'>{item.heading}</h2>
                                <p className='hidden lg:flex px-2 text-white/50 lg:pb-5'>{item.subheading}</p>
                                <Link
                                href={"/"}
                                className=''
                                >
                                    <span className='text-black lg:w-fit lg:px-6 lg:rounded-r-full font-semibold ms-4 text-sm gap-1 bg-white py-2 rounded-l-full px-4 w-full flex items-center'>Learn more <ArrowRight className='text-black ' /> </span>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Industry