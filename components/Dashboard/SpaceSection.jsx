import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import SpaceCard from './SpaceCard';

const SpaceSection = ({ title, spaces }) => (
  <section className="mb-12">
    <div className="flex items-center mb-4 cursor-pointer group">
      <h2 className="text-white text-2xl font-bold mr-2">{title}</h2>
      <FaChevronRight className="text-white group-hover:translate-x-1 transition-transform" />
    </div>
    <div className="flex space-x-6 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
      {spaces.map((space) => (
        <SpaceCard key={space.title} space={space} />
      ))}
    </div>
  </section>
);

export default SpaceSection;
