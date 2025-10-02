import React from "react";

const BuildGame = () => {
  return (
    <section className="min-h-[80dvh] flex bg-black relative overflow-hidden ">
      <div className="z-50 relative flex-1 flex flex-col lg:flex-row text-white px-4 lg:px-[4rem] gap-8 justify-between items-center py-[5rem] max-w-[110rem] mx-auto">
        <div className="flex flex-col gap-4 lg:px-[5rem] w-full">
          <h1
          className="text-2xl lg:text-6xl font-bold "
          >Build a Game. <br />Launch a Campaign. <br />Own the World.</h1>
          <p 
          className="text-sm lg:text-lg font-medium"
          >
            From fashion and food to sports and entertainment — Spatial lets you
            create branded games that invite your audience to explore your
            story, engage with your products, and shop within the world you've
            built.
          </p>
        </div>
        <div className="aspect-video overflow-hidden rounded-3xl w-full">
            <img 
            className="h-full w-full object-cover"
            src="/images/brandpage/buildgame/brand-showcase.webp" alt="Absolut" />
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/images/brandpage/buildgame/brand-showcase-background.webp"
          alt="Background"
          className="h-full w-full object-cover blur-lg "
        />
      </div>
      <div className="absolute inset-0 bg-black/70 z-0" />
    </section>
  );
};

export default BuildGame;
