import React from 'react';

const DashboardNav = ({ navItems, activeTab, setActiveTab }) => (
  <nav className="mb-10">
    <ul className="flex space-x-4 sm:space-x-8 border-b border-gray-800 overflow-x-scroll">
      {navItems.map((item) => (
        <li key={item}>
          <button 
            onClick={() => setActiveTab(item)}
            className={`py-2 px-1 text-sm sm:text-base font-semibold transition-colors duration-200 ${
              activeTab === item
                ? 'text-white border-b-2 border-white' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  </nav>
);

export default DashboardNav;
