
'use client';
import React, { useEffect, useRef, useState } from 'react'
import ProgressBar from './ProgressBar';

const IFrameLoader = ({src,title}) => {
    const [progress, setProgress] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const intervalRef = useRef(null);
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setProgress(prev => {
                if(prev >= 99){
                    clearInterval(intervalRef.current);
                    return 99;
                }
                return prev + (100 - prev) * 0.1;
            });
        }, 200);

        return () => clearInterval(intervalRef.current);
    },[]);

    const handleIframeLoad = () => {
        clearInterval(intervalRef.current);
        setProgress(100);
        setTimeout(() => setIsLoaded(true), 300);
    }

   
  return (
    <div className='h-full w-full  relative rounded-2xl overflow-hidden'>
        {!isLoaded && <ProgressBar progress={progress} />}
        <iframe 
        className='h-full w-full aspect-video'
        src={src}
        title={title}
        onLoad={handleIframeLoad}
        style={{visibility: isLoaded ? 
            'visible' : 'hidden'
        }}
        />
    </div>
  )
}

export default IFrameLoader 