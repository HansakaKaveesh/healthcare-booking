// app/components/SolutionsSection.tsx
'use client';

import React from 'react';
import { FaSyringe, FaDumbbell, FaAppleAlt, FaHeartbeat } from 'react-icons/fa';

const solutions = [
    { title: 'Rehab Therapy', description: "Sports massage, trigger point release, and mobility improvement.", icon: <FaSyringe /> },
    { title: 'Guided Strengthening', description: "Structured exercises and biomechanical correction.", icon: <FaDumbbell /> },
    { title: 'Nutrition Guidance', description: "Macronutrient planning and healthy eating habits support.", icon: <FaAppleAlt /> },
    { title: 'Long-Term Support', description: "Regular check-ins and progress tracking for sustained health.", icon: <FaHeartbeat /> },
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Your Personalized Recovery Plan</h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Our integrated system combines multiple therapies for optimal results.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                {solutions.map(solution => (
                    // MOBILE-FRIENDLY CARDS: Reduced padding and gap on smaller screens
                    <div key={solution.title} className="bg-white p-6 md:p-8 rounded-xl shadow-lg flex items-start gap-4 md:gap-6 transition-all duration-300 hover:shadow-xl hover:scale-105">
                        <div className="text-green-500 bg-green-100 p-4 rounded-full text-2xl flex-shrink-0">{solution.icon}</div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-1">{solution.title}</h3>
                            <p className="text-gray-600">{solution.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default SolutionsSection;