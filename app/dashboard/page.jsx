"use client";
import React, { useState } from "react";
import DashboardNav from "@/components/Dashboard/DashboardNav";
import SpaceSection from "@/components/Dashboard/SpaceSection";
import FavoritesSection from "@/components/Dashboard/FavoritesSection";
import SharedSection from "@/components/Dashboard/SharedSection";
import {
  examplesData,
  mySpacesData,
  navItems,
  recentsData,
} from "@/constants/dashboard";
import Header from "@/components/Landing/Header";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <>
      <Header heroRef={null} />
      <main className="bg-black min-h-screen text-gray-300 p-4 sm:p-6 md:p-8 pt-[5rem] lg:pt-[6rem] lg:px-[4rem]">
        <div className="max-w-8xl mx-auto lg:px-[2rem]">
          <DashboardNav
            navItems={navItems}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          <div className="mt-8">
            {activeTab === "All" && (
              <>
                <SpaceSection title="My Spaces" spaces={mySpacesData} />
                <SpaceSection title="Recents" spaces={recentsData} />
                <SpaceSection title="Examples" spaces={examplesData} />
                <FavoritesSection />
                <SharedSection />
              </>
            )}
            {activeTab === "My Spaces" && (
              <SpaceSection title="My Spaces" spaces={mySpacesData} />
            )}
            {activeTab === "Recents" && (
              <SpaceSection title="Recents" spaces={recentsData} />
            )}
          </div>

          <div className="text-center my-12">
            <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">
              Discover More
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
