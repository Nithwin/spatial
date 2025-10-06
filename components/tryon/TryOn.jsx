import React from 'react';

// A reusable video component that handles responsive aspect ratios
const TryOnVideo = ({ src }) => {
  return (
    <div className="w-full">
      {/* Mobile View: Reel/Shorts aspect ratio (9:16) */}
      <video
        className="w-full h-full object-cover rounded-lg block md:hidden"
        src={src}
        autoPlay
        loop
        muted
        playsInline
        style={{ aspectRatio: '9/16' }}
      ></video>
      {/* Desktop View: Standard video aspect ratio (16:9) */}
      <video
        className="w-full h-full object-cover rounded-lg hidden md:block"
        src={src}
        autoPlay
        loop
        muted
        playsInline
        style={{ aspectRatio: '16/9' }}
      ></video>
    </div>
  );
};

// SVG Icon for the "Try it now" button
const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
);


export default function TryOn({products}) {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 pt-[6rem]">
        <div className="text-center mb-16 lg:mb-24">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            AR Try On Experience
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Experience products virtually before you buy. Our AR technology lets you see how items look on you in real-time, helping you make confident purchase decisions from anywhere.
          </p>
        </div>

        <div className="space-y-20 lg:space-y-28">
          {products.map((product, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
                <h2 className="text-3xl lg:text-4xl font-bold text-white">{product.name}</h2>
                <p className="mt-4 text-gray-400 text-base lg:text-lg">{product.description}</p>
                <a
                  href={product.link}
                  className="mt-8 inline-flex items-center gap-2.5 justify-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-purple-500 transition-all"
                >
                  Try it now <ExternalLinkIcon />
                </a>
              </div>
              <div className={index % 2 === 0 ? 'md:order-2' : 'md:order-1'}>
                <TryOnVideo src={product.video} />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
