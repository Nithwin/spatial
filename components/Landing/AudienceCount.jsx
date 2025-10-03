import { AudienceCountList } from '@/constants/landing-data';
import React from 'react';
import AnimatedNumber from '@/components/reusable/AnimatedNumber';

const AudienceCount = () => {
  return (
    <section className='bg-black pb-[7rem]'>
      <div className='h-[70dvh] lg:h-[50dvh] relative '>
        <div className='relative flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-20 w-full h-full z-50 text-white'>
          {AudienceCountList.map((data, index) => (
            <div key={index} className='flex flex-col gap-5'>
              <AnimatedNumber heading={data.heading} className='text-4xl lg:text-6xl font-bold text-center' />
              <p className='text-white/50 font-medium text-sm lg:text-lg'>{data.subheading}</p>
            </div>
          ))}
        </div>
        <div className='absolute top-0 bottom-0 left-0 right-0 z-10 overflow-hidden'>
          <video
            loop
            muted
            playsInline
            autoPlay
            src='/videos/metrics.webm'
            className='w-full h-full object-cover blur-xl'
          />
        </div>
        <div className='bg-black/40 absolute inset-0 backdrop-blur-3xl z-20'></div>
      </div>
    </section>
  );
};

export default AudienceCount;
