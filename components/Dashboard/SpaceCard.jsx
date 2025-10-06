import Image from 'next/image';
import React from 'react';

const SpaceCard = ({ space }) => (
  <div className="flex-shrink-0 w-64 md:w-72 group cursor-pointer">
    <div className="relative overflow-hidden rounded-lg bg-gray-800">
      <Image 
        src={space.imageUrl} 
        alt={space.title} 
        width={300} 
        height={160} 
        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" 
      />
      {space.onlineCount && (
        <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm text-white text-xs font-semibold px-4 py-1 rounded-full flex items-center gap-1">
          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
          {space.onlineCount} online
        </div>
      )}
      {space.isUnlimited && (
        <div className="absolute top-2 right-2 bg-purple-600/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
          UNLIMITED
        </div>
      )}
    </div>
    <div className="mt-2">
      <h3 className="text-white font-semibold truncate">{space.title}</h3>
      <p className="text-gray-400 text-sm">{space.views} views · {space.likes} loves</p>
    </div>
  </div>
);

export default SpaceCard;
