// app/components/PricingSection.tsx
'use client';

import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

// Data for the pricing plans - now in Sri Lankan Rupees (LKR)
const pricingPlans = [
    {
        name: 'Essential Care',
        price: 'LKR 2,500', // Changed from ₹499
        frequency: '/ session',
        description: 'Perfect for initial diagnosis and single-issue consultations.',
        features: [
            '1-on-1 Doctor Consultation',
            'Root Cause Diagnosis',
            'Personalized Treatment Advice',
            'Email Support',
        ],
        ctaText: 'Book a Session',
        isFeatured: false,
    },
    {
        name: 'Recovery Plus',
        price: 'LKR 9,900', // Changed from ₹1,999
        frequency: '/ month',
        description: 'Our most popular plan for comprehensive, ongoing treatment.',
        features: [
            '4 Physiotherapy Sessions',
            'Weekly Progress Tracking',
            'Custom Exercise Plan',
            'Priority Chat & Call Support',
            'Diet & Lifestyle Guidance',
        ],
        ctaText: 'Choose Plan',
        isFeatured: true,
    },
    {
        name: 'Premium Wellness',
        price: 'LKR 17,900', // Changed from ₹3,499
        frequency: '/ month',
        description: 'The complete package for holistic health and long-term wellness.',
        features: [
            '8 Physiotherapy Sessions',
            'Dedicated Health Coach',
            'Advanced Therapy Techniques',
            'Full Access to Wellness App',
            'Monthly Health Review',
        ],
        ctaText: 'Choose Plan',
        isFeatured: false,
    },
];


const PricingSection = () => {
    return (
        // The ID 'solutions' allows the "Our Solutions" link in the header to navigate here
        <section id="solutions" className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Affordable Packages for Your Needs</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Choose a plan that fits your recovery goals and budget. No hidden fees, just transparent pricing.</p>
                </div>
                
                <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
                    {pricingPlans.map((plan) => (
                        <div 
                            key={plan.name}
                            className={`
                                relative flex-1 flex flex-col bg-white rounded-xl shadow-lg p-8
                                transition-transform duration-300 hover:-translate-y-2
                                ${plan.isFeatured ? 'border-2 border-blue-600' : 'border border-gray-200'}
                            `}
                        >
                            {plan.isFeatured && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1.5 text-sm font-semibold rounded-full shadow-md">
                                    Best Value
                                </div>
                            )}
                            
                            <h3 className="text-2xl font-bold text-gray-800">{plan.name}</h3>
                            <p className="mt-2 text-gray-500">{plan.description}</p>
                            
                            <div className="mt-6">
                                {/* The price string now includes "LKR" */}
                                <span className="text-4xl lg:text-5xl font-bold text-gray-900">{plan.price}</span>
                                <span className="text-lg font-medium text-gray-500">{plan.frequency}</span>
                            </div>
                            
                            <ul className="mt-8 space-y-4 text-gray-600 flex-grow">
                                {plan.features.map((feature, index) => (
                                    <li key={index} className="flex items-start">
                                        <FaCheckCircle className="text-green-500 w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a 
                                href="#booking" 
                                className={`
                                    w-full text-center mt-10 px-6 py-3 rounded-lg font-semibold
                                    transition-all duration-300
                                    ${plan.isFeatured 
                                        ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md' 
                                        : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50'
                                    }
                                `}
                            >
                                {plan.ctaText}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;