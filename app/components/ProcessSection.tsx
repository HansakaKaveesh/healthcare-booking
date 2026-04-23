// app/components/ProcessSection.tsx
'use client';

import React from 'react';
import { FaNotesMedical, FaUserMd, FaCheck } from 'react-icons/fa';

const processSteps = [
    { 
        title: 'Initial Consultation', 
        description: 'We listen to your history, pain, and lifestyle to understand the full picture.', 
        icon: <FaNotesMedical /> 
    },
    { 
        title: 'Clinical Diagnosis', 
        description: 'Our doctors perform a physical assessment to identify the root cause of your issue.', 
        icon: <FaUserMd /> 
    },
    { 
        title: 'Treatment Plan Creation', 
        description: 'We develop a personalized recovery strategy and refer you to the right therapist.', 
        icon: <FaCheck /> 
    },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">The Doctor's Responsibility Path</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">A structured approach to ensure your safety and effective recovery.</p>
        </div>
        {/* MOBILE-FRIENDLY SPACING: Increased vertical gap on mobile for better separation */}
        <div className="relative flex flex-col md:flex-row justify-center items-center gap-12 md:gap-8">
           <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-gray-300 transform -translate-y-1/2"></div>
          {processSteps.map((step) => (
            <div key={step.title} className="relative z-10 flex-1 flex flex-col items-center text-center bg-white px-4">
              <div className="mx-auto w-20 h-20 mb-6 flex items-center justify-center bg-blue-600 text-white text-3xl rounded-full shadow-lg">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600 max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 bg-green-50 border-l-4 border-green-500 text-green-800 p-6 rounded-r-lg max-w-3xl mx-auto">
            <p className="font-semibold">
                After diagnosis, you are referred to our expert Physiotherapists for hands-on treatment and a personalized recovery plan.
            </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;