import React from 'react';
import { FaChevronRight, FaHeart } from 'react-icons/fa';

const FavoritesSection = () => (
  <section className="mb-12">
    <div className="flex items-center mb-4 cursor-pointer group">
      <h2 className="text-white text-2xl font-bold mr-2">Favorites</h2>
      <FaChevronRight className="text-white group-hover:translate-x-1 transition-transform" />
    </div>
    <p className="text-gray-400">Click <FaHeart className="inline text-red-500 mx-1" /> to add your favorite spaces</p>
  </section>
);

export default FavoritesSection;
