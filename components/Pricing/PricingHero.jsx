import React from 'react';
import { pricingContent } from '@/constants/pricing-page';

const CheckIcon = () => (
  <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  </svg>
);

const planStyles = {
  default: {
    card: 'bg-[#1a1a1a] border-gray-700',
    button: 'bg-gray-700 hover:bg-gray-600 text-white',
  },
  education: {
    card: 'bg-gradient-to-b from-[#0f3d30] to-[#1a1a1a] border-green-700',
    button: 'bg-white hover:bg-gray-200 text-black',
  },
  enterprise: {
    card: 'bg-gradient-to-b from-[#1c2e58] to-[#1a1a1a] border-blue-700',
    button: 'bg-white hover:bg-gray-200 text-black',
  },
};

const PricingHero = () => {
  const { header, toggle, plans } = pricingContent;

  return (
    <div className="bg-black text-white min-h-screen p-8 font-sans pt-[6rem]">
      <div className="max-w-7xl mx-auto text-center lg:text-start">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{header.title}</h1>
        <p className="text-gray-400 max-w-2xl mx-auto lg:mx-0 lg:me-auto mb-8">{header.subtitle}</p>
        
        <div className="flex justify-center lg:justify-start items-center mb-12">
          <div className="bg-gray-800 rounded-full p-1 flex">
            <button className="px-6 py-2 rounded-full text-sm font-medium text-white">{toggle.monthly}</button>
            <button className="px-6 py-2 rounded-full text-sm font-medium bg-white text-black">{toggle.annually}</button>
          </div>
          <span className="ml-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">{toggle.badge}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => {
            const styles = planStyles[plan.theme] || planStyles.default;
            return (
              <div key={index} className={`border rounded-lg p-6 flex flex-col text-left ${styles.card}`}>
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-4xl font-bold">{plan.price}</p>
                <p className="text-gray-400 text-sm mb-4">{plan.period}</p>
                <p className="text-gray-400 text-sm mb-6 flex-grow">{plan.description}</p>
                <button className={`w-full font-semibold py-2 rounded-lg transition-colors ${styles.button}`}>
                  {plan.buttonText}
                </button>
                <hr className="border-gray-700 my-6" />
                {plan.note && <p className="text-xs text-gray-400 mb-4">{plan.note}</p>}
                <ul className="space-y-3 text-sm text-gray-300">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PricingHero;