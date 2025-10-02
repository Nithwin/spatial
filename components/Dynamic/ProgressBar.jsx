'use client';
import React, { useEffect, useState } from 'react'

const ProgressBar = ({progress}) => {
      const [message, setMessage] = useState('Initializing connection...');
  
     const loadingSteps = [
    'Authenticating...',
    'Downloading assets...',
    'Reading website data...',
    'Rendering images...',
    'Finalizing layout...',
  ];
   useEffect(() => {
          let step = 0;
          const messageInterval = setInterval(() => {
              step = (step + 1) % loadingSteps.length;
              setMessage(loadingSteps[step]);
          }, 1500);

          return () => clearInterval(messageInterval);
      }, []);
  return (
    <div className='absolute inset-0 z-10 h-full w-full flex flex-col items-center justify-center'>
        <video 
        muted 
        loop
        playsInline
        autoPlay
        src={"/videos/dynamicpage/1700076752.mp4"}
        className='absolute inset-0 z-0 h-full w-full object-cover'
        />
        <div className='z-20 relative'>
        <p className='text-white text-center text-7xl font-semibold'>{Math.round(progress)}%</p>
        <p className='text-white text-3xl text-center font-semibold'>{message}</p>
        </div>
    </div>
  )
}

export default ProgressBar