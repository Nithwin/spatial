'use client';
import React, { useState } from 'react';
import { featuresData } from '@/constants/pricing-page';

const DownArrow = () => (
    <svg className="w-4 h-4 inline-block ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
    </svg>
);

const Features = () => {
    const { title, plans, categories } = featuresData;
    const [selectedPlanIndex, setSelectedPlanIndex] = useState(0); // For mobile view

    const planHeaderStyles = (plan) => {
        if (plan === 'Education') return 'text-green-400';
        if (plan === 'Enterprise') return 'text-blue-400';
        return 'text-white';
    };

    return (
        <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">{title}</h2>

                {/* --- Desktop View --- */}
                <div className="hidden lg:block">
                    {/* Header Row */}
                    <div className="grid grid-cols-5 gap-8 items-end mb-4 px-4">
                        <h3 className="text-lg font-semibold text-white">Features</h3>
                        {plans.map((plan, index) => (
                            <h3 key={index} className={`text-lg font-semibold text-center ${planHeaderStyles(plan)}`}>
                                {plan}
                            </h3>
                        ))}
                    </div>

                    {/* Feature Categories */}
                    {categories.map((category, catIndex) => (
                        <div key={catIndex} className="mb-10">
                            <h4 className="text-xl font-semibold text-gray-300 mb-6 border-b border-gray-800 pb-3">
                                {category.name} <DownArrow />
                            </h4>
                            <div className="space-y-4">
                                {category.features.map((feature, featIndex) => (
                                    <div key={featIndex} className="grid grid-cols-5 gap-8 items-center border-b border-gray-800 py-4 px-4">
                                        <p className="text-gray-300">{feature.name}</p>
                                        {feature.values.map((value, valIndex) => (
                                            <div key={valIndex} className="text-center text-gray-400">
                                                {typeof value === 'function' ? value() : value}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- Mobile & Tablet View --- */}
                <div className="block lg:hidden">
                    {/* Plan Selector Tabs */}
                    <div className="flex justify-center border-b border-gray-700 mb-8">
                        {plans.map((plan, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedPlanIndex(index)}
                                className={`px-4 py-3 text-sm font-semibold transition-colors duration-200
                                    ${selectedPlanIndex === index
                                        ? `${planHeaderStyles(plan)} border-b-2 ${plan === 'Education' ? 'border-green-400' : plan === 'Enterprise' ? 'border-blue-400' : 'border-white'}`
                                        : 'text-gray-400 hover:text-white'
                                    }`
                                }
                            >
                                {plan}
                            </button>
                        ))}
                    </div>

                    {/* Features List for Selected Plan */}
                    <div className="space-y-8">
                         {categories.map((category, catIndex) => (
                            <div key={catIndex}>
                                <h4 className="text-lg font-semibold text-gray-300 mb-4">
                                    {category.name}
                                </h4>
                                <div className="space-y-3">
                                    {category.features.map((feature, featIndex) => (
                                        <div key={featIndex} className="p-3 bg-[#1a1a1a] rounded-md">
                                            <p className="text-gray-300 font-medium">{feature.name}</p>
                                            <p className="text-white mt-1">
                                                {typeof feature.values[selectedPlanIndex] === 'function'
                                                    ? feature.values[selectedPlanIndex]()
                                                    : feature.values[selectedPlanIndex] || '—'
                                                }
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
