'use client';

import React from 'react';

const TryOnVideo = ({ src }) => {
  return (
    <div className="w-full h-full sm:h-auto sm:aspect-w-16 sm:aspect-h-9 md:aspect-w-16 md:aspect-h-9 lg:aspect-w-16 lg:aspect-h-9 aspect-w-9 aspect-h-16">
      <video
        className="w-full h-full object-cover"
        src={src}
        autoPlay
        loop
        muted
        playsInline
      ></video>
    </div>
  );
};

export default TryOnVideo;
