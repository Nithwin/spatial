import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const SharedSection = () => (
  <section className="mb-12">
    <div className="flex items-center mb-4 cursor-pointer group">
      <h2 className="text-white text-2xl font-bold mr-2">Shared With You</h2>
      <FaChevronRight className="text-white group-hover:translate-x-1 transition-transform" />
    </div>
    <p className="text-gray-400">No spaces have been shared with you yet</p>
  </section>
);

export default SharedSection;
